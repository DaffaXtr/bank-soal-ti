/**
 * ============================================================================
 * INFRASTRUCTURE LAYER: Question & Catalog Repository
 * Bersih & Modular: Data soal & kurikulum tersimpan terpisah di folder /data/
 * ============================================================================
 */

window.App = window.App || {};
window.App.Infrastructure = window.App.Infrastructure || {};

(function () {
  'use strict';

  const { Question, Course, ExamPackage, ExamCategory } = window.App.Domain;

  class InMemoryQuestionRepository {
    constructor() {
      // Data eksternal dibaca dari window.BankSoalData (dimuat via data/courses.js & data/questions/*.js)
      this.dataSource = window.BankSoalData || { courses: [], questions: {} };
      this.courses = this.buildCourseCatalog();
    }

    /**
     * Konversi raw question item ke Domain Question Entity
     */
    mapRawToEntity(item, fallbackIdPrefix = 'q') {
      return new Question({
        id: item.id || `${fallbackIdPrefix}-${item.no}`,
        number: item.no,
        text: item.soal,
        explanation: item.pembahasan || '',
        codeSnippet: item.codeSnippet || null,
        options: item.opsi.map(opt => ({
          key: (opt.huruf || '').toUpperCase(),
          text: opt.teks,
          isCorrect: !!opt.benar
        }))
      });
    }

    /**
     * Generator soal simulasi cerdas untuk mata kuliah/paket yang belum memiliki file soal mandiri
     */
    generateMockQuestions(courseCode, categoryName, count = 20) {
      const questions = [];
      for (let i = 1; i <= count; i++) {
        questions.push(new Question({
          id: `${courseCode.toLowerCase()}-${categoryName.toLowerCase().replace(/\s+/g, '-')}-${i}`,
          number: i,
          text: `Pertanyaan evaluasi konsep ke-${i} untuk [${categoryName}] pada mata kuliah ${courseCode}. Perhatikan analisis permasalahan berikut dan pilih alternatif jawaban yang paling tepat.`,
          explanation: `Pembahasan materi untuk butir nomor ${i}: Solusi yang benar berfokus pada pemahaman fundamental teori dan penerapan praktikum pada mata kuliah ${courseCode}.`,
          codeSnippet: (i % 3 === 0) ? `// Contoh snippet logika implementasi untuk nomor ${i}:\npublic void runExecution(String inputData) {\n    System.out.println("Processing: " + inputData);\n}` : null,
          options: [
            { key: 'A', text: `Opsi terstruktur pertama (A) untuk butir soal ${i}`, isCorrect: (i % 4 === 1) },
            { key: 'B', text: `Opsi terstruktur kedua (B) untuk butir soal ${i}`, isCorrect: (i % 4 === 2) },
            { key: 'C', text: `Opsi terstruktur ketiga (C) untuk butir soal ${i}`, isCorrect: (i % 4 === 3) },
            { key: 'D', text: `Opsi terstruktur keempat (D) untuk butir soal ${i}`, isCorrect: (i % 4 === 0) },
            { key: 'E', text: `Opsi pertimbangan analisis kelima (E) untuk butir soal ${i}`, isCorrect: false }
          ]
        }));
      }
      return questions;
    }

    /**
     * Susun paket evaluasi (Latihan, Quiz 1, UTS, Quiz 2, UAS) untuk setiap mata kuliah
     */
    buildPackagesForCourse(courseId, courseName) {
      let categories = [
        { type: ExamCategory.LATIHAN, duration: 45, count: 20 },
        { type: ExamCategory.QUIZ_1, duration: 30, count: 15 },
        { type: ExamCategory.UTS, duration: 60, count: 25 },
        { type: ExamCategory.QUIZ_2, duration: 30, count: 15 },
        { type: ExamCategory.UAS, duration: 90, count: 35 }
      ];

      // Matematika Dasar (MAT101) khusus hanya menyediakan Quiz 1
      if (courseId === 'sem1-matdas') {
        categories = [
          { type: ExamCategory.QUIZ_1, duration: 30, count: 10 }
        ];
      }

      // Aljabar Linier (MAT102): Quiz (24 soal), UTS Tipe A (10 soal), UTS Tipe B (10 soal)
      if (courseId === 'sem1-alin') {
        categories = [
          { type: 'Quiz', duration: 60, count: 24, key: 'sem1-alin-quiz' },
          { type: 'UTS Tipe A', duration: 90, count: 10, key: 'sem1-alin-uts-a' },
          { type: 'UTS Tipe B', duration: 90, count: 10, key: 'sem1-alin-uts-b' }
        ];
      }

      const questionsStore = (this.dataSource.questions || {});

      return categories.map(cat => {
        const pkgKey = cat.key || `${courseId}-${cat.type.toLowerCase().replace(/\s+/g, '-')}`;
        
        // Cek apakah data soal untuk paket ini sudah terdaftar di repository eksternal (folder /data/questions/)
        // Catatan: sem5-sqa latihan juga bisa memanfaatkan bank soal sem5-sqa-uts
        let rawQuestions = questionsStore[pkgKey];
        if (!rawQuestions && courseId === 'sem5-sqa' && (cat.type === ExamCategory.UTS || cat.type === ExamCategory.LATIHAN)) {
          rawQuestions = questionsStore['sem5-sqa-uts'];
        }
        if (!rawQuestions && courseId === 'sem1-alin' && cat.type === 'Quiz') {
          rawQuestions = questionsStore['sem1-alin-quiz'] || questionsStore['sem1-alin-quiz-1'];
        }
        if (!rawQuestions && courseId === 'sem1-alin' && cat.type === 'UTS Tipe A') {
          rawQuestions = questionsStore['sem1-alin-uts-a'] || questionsStore['sem1-alin-uts'];
        }
        if (!rawQuestions && courseId === 'sem1-alin' && cat.type === 'UTS Tipe B') {
          rawQuestions = questionsStore['sem1-alin-uts-b'];
        }
        if (!rawQuestions && courseId === 'sem1-matdas') {
          rawQuestions = questionsStore['sem1-matdas-quiz-1'];
        }

        let questions;
        if (rawQuestions && Array.isArray(rawQuestions) && rawQuestions.length > 0) {
          questions = rawQuestions.map(item => this.mapRawToEntity(item, courseId));
        } else {
          // Fallback ke mock generator cerdas jika belum dibuatkan berkas soalnya
          questions = this.generateMockQuestions(courseName, cat.type, cat.count);
        }

        return new ExamPackage({
          id: pkgKey,
          courseId,
          title: `${cat.type} — ${courseName}`,
          category: cat.type,
          questionCount: questions.length,
          durationMinutes: (rawQuestions && rawQuestions.length > 25) ? 60 : cat.duration,
          questions
        });
      });
    }

    /**
     * Membangun katalog mata kuliah dari data/courses.js
     */
    buildCourseCatalog() {
      const rawCourses = this.dataSource.courses || [];
      return rawCourses.map(def => {
        const packages = this.buildPackagesForCourse(def.id, def.name);
        return new Course({ ...def, packages });
      });
    }

    async getSemesters() {
      const semSet = new Set(this.courses.map(c => c.semester));
      return Array.from(semSet).sort((a, b) => a - b);
    }

    async getCoursesBySemester(semesterNumber) {
      return this.courses.filter(c => c.semester === Number(semesterNumber));
    }

    async getCourseById(courseId) {
      return this.courses.find(c => c.id === courseId) || null;
    }

    async getPackageById(packageId) {
      for (const course of this.courses) {
        let pkg = course.packages.find(p => p.id === packageId);
        if (!pkg && (packageId === 'sem1-alin-uts' || packageId === 'sem1-alin-uts-a')) {
          pkg = course.packages.find(p => p.id === 'sem1-alin-uts-a' || p.id === 'sem1-alin-uts');
        }
        if (!pkg && (packageId === 'sem1-alin-quiz' || packageId === 'sem1-alin-quiz-1' || packageId === 'sem1-alin-latihan-soal')) {
          pkg = course.packages.find(p => p.id === 'sem1-alin-quiz');
        }
        if (pkg) return { course, package: pkg };
      }
      return null;
    }

    async getQuestions() {
      // Default: ambil paket SQA UTS
      const sqa = await this.getPackageById('sem5-sqa-uts');
      return sqa ? sqa.package.questions : [];
    }
  }

  // Export ke Clean Architecture Namespace
  window.App.Infrastructure.InMemoryQuestionRepository = InMemoryQuestionRepository;
  window.App.Infrastructure.QuestionRepository = InMemoryQuestionRepository;
})();
