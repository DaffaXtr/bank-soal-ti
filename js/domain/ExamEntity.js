/**
 * ============================================================================
 * DOMAIN LAYER (Catalog Entities & Exam Entities)
 * ============================================================================
 */

window.App = window.App || {};
window.App.Domain = (function () {
  'use strict';

  // Value Object: Question Status Constants
  const QuestionStatus = Object.freeze({
    CURRENT: 'current',
    ANSWERED: 'answered',
    FLAGGED: 'flagged',
    UNANSWERED: 'unanswered',
    UNVISITED: 'unvisited'
  });

  // Value Object: Exam Category Types
  const ExamCategory = Object.freeze({
    LATIHAN: 'Latihan Soal',
    QUIZ_1: 'Quiz 1',
    UTS: 'UTS',
    QUIZ_2: 'Quiz 2',
    UAS: 'UAS'
  });

  // Value Object: Session Mode
  const SessionMode = Object.freeze({
    STUDY: 'study', // Instant feedback, explanation, relaxed timer
    EXAM: 'exam'    // Formal test, countdown timer, results at end
  });

  // Entity: Option
  class Option {
    constructor(key, text, isCorrect = false) {
      this.key = key;   // 'A' | 'B' | 'C' | 'D' | 'E'
      this.text = text;
      this.isCorrect = isCorrect;
    }
  }

  // Entity: Question
  class Question {
    constructor({ id, number, text, options, explanation = '', codeSnippet = null }) {
      this.id = id;
      this.number = number;
      this.text = text;
      this.options = options.map(opt => new Option(opt.key, opt.text, opt.isCorrect));
      this.explanation = explanation;   // Pembahasan materi/konsep
      this.codeSnippet = codeSnippet;   // Potongan kode program Informatika (jika ada)
    }

    getCorrectOption() {
      return this.options.find(opt => opt.isCorrect) || null;
    }

    isAnswerCorrect(answerKey) {
      const correct = this.getCorrectOption();
      return correct ? (correct.key === answerKey) : false;
    }
  }

  // Entity: ExamPackage
  class ExamPackage {
    constructor({ id, courseId, title, category, questionCount, durationMinutes, questions = [] }) {
      this.id = id;
      this.courseId = courseId;
      this.title = title;
      this.category = category; // Latihan Soal | Quiz 1 | UTS | Quiz 2 | UAS
      this.questionCount = questionCount;
      this.durationMinutes = durationMinutes;
      this.questions = questions;
    }
  }

  // Entity: Course (Mata Kuliah)
  class Course {
    constructor({ id, code, name, sks, semester, description, packages = [] }) {
      this.id = id;
      this.code = code;
      this.name = name;
      this.sks = sks;
      this.semester = semester; // 1 - 8
      this.description = description;
      this.packages = packages;
    }
  }

  // Aggregate Root: ExamSession
  class ExamSession {
    constructor(examPackage, questions, mode = SessionMode.STUDY) {
      if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error('ExamSession requires a non-empty array of questions.');
      }

      this.examPackage = examPackage;
      this.questions = questions;
      this.totalQuestions = questions.length;
      this.currentIndex = 0;
      this.mode = mode; // 'study' | 'exam'
      this.remainingSeconds = (examPackage.durationMinutes || 60) * 60;
      this.elapsedSeconds = 0;
      this.isSubmitted = false;

      this.userAnswers = {};
      this.questions.forEach((_, idx) => {
        this.userAnswers[idx] = {
          answer: null,
          isFlagged: false,
          isVisited: false
        };
      });

      this.markVisited(0);
    }

    isStudyMode() {
      return this.mode === SessionMode.STUDY;
    }

    setMode(mode) {
      this.mode = mode;
    }

    getCurrentQuestion() {
      return this.questions[this.currentIndex];
    }

    getCurrentQuestionNumber() {
      return this.currentIndex + 1;
    }

    getCurrentState() {
      return this.userAnswers[this.currentIndex];
    }

    markVisited(index) {
      if (this.userAnswers[index]) {
        this.userAnswers[index].isVisited = true;
      }
    }

    setCurrentIndex(index) {
      if (index >= 0 && index < this.totalQuestions) {
        this.currentIndex = index;
        this.markVisited(index);
        return true;
      }
      return false;
    }

    selectAnswer(optionKey) {
      if (this.isSubmitted) return;
      // Pada Mode Belajar, jika sudah dijawab maka jawaban terkunci dan tidak bisa diubah
      if (this.isStudyMode() && this.userAnswers[this.currentIndex].answer !== null) return;
      this.userAnswers[this.currentIndex].answer = optionKey;
    }

    clearCurrentAnswer() {
      if (this.isSubmitted) return;
      // Pada Mode Belajar, jawaban yang sudah diklik tidak bisa dihapus
      if (this.isStudyMode() && this.userAnswers[this.currentIndex].answer !== null) return;
      this.userAnswers[this.currentIndex].answer = null;
    }

    toggleCurrentReview() {
      const current = this.userAnswers[this.currentIndex];
      current.isFlagged = !current.isFlagged;
      return current.isFlagged;
    }

    getQuestionVisualStatus(index) {
      const state = this.userAnswers[index];
      if (!state) return QuestionStatus.UNVISITED;

      if (index === this.currentIndex) {
        return QuestionStatus.CURRENT;
      }
      if (state.isFlagged) {
        return QuestionStatus.FLAGGED;
      }
      if (state.answer !== null) {
        return QuestionStatus.ANSWERED;
      }
      if (state.isVisited) {
        return QuestionStatus.UNANSWERED;
      }
      return QuestionStatus.UNVISITED;
    }

    calculateScore() {
      let correct = 0;
      let wrong = 0;
      let empty = 0;
      const wrongQuestions = [];

      for (let i = 0; i < this.totalQuestions; i++) {
        const userAnswer = this.userAnswers[i].answer;
        const q = this.questions[i];
        if (!userAnswer) {
          empty++;
          continue;
        }
        if (q.isAnswerCorrect(userAnswer)) {
          correct++;
        } else {
          wrong++;
          wrongQuestions.push(q);
        }
      }

      const score = Math.round((correct / this.totalQuestions) * 100);
      return { correct, wrong, empty, score, wrongQuestions };
    }

    getSummary() {
      let answeredCount = 0;
      let flaggedCount = 0;
      let unansweredCount = 0;

      for (let i = 0; i < this.totalQuestions; i++) {
        const item = this.userAnswers[i];
        if (item.isFlagged) flaggedCount++;
        if (item.answer !== null) {
          answeredCount++;
        } else {
          unansweredCount++;
        }
      }

      const scoreData = this.calculateScore();

      return {
        total: this.totalQuestions,
        answered: answeredCount,
        flagged: flaggedCount,
        unanswered: unansweredCount,
        remainingSeconds: this.remainingSeconds,
        elapsedSeconds: this.elapsedSeconds,
        isSubmitted: this.isSubmitted,
        scoreData
      };
    }

    decrementTimer() {
      this.elapsedSeconds++;
      if (this.remainingSeconds > 0 && !this.isSubmitted) {
        this.remainingSeconds--;
        return this.remainingSeconds;
      }
      return 0;
    }

    submit() {
      this.isSubmitted = true;
      return this.getSummary();
    }

    restoreState(saved) {
      if (!saved) return;
      if (saved.userAnswers) {
        this.userAnswers = { ...this.userAnswers, ...saved.userAnswers };
      }
      if (typeof saved.remainingSeconds === 'number') {
        this.remainingSeconds = saved.remainingSeconds;
      }
      if (saved.mode) {
        this.mode = saved.mode;
      }
      if (typeof saved.currentIndex === 'number') {
        this.setCurrentIndex(saved.currentIndex);
      }
    }

    getStateSnapshot() {
      return {
        currentIndex: this.currentIndex,
        remainingSeconds: this.remainingSeconds,
        mode: this.mode,
        userAnswers: this.userAnswers,
        questions: this.questions.map(q => ({
          id: q.id,
          number: q.number,
          text: q.text,
          explanation: q.explanation,
          codeSnippet: q.codeSnippet,
          options: q.options.map(o => ({
            key: o.key,
            text: o.text,
            isCorrect: o.isCorrect
          }))
        }))
      };
    }

    resetAllAnswers() {
      this.userAnswers = {};
      this.questions.forEach((_, idx) => {
        this.userAnswers[idx] = {
          answer: null,
          isFlagged: false,
          isVisited: (idx === 0)
        };
      });
      this.currentIndex = 0;
      this.isSubmitted = false;
    }

    /**
     * Mengacak urutan soal dan pilihan jawaban secara adil (Fisher-Yates Shuffle).
     * Huruf opsi diurutkan kembali (A, B, C, D, E) sementara kunci jawaban tetap terjaga.
     */
    static randomizeQuestions(questions) {
      if (!Array.isArray(questions)) return [];

      const shuffle = (array) => {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };

      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

      // 1. Acak urutan butir soal
      const shuffledQuestions = shuffle(questions);

      // 2. Acak urutan opsi jawaban per butir soal
      return shuffledQuestions.map((q, idx) => {
        const rawOptions = (q.options || []).map(opt => ({
          text: opt.text,
          isCorrect: !!opt.isCorrect
        }));

        const shuffledOptions = shuffle(rawOptions);

        const newOptions = shuffledOptions.map((opt, optIdx) => new Option(
          letters[optIdx] || String.fromCharCode(65 + optIdx),
          opt.text,
          opt.isCorrect
        ));

        return new Question({
          id: q.id,
          number: idx + 1,
          text: q.text,
          options: newOptions,
          explanation: q.explanation || '',
          codeSnippet: q.codeSnippet || null
        });
      });
    }
  }

  return {
    QuestionStatus,
    ExamCategory,
    SessionMode,
    Option,
    Question,
    ExamPackage,
    Course,
    ExamSession
  };
})();
