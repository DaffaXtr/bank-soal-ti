/**
 * ============================================================================
 * PRESENTATION LAYER: CONTROLLER (With Hash Routing & Refresh Persistence)
 * Coordinates user events and maintains URL routes per exam package & question.
 * ============================================================================
 */

window.App = window.App || {};
window.App.Presentation = window.App.Presentation || {};

window.App.Presentation.ExamController = (function () {
  'use strict';

  const { Question, ExamSession, SessionMode } = window.App.Domain;
  const LocalStorageService = window.App.Infrastructure.LocalStorageService;

  class ExamController {
    constructor({ catalogUseCase, useCases, presenter }) {
      this.catalog = catalogUseCase;
      this.useCases = useCases;
      this.presenter = presenter;

      this.activeSemester = 1;
      this.filterCategory = 'all';
      this.searchQuery = '';
      this.semesters = [];
      this.coursesMap = {};

      this.session = null;
      this.timerInterval = null;
      this.currentMode = LocalStorageService.getPreferredMode() || SessionMode.STUDY;
    }

    async init() {
      this.bindGlobalEvents();
      await this.loadCatalogData();

      // Listen to URL hash changes (back/forward button & manual changes)
      window.addEventListener('hashchange', () => this.handleRoute());

      // Route immediately on page load / browser refresh
      await this.handleRoute();
    }

    async loadCatalogData() {
      this.semesters = await this.catalog.getSemesters();
      for (const sem of this.semesters) {
        this.coursesMap[sem] = await this.catalog.getCoursesBySemester(sem);
      }
    }

    // ================= ROUTING SYSTEM (Hash-Based, 100% Offline Compatible) =================
    async handleRoute() {
      const hash = window.location.hash || '';
      const clean = hash.replace(/^#\/?/, '');
      const parts = clean.split('/').filter(Boolean);

      if (parts[0] === 'exam' && parts[1]) {
        const packageId = parts[1];
        const questionNum = parts[2] ? parseInt(parts[2], 10) : 1;
        await this.openExamByRoute(packageId, questionNum);
      } else if (parts[0] === 'semester' && parts[1]) {
        const sem = parseInt(parts[1], 10);
        this.activeSemester = sem || 1;
        this.cleanupSession();
        this.presenter.showHomeView();
        this.renderHome();
      } else {
        this.cleanupSession();
        this.presenter.showHomeView();
        this.renderHome();
      }
    }

    navigateHash(hash) {
      if (window.location.hash !== hash) {
        window.location.hash = hash;
      }
    }

    updateExamUrl(packageId, questionNumber) {
      const targetHash = `#/exam/${packageId}/${questionNumber}`;
      if (window.location.hash !== targetHash) {
        // Use history.replaceState if same package to prevent bloating back button, or update hash
        window.location.hash = targetHash;
      }
    }

    // ================= HOME DASHBOARD =================
    renderHome() {
      const currentCourses = this.coursesMap[this.activeSemester] || [];
      this.presenter.renderSemesterSidebar(this.semesters, this.activeSemester, this.coursesMap);
      this.presenter.renderCourseCards(currentCourses, this.activeSemester, this.filterCategory, this.searchQuery);
    }

    handleSwitchSemester(semNumber) {
      this.activeSemester = Number(semNumber);
      this.navigateHash(`#/semester/${this.activeSemester}`);
      this.renderHome();
    }

    handleSearch(query) {
      this.searchQuery = query;
      this.renderHome();
    }

    handleFilterCategory(cat) {
      this.filterCategory = cat;
      this.renderHome();
    }

    // ================= EXAM SESSION MANAGEMENT =================
    async openExamByRoute(packageId, questionNumber = 1) {
      const targetIndex = Math.max(0, questionNumber - 1);

      // Skenario A: Sesi paket yang sama sudah aktif di memori
      if (this.session && this.session.examPackage && this.session.examPackage.id === packageId) {
        this.session.setCurrentIndex(targetIndex);
        this.renderExamCurrent();
        this.presenter.showExamView();
        this.persistActiveSession();
        return;
      }

      // Skenario B: Muat paket soal dari repository
      const data = await this.catalog.getPackageById(packageId);
      if (!data) {
        alert("Paket soal tidak ditemukan.");
        this.navigateHash('');
        return;
      }

      const { course, package: examPackage } = data;
      const savedSnapshot = LocalStorageService.getActiveSession(packageId);

      // Tentukan butir soal: pulihkan susunan acak sesi yang sedang berjalan, atau acak baru dari master
      let sessionQuestions = null;
      if (savedSnapshot && Array.isArray(savedSnapshot.questions) && savedSnapshot.questions.length > 0) {
        try {
          sessionQuestions = savedSnapshot.questions.map(q => new Question(q));
        } catch (e) {
          console.warn("Snapshot lama tidak kompatibel, membuat sesi acak baru:", e);
          sessionQuestions = null;
        }
      }

      if (!sessionQuestions || sessionQuestions.length === 0) {
        sessionQuestions = ExamSession.randomizeQuestions(examPackage.questions);
      }

      // 1. Buat ExamSession Domain Entity baru
      this.session = new ExamSession(examPackage, sessionQuestions, this.currentMode);

      // 2. Pulihkan jawaban & status yang tersimpan di localStorage (jika kompatibel)
      if (savedSnapshot) {
        try {
          this.session.restoreState(savedSnapshot);
        } catch (e) {
          console.warn("Gagal memulihkan jawaban snapshot:", e);
        }
      }

      // 3. Arahkan ke nomor soal yang diminta URL
      this.session.setCurrentIndex(targetIndex);

      // 4. Hubungkan ke Use Cases
      this.useCases.selectAnswer.setSession(this.session);
      this.useCases.clearAnswer.setSession(this.session);
      this.useCases.toggleReview.setSession(this.session);
      this.useCases.navigate.setSession(this.session);
      this.useCases.submitExam.setSession(this.session);
      this.useCases.tickTimer.setSession(this.session);

      // 5. Render & Tampilkan Ruang Ujian
      this.presenter.renderExamHeader(examPackage, course.name, this.session);
      this.renderExamCurrent();
      this.presenter.showExamView();
      this.persistActiveSession();
    }

    persistActiveSession() {
      if (this.session && !this.session.isSubmitted) {
        LocalStorageService.saveActiveSession(this.session.examPackage.id, this.session.getStateSnapshot());
      }
    }

    handleResetExamAnswers() {
      if (!this.session) return;
      const confirmed = confirm(
        "Apakah Anda yakin ingin mereset paket soal ini?\n\nSemua jawaban akan dikosongkan serta urutan soal & pilihan jawaban akan diacak ulang dari awal."
      );
      if (!confirmed) return;

      const pkgId = this.session.examPackage.id;
      LocalStorageService.clearActiveSession(pkgId);

      // Acak ulang seluruh urutan soal dan pilihan jawaban
      const rawQuestions = this.session.examPackage.questions;
      const randomizedQuestions = ExamSession.randomizeQuestions(rawQuestions);
      this.session = new ExamSession(this.session.examPackage, randomizedQuestions, this.currentMode);

      // Hubungkan kembali sesi baru ke Use Cases
      this.useCases.selectAnswer.setSession(this.session);
      this.useCases.clearAnswer.setSession(this.session);
      this.useCases.toggleReview.setSession(this.session);
      this.useCases.navigate.setSession(this.session);
      this.useCases.submitExam.setSession(this.session);
      this.useCases.tickTimer.setSession(this.session);

      this.persistActiveSession();
      this.renderExamCurrent();
      this.updateExamUrl(pkgId, 1);
      alert("Soal dan pilihan jawaban telah berhasil diacak ulang. Lembar pengerjaan siap dari awal!");
    }

    cleanupSession() {
      this.session = null;
    }

    handleToggleMode() {
      if (!this.session) return;
      const newMode = (this.session.mode === SessionMode.STUDY) ? SessionMode.EXAM : SessionMode.STUDY;
      this.session.setMode(newMode);
      this.currentMode = newMode;
      LocalStorageService.setPreferredMode(newMode);

      this.presenter.updateModeToggleUI(this.session.isStudyMode());
      this.renderExamCurrent();
      this.persistActiveSession();
    }

    handleToggleBookmark() {
      if (!this.session) return;
      const q = this.session.getCurrentQuestion();
      const isNowBookmarked = this.useCases.bookmark.toggle(q.id);
      this.presenter.renderBookmarkState(isNowBookmarked);
    }

    handleOpenHistory() {
      const historyData = this.useCases.getHistory.execute();
      this.presenter.renderHistoryModal(historyData);
    }

    handleClearHistory() {
      if (confirm("Hapus seluruh catatan riwayat ujian dari browser ini?")) {
        this.useCases.getHistory.clear();
        this.handleOpenHistory();
      }
    }

    handleRetryWrong() {
      if (!this.session) return;
      const retrySession = this.useCases.retryWrong.execute(this.session);
      if (!retrySession) {
        alert("Semua jawaban Anda benar! Tidak ada soal salah untuk diulang.");
        return;
      }

      this.session = retrySession;
      this.presenter.hideSubmissionModal();

      // Rewire into use cases
      this.useCases.selectAnswer.setSession(this.session);
      this.useCases.clearAnswer.setSession(this.session);
      this.useCases.toggleReview.setSession(this.session);
      this.useCases.navigate.setSession(this.session);
      this.useCases.submitExam.setSession(this.session);
      this.useCases.tickTimer.setSession(this.session);

      this.presenter.renderExamHeader(this.session.examPackage, "Pengulangan Khusus", this.session);
      this.renderExamCurrent();
      this.updateExamUrl(this.session.examPackage.id, 1);
    }

    handleBackToHome() {
      if (this.session && !this.session.isSubmitted) {
        const confirmed = confirm("Sesi latihan sedang berlangsung. Yakin ingin kembali ke Beranda?\n(Sesi saat ini akan diselesaikan sehingga saat dibuka kembali nanti soal akan diacak baru)");
        if (!confirmed) return;
        LocalStorageService.clearActiveSession(this.session.examPackage.id);
      }

      this.cleanupSession();
      this.navigateHash(`#/semester/${this.activeSemester}`);
    }

    renderExamCurrent() {
      if (!this.session) return;
      const q = this.session.getCurrentQuestion();
      const state = this.session.getCurrentState();
      const isBookmarked = this.useCases.bookmark.isBookmarked(q.id);

      this.presenter.renderQuestion(q, state, this.session.totalQuestions, this.session, isBookmarked);
      this.presenter.renderMatrix(this.session);
    }

    handleSelectAnswer(key) {
      if (!this.session) return;
      // Di Mode Belajar, jika sudah pernah memilih jawaban maka tidak bisa diganti lagi
      if (this.session.isStudyMode() && this.session.getCurrentState().answer !== null) {
        return;
      }
      this.useCases.selectAnswer.execute(key);
      this.renderExamCurrent();
      this.persistActiveSession();
    }

    handleClearAnswer() {
      if (!this.session) return;
      // Di Mode Belajar, jawaban yang sudah diklik tidak bisa dihapus
      if (this.session.isStudyMode() && this.session.getCurrentState().answer !== null) {
        return;
      }
      this.useCases.clearAnswer.execute();
      this.renderExamCurrent();
      this.persistActiveSession();
    }

    handleToggleReview() {
      if (!this.session) return;
      this.useCases.toggleReview.execute();
      this.renderExamCurrent();
      this.persistActiveSession();
    }

    handleNavigateTo(index) {
      if (!this.session) return;
      const valid = this.session.setCurrentIndex(index);
      if (valid) {
        this.updateExamUrl(this.session.examPackage.id, index + 1);
        this.renderExamCurrent();
        this.persistActiveSession();
      }
    }

    handleNavigateStep(step) {
      if (!this.session) return;
      const targetIndex = this.session.currentIndex + step;
      this.handleNavigateTo(targetIndex);
    }

    handleOpenSubmitModal() {
      if (!this.session) return;
      const summary = this.session.getSummary();
      this.presenter.renderSubmissionModal(summary);
    }

    handleFinalizeSubmit() {
      if (!this.session) return;
      const pkgId = this.session.examPackage.id;
      const summary = this.useCases.submitExam.execute();
      this.presenter.hideSubmissionModal();

      // Hapus sesi aktif sementara karena ujian telah selesai
      LocalStorageService.clearActiveSession(pkgId);

      const score = summary.scoreData;
      alert(`Pengerjaan Selesai!\n\nSkor Anda: ${score.score} / 100\nBenar: ${score.correct}\nSalah: ${score.wrong}\nKosong: ${score.empty}\n\nHasil pengerjaan Anda telah tersimpan di browser.`);
      
      this.cleanupSession();
      this.navigateHash(`#/semester/${this.activeSemester}`);
    }

    startTimer() {
      // Fitur timer hitung mundur telah dinonaktifkan sesuai kebutuhan pengguna.
    }

    // ================= EVENT BINDINGS =================
    bindGlobalEvents() {
      const el = this.presenter.el;

      // 1. Sidebar: Semester buttons
      if (el.sidebarSemesterContainer) {
        el.sidebarSemesterContainer.addEventListener('click', (e) => {
          const tabBtn = e.target.closest('.sidebar-semester-btn');
          if (!tabBtn) return;
          const sem = tabBtn.getAttribute('data-semester');
          if (sem) {
            this.handleSwitchSemester(sem);
          }
        });
      }

      // 2. Search input
      if (el.inputSearchCourses) {
        el.inputSearchCourses.addEventListener('input', (e) => {
          this.handleSearch(e.target.value);
        });
      }

      // 3. Category quick filter pills
      if (el.categoryFiltersContainer) {
        el.categoryFiltersContainer.addEventListener('click', (e) => {
          const btn = e.target.closest('.category-filter-btn');
          if (!btn) return;
          const cat = btn.getAttribute('data-cat');
          if (cat) {
            el.categoryFiltersContainer.querySelectorAll('.category-filter-btn').forEach(b => {
              b.className = "category-filter-btn px-2.5 py-1 text-xs border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition cursor-pointer";
            });
            btn.className = "category-filter-btn px-2.5 py-1 text-xs border border-blue-600 bg-blue-600 text-white font-semibold transition cursor-pointer";
            this.handleFilterCategory(cat);
          }
        });
      }

      // 4. History modal triggers
      if (el.btnOpenHistory) {
        el.btnOpenHistory.addEventListener('click', () => this.handleOpenHistory());
      }
      if (el.btnCloseHistory) {
        el.btnCloseHistory.addEventListener('click', () => this.presenter.hideHistoryModal());
      }
      if (el.btnClearHistory) {
        el.btnClearHistory.addEventListener('click', () => this.handleClearHistory());
      }

      // 5. Home: Click "Mulai Belajar" on any package
      el.courseCardsContainer.addEventListener('click', (e) => {
        const startBtn = e.target.closest('.btn-start-exam');
        if (!startBtn) return;
        const pkgId = startBtn.getAttribute('data-package-id');
        if (pkgId) {
          this.navigateHash(`#/exam/${pkgId}/1`);
        }
      });

      // 6. Exam: Back to Home button
      if (el.btnBackHome) {
        el.btnBackHome.addEventListener('click', () => this.handleBackToHome());
      }

      // 7. Exam: Toggle Mode (Study / Exam)
      if (el.btnToggleMode) {
        el.btnToggleMode.addEventListener('click', () => this.handleToggleMode());
      }

      // 7b. Exam: Reset All Answers Button
      if (el.btnResetExam) {
        el.btnResetExam.addEventListener('click', () => this.handleResetExamAnswers());
      }

      // 8. Exam: Bookmark Button
      if (el.btnBookmark) {
        el.btnBookmark.addEventListener('click', () => this.handleToggleBookmark());
      }

      // 9. Exam: Option selection
      el.optionsList.addEventListener('click', (e) => {
        const optionCard = e.target.closest('.option-btn');
        if (!optionCard) return;
        const key = optionCard.getAttribute('data-key');
        if (key) {
          this.handleSelectAnswer(key);
        }
      });

      // 10. Exam: Matrix Question navigation
      el.matrixGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.matrix-btn');
        if (!btn) return;
        const index = parseInt(btn.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          this.handleNavigateTo(index);
        }
      });

      // 11. Exam: Action Buttons
      el.btnReview.addEventListener('click', () => this.handleToggleReview());
      el.btnClear.addEventListener('click', () => this.handleClearAnswer());
      el.btnPrev.addEventListener('click', () => this.handleNavigateStep(-1));
      el.btnNext.addEventListener('click', () => this.handleNavigateStep(1));
      el.btnSubmit.addEventListener('click', () => this.handleOpenSubmitModal());

      // 12. Modal Buttons
      el.modalCancel.addEventListener('click', () => this.presenter.hideSubmissionModal());
      el.modalConfirm.addEventListener('click', () => this.handleFinalizeSubmit());

      // 13. Retry Wrong Answers Button
      if (el.btnRetryWrong) {
        el.btnRetryWrong.addEventListener('click', () => this.handleRetryWrong());
      }

      // 14. Global Keyboard Shortcuts
      document.addEventListener('keydown', (e) => {
        if (el.viewExam.classList.contains('hidden')) return;

        if (!el.confirmModal.classList.contains('hidden')) {
          if (e.key === 'Escape') this.presenter.hideSubmissionModal();
          return;
        }

        if (e.key === 'ArrowRight') this.handleNavigateStep(1);
        if (e.key === 'ArrowLeft') this.handleNavigateStep(-1);
        if (['1', 'a', 'A'].includes(e.key)) this.handleSelectAnswer('A');
        if (['2', 'b', 'B'].includes(e.key)) this.handleSelectAnswer('B');
        if (['3', 'c', 'C'].includes(e.key)) this.handleSelectAnswer('C');
        if (['4', 'd', 'D'].includes(e.key)) this.handleSelectAnswer('D');
        if (['5', 'e', 'E'].includes(e.key)) this.handleSelectAnswer('E');
      });
    }
  }

  return ExamController;
})();
