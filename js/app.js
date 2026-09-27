/**
 * ============================================================================
 * COMPOSITION ROOT & BOOTSTRAP (Main Application Entry Point)
 * Wires the layers together using Dependency Injection (Inversion of Control).
 * ============================================================================
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', async () => {
    const { InMemoryQuestionRepository } = window.App.Infrastructure;
    const {
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
    } = window.App.UseCases;
    const { ExamPresenter, ExamController } = window.App.Presentation;

    // 1. Infrastructure Layer: Instantiate Repository
    const questionRepository = new InMemoryQuestionRepository();

    // 2. Use Cases Layer: Instantiate Application Services
    const catalogUseCase = new GetCatalogUseCase(questionRepository);
    const useCases = {
      selectAnswer: new SelectAnswerUseCase(null),
      clearAnswer: new ClearAnswerUseCase(null),
      toggleReview: new ToggleReviewUseCase(null),
      navigate: new NavigateQuestionUseCase(null),
      submitExam: new SubmitExamUseCase(null),
      retryWrong: new RetryWrongAnswersUseCase(),
      bookmark: new BookmarkUseCase(),
      getHistory: new GetHistoryUseCase(),
      tickTimer: new TickTimerUseCase(null)
    };

    // 3. Presentation Layer: Query DOM references
    const elements = {
      // Views
      viewHome: document.getElementById('view-home'),
      viewExam: document.getElementById('view-exam'),

      // Home View Sidebar & Controls
      sidebarSemesterContainer: document.getElementById('sidebar-semesters-list'),
      inputSearchCourses: document.getElementById('input-search-courses'),
      categoryFiltersContainer: document.getElementById('category-filters-container'),
      courseCardsContainer: document.getElementById('course-cards-container'),
      currentSemesterTitle: document.getElementById('current-semester-title'),
      currentSemesterCount: document.getElementById('current-semester-count'),

      // History Triggers
      btnOpenHistory: document.getElementById('btn-open-history'),
      historyModal: document.getElementById('history-modal'),
      btnCloseHistory: document.getElementById('btn-close-history'),
      btnClearHistory: document.getElementById('btn-clear-history'),
      historyListContainer: document.getElementById('history-list-container'),
      historyTotalTests: document.getElementById('history-total-tests'),
      historyAvgScore: document.getElementById('history-avg-score'),
      historyBestScore: document.getElementById('history-best-score'),

      // Exam View Header Elements
      examSubjectTitle: document.getElementById('exam-subject-title'),
      examTotalQuestionsHeader: document.getElementById('exam-total-questions-header'),
      btnBackHome: document.getElementById('btn-back-home'),
      btnToggleMode: document.getElementById('btn-toggle-mode'),
      btnResetExam: document.getElementById('btn-reset-exam'),
      btnBookmark: document.getElementById('btn-bookmark'),

      // Question Workspace
      qTitle: document.getElementById('q-title'),
      qCurrentNum: document.getElementById('q-current-num'),
      qTotalNum: document.getElementById('q-total-num'),
      qBody: document.getElementById('q-body'),
      qCodeSnippet: document.getElementById('q-code-snippet'),
      optionsList: document.getElementById('options-list'),

      // Explanation Box (Study Mode)
      explanationContainer: document.getElementById('explanation-container'),
      explanationHeader: document.getElementById('explanation-header'),
      explanationText: document.getElementById('explanation-text'),

      // Action buttons
      btnReview: document.getElementById('btn-review'),
      reviewDot: document.getElementById('review-dot'),
      reviewLabel: document.getElementById('review-label'),
      btnClear: document.getElementById('btn-clear'),
      btnPrev: document.getElementById('btn-prev'),
      btnNext: document.getElementById('btn-next'),
      btnSubmit: document.getElementById('btn-submit'),

      // Matrix
      matrixGrid: document.getElementById('matrix-grid'),

      // Modal & Score Summary
      confirmModal: document.getElementById('confirm-modal'),
      modalScoreVal: document.getElementById('modal-score-val'),
      modalCorrectCount: document.getElementById('modal-correct-count'),
      modalWrongCount: document.getElementById('modal-wrong-count'),
      modalAnswered: document.getElementById('modal-answered-count'),
      modalFlagged: document.getElementById('modal-flagged-count'),
      modalUnanswered: document.getElementById('modal-unanswered-count'),
      modalCancel: document.getElementById('modal-btn-cancel'),
      modalConfirm: document.getElementById('modal-btn-confirm'),
      btnRetryWrong: document.getElementById('btn-retry-wrong'),
      btnRetryWrongCount: document.getElementById('btn-retry-wrong-count')
    };

    // 4. Presenter & Controller Instantiation
    const presenter = new ExamPresenter(elements);
    const controller = new ExamController({
      catalogUseCase,
      useCases,
      presenter
    });

    // 5. Bootstrap Application
    await controller.init();
  });
})();
