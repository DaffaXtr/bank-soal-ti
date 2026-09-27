/**
 * ============================================================================
 * PRESENTATION LAYER: PRESENTER
 * Formats data and renders DOM updates for both Home Portal & Exam Room.
 * Follows 60-30-10 Zero-Shadow Minimalist System.
 * ============================================================================
 */

window.App = window.App || {};
window.App.Presentation = window.App.Presentation || {};

window.App.Presentation.ExamPresenter = (function () {
  'use strict';

  const { QuestionStatus } = window.App.Domain;

  class ExamPresenter {
    constructor(elements) {
      this.el = elements;
    }

    // ================= VIEW SWITCHER =================
    showHomeView() {
      this.el.viewHome.classList.remove('hidden');
      this.el.viewExam.classList.add('hidden');
      window.scrollTo(0, 0);
    }

    showExamView() {
      this.el.viewHome.classList.add('hidden');
      this.el.viewExam.classList.remove('hidden');
      window.scrollTo(0, 0);
    }

    // ================= HOME DASHBOARD RENDERING =================
    renderSemesterSidebar(semesters, activeSemester, coursesMap) {
      const container = this.el.sidebarSemesterContainer;
      if (!container) return;

      container.innerHTML = semesters.map(sem => {
        const isActive = (sem === Number(activeSemester));
        const courseCount = (coursesMap[sem] ? coursesMap[sem].length : 0);

        const activeClass = isActive
          ? 'bg-blue-600 text-white border-blue-600 font-bold'
          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-500 hover:bg-blue-50/70 hover:text-blue-900 font-medium';

        const badgeClass = isActive
          ? 'bg-white text-blue-700 font-bold'
          : 'bg-blue-50 text-blue-700 border border-blue-100 font-semibold';

        const starIndicator = (sem === 5)
          ? `<span class="text-[9px] font-mono font-bold px-1.5 py-0.2 bg-amber-100 text-amber-800 border border-amber-300 uppercase">SQA</span>`
          : (sem === 2)
          ? `<span class="text-[9px] font-mono font-bold px-1.5 py-0.2 bg-blue-100 text-blue-800 border border-blue-300 uppercase">ADSI</span>`
          : (sem === 1)
          ? `<span class="text-[9px] font-mono font-bold px-1.5 py-0.2 bg-emerald-100 text-emerald-800 border border-emerald-300 uppercase">ALIN & MATDAS</span>`
          : '';

        return `
          <button data-semester="${sem}" class="sidebar-semester-btn w-full flex items-center justify-between px-3.5 py-2.5 text-xs border transition cursor-pointer text-left ${activeClass}">
            <div class="flex items-center gap-2">
              <span class="font-semibold">Semester ${sem}</span>
              ${starIndicator}
            </div>
            <span class="text-[10px] font-mono px-2 py-0.5 ${badgeClass}">
              ${courseCount} Matkul
            </span>
          </button>
        `;
      }).join('');
    }

    renderCourseCards(courses, activeSemester, filterCategory = 'all', searchQuery = '') {
      const container = this.el.courseCardsContainer;
      if (!container) return;

      this.el.currentSemesterTitle.innerText = `Semester ${activeSemester}`;
      this.el.currentSemesterCount.innerText = `${courses.length} Mata Kuliah Tersedia`;

      let filteredCourses = courses;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        filteredCourses = courses.filter(c => 
          c.name.toLowerCase().includes(q) || 
          c.code.toLowerCase().includes(q) || 
          c.description.toLowerCase().includes(q)
        );
      }

      if (filteredCourses.length === 0) {
        container.innerHTML = `
          <div class="col-span-12 p-12 text-center bg-white border border-blue-100 space-y-2">
            <div class="text-sm font-bold text-slate-800">Tidak ada mata kuliah yang cocok</div>
            <p class="text-xs text-slate-500">Coba ubah kata kunci pencarian atau pilih semester lain melalui sidebar.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = filteredCourses.map(course => {
        const visiblePackages = (filterCategory === 'all')
          ? course.packages
          : course.packages.filter(p => {
              const pCat = p.category.toLowerCase().replace(/\s+/g, '');
              const fCat = filterCategory.toLowerCase().replace(/\s+/g, '');
              return pCat === fCat || pCat.startsWith(fCat) || (fCat.startsWith('quiz') && pCat.startsWith('quiz')) || (fCat === 'uts' && pCat.startsWith('uts'));
            });

        const packageItems = visiblePackages.map(pkg => {
          return `
            <div class="flex items-center justify-between p-3 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 bg-white transition group">
              <div class="space-y-0.5">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-slate-900 group-hover:text-blue-700">${pkg.category}</span>
                </div>
                <div class="text-[11px] font-mono text-slate-500">
                  ${pkg.questionCount} Soal
                </div>
              </div>

              <button data-package-id="${pkg.id}" class="btn-start-exam px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 transition cursor-pointer">
                Mulai Belajar →
              </button>
            </div>
          `;
        }).join('');

        return `
          <div class="bg-white border border-slate-200 hover:border-blue-300 flex flex-col justify-between transition">
            <div class="p-5 border-b border-blue-100 space-y-2 bg-blue-50/60">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 font-mono text-[11px] font-bold bg-blue-600 text-white">
                  ${course.code}
                </span>
                <span class="text-xs font-mono text-blue-700 font-bold">
                  ${course.sks} SKS
                </span>
              </div>
              <h3 class="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition">
                ${course.name}
              </h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                ${course.description}
              </p>
            </div>

            <div class="p-5 space-y-2.5 flex-1">
              <div class="text-[10px] uppercase font-bold tracking-wider text-blue-800/70 pb-1">
                Pilihan Paket Evaluasi
              </div>
              <div class="space-y-2">
                ${packageItems}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // ================= EXAM ROOM RENDERING =================
    renderExamHeader(examPackage, courseName, session) {
      this.el.examSubjectTitle.innerText = `${courseName} — ${examPackage.category}`;
      this.el.examTotalQuestionsHeader.innerText = examPackage.questionCount;
      this.updateModeToggleUI(session.isStudyMode());
    }

    updateModeToggleUI(isStudyMode) {
      if (!this.el.btnToggleMode) return;
      if (isStudyMode) {
        this.el.btnToggleMode.className = "h-9 px-3.5 text-xs font-bold bg-white text-blue-700 border border-white transition cursor-pointer flex items-center gap-2";
        this.el.btnToggleMode.innerHTML = `<span class="w-2 h-2 bg-blue-600"></span> Mode Belajar`;
      } else {
        this.el.btnToggleMode.className = "h-9 px-3.5 text-xs font-bold bg-blue-800 text-white border border-blue-400/60 hover:bg-blue-700 transition cursor-pointer flex items-center gap-2";
        this.el.btnToggleMode.innerHTML = `<span class="w-2 h-2 bg-emerald-400"></span> Mode Ujian`;
      }
    }

    formatMatrixNotation(text) {
      if (!text || typeof text !== 'string' || !text.includes('[[')) return text;

      // Regex matches matrix syntax: [[row1], [row2], ...]
      const matrixRegex = /\[\s*\[([^[\]]+)\](?:\s*,\s*\[([^[\]]+)\])*\s*\]/g;

      return text.replace(matrixRegex, (fullMatch) => {
        try {
          const inner = fullMatch.slice(1, -1).trim();
          const rowMatches = inner.match(/\[([^[\]]+)\]/g);
          if (!rowMatches || rowMatches.length === 0) return fullMatch;

          const rows = rowMatches.map(rowStr => {
            return rowStr.slice(1, -1).split(',').map(cell => cell.trim().replace(/^['"]|['"]$/g, ''));
          });

          if (!rows.length || !rows[0].length) return fullMatch;
          const cols = rows[0].length;

          const cellsHtml = rows.map(r => {
            return r.map(c => `<span style="padding: 2px 6px; text-align: center; white-space: nowrap;">${c}</span>`).join('');
          }).join('');

          return `<span class="inline-flex items-center align-middle font-mono my-1 mx-1 text-inherit" style="display: inline-flex; vertical-align: middle; text-align: center;">` +
            `<span style="align-self: stretch; border-left: 2px solid currentColor; border-top: 2px solid currentColor; border-bottom: 2px solid currentColor; width: 4px; flex-shrink: 0; margin-right: 2px;"></span>` +
            `<span style="display: grid; grid-template-columns: repeat(${cols}, auto); column-gap: 10px; row-gap: 3px; padding: 2px 4px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.25;">` +
              cellsHtml +
            `</span>` +
            `<span style="align-self: stretch; border-right: 2px solid currentColor; border-top: 2px solid currentColor; border-bottom: 2px solid currentColor; width: 4px; flex-shrink: 0; margin-left: 2px;"></span>` +
          `</span>`;
        } catch (e) {
          return fullMatch;
        }
      });
    }

    renderQuestion(question, state, totalQuestions, session, isBookmarked = false) {
      this.el.qTitle.innerText = `Question ${question.number}`;
      this.el.qCurrentNum.innerText = question.number;
      this.el.qTotalNum.innerText = totalQuestions;
      this.el.qBody.innerHTML = this.formatMatrixNotation(question.text);

      // Render Code Snippet if present (for Informatics questions)
      if (question.codeSnippet) {
        this.el.qCodeSnippet.classList.remove('hidden');
        this.el.qCodeSnippet.querySelector('code').innerText = question.codeSnippet;
      } else {
        this.el.qCodeSnippet.classList.add('hidden');
      }

      // Render Bookmark Button State
      this.renderBookmarkState(isBookmarked);

      // Render Option Cards
      const isStudyMode = session.isStudyMode();
      const hasAnswered = (state.answer !== null);

      // Kelola status tombol Hapus Jawaban pada Mode Belajar
      if (this.el.btnClear) {
        if (isStudyMode && hasAnswered) {
          this.el.btnClear.disabled = true;
          this.el.btnClear.classList.add('opacity-40', 'cursor-not-allowed');
          this.el.btnClear.title = "Jawaban telah terkunci pada Mode Belajar";
        } else {
          this.el.btnClear.disabled = false;
          this.el.btnClear.classList.remove('opacity-40', 'cursor-not-allowed');
          this.el.btnClear.title = "";
        }
      }

      this.el.optionsList.innerHTML = question.options.map(opt => {
        const isSelected = (state.answer === opt.key);
        let cursorClass = 'cursor-pointer';
        let cardStyle = 'border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50/40 text-slate-800';
        let badgeStyle = 'border border-slate-300 bg-slate-100 text-slate-700 font-bold group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white';
        let feedbackBadge = '';

        if (isStudyMode && hasAnswered) {
          cursorClass = 'cursor-default';
          // Instant feedback in Study Mode (jawaban terkunci)
          if (opt.isCorrect) {
            cardStyle = 'border border-emerald-600 bg-emerald-50/70 text-emerald-950 font-medium';
            badgeStyle = 'border border-emerald-600 bg-emerald-600 text-white font-bold';
            feedbackBadge = `<span class="text-[10px] font-bold font-mono text-emerald-800 uppercase px-2 py-0.5 bg-emerald-100 border border-emerald-300">✓ Jawaban Benar</span>`;
          } else if (isSelected && !opt.isCorrect) {
            cardStyle = 'border border-rose-600 bg-rose-50/70 text-rose-950 font-medium';
            badgeStyle = 'border border-rose-600 bg-rose-600 text-white font-bold';
            feedbackBadge = `<span class="text-[10px] font-bold font-mono text-rose-800 uppercase px-2 py-0.5 bg-rose-100 border border-rose-300">✕ Jawaban Salah</span>`;
          } else {
            cardStyle = 'border border-slate-200 bg-slate-50/50 text-slate-400 opacity-60 cursor-default';
            badgeStyle = 'border border-slate-200 bg-slate-100 text-slate-400 font-medium';
          }
        } else {
          // Exam Mode or unanswered
          if (isSelected) {
            cardStyle = 'border border-blue-600 bg-blue-50/80 text-blue-950 font-semibold';
            badgeStyle = 'border border-blue-600 bg-blue-600 text-white font-bold';
          }
        }

        return `
          <div data-key="${opt.key}" class="option-btn group flex items-center justify-between px-4 py-3 transition select-none ${cursorClass} ${cardStyle}">
            <div class="flex items-center gap-3.5 min-w-0 flex-1">
              <!-- Option Letter Badge (Tanpa tanda bulat) -->
              <span class="w-7 h-7 flex items-center justify-center font-mono text-xs shrink-0 transition ${badgeStyle}">
                ${opt.key}
              </span>

              <!-- Option Text Content -->
              <div class="text-sm font-medium leading-relaxed flex-1 overflow-x-auto py-0.5">
                ${this.formatMatrixNotation(opt.text)}
              </div>
            </div>

            <!-- Feedback Badge in Study Mode -->
            ${feedbackBadge ? `<div class="shrink-0 ml-3">${feedbackBadge}</div>` : ''}
          </div>
        `;
      }).join('');

      // Render Explanation Box in Study Mode
      if (isStudyMode && hasAnswered && question.explanation) {
        this.el.explanationContainer.classList.remove('hidden');
        this.el.explanationText.innerHTML = this.formatMatrixNotation(question.explanation);
        const isCorrectAnswer = question.isAnswerCorrect(state.answer);
        if (isCorrectAnswer) {
          this.el.explanationHeader.className = "text-xs font-bold font-mono text-emerald-800 uppercase flex items-center gap-1.5";
          this.el.explanationHeader.innerHTML = `✓ Tepat! Pembahasan Konsep:`;
          this.el.explanationContainer.className = "p-4 bg-emerald-50/40 border-l-4 border-emerald-600 border border-emerald-200 space-y-1.5";
        } else {
          this.el.explanationHeader.className = "text-xs font-bold font-mono text-rose-800 uppercase flex items-center gap-1.5";
          this.el.explanationHeader.innerHTML = `✕ Kurang Tepat. Pembahasan Konsep:`;
          this.el.explanationContainer.className = "p-4 bg-rose-50/40 border-l-4 border-rose-600 border border-rose-200 space-y-1.5";
        }
      } else {
        this.el.explanationContainer.classList.add('hidden');
      }

      this.renderReviewState(state.isFlagged);
      this.updateSteppers(session.currentIndex, totalQuestions);
    }

    updateSteppers(currentIndex, totalQuestions) {
      const isFirst = (currentIndex === 0);
      const isLast = (currentIndex >= totalQuestions - 1);

      // Previous button state
      if (this.el.btnPrev) {
        if (isFirst) {
          this.el.btnPrev.disabled = true;
          this.el.btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
          this.el.btnPrev.classList.remove('hover:border-blue-600', 'hover:text-blue-600');
        } else {
          this.el.btnPrev.disabled = false;
          this.el.btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
          this.el.btnPrev.classList.add('hover:border-blue-600', 'hover:text-blue-600');
        }
      }

      // Selesai & Evaluasi button replaces Next on the last question
      if (isLast) {
        if (this.el.btnNext) this.el.btnNext.classList.add('hidden');
        if (this.el.btnSubmit) this.el.btnSubmit.classList.remove('hidden');
      } else {
        if (this.el.btnNext) this.el.btnNext.classList.remove('hidden');
        if (this.el.btnSubmit) this.el.btnSubmit.classList.add('hidden');
      }
    }

    renderBookmarkState(isBookmarked) {
      if (!this.el.btnBookmark) return;
      if (isBookmarked) {
        this.el.btnBookmark.className = "px-2.5 py-1 text-xs font-semibold border border-blue-500 bg-blue-50 text-blue-900 transition cursor-pointer flex items-center gap-1.5";
        this.el.btnBookmark.innerHTML = `★ <span class="hidden sm:inline">Disimpan</span>`;
      } else {
        this.el.btnBookmark.className = "px-2.5 py-1 text-xs font-semibold border border-slate-300 bg-white text-slate-600 hover:border-blue-600 hover:text-blue-600 transition cursor-pointer flex items-center gap-1.5";
        this.el.btnBookmark.innerHTML = `☆ <span class="hidden sm:inline">Simpan Soal</span>`;
      }
    }

    renderReviewState(isFlagged) {
      if (isFlagged) {
        this.el.btnReview.className = "px-3.5 py-2 text-xs font-semibold border border-amber-500 bg-amber-50 text-amber-900 transition cursor-pointer flex items-center gap-1.5";
        this.el.reviewDot.className = "w-1.5 h-1.5 bg-amber-500";
        this.el.reviewLabel.innerText = "Flagged for review";
      } else {
        this.el.btnReview.className = "px-3.5 py-2 text-xs font-semibold border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-700 transition cursor-pointer flex items-center gap-1.5";
        this.el.reviewDot.className = "w-1.5 h-1.5 bg-slate-400";
        this.el.reviewLabel.innerText = "Mark for review";
      }
    }

    renderMatrix(session) {
      const container = this.el.matrixGrid;
      container.innerHTML = '';

      for (let i = 0; i < session.totalQuestions; i++) {
        const visualStatus = session.getQuestionVisualStatus(i);
        let statusStyle = '';

        switch (visualStatus) {
          case QuestionStatus.CURRENT:
            statusStyle = 'bg-blue-600 text-white border-blue-600 font-bold ring-2 ring-blue-300';
            break;
          case QuestionStatus.FLAGGED:
            statusStyle = 'bg-amber-500 text-white border-amber-500 font-semibold';
            break;
          case QuestionStatus.ANSWERED:
            statusStyle = 'bg-blue-800 text-white border-blue-800 font-semibold';
            break;
          case QuestionStatus.UNANSWERED:
            statusStyle = 'bg-rose-600 text-white border-rose-600 font-semibold';
            break;
          case QuestionStatus.UNVISITED:
          default:
            statusStyle = 'bg-white text-slate-700 border-slate-200 hover:border-blue-500 hover:text-blue-700';
            break;
        }

        const btn = document.createElement('button');
        btn.setAttribute('data-index', i);
        btn.className = `matrix-btn h-8 text-xs font-mono border transition flex items-center justify-center cursor-pointer ${statusStyle}`;
        btn.innerText = i + 1;
        container.appendChild(btn);
      }
    }

    renderTimer(formatted) {
      // Countdown timer removed per user request
    }

    renderSubmissionModal(summary) {
      this.el.modalAnswered.innerText = `${summary.answered} / ${summary.total}`;
      this.el.modalFlagged.innerText = `${summary.flagged}`;
      this.el.modalUnanswered.innerText = `${summary.unanswered}`;

      // Score Display
      const score = summary.scoreData;
      this.el.modalScoreVal.innerText = `${score.score}`;
      this.el.modalCorrectCount.innerText = `${score.correct}`;
      this.el.modalWrongCount.innerText = `${score.wrong}`;

      // If wrong answers exist, show "Latih Ulang Soal Salah" button
      if (score.wrong > 0 && this.el.btnRetryWrong) {
        this.el.btnRetryWrong.classList.remove('hidden');
        this.el.btnRetryWrongCount.innerText = `${score.wrong}`;
      } else if (this.el.btnRetryWrong) {
        this.el.btnRetryWrong.classList.add('hidden');
      }

      this.el.confirmModal.classList.remove('hidden');
    }

    hideSubmissionModal() {
      this.el.confirmModal.classList.add('hidden');
    }

    // ================= HISTORY MODAL RENDERING =================
    renderHistoryModal(historyData) {
      const container = this.el.historyListContainer;
      this.el.historyTotalTests.innerText = historyData.totalTests;
      this.el.historyAvgScore.innerText = historyData.averageScore;
      this.el.historyBestScore.innerText = historyData.bestScore;

      if (historyData.records.length === 0) {
        container.innerHTML = `
          <div class="p-6 text-center text-xs text-slate-500 bg-blue-50/40 border border-blue-100">
            Belum ada riwayat pengerjaan latihan atau ujian tersimpan.
          </div>
        `;
      } else {
        container.innerHTML = historyData.records.map(rec => `
          <div class="p-3.5 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/20 bg-white flex items-center justify-between transition">
            <div class="space-y-0.5">
              <div class="text-xs font-bold text-slate-900">${rec.packageTitle || 'Paket Ujian'}</div>
              <div class="text-[10px] font-mono text-slate-500">
                ${rec.formattedDate} • <span class="text-blue-700 font-semibold">${rec.mode === 'study' ? 'Mode Belajar' : 'Mode Ujian'}</span>
              </div>
            </div>
            <div class="text-right">
              <div class="font-mono text-base font-bold ${rec.score >= 70 ? 'text-blue-700' : 'text-slate-800'}">
                ${rec.score} / 100
              </div>
              <div class="text-[10px] font-mono text-slate-500">
                Benar: <span class="text-emerald-600 font-semibold">${rec.correct}</span> • Salah: <span class="text-rose-600 font-semibold">${rec.wrong}</span>
              </div>
            </div>
          </div>
        `).join('');
      }

      this.el.historyModal.classList.remove('hidden');
    }

    hideHistoryModal() {
      this.el.historyModal.classList.add('hidden');
    }
  }

  return ExamPresenter;
})();
