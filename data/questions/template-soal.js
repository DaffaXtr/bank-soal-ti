/**
 * ============================================================================
 * TEMPLATE PENAMBAHAN SOAL BARU (CONTOH)
 * File ini adalah panduan cara menambahkan butir soal untuk mata kuliah lain.
 * 
 * Panduan penamaan file:
 * Format: data/questions/{id-mata-kuliah}-{jenis-ujian}.js
 * Contoh: 
 *   - data/questions/sem2-logpro-uts.js
 *   - data/questions/sem3-jarkom-uas.js
 *   - data/questions/sem4-ai-quiz-1.js
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

// Ganti key sesuai dengan id mata kuliah dan kategori:
// Format ID paket: '{id_matkul}-{kategori}'
// Kategori yang tersedia: 'latihan-soal', 'quiz-1', 'uts', 'quiz-2', 'uas'
// Contoh di bawah ini untuk UTS Logika & Pemrograman Dasar (sem2-logpro-uts):
window.BankSoalData.questions['sem2-logpro-uts'] = [
  {
    no: 1,
    soal: "Manakah dari tipe data berikut dalam bahasa C yang digunakan untuk menyimpan bilangan desimal berpresisi ganda?",
    // codeSnippet bersifat opsional. Kosongkan (null atau omit) jika tidak ada potongan kode.
    codeSnippet: `double pi = 3.14159265359;\nprintf("%.2f", pi);`,
    pembahasan: "Tipe data <code>double</code> di bahasa C menggunakan 64-bit (8 bytes) untuk menyimpan angka pecahan presisi ganda IEEE 754, sedangkan <code>float</code> hanya 32-bit.",
    opsi: [
      { huruf: "a", teks: "int", benar: false },
      { huruf: "b", teks: "float", benar: false },
      { huruf: "c", teks: "double", benar: true },
      { huruf: "d", teks: "char", benar: false },
      { huruf: "e", teks: "void", benar: false }
    ]
  },
  {
    no: 2,
    soal: "Apa output dari perulangan for berikut ini?",
    codeSnippet: `int count = 0;\nfor(int i = 0; i < 5; i++) {\n    count += i;\n}\nprintf("%d", count);`,
    pembahasan: "Nilai i berjalan dari 0 sampai 4: 0 + 1 + 2 + 3 + 4 = 10. Maka output yang tercetak adalah 10.",
    opsi: [
      { huruf: "a", teks: "5", benar: false },
      { huruf: "b", teks: "10", benar: true },
      { huruf: "c", teks: "15", benar: false },
      { huruf: "d", teks: "0", benar: false },
      { huruf: "e", teks: "Error kompilasi", benar: false }
    ]
  }
];
