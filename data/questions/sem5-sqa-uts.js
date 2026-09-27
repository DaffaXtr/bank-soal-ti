/**
 * ============================================================================
 * BANK SOAL: JAMINAN KUALITAS PERANGKAT LUNAK (QUALITY ASSURANCE) — UTS
 * Berkas ini terpisah khusus untuk data butir soal, kunci jawaban, dan pembahasan.
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

window.BankSoalData.questions['sem5-sqa-uts'] = [
  {
    no: 1,
    soal: "Aplikasi mobile yang baru dirilis sulit digunakan oleh pengguna baru karena menu dan ikon tidak intuitif. Masalah ini terkait dengan subkarakteristik...",
    pembahasan: "Menurut standar ISO/IEC 25010, karakteristik <b>Usability</b> memiliki subkarakteristik <b>Learnability</b> (kemampuan untuk dipelajari), yaitu sejauh mana suatu sistem dapat dipelajari dengan mudah dan cepat oleh pengguna baru untuk mencapai tujuan penggunaan.",
    opsi: [
      { huruf: "a", teks: "Appropriateness recognisability", benar: false },
      { huruf: "b", teks: "Learnability", benar: true },
      { huruf: "c", teks: "User error protection", benar: false },
      { huruf: "d", teks: "Aesthetics", benar: false },
      { huruf: "e", teks: "Accessibility", benar: false }
    ]
  },
  {
    no: 2,
    soal: "Berikut ini adalah contoh dari \"Critical Software\" KECUALI...",
    pembahasan: "<b>Critical Software</b> adalah perangkat lunak yang apabila mengalami kegagalan (failure) dapat mengakibatkan korban jiwa, bahaya keselamatan publik, kerugian finansial bencana, atau kerusakan lingkungan parah (misal kontrol reaktor nuklir, rem mobil, kendali pesawat). Kalkulator sederhana tidak tergolong sistem kritis keselamatan.",
    opsi: [
      { huruf: "a", teks: "Sistem monitoring reaktor nuklir.", benar: false },
      { huruf: "b", teks: "Aplikasi kalkulator sederhana di smartphone.", benar: true },
      { huruf: "c", teks: "Sistem rem mobil elektronik.", benar: false },
      { huruf: "d", teks: "Perangkat lunak kontrol pesawat terbang.", benar: false }
    ]
  },
  {
    no: 3,
    soal: "Faktor yang dapat mendorong kualitas perangkat lunak adalah...",
    pembahasan: "Kualitas perangkat lunak didorong ketika teknik SQA (Software Quality Assurance) disesuaikan secara tepat dengan lingkungan pengembangan, metodologi kerja tim, dan skala proyek yang sedang dijalankan.",
    opsi: [
      { huruf: "a", teks: "Teknik SQA yang disesuaikan dengan lingkungan pengembangan.", benar: true },
      { huruf: "b", teks: "Ketidakkonsistenan terminologi masalah perangkat lunak.", benar: false },
      { huruf: "c", teks: "Ketidaktahuan terhadap teknik SQA yang telah dipublikasikan.", benar: false },
      { huruf: "d", teks: "Kurangnya pemahaman tentang sumber kesalahan perangkat lunak.", benar: false }
    ]
  },
  {
    no: 4,
    soal: "Kegagalan (Failure) pada perangkat lunak didefinisikan sebagai...",
    pembahasan: "Secara standar rekayasa perangkat lunak (IEEE/ISO), <b>Failure</b> adalah kejadian saat perangkat lunak tidak mampu menjalankan fungsi yang disyaratkan dalam batas toleransi yang ditentukan saat dioperasikan.",
    opsi: [
      { huruf: "a", teks: "Kesalahan manusia dalam penulisan kode program.", benar: false },
      { huruf: "b", teks: "Ketidaksesuaian antara spesifikasi dan implementasi.", benar: false },
      { huruf: "c", teks: "Ketidakmampuan produk untuk melakukan fungsi yang diperlukan dalam batas yang ditentukan.", benar: true },
      { huruf: "d", teks: "Masalah yang ditemukan selama fase pengujian.", benar: false }
    ]
  },
  {
    no: 5,
    soal: "Menurut data sumber kesalahan perangkat lunak (Beizer, 1990), kesalahan paling banyak berasal dari kategori...",
    pembahasan: "Berdasarkan studi taksonomi kesalahan Boris Beizer (1990), kesalahan kategori <b>Struktural (Structural errors)</b> menempati persentase terbesar dari keseluruhan cacat perangkat lunak.",
    opsi: [
      { huruf: "a", teks: "Struktural.", benar: true },
      { huruf: "b", teks: "Konstruksi/koding.", benar: false },
      { huruf: "c", teks: "Arsitektur/desain.", benar: false },
      { huruf: "d", teks: "Spesifikasi kebutuhan.", benar: false }
    ]
  },
  {
    no: 6,
    soal: "Menurut McConnell (2004), hubungan antara kematangan proses dan kesalahan dalam pengembangan perangkat lunak adalah...",
    pembahasan: "Steve McConnell (2004) menekankan bahwa organisasi dengan proses pengembangan yang matang (mature process) mampu mencegah masuknya cacat sejak tahap awal siklus hidup, sehingga defect injection rate menurun drastis.",
    opsi: [
      { huruf: "a", teks: "Kematangan proses tidak mempengaruhi jumlah kesalahan.", benar: false },
      { huruf: "b", teks: "Hanya proses testing yang mempengaruhi jumlah kesalahan.", benar: false },
      { huruf: "c", teks: "Semakin matang proses, semakin sedikit kesalahan yang dimasukkan ke dalam siklus hidup pengembangan.", benar: true },
      { huruf: "d", teks: "Semakin matang proses, semakin banyak kesalahan yang muncul.", benar: false }
    ]
  },
  {
    no: 7,
    soal: "Berikut ini yang bukan termasuk model bisnis dalam industri perangkat lunak...",
    pembahasan: "Open-source murni yang dirilis gratis tanpa strategi monetisasi (seperti donasi, lisensi komersial ganda, atau hosting/support berbayar) bukan merupakan model bisnis industri.",
    opsi: [
      { huruf: "a", teks: "Commercial software", benar: false },
      { huruf: "b", teks: "Custom systems written on contract", benar: false },
      { huruf: "c", teks: "Open-source gratis tanpa model bisnis", benar: true },
      { huruf: "d", teks: "Commercial and mass-market firmware", benar: false },
      { huruf: "e", teks: "Mass-market software", benar: false }
    ]
  },
  {
    no: 8,
    soal: "Biaya kualitas perangkat lunak terdiri dari empat komponen utama berikut, KECUALI...",
    pembahasan: "Model Biaya Kualitas (Cost of Quality / CoQ) klasik terdiri dari 4 kategori utama: <b>Prevention costs</b>, <b>Appraisal costs</b>, <b>Internal failure costs</b>, dan <b>External failure costs</b>. Training cost umumnya masuk sebagai bagian dari pencegahan (prevention), bukan kategori terpisah utama.",
    opsi: [
      { huruf: "a", teks: "Appraisal cost", benar: false },
      { huruf: "b", teks: "Training cost", benar: true },
      { huruf: "c", teks: "Failure cost (internal & external)", benar: false },
      { huruf: "d", teks: "Prevention cost", benar: false },
      { huruf: "e", teks: "Warranty & reputational cost", benar: false }
    ]
  },
  {
    no: 9,
    soal: "Budaya kualitas tidak bisa \"dibeli\", melainkan harus...",
    pembahasan: "Budaya mutu (quality culture) adalah pola pikir dan nilai bersama yang harus ditanamkan dan dipupuk sejak awal pendirian organisasi oleh kepemimpinan dan tim pengembang.",
    opsi: [
      { huruf: "a", teks: "Diatur oleh regulasi pemerintah", benar: false },
      { huruf: "b", teks: "Ditentukan oleh vendor eksternal", benar: false },
      { huruf: "c", teks: "Datang dari tekanan pasar", benar: false },
      { huruf: "d", teks: "Diciptakan sejak awal berdirinya organisasi", benar: true },
      { huruf: "e", teks: "Ditentukan oleh sponsor proyek", benar: false }
    ]
  },
  {
    no: 10,
    soal: "COBIT berbeda dengan ITIL karena COBIT lebih berfokus pada...",
    pembahasan: "<b>COBIT</b> (Control Objectives for Information and Related Technologies) berfokus pada tata kelola dan manajemen TI tingkat strategis (<b>IT Governance and management</b>), sedangkan ITIL berfokus pada manajemen layanan operasional TI (ITSM).",
    opsi: [
      { huruf: "a", teks: "Availability management", benar: false },
      { huruf: "b", teks: "IT service management", benar: false },
      { huruf: "c", teks: "Service continuity management", benar: false },
      { huruf: "d", teks: "IT Governance and management", benar: true },
      { huruf: "e", teks: "Capacity management", benar: false }
    ]
  },
  {
    no: 11,
    soal: "Custom software yang ditulis in-house biasanya ditujukan untuk...",
    pembahasan: "Perangkat lunak in-house dikembangkan secara khusus oleh internal perusahaan untuk memenuhi kebutuhan operasional unik dan meningkatkan efisiensi internal organisasi tersebut.",
    opsi: [
      { huruf: "a", teks: "Dikembangkan dengan konsep open source", benar: false },
      { huruf: "b", teks: "Dipasarkan ke perusahaan/organisasi", benar: false },
      { huruf: "c", teks: "Ditanamkan pada hardware", benar: false },
      { huruf: "d", teks: "Dijual ke konsumen umum", benar: false },
      { huruf: "e", teks: "Meningkatkan efisiensi internal organisasi", benar: true }
    ]
  },
  {
    no: 12,
    soal: "Dalam konteks biaya kualitas, review perangkat lunak masuk dalam kategori...",
    pembahasan: "<b>Appraisal cost</b> adalah biaya yang dikeluarkan untuk menginspeksi, mengevaluasi, menguji, dan mereviu produk kerja guna memastikan kesesuaian dengan standar sebelum dirilis.",
    opsi: [
      { huruf: "a", teks: "Warranty cost", benar: false },
      { huruf: "b", teks: "Detection cost", benar: false },
      { huruf: "c", teks: "External failure cost", benar: false },
      { huruf: "d", teks: "Appraisal cost", benar: true },
      { huruf: "e", teks: "Prevention cost", benar: false }
    ]
  },
  {
    no: 13,
    soal: "Dalam konteks budaya kualitas, faktor yang PALING memengaruhi kualitas perangkat lunak adalah...",
    pembahasan: "Karl Wiegers menyatakan bahwa keterlibatan aktif klien di sepanjang fase proyek merupakan faktor penentu terbesar dalam memastikan bahwa perangkat lunak yang dibangun benar-benar menyelesaikan masalah nyata pengguna.",
    opsi: [
      { huruf: "a", teks: "Besarnya budget yang dialokasikan untuk biaya kualitas", benar: false },
      { huruf: "b", teks: "Penggunaan teknologi terbaru", benar: false },
      { huruf: "c", teks: "Banyaknya standar formal yang digunakan", benar: false },
      { huruf: "d", teks: "Ukuran tim pengembang", benar: false },
      { huruf: "e", teks: "Keterlibatan klien di sepanjang fase proyek", benar: true }
    ]
  },
  {
    no: 14,
    soal: "Dalam konteks keamanan perangkat lunak, kemampuan untuk membuktikan bahwa suatu tindakan atau peristiwa benar-benar terjadi dan tidak dapat disangkal termasuk aspek...",
    pembahasan: "<b>Non-repudiation (Nir-penyangkalan)</b> menjamin bahwa pihak yang melakukan transaksi atau aksi digital tidak dapat menyangkal keaslian atau terjadinya transaksi tersebut (biasanya melalui digital signature/audit log terenkripsi).",
    opsi: [
      { huruf: "a", teks: "Accountability", benar: false },
      { huruf: "b", teks: "Authenticity", benar: false },
      { huruf: "c", teks: "Integrity", benar: false },
      { huruf: "d", teks: "Non-repudiation", benar: true },
      { huruf: "e", teks: "Confidentiality", benar: false }
    ]
  },
  {
    no: 15,
    soal: "Dalam penjaminan kualitas perangkat lunak, trade-off antara atribut kualitas sering muncul. Misalnya, upaya meningkatkan efisiensi dapat mengurangi...",
    pembahasan: "Optimalisasi efisiensi eksekusi yang sangat tinggi sering kali menggunakan trik kode khusus perangkat keras tertentu atau kompilator spesifik, yang secara langsung mengorbankan <b>Portability</b> (kemudahan dipindahkan ke lingkungan lain).",
    opsi: [
      { huruf: "a", teks: "Reliability", benar: false },
      { huruf: "b", teks: "Testability", benar: false },
      { huruf: "c", teks: "Portability", benar: true },
      { huruf: "d", teks: "Robustness", benar: false },
      { huruf: "e", teks: "Usability", benar: false }
    ]
  },
  {
    no: 16,
    soal: "Dalam proses code review, tim menemukan bahwa pada modul perhitungan diskon, programmer menulis rumus yang seharusnya \"harga * diskon / 100\" menjadi \"harga - (harga * diskon / 100)\". Kesalahan ini terdeteksi sebelum pengujian dilakukan. Kasus ini merupakan contoh...",
    codeSnippet: "// Kode salah yang ditemukan saat code review:\ndouble hargaAkhir = harga - (harga * diskon / 100); \n// programmer salah menulis rumus implementasi pada modul",
    pembahasan: "<b>Defect (Bug/Cacat)</b> adalah manifestasi dari kesalahan manusia (error) yang tertuang ke dalam artefak kode program atau dokumen. Jika defect tersebut tereksekusi saat runtime dan memicu perilaku salah, barulah disebut <b>Failure</b>.",
    opsi: [
      { huruf: "a", teks: "Error", benar: false },
      { huruf: "b", teks: "Anomaly", benar: false },
      { huruf: "c", teks: "Defect", benar: true },
      { huruf: "d", teks: "Failure", benar: false },
      { huruf: "e", teks: "Incident", benar: false }
    ]
  },
  {
    no: 17,
    soal: "Dalam proyek sistem kontrol lalu lintas, tim QA menemukan bahwa 60% fault telah dihapus tetapi reliability hanya meningkat 3%. Penjelasan yang paling tepat untuk fenomena ini adalah...",
    pembahasan: "Jumlah fault tidak berbanding lurus secara linier dengan keandalan (reliability). Menghapus puluhan fault minor di bagian kode yang jarang dieksekusi memiliki dampak yang sangat kecil dibanding memperbaiki 1 fault kritis pada jalur operasional utama.",
    opsi: [
      { huruf: "a", teks: "Fault removal dapat menambah defect baru", benar: false },
      { huruf: "b", teks: "Fault yang tersisa tidak memengaruhi penurunan reliability", benar: false },
      { huruf: "c", teks: "Fault tidak selalu berbanding lurus dengan reliability", benar: true },
      { huruf: "d", teks: "Fault yang dihapus adalah fault minor dengan dampak kecil pada reliability", benar: false },
      { huruf: "e", teks: "Reliability tidak bisa diukur dengan fault removal", benar: false }
    ]
  },
  {
    no: 18,
    soal: "Dalam review formal terkait proyek ERP, ditemukan bahwa peserta rapat tidak melakukan persiapan sebelumnya. Hasil review pun minim manfaat. Analisis yang tepat adalah...",
    pembahasan: "Kunci keberhasilan *Formal Technical Review (FTR)* adalah persiapan mandiri para reviewer sebelum rapat dimulai. Tanpa membaca artefak terlebih dahulu, waktu pertemuan akan habis hanya untuk memahami konteks umum alih-alih menemukan cacat tersembunyi.",
    opsi: [
      { huruf: "a", teks: "Kegagalan terjadi karena tidak adanya pelatihan untuk reviewer", benar: false },
      { huruf: "b", teks: "Review gagal karena dipaksakan pelaksanaannya oleh pimpinan rapat", benar: false },
      { huruf: "c", teks: "Review dapat tetap dilaksanakan walau tanpa persiapan", benar: false },
      { huruf: "d", teks: "Kurangnya persiapan reviewer menurunkan efektivitas review", benar: true },
      { huruf: "e", teks: "Kegagalan terjadi karena tidak ada fasilitator yang terampil", benar: false }
    ]
  },
  {
    no: 19,
    soal: "Dalam sebuah audit, ditemukan bahwa organisasi sudah memiliki PDCA cycle, risk-based thinking, serta sistem dokumentasi mutu yang baik. Namun belum ada panduan spesifik untuk perangkat lunak. Standar tambahan yang perlu dipakai adalah...",
    pembahasan: "<b>ISO/IEC 90003</b> adalah panduan resmi penerapan ISO 9001 khusus untuk pengembangan, penyediaan, dan pemeliharaan perangkat lunak komputer.",
    opsi: [
      { huruf: "a", teks: "ISO/IEC 29110", benar: false },
      { huruf: "b", teks: "ISO/IEC/IEEE 15289", benar: false },
      { huruf: "c", teks: "IEEE 730", benar: false },
      { huruf: "d", teks: "ISO/IEC 20000", benar: false },
      { huruf: "e", teks: "ISO/IEC 90003", benar: true }
    ]
  },
  {
    no: 20,
    soal: "Dalam sebuah proyek e-commerce, tim memilih melakukan walkthrough untuk mendiskusikan desain antarmuka. Namun, banyak cacat teknis tidak teridentifikasi. Analisis yang tepat adalah...",
    pembahasan: "<b>Walkthrough</b> adalah reviu informal yang dipimpin oleh pembuat artefak untuk memberikan gambaran pemahaman bersama dan mengumpulkan masukan umum, bukan proses inspeksi formal berbasis checklist untuk deteksi cacat teknis mendalam.",
    opsi: [
      { huruf: "a", teks: "Walkthrough lebih berfokus pada pemahaman, bukan deteksi cacat sistematis", benar: true },
      { huruf: "b", teks: "Walkthrough tidak cocok untuk mendiskusikan desain", benar: false },
      { huruf: "c", teks: "Tim tidak menggunakan checklist, sehingga walkthrough tidak bisa mendeteksi cacat", benar: false },
      { huruf: "d", teks: "Walkthrough hanya boleh dilakukan di akhir proyek", benar: false },
      { huruf: "e", teks: "Walkthrough selalu lebih efektif dibanding inspection", benar: false }
    ]
  },
  {
    no: 21,
    soal: "Dalam sebuah proyek ERP internasional, tim QA menemukan perbedaan persepsi requirement antara cabang di negara A dan negara B. Untuk mencegah defect akibat masalah komunikasi, aktivitas SQA yang paling tepat adalah...",
    pembahasan: "<b>Formal Technical Reviews (FTR)</b> adalah instrumen SQA paling efektif untuk menyelaraskan persepsi seluruh pemangku kepentingan terhadap dokumen kebutuhan sistem sebelum memasuki tahap koding.",
    opsi: [
      { huruf: "a", teks: "Enforcing standards", benar: false },
      { huruf: "b", teks: "Formal technical reviews", benar: true },
      { huruf: "c", teks: "Controlling change", benar: false },
      { huruf: "d", teks: "Measurement", benar: false },
      { huruf: "e", teks: "Record keeping and reporting", benar: false }
    ]
  },
  {
    no: 22,
    soal: "Dalam sebuah proyek ERP, manajer hanya fokus pada biaya dan jadwal, sementara kualitas diabaikan. Setelah implementasi, terjadi banyak error yang menyebabkan keterlambatan. Analisis ini sesuai dengan pernyataan...",
    pembahasan: "Pernyataan legendaris Watts Humphrey: <i>\"Quality is lost in the noise\"</i> menggambarkan situasi di mana manajemen begitu panik mengejar target jadwal dan anggaran sehingga mengabaikan kualitas, yang ironisnya justru berujung pada bencana keterlambatan dan biaya membengkak.",
    opsi: [
      { huruf: "a", teks: "Watts Humphrey: \"Quality is lost in the noise\"", benar: true },
      { huruf: "b", teks: "Boeing 777: tantangan 20% teknis 80% budaya", benar: false },
      { huruf: "c", teks: "Albert Brooks: Etika hanya masalah pribadi", benar: false },
      { huruf: "d", teks: "Krasner: Maturity berbanding lurus dengan rework", benar: false },
      { huruf: "e", teks: "Wiegers: Keterlibatan klien faktor terbesar kualitas", benar: false }
    ]
  },
  {
    no: 23,
    soal: "Faktor yang memengaruhi pemilihan praktik rekayasa perangkat lunak KECUALI...",
    pembahasan: "Jumlah pengguna akhir bukan faktor utama dalam memilih metodologi/praktik rekayasa (apakah Agile, Waterfall, atau V-Model). Faktor penentu utama adalah criticality sistem, budaya/iklim organisasi, regulasi ketat, dan biaya error.",
    opsi: [
      { huruf: "a", teks: "Iklim organisasi", benar: false },
      { huruf: "b", teks: "Biaya perbaikan error", benar: false },
      { huruf: "c", teks: "Regulasi", benar: false },
      { huruf: "d", teks: "Criticality", benar: false },
      { huruf: "e", teks: "Jumlah pengguna akhir", benar: true }
    ]
  },
  {
    no: 24,
    soal: "ISO/IEC/IEEE 12207 digunakan untuk...",
    pembahasan: "<b>ISO/IEC/IEEE 12207</b> adalah standar internasional yang menetapkan kerangka kerja terpadu untuk semua proses siklus hidup perangkat lunak (Software Life Cycle Processes).",
    opsi: [
      { huruf: "a", teks: "Menetapkan kerangka kerja proses siklus hidup perangkat lunak", benar: true },
      { huruf: "b", teks: "Mengatur proses manajemen layanan TI", benar: false },
      { huruf: "c", teks: "Menentukan format dokumen proyek dan laporan", benar: false },
      { huruf: "d", teks: "Menyusun standar keamanan informasi", benar: false },
      { huruf: "e", teks: "Membuat standar etika software engineer", benar: false }
    ]
  },
  {
    no: 25,
    soal: "Jika perangkat lunak sepenuhnya memenuhi spesifikasi fungsional tetapi gagal memenuhi kebutuhan implisit pengguna, maka kondisi kualitas perangkat lunak tersebut dapat dianggap...",
    pembahasan: "Definisi kualitas menurut Pressman & ISO: Kualitas tidak hanya pemenuhan kebutuhan eksplisit (tertulis di SRS), namun juga harapan implisit pengguna. Kegagalan memenuhi kebutuhan implisit menandakan kualitas perangkat lunak tetap <b>rendah</b>.",
    opsi: [
      { huruf: "a", teks: "Kualitas masih dapat diterima", benar: false },
      { huruf: "b", teks: "Sudah dianggap memenuhi kualitas", benar: false },
      { huruf: "c", teks: "Berkualitas rendah", benar: true },
      { huruf: "d", teks: "Tergantung pada standar organisasi", benar: false },
      { huruf: "e", teks: "Netral, karena spesifikasi eksplisit terpenuhi", benar: false }
    ]
  },
  {
    no: 26,
    soal: "Karakteristik yang menilai kemampuan sistem untuk berfungsi dengan baik di berbagai lingkungan perangkat keras dan perangkat lunak termasuk dalam aspek...",
    pembahasan: "<b>Portability</b> (Portabilitas) mengukur kemudahan perangkat lunak untuk dialihkan dan dioperasikan dari satu lingkungan perangkat keras, perangkat lunak, atau platform ke lingkungan lainnya.",
    opsi: [
      { huruf: "a", teks: "Maintainability", benar: false },
      { huruf: "b", teks: "Portability", benar: true },
      { huruf: "c", teks: "Reliability", benar: false },
      { huruf: "d", teks: "Compatibility", benar: false },
      { huruf: "e", teks: "Security", benar: false }
    ]
  },
  {
    no: 27,
    soal: "Kegagalan perangkat lunak biasanya terjadi akibat...",
    pembahasan: "Failure selalu berakar dari cacat/bug (<b>defect</b>) yang tidak teridentifikasi atau diabaikan sejak fase analisis, perancangan, atau koding.",
    opsi: [
      { huruf: "a", teks: "Defect yang tidak diperbaiki sejak awal", benar: true },
      { huruf: "b", teks: "Overlap antar fungsi modul", benar: false },
      { huruf: "c", teks: "Terlalu sering dilakukan perubahan", benar: false },
      { huruf: "d", teks: "Terlalu banyak pendekatan desain yang digunakan", benar: false },
      { huruf: "e", teks: "Dokumentasi yang tidak lengkap", benar: false }
    ]
  },
  {
    no: 28,
    soal: "Kualitas perangkat lunak dapat terjamin jika dilakukan hal berikut, KECUALI...",
    pembahasan: "Hanya berfokus pada kualitas koding adalah pemikiran keliru. Kualitas perangkat lunak dibangun di seluruh fase siklus hidup (kebutuhan, desain, reviu, pengujian), bukan sekadar penulisan kode.",
    opsi: [
      { huruf: "a", teks: "Dokumentasi dibuat secara lengkap", benar: false },
      { huruf: "b", teks: "Pengembang fokus pada kualitas coding", benar: true },
      { huruf: "c", teks: "Testing dilakukan lebih dari sekali", benar: false },
      { huruf: "d", teks: "Defect segera diidentifikasi dan diperbaiki sebelum menjadi failure.", benar: false },
      { huruf: "e", teks: "Reviu dilakukan pada setiap akhir tahap pengembangan", benar: false }
    ]
  },
  {
    no: 29,
    soal: "Manfaat utama penerapan reviu kualitas pada setiap fase siklus hidup perangkat lunak adalah...",
    pembahasan: "Menemukan cacat lebih dini pada fase reviu kebutuhan atau desain jauh lebih murah (hingga 10x-100x lipat) dibanding memperbaikinya saat sudah di tahap testing atau rilis produksi.",
    opsi: [
      { huruf: "a", teks: "Mengurangi kebutuhan dokumentasi", benar: false },
      { huruf: "b", teks: "Menemukan masalah lebih awal sehingga biaya koreksi menurun", benar: true },
      { huruf: "c", teks: "Mempercepat release ke pasar", benar: false },
      { huruf: "d", teks: "Menggantikan kebutuhan testing formal", benar: false },
      { huruf: "e", teks: "Memastikan semua requirement dapat diubah dengan fleksibel", benar: false }
    ]
  },
  {
    no: 30,
    soal: "Mengacu pada konsep defect amplification, jika error pada tahap desain tidak ditemukan dan diteruskan ke tahap coding, maka dampak utamanya adalah...",
    pembahasan: "<b>Defect Amplification</b> menyatakan bahwa satu kesalahan pada fase awal yang tidak terdeteksi akan berlipat ganda menjadi beberapa kesalahan turunan di fase berikutnya, menjadikannya semakin rumit dan mahal diperbaiki.",
    opsi: [
      { huruf: "a", teks: "Error tidak memengaruhi reliability", benar: false },
      { huruf: "b", teks: "Error otomatis teratasi saat integrasi", benar: false },
      { huruf: "c", teks: "Kesalahan dapat diperbaiki saat testing", benar: false },
      { huruf: "d", teks: "Kesalahan semakin sulit dan mahal diperbaiki", benar: true },
      { huruf: "e", teks: "Biaya perbaikan dapat diefisiensikan", benar: false }
    ]
  },
  {
    no: 31,
    soal: "Menurut prinsip budaya kualitas, siapa yang seharusnya menemukan defect terlebih dahulu?",
    pembahasan: "Dalam budaya mutu yang sehat, defect harus dideteksi oleh rekan sejawat (<b>Peer</b>) melalui peer review sebelum kode masuk ke proses pengujian formal atau dilihat oleh klien.",
    opsi: [
      { huruf: "a", teks: "Klien", benar: false },
      { huruf: "b", teks: "User akhir", benar: false },
      { huruf: "c", teks: "Manajer proyek", benar: false },
      { huruf: "d", teks: "Peer atau rekan kerja", benar: true },
      { huruf: "e", teks: "Auditor internal", benar: false }
    ]
  },
  {
    no: 32,
    soal: "Peer review memiliki ciri khusus yaitu...",
    pembahasan: "Ciri mendasar dari <b>Peer Review</b> adalah dilakukan sesama rekan teknis/kolega setingkat tanpa kehadiran manajer proyek agar terhindar dari bias evaluasi kinerja personal.",
    opsi: [
      { huruf: "a", teks: "Dilakukan pada masa akhir proyek", benar: false },
      { huruf: "b", teks: "Selalu dilakukan bersama auditor internal", benar: false },
      { huruf: "c", teks: "Dilakukan antar kolega tanpa keterlibatan manajer", benar: true },
      { huruf: "d", teks: "Fokus pada biaya perbaikan setelah kegagalan", benar: false },
      { huruf: "e", teks: "Dilakukan dengan prosedur formal berdasarkan standar ISO", benar: false }
    ]
  },
  {
    no: 33,
    soal: "Perbedaan utama antara perangkat lunak dan perangkat keras dalam kurva keandalan adalah...",
    pembahasan: "Perangkat keras tunduk pada hukum keausan fisik (kurva bak mandi/bathtub curve dengan wear-out), sedangkan perangkat lunak tidak mengalami degradasi fisik akibat gesekan atau usia komponen material.",
    opsi: [
      { huruf: "a", teks: "Perangkat lunak memiliki kinerja yang fluktuatif", benar: false },
      { huruf: "b", teks: "Perangkat keras cenderung memiliki pola yang teratur dalam penurunan kinerjanya", benar: false },
      { huruf: "c", teks: "Perangkat lunak tidak mengalami degradasi fisik", benar: true },
      { huruf: "d", teks: "Perangkat lunak tidak dapat mengalami penurunan kinerja", benar: false },
      { huruf: "e", teks: "Perangkat keras mengalami penurunan kinerja dari masa ke masa", benar: false }
    ]
  },
  {
    no: 34,
    soal: "Perbedaan utama antara walkthrough dan inspection adalah...",
    pembahasan: "<b>Walkthrough</b> berorientasi pada transfer pengetahuan dan pemahaman isi artefak, sedangkan <b>Inspection (Fagan Inspection)</b> adalah metode reviu paling ketat yang dirancang khusus untuk memburu dan mencatat cacat secara sistematis.",
    opsi: [
      { huruf: "a", teks: "Walkthrough lebih fokus pada pemahaman bersama, inspection lebih fokus pada penemuan cacat", benar: true },
      { huruf: "b", teks: "Keduanya memiliki mekanisme yang sama, hanya berbeda tujuan", benar: false },
      { huruf: "c", teks: "Walkthrough lebih lama waktunya, inspection lebih singkat", benar: false },
      { huruf: "d", teks: "Walkthrough hanya dilakukan oleh manajer, inspection dilakukan dengan melibatkan pengguna", benar: false },
      { huruf: "e", teks: "Inspection membutuhkan checklist, walkthrough tidak menggunakan checklist", benar: false }
    ]
  },
  {
    no: 35,
    soal: "Pernyataan \"degree to which the system can be effectively and efficiently modified without introducing defects\" merupakan definisi dari...",
    pembahasan: "Definisi standar ISO 25010 untuk subkarakteristik <b>Modifiability</b> (Kemampuan dimodifikasi): tingkat efisiensi dan efektivitas suatu sistem untuk diubah tanpa menimbulkan cacat baru atau merusak kualitas yang ada.",
    opsi: [
      { huruf: "a", teks: "Modularity", benar: false },
      { huruf: "b", teks: "Reusability", benar: false },
      { huruf: "c", teks: "Modifiability", benar: true },
      { huruf: "d", teks: "Testability", benar: false },
      { huruf: "e", teks: "Analyzability", benar: false }
    ]
  },
  {
    no: 36,
    soal: "Saat proses peer review terkait dokumen kebutuhan sistem, salah satu anggota tim menemukan bahwa deskripsi \"pengguna dapat menambah item ke keranjang\" tidak menjelaskan batas maksimum item. Situasi ini dikategorikan sebagai...",
    pembahasan: "Kekurangan, ambiguitas, atau inkonsistensi yang ditemukan pada artefak perangkat lunak (termasuk dokumen SRS) sebelum kode dieksekusi diklasifikasikan sebagai <b>Defect</b>.",
    opsi: [
      { huruf: "a", teks: "Error", benar: false },
      { huruf: "b", teks: "Failure", benar: false },
      { huruf: "c", teks: "Defect", benar: true },
      { huruf: "d", teks: "Non-conformance", benar: false },
      { huruf: "e", teks: "Risk", benar: false }
    ]
  },
  {
    no: 37,
    soal: "Salah satu atribut kualitas perangkat lunak menurut ISO 25010 yang berkaitan dengan kemampuan perangkat lunak untuk terus beroperasi meskipun menghadapi gangguan adalah...",
    pembahasan: "<b>Robustness</b> (Ketahanan / Daya Tahan) adalah kemampuan perangkat lunak untuk tetap berfungsi dengan benar saat menghadapi input yang tidak valid atau kondisi lingkungan yang mengalami stres/gangguan.",
    opsi: [
      { huruf: "a", teks: "Adaptability", benar: false },
      { huruf: "b", teks: "Learnability", benar: false },
      { huruf: "c", teks: "Testability", benar: false },
      { huruf: "d", teks: "Usability", benar: false },
      { huruf: "e", teks: "Robustness", benar: true }
    ]
  },
  {
    no: 38,
    soal: "Sebuah aplikasi kesehatan gagal lolos audit eksternal karena tidak ada bukti dokumentasi standar yang konsisten pada setiap proyek. Berdasarkan kerangka SQA, kelemahan utama organisasi ini terletak pada...",
    pembahasan: "Ketiadaan standardisasi proses dan bukti dokumentasi yang seragam di seluruh organisasi menunjukkan kelemahan mendasar pada kebijakan organisasi (<b>Organization policies</b>).",
    opsi: [
      { huruf: "a", teks: "Reliability attributes", benar: false },
      { huruf: "b", teks: "Organization policies", benar: true },
      { huruf: "c", teks: "Technical method application", benar: false },
      { huruf: "d", teks: "Project-specific quality plan", benar: false },
      { huruf: "e", teks: "Maintenance review", benar: false }
    ]
  },
  {
    no: 39,
    soal: "Sebuah aplikasi perbankan sering gagal memproses transaksi ketika jumlah pengguna meningkat drastis pada jam sibuk. Hal ini menunjukkan kelemahan pada aspek...",
    pembahasan: "Ketidakmampuan sistem mempertahankan performa waktu respons dan throughput saat beban puncak berkaitan langsung dengan karakteristik <i>Performance Efficiency</i>, khususnya subkarakteristik <b>Time-behavior</b> dan <i>Capacity</i>.",
    opsi: [
      { huruf: "a", teks: "Functional appropriateness", benar: false },
      { huruf: "b", teks: "Reliability", benar: false },
      { huruf: "c", teks: "Operability", benar: false },
      { huruf: "d", teks: "Time-behavior", benar: true },
      { huruf: "e", teks: "Modifiability", benar: false }
    ]
  },
  {
    no: 40,
    soal: "Sebuah e-commerce tidak dapat beroperasi bersamaan dengan sistem pembayaran eksternal karena data transaksi tidak dapat ditukar dengan format yang benar. Kelemahan ini terkait dengan...",
    pembahasan: "Karakteristik <b>Compatibility</b> mencakup <b>Interoperability</b>, yaitu kemampuan dua atau lebih sistem untuk bertukar informasi dan menggunakan informasi yang telah dipertukarkan tersebut secara efektif.",
    opsi: [
      { huruf: "a", teks: "Security – Authenticity", benar: false },
      { huruf: "b", teks: "Reliability – Availability", benar: false },
      { huruf: "c", teks: "Portability – Installability", benar: false },
      { huruf: "d", teks: "Maintainability – Modifiability", benar: false },
      { huruf: "e", teks: "Compatibility – Interoperability", benar: true }
    ]
  }
];
