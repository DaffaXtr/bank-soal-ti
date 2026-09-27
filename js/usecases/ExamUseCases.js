/**
 * ============================================================================
 * USE CASES LAYER (Application Business Rules)
 * ============================================================================
 */

window.App = window.App || {};
window.App.UseCases = (function () {
  'use strict';

  const { ExamPackage, ExamSession, SessionMode } = window.App.Domain;
  const LocalStorageService = window.App.Infrastructure.LocalStorageService;

  // Catalog Use Case
  class GetCatalogUseCase {
    constructor(repository) {
      this.repo = repository;
    }

    async getSemesters() {
      return await this.repo.getSemesters();
    }

    async getCoursesBySemester(semester) {
      return await this.repo.getCoursesBySemester(semester);
    }

    async getPackageById(packageId) {
      return await this.repo.getPackageById(packageId);
    }
  }

  // Answer Interaction Use Cases
  class SelectAnswerUseCase {
    constructor(examSession) {
      this.session = examSession;
    }

    setSession(examSession) {
      this.session = examSession;
    }

    execute(optionKey) {
      this.session.selectAnswer(optionKey);
      const question = this.session.getCurrentQuestion();
      const isCorrect = question.isAnswerCorrect(optionKey);

      return {
        currentQuestion: question,
        currentState: this.session.getCurrentState(),
        summary: this.session.getSummary(),
        isCorrect,
        isStudyMode: this.session.isStudyMode()
      };
    }
  }

  class ClearAnswerUseCase {
    constructor(examSession) {
      this.session = examSession;
    }

    setSession(examSession) {
      this.session = examSession;
    }

    execute() {
      this.session.clearCurrentAnswer();
      return {
        currentQuestion: this.session.getCurrentQuestion(),
        currentState: this.session.getCurrentState(),
        summary: this.session.getSummary()
      };
    }
  }

  class ToggleReviewUseCase {
    constructor(examSession) {
      this.session = examSession;
    }

    setSession(examSession) {
      this.session = examSession;
    }

    execute() {
      const isFlagged = this.session.toggleCurrentReview();
      return {
        isFlagged,
        currentState: this.session.getCurrentState(),
        summary: this.session.getSummary()
      };
    }
  }

  class NavigateQuestionUseCase {
    constructor(examSession) {
      this.session = examSession;
    }

    setSession(examSession) {
      this.session = examSession;
    }

    execute(targetIndex) {
      const success = this.session.setCurrentIndex(targetIndex);
      return {
        success,
        currentIndex: this.session.currentIndex,
        currentQuestion: this.session.getCurrentQuestion(),
        currentState: this.session.getCurrentState()
      };
    }

    step(direction) {
      const newIndex = this.session.currentIndex + direction;
      return this.execute(newIndex);
    }
  }

  class SubmitExamUseCase {
    constructor(examSession) {
      this.session = examSession;
    }

    setSession(examSession) {
      this.session = examSession;
    }

    execute() {
      const summary = this.session.submit();

      // Persist record to LocalStorage
      LocalStorageService.saveExamRecord({
        packageId: this.session.examPackage.id,
        packageTitle: this.session.examPackage.title,
        category: this.session.examPackage.category,
        mode: this.session.mode,
        total: summary.total,
        score: summary.scoreData.score,
        correct: summary.scoreData.correct,
        wrong: summary.scoreData.wrong,
        empty: summary.scoreData.empty
      });

      return summary;
    }
  }

  class RetryWrongAnswersUseCase {
    execute(originalSession) {
      const { wrongQuestions } = originalSession.calculateScore();
      if (!wrongQuestions || wrongQuestions.length === 0) return null;

      const retryPackage = new ExamPackage({
        id: `retry-${originalSession.examPackage.id}-${Date.now()}`,
        courseId: originalSession.examPackage.courseId,
        title: `Latih Ulang Soal Salah — ${originalSession.examPackage.title}`,
        category: 'Latihan Ulang',
        questionCount: wrongQuestions.length,
        durationMinutes: Math.max(15, Math.round(wrongQuestions.length * 2)),
        questions: wrongQuestions
      });

      return new ExamSession(retryPackage, wrongQuestions, SessionMode.STUDY);
    }
  }

  class BookmarkUseCase {
    toggle(questionId) {
      return LocalStorageService.toggleBookmark(questionId);
    }

    isBookmarked(questionId) {
      return LocalStorageService.isBookmarked(questionId);
    }

    getAllBookmarks() {
      return LocalStorageService.getBookmarks();
    }
  }

  class GetHistoryUseCase {
    execute() {
      const records = LocalStorageService.getHistory();
      if (records.length === 0) {
        return { records: [], totalTests: 0, averageScore: 0, bestScore: 0 };
      }

      const totalTests = records.length;
      const sumScores = records.reduce((acc, curr) => acc + (curr.score || 0), 0);
      const averageScore = Math.round(sumScores / totalTests);
      const bestScore = Math.max(...records.map(r => r.score || 0));

      return {
        records,
        totalTests,
        averageScore,
        bestScore
      };
    }

    clear() {
      LocalStorageService.clearHistory();
    }
  }

  class TickTimerUseCase {
    constructor(examSession) {
      this.session = examSession;
    }

    setSession(examSession) {
      this.session = examSession;
    }

    execute() {
      const remaining = this.session.decrementTimer();
      const hrs = Math.floor(remaining / 3600);
      const mins = Math.floor((remaining % 3600) / 60);
      const secs = remaining % 60;

      return {
        remaining,
        formatted: `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`,
        isExpired: remaining <= 0
      };
    }
  }

  return {
    GetCatalogUseCase,
    SelectAnswerUseCase,
    ClearAnswerUseCase,
    ToggleReviewUseCase,
    NavigateQuestionUseCase,
    SubmitExamUseCase,
    RetryWrongAnswersUseCase,
    BookmarkUseCase,
    GetHistoryUseCase,
    TickTimerUseCase
  };
})();
