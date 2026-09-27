/**
 * ============================================================================
 * BANK SOAL: ANALISA DAN DESAIN SISTEM INFORMASI (ADSI) — QUIZ 1
 * Sumber: Soal Evaluasi Asli Analisa & Desain Sistem Informasi
 * Memuat 30 Butir Soal Lengkap:
 * - Konsep Kualitas Perangkat Lunak & Siklus Hidup (SDLC)
 * - Varian Metodologi RAD (Iterative, Prototyping, Throwaway Prototyping)
 * - Analisis Kelayakan Sistem (Organisasi, Teknis, Ekonomi)
 * - Elisitasi & Validasi Kebutuhan (Fungsional, Non-Fungsional, Pengguna)
 * - Komponen & Relasi Use Case Diagram (Actor, Association, Include, Extend, Generalization)
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

window.BankSoalData.questions['sem2-adsi-quiz-1'] = [
  {
    no: 1,
    soal: "Dalam pengukuran kualitas sebuah sistem informasi berbasis komputer (perangkat lunak) pengukuran kualitas sistem dilakukan terhadap kualitas produk jadinya sehingga pematangan proses pengembangannya menjadi hal yang dapat dihiraukan",
    codeSnippet: null,
    pembahasan: "Kualitas perangkat lunak sangat ditentukan oleh proses pengembangannya (prinsip penjaminan kualitas / QA: process maturity directly impacts product quality). Mematangkan proses pengembangan (seperti CMMI atau ISO 9001/IEC 12207) tidak boleh dihiraukan karena cacat lebih murah dicegah pada tahap proses daripada diperbaiki saat produk sudah jadi.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: false },
      { huruf: "b", teks: "Salah", benar: true }
    ]
  },
  {
    no: 2,
    soal: "Relasi ke tergantung antar use case yang ditunjuk pada gambar berikut ini adalah....",
    codeSnippet: null,
    pembahasan: "Relasi <<extend>> menghubungkan use case perluasan (extension use case) ke use case dasar yang bersifat opsional dan hanya dieksekusi jika kondisi perluasan (extension point) tertentu terpenuhi.",
    opsi: [
      { huruf: "a", teks: "relasi include", benar: false },
      { huruf: "b", teks: "relasi asosiasi", benar: false },
      { huruf: "c", teks: "relasi inheritance", benar: false },
      { huruf: "d", teks: "relasi extend", benar: true }
    ]
  },
  {
    no: 3,
    soal: "Beberapa kelebihan sistem development life cycle (SDLC) sebagai metode pengembangan sistem kecuali....",
    codeSnippet: null,
    pembahasan: "Model SDLC tradisional (seperti Waterfall) terkenal kaku (rigid), bukan fleksibel. Perubahan di tengah atau akhir siklus membutuhkan biaya dan waktu yang sangat besar karena setiap fase harus selesai tuntas sebelum lanjut ke fase berikutnya.",
    opsi: [
      { huruf: "a", teks: "Fleksibel yaitu Jika terjadi perubahan proses bisnis maka desain Keluaran dan desain lainnya seketika dapat langsung diubah", benar: true },
      { huruf: "b", teks: "Terdapat fase-fase dengan batasan dan hasil kegiatan yang jelas, sehingga mempermudah pengelolaan proyek", benar: false },
      { huruf: "c", teks: "Jadwal Setiap proses dapat ditentukan secara pasti sehingga dapat dilihat jelas target penyelesaian pengembangan sistem", benar: false },
      { huruf: "d", teks: "Stakeholder (pemangku kepentingan) berkomunikasi antara satu dengan yang lainnya", benar: false }
    ]
  },
  {
    no: 4,
    soal: "Beberapa hal penting perlu diperhatikan dalam memilih teknik elisitasi kebutuhan, kecuali.....",
    codeSnippet: null,
    pembahasan: "Kriteria penentuan teknik elisitasi (wawancara, kuesioner, JAD, observasi, analisis dokumen) meliputi: jenis informasi yang dibutuhkan, kedalaman/keluasan informasi, integrasi informasi, keterlibatan pengguna, dan biaya. Fasilitator hanyalah peran pemandu dalam teknik tertentu (seperti JAD) dan bukan kriteria dasar penentu pemilihan teknik elisitasi.",
    opsi: [
      { huruf: "a", teks: "keterlibatan pengguna", benar: false },
      { huruf: "b", teks: "jenis informasi yang akan diperoleh", benar: false },
      { huruf: "c", teks: "kedalaman, keluasan, dan integrasi informasi", benar: false },
      { huruf: "d", teks: "keterlibatan fasilitator", benar: true }
    ]
  },
  {
    no: 5,
    soal: "Seorang nasabah akan melakukan transaksi pada sebuah mesin ATM. Setiap kali nasabah menjalankan suatu jenis transaksi tertentu (misalnya: penarikan tunai, cek saldo, atau transaksi lainnya) sistem ATM secara berulang meminta nasabah melakukan login. relasi antara aktivitas login dan setiap jenis aktivitas transaksi pada mesin ATM tersebut adalah relasi extend. Pernyataan ini adalah....",
    codeSnippet: null,
    pembahasan: "Karena aktivitas login wajib dijalankan setiap kali melakukan transaksi, maka relasi yang tepat adalah relasi <<include>> (keharusan/mandatory), bukan relasi <<extend>> (yang sifatnya opsional/perluasan bersyarat). Maka pernyataan tersebut adalah Salah.",
    opsi: [
      { huruf: "a", teks: "Salah", benar: true },
      { huruf: "b", teks: "Benar", benar: false }
    ]
  },
  {
    no: 6,
    soal: "Berikut ini adalah salah satu cara untuk menilai kelayakan organisasi dalam kegiatan analisis kelayakan sistem, kecuali.....",
    codeSnippet: null,
    pembahasan: "Opsi B merupakan bagian dari kelayakan teknis (technical feasibility), sedangkan kelayakan organisasi (organizational feasibility) berfokus pada keselarasan dengan tujuan strategis bisnis (opsi D) dan keterlibatan aktif pemangku kepentingan (opsi C).",
    opsi: [
      { huruf: "a", teks: "jawaban jawaban A dan B benar", benar: true },
      { huruf: "b", teks: "menganalisis kompatibilitas sistem baru dengan teknologi yang sudah ada dalam organisasi", benar: false },
      { huruf: "c", teks: "menganalisis seberapa jauh pemangku kepentingan terlibat secara aktif dalam pengembangan sistem", benar: false },
      { huruf: "d", teks: "memahami seberapa baik tujuan proyek sejalan dengan tujuan bisnis organisasi", benar: false }
    ]
  },
  {
    no: 7,
    soal: "Hasil akhir dari fase analisis adalah sebuah dokumen yang memuat....",
    codeSnippet: null,
    pembahasan: "Luaran utama (deliverable) dari fase analisis adalah dokumen Spesifikasi Kebutuhan Sistem (System Requirements Document / SRS), yang mendeskripsikan secara rinci kebutuhan fungsional dan non-fungsional sistem (APA yang harus dilakukan sistem).",
    opsi: [
      { huruf: "a", teks: "pernyataan kebutuhan sistem secara terperinci", benar: true },
      { huruf: "b", teks: "pernyataan kelayakan proyek sistem", benar: false },
      { huruf: "c", teks: "rancangan sistem secara lebih rinci tentang bagaimana sebuah sistem akan dibangun", benar: false },
      { huruf: "d", teks: "jawaban A dan B benar", benar: false }
    ]
  },
  {
    no: 8,
    soal: "Dalam fase analisis kegiatan memahami sistem yang sedang berjalan adalah suatu kegiatan yang mutlak dilakukan secara mendalam dan terperinci. Pernyataan tersebut adalah.....",
    codeSnippet: null,
    pembahasan: "Memahami sistem yang sedang berjalan tidak selalu mutlak dilakukan secara mendalam pada setiap proyek, terutama jika proyek tersebut menerapkan Business Process Reengineering (BPR) atau membangun sistem yang sama sekali baru (greenfield project) di mana analisis sistem lama yang usang justru dapat membatasi inovasi.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: false },
      { huruf: "b", teks: "Salah", benar: true }
    ]
  },
  {
    no: 9,
    soal: "Di antara pernyataan berikut ini, yang termasuk dalam \"kebutuhan pengguna\" adalah....",
    codeSnippet: null,
    pembahasan: "\"Reorder inventaris\" merefleksikan tugas langsung yang ingin diselesaikan oleh pengguna (user requirement/task). Opsi C adalah kebutuhan bisnis (business requirement), opsi D adalah kebutuhan fungsional sistem, dan opsi B adalah kebutuhan non-fungsional (security).",
    opsi: [
      { huruf: "a", teks: "reorder inventaris", benar: true },
      { huruf: "b", teks: "informasi pembayaran akan dienkripsi dan diamankan", benar: false },
      { huruf: "c", teks: "mengurangi biaya inventaris", benar: false },
      { huruf: "d", teks: "sistem akan memungkinkan pelanggan untuk menelusuri pilihan berdasarkan kategori yang telah ditentukan", benar: false }
    ]
  },
  {
    no: 10,
    soal: "Berikut adalah beberapa prinsip yang harus diperhatikan sewaktu mengembangkan sistem, kecuali....",
    codeSnippet: null,
    pembahasan: "Proyek yang terbukti tidak layak berdasarkan hasil evaluasi harus dihentikan atau dibatalkan, bukan dipaksakan terus berjalan karena hanya akan menghabiskan anggaran tanpa kepastian keuntungan (sunk cost fallacy).",
    opsi: [
      { huruf: "a", teks: "Pengembangan sistem perlu didahului oleh perencanaan yang baik agar dapat berhasil dengan memuaskan", benar: false },
      { huruf: "b", teks: "Dokumentasi harus ada untuk pedoman dalam pengembangan sistem", benar: false },
      { huruf: "c", teks: "Proyek yang sudah direncanakan, harus terus dijalankan walau dinyatakan tidak layak berdasarkan hasil evaluasi, agar peluang keuntungan dapat diperoleh di masa mendatang.", benar: true },
      { huruf: "d", teks: "Jawaban A dan B Benar", benar: false },
      { huruf: "e", teks: "Sistem yang dikembangkan memerlukan modal yang besar, sehingga perlu menetapkan prioritas pada proses yang lebih menguntungkan", benar: false }
    ]
  },
  {
    no: 11,
    soal: "Metodologi pengembangan sistem berbasis rapid application development (RAD) memiliki beberapa varian kecuali.....",
    codeSnippet: null,
    pembahasan: "Varian RAD meliputi Iterative Development, System Prototyping, dan Throwaway Prototyping. SDLC tradisional (seperti Waterfall) adalah metodologi terstruktur (structured development), bukan varian RAD.",
    opsi: [
      { huruf: "a", teks: "Throwawaay Prototyping", benar: false },
      { huruf: "b", teks: "Iterative Development", benar: false },
      { huruf: "c", teks: "System development life cycle", benar: true },
      { huruf: "d", teks: "System Prototyping", benar: false }
    ]
  },
  {
    no: 12,
    soal: "Ada kalanya diagram use case dibuat setelah terlebih dulu membuat diagram activity. Pernyataan ini adalah...",
    codeSnippet: null,
    pembahasan: "Benar. Dalam beberapa metodologi berorientasi proses bisnis, analis memodelkan alur kerja bisnis secara menyeluruh dengan Activity Diagram terlebih dahulu, kemudian mengidentifikasi use case dan batas fungsionalitas sistem berdasarkan aktivitas-aktivitas tersebut.",
    opsi: [
      { huruf: "a", teks: "Salah", benar: false },
      { huruf: "b", teks: "Benar", benar: true }
    ]
  },
  {
    no: 13,
    soal: "Notasi boundary wajib selalu disertakan pada penggambaran diagram use case, untuk menandai ruang lingkup sistem. Pernyataan ini adalah...",
    codeSnippet: null,
    pembahasan: "Notasi boundary (kotak batas sistem) bersifat opsional dalam diagram use case UML, meskipun sangat direkomendasikan untuk memperjelas pemisahan ruang lingkup sistem dari aktor eksternal.",
    opsi: [
      { huruf: "a", teks: "Salah", benar: true },
      { huruf: "b", teks: "Benar", benar: false }
    ]
  },
  {
    no: 14,
    soal: "Analisis masalah dan analisis akar penyebab cenderung paling berguna dalam situasi fokus proyek yang luas, di mana efisiensi tidak menjadi tujuan utamanya. Pernyataan tersebut adalah...",
    codeSnippet: null,
    pembahasan: "Problem Analysis dan Root Cause Analysis berfokus pada perbaikan masalah spesifik dalam sistem yang ada untuk meningkatkan efisiensi dan efektivitas proses bisnis (Business Process Improvement / BPI), bukan untuk situasi luas yang mengabaikan efisiensi.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: false },
      { huruf: "b", teks: "Salah", benar: true }
    ]
  },
  {
    no: 15,
    soal: "Bila dalam fase desain sistem terdapat masalah yang diakibatkan oleh adanya kebutuhan sistem yang tidak terpenuhi, maka proyek sistem perlu ditinjau kembali dengan cara mengimplementasikan kembali tahap analisis sistem sebelum proyek dilanjutkan pada fase implementasi. Prinsip ini adalah salah satu prinsip yang diterapkan dalam SDLC.",
    codeSnippet: null,
    pembahasan: "Pernyataan tersebut Salah. Dalam konsep SDLC klasik, tahap analisis tidak 'diimplementasikan kembali' secara acak; melainkan perubahan kebutuhan dikelola melalui proses peninjauan kembali (change management/feedback loop) yang formal.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: false },
      { huruf: "b", teks: "Salah", benar: true }
    ]
  },
  {
    no: 16,
    soal: "berikut adalah jenis relasi yang bisa muncul dalam diagram use case, kecuali....",
    codeSnippet: null,
    pembahasan: "Generalization/inheritance tidak dapat menghubungkan actor dengan use case karena actor adalah entitas luar (subjek/peran) sedangkan use case adalah fungsi/perilaku sistem. Hubungan antara actor dan use case selalu berupa Association.",
    opsi: [
      { huruf: "a", teks: "generalization/inheritance antara actor dengan actor", benar: false },
      { huruf: "b", teks: "association antara actor dengan use case", benar: false },
      { huruf: "c", teks: "association antara use case", benar: false },
      { huruf: "d", teks: "generalization/inheritance antara actor dengan use case", benar: true }
    ]
  },
  {
    no: 17,
    soal: "Beberapa cara yang dapat digunakan untuk memperkirakan waktu yang dibutuhkan untuk mengembangkan sistem adalah, kecuali....",
    codeSnippet: null,
    pembahasan: "ROI (Return on Investment) adalah metode analisis kelayakan finansial/ekonomi untuk mengukur profitabilitas modal, bukan metode untuk mengestimasi durasi/waktu pengembangan proyek perangkat lunak.",
    opsi: [
      { huruf: "a", teks: "menggunakan paket pernagkat lunak estimasi", benar: false },
      { huruf: "b", teks: "menggunakan pendekatan ROI (Return on Investment)", benar: true },
      { huruf: "c", teks: "merujuk pada pengalaman masa lalu", benar: false },
      { huruf: "d", teks: "mengguna pendekatan function-point", benar: false }
    ]
  },
  {
    no: 18,
    soal: "Berikut adalah beberapa tipe pemeriksaan yang dapat diterapkan dalam proses validasi kebutuhan, kecuali....",
    codeSnippet: null,
    pembahasan: "Pemeriksaan validasi kebutuhan secara formal mencakup: validitas (validity), konsistensi (consistency), kelengkapan (completeness), realisme (realism), dan kemampuan verifikasi (verifiability). Prototyping adalah teknik pembuatan prototipe, bukan tipe pemeriksaan kebutuhan.",
    opsi: [
      { huruf: "a", teks: "pemeriksaan prototype", benar: true },
      { huruf: "b", teks: "pemeriksaan validitas", benar: false },
      { huruf: "c", teks: "pemeriksaan konsistensi", benar: false },
      { huruf: "d", teks: "pemeriksa kelengkapan", benar: false }
    ]
  },
  {
    no: 19,
    soal: "Berikut ini, yang termasuk jenis kebutuhan fungsional adalah....",
    codeSnippet: null,
    pembahasan: "Kebutuhan fungsional dibagi menjadi kebutuhan berorientasi proses (apa yang harus dilakukan oleh sistem) dan kebutuhan berorientasi informasi (data apa yang dikelola sistem). Kebutuhan performa merupakan bagian dari kebutuhan non-fungsional.",
    opsi: [
      { huruf: "a", teks: "jawaban A dan B Benar", benar: true },
      { huruf: "b", teks: "kebutuhan yang berorientasi pada proses", benar: false },
      { huruf: "c", teks: "kebutuhan berorientasi pada performa", benar: false },
      { huruf: "d", teks: "kebutuhan yang berorientasi pada informasi", benar: false }
    ]
  },
  {
    no: 20,
    soal: "Pada umumnya sistem yang dibangun menggunakan SDLC adalah sistem pemrosesan transaksi yang diperuntukkan memenuhi kebutuhan level manajerial operasional di bagian paling bawah",
    codeSnippet: null,
    pembahasan: "Benar. Siklus SDLC tradisional sangat efektif dan umumnya diterapkan untuk sistem pemrosesan transaksi (TPS) yang aturan bisnisnya terstruktur jelas dan terstandarisasi untuk tingkat operasional.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: true },
      { huruf: "b", teks: "Salah", benar: false }
    ]
  },
  {
    no: 21,
    soal: "komponen notasi use case pada diagram use case biasanya menggunakan kata....",
    codeSnippet: null,
    pembahasan: "Use case melambangkan fungsi atau tindakan yang dapat dilakukan sistem, sehingga penamaannya selalu diawali dengan kata kerja deskriptif/aktif yang diikuti kata benda (misalnya: Mencetak Laporan, Memverifikasi Pembayaran).",
    opsi: [
      { huruf: "a", teks: "benda", benar: false },
      { huruf: "b", teks: "perintah", benar: false },
      { huruf: "c", teks: "kerja deskriptif", benar: true },
      { huruf: "d", teks: "sifat", benar: false }
    ]
  },
  {
    no: 22,
    soal: "Model iterative memecah satu proyek menjadi beberapa bagian proyek untuk dikembangkan secara berurutan, namun tetap mengikuti siklus SDLC untuk setiap bagian proyek sebelum berinteraksi sedangkan model Waterfall mengimplementasikan seluruh bagian proyek secara utuh mengikuti siklus SDLC sebelum berintegrasi",
    codeSnippet: null,
    pembahasan: "Pernyataan tersebut Salah karena pada model iterative, setiap rilis/bagian proyek yang diselesaikan dapat langsung digunakan dan diberikan umpan balik (feedback) oleh pengguna, bukan sekadar menunggu sebelum berintegrasi.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: false },
      { huruf: "b", teks: "Salah", benar: true }
    ]
  },
  {
    no: 23,
    soal: "Salah satu komponen notasi dasar yang terdapat di dalam diagram use case adalah....",
    codeSnippet: null,
    pembahasan: "Notasi dasar use case diagram adalah Actor, Use Case, System Boundary, dan Association (garis asosiasi). Lifeline terdapat pada sequence diagram; attribute dan operation terdapat pada class diagram.",
    opsi: [
      { huruf: "a", teks: "atribut name", benar: false },
      { huruf: "b", teks: "lifeline", benar: false },
      { huruf: "c", teks: "operation name", benar: false },
      { huruf: "d", teks: "association", benar: true }
    ]
  },
  {
    no: 24,
    soal: "Analisis durasi dan penghapusan aktivitas membantu tim menemukan proses bisnis yang dianggap tidak efektif sehingga proses tersebut dapat dirancang ulang dan ditingkatkan. Pernyataan tersebut adalah.....",
    codeSnippet: null,
    pembahasan: "Benar. Analisis durasi (duration analysis) mengukur waktu penyelesaian aktivitas untuk menemukan kemacetan, sedangkan penghapusan aktivitas (activity elimination) memangkas proses yang tidak memberi nilai tambah.",
    opsi: [
      { huruf: "a", teks: "Salah", benar: false },
      { huruf: "b", teks: "Benar", benar: true }
    ]
  },
  {
    no: 25,
    soal: "Analis yang berfokus pada masalah teknis seputar bagaimana sistem akan berinteraksi dengan infrastruktur teknis organisasi (misalnya, perangkat keras perangkat lunak jaringan komunikasi dan Basis data) adalah....",
    codeSnippet: null,
    pembahasan: "Infrastructure Analyst (analis infrastruktur) bertanggung jawab memastikan integrasi dan kesesuaian sistem baru dengan perangkat keras, jaringan, sistem operasi, dan infrastruktur database organisasi.",
    opsi: [
      { huruf: "a", teks: "Analisis teknik", benar: false },
      { huruf: "b", teks: "Analis bisnis", benar: false },
      { huruf: "c", teks: "Analisis infrastruktur", benar: true },
      { huruf: "d", teks: "Analisis sitem", benar: false }
    ]
  },
  {
    no: 26,
    soal: "Model proses pengembangan sistem yang menekankan pada penggunaan Prototype untuk mengeksplorasi alternatif desain adalah.....",
    codeSnippet: null,
    pembahasan: "Throwaway Prototyping membuat prototipe desain khusus untuk mengeksplorasi dan memvalidasi alternatif desain yang kompleks atau belum dipahami dengan baik, kemudian membuang prototipe tersebut dan membangun sistem riil secara terstruktur.",
    opsi: [
      { huruf: "a", teks: "Semua jawaban A, B, dan C salah.", benar: false },
      { huruf: "b", teks: "Model sistem prototyping", benar: false },
      { huruf: "c", teks: "Model-model dijkstra", benar: false },
      { huruf: "d", teks: "Model Throwayway Prototyping", benar: true }
    ]
  },
  {
    no: 27,
    soal: "Komponen notasi aktor pada diagram use case biasanya menggunakan kata.....",
    codeSnippet: null,
    pembahasan: "Aktor menggambarkan peranan orang, organisasi, atau sistem lain yang berinteraksi dengan sistem, sehingga selalu dinyatakan dengan kata benda (misalnya: Mahasiswa, Kasir, Sistem Pembayaran).",
    opsi: [
      { huruf: "a", teks: "sifat", benar: false },
      { huruf: "b", teks: "benda", benar: true },
      { huruf: "c", teks: "kerja", benar: false },
      { huruf: "d", teks: "perintah", benar: false }
    ]
  },
  {
    no: 28,
    soal: "Relasi ketergantungan antar use case yang ditunjukkan pada gambar berikut ini adalah.....",
    codeSnippet: null,
    pembahasan: "Relasi <<include>> menandakan bahwa suatu use case dasar selalu memanggil dan bergantung secara wajib (mandatory) pada use case lain untuk menyelesaikan fungsinya.",
    opsi: [
      { huruf: "a", teks: "relasi asosiasi", benar: false },
      { huruf: "b", teks: "relasi extend", benar: false },
      { huruf: "c", teks: "relasi include", benar: true },
      { huruf: "d", teks: "relasi inheritance", benar: false }
    ]
  },
  {
    no: 29,
    soal: "Dalam analisis kelayakan secara teknis, kompatibilitas sistem baru dengan teknologi yang sudah pada organisasi tidak menjadi hal yang perlu diperhitungkan dengan serius, sebab sistem baru sudah barang tentu milik teknologi yang lebih baik daripada sistem lama",
    codeSnippet: null,
    pembahasan: "Pernyataan tersebut Salah. Kompatibilitas sistem baru dengan infrastruktur teknologi yang sudah ada adalah salah satu faktor risiko paling kritis dalam analisis kelayakan teknis (technical feasibility).",
    opsi: [
      { huruf: "a", teks: "benar", benar: false },
      { huruf: "b", teks: "salah", benar: true }
    ]
  },
  {
    no: 30,
    soal: "Digambarkan dengan sebuah garis berpanah tertutup (berlubang) pada salah satu ujungnya, yang menunjukkan lebih umum, adalah relasi....",
    codeSnippet: null,
    pembahasan: "Dalam notasi UML standar, relasi generalisasi/inheritance digambarkan dengan garis yang berujung anak panah segitiga tertutup berongga/berlubang (hollow arrow) yang menunjuk ke elemen yang lebih umum (super-actor/parent).",
    opsi: [
      { huruf: "a", teks: "inheritance antar actor", benar: true },
      { huruf: "b", teks: "association antara use case", benar: false },
      { huruf: "c", teks: "semua jawaban A, B, dan C benar", benar: false },
      { huruf: "d", teks: "association antar actor dan use case", benar: false }
    ]
  }
];
