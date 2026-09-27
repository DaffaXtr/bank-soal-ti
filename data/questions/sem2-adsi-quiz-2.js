/**
 * ============================================================================
 * BANK SOAL: ANALISA DAN DESAIN SISTEM INFORMASI (ADSI) — QUIZ 2
 * Sumber: Soal Evaluasi Asli Analisa & Desain Sistem Informasi
 * Memuat 30 Butir Soal Lengkap: DFD, Behavioral Modeling, Activity Diagram,
 * Sequence Diagram, Communication Diagram, dan Class vs Interaction Diagram.
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

window.BankSoalData.questions['sem2-adsi-quiz-2'] = [
  {
    no: 1,
    soal: "Model perilaku internal (behavioral model) yang digunakan sebagai representasi detail proses bisnis yang digambarkan oleh model use case adalah ....",
    codeSnippet: null,
    pembahasan: "Activity diagram adalah model perilaku (behavioral model) dalam UML yang digunakan untuk memodelkan alur kerja (workflow) atau logika sekuensial dari proses bisnis yang mendasari sebuah use case secara detail.",
    opsi: [
      { huruf: "a", teks: "Class diagram", benar: false },
      { huruf: "b", teks: "Component diagram", benar: false },
      { huruf: "c", teks: "Deployment diagram", benar: false },
      { huruf: "d", teks: "Activity diagram", benar: true },
      { huruf: "e", teks: "Package diagram", benar: false }
    ]
  },
  {
    no: 2,
    soal: "Berikut adalah ketentuan yang perlu diperhatikan dalam penggambaran communication diagram, kecuali......",
    codeSnippet: null,
    pembahasan: "Communication diagram sebenarnya dapat menampilkan pesan pengembalian (return value) secara opsional menggunakan panah berlabel. Pernyataan bahwa communication diagram 'tidak pernah menampilkan pengembalian' adalah pernyataan yang keliru (kecuali).",
    opsi: [
      { huruf: "a", teks: "Aktor dan objek saling terhubung melalui communication link (association)", benar: false },
      { huruf: "b", teks: "Tidak pernah menampilkan pengembalian dari pengiriman pesan, sedangkan sequence diagram dapat menampilkannya secara opsional", benar: true },
      { huruf: "c", teks: "Pesan diberi nomor urut sekuensial (misalnya 1, 1.1, 2) untuk menunjukkan kronologi interaksi", benar: false },
      { huruf: "d", teks: "Menekankan pada organisasi struktural objek-objek yang saling berinteraksi daripada urutan waktu", benar: false },
      { huruf: "e", teks: "Objek digambarkan dengan simbol persegi panjang berlabel nama objek : nama kelas", benar: false }
    ]
  },
  {
    no: 3,
    soal: "Walaupun DFD memiliki beberapa kelebihan, DFD juga memiliki kelemahan, yaitu....",
    codeSnippet: null,
    pembahasan: "Kelemahan mendasar DFD (Data Flow Diagram) adalah orientasinya yang murni pada aliran data fungsional sehingga tidak dapat memodelkan logika kontrol eksplisit (seperti percabangan keputusan IF-THEN dan perulangan loop) serta tidak mampu menyajikan sinkronisasi proses paralel secara ketat.",
    opsi: [
      { huruf: "a", teks: "Sulit dipahami oleh pemangku kepentingan (stakeholder) non-teknis", benar: false },
      { huruf: "b", teks: "Tidak dapat menunjukkan proses logika seperti: keputusan dan perulangan", benar: false },
      { huruf: "c", teks: "Tidak dapat digunakan untuk menggambarkan suatu proses yang paralel", benar: false },
      { huruf: "d", teks: "Jawaban B dan C benar", benar: true },
      { huruf: "e", teks: "Mengharuskan penentuan tipe data fisik database secara langsung sejak awal", benar: false }
    ]
  },
  {
    no: 4,
    soal: "Pesan yang disimbolkan dengan label panah putus-putus pada sequence diagram adalah ....",
    codeSnippet: null,
    pembahasan: "Dalam sequence diagram UML standar, garis panah putus-putus dengan mata panah terbuka (dashed line with open arrowhead) secara baku digunakan untuk melambangkan return message (pesan pengembalian nilai dari pesan operasi).",
    opsi: [
      { huruf: "a", teks: "Pesan sinkron (synchronous call message)", benar: false },
      { huruf: "b", teks: "Pesan asinkron (asynchronous signal message)", benar: false },
      { huruf: "c", teks: "Pesan pembuatan objek baru (create message)", benar: false },
      { huruf: "d", teks: "Pesan pengembalian nilai dari pesan operasi (reply/return message)", benar: true },
      { huruf: "e", teks: "Pesan penghancuran objek (destroy message)", benar: false }
    ]
  },
  {
    no: 5,
    soal: "Misalkan sebuah proses DFD diberi nomor 5.4.3. Nomor proses tersebut termasuk dalam DFD Level...",
    codeSnippet: null,
    pembahasan: "Dalam hierarki leveling DFD, proses bernomor 5 adalah Level 1. Dekomposisinya menjadi proses 5.4 berada pada Level 2. Nomor 5.4.3 merupakan sub-proses yang termasuk dalam rincian dekomposisi DFD level 2 untuk proses 5.4.",
    opsi: [
      { huruf: "a", teks: "DFD Level 0 (Context Diagram)", benar: false },
      { huruf: "b", teks: "DFD Level 1 proses 5", benar: false },
      { huruf: "c", teks: "DFD Level 1 proses 5.4", benar: false },
      { huruf: "d", teks: "DFD level 2 proses 5.4", benar: true },
      { huruf: "e", teks: "DFD Level 4 proses 5.4.3", benar: false }
    ]
  },
  {
    no: 6,
    soal: "Activity diagram memiliki kemiripan dengan diagram alir (flowchart). Namun demikian perbedaan prinsip antara activity diagram dan diagram alir adalah diagram alir mendukung behavior paralel. Pernyataan tersebut: ....",
    codeSnippet: null,
    pembahasan: "Pernyataan tersebut SALAH. Justru Activity Diagram-lah yang mendukung behavior paralel dan konkuren (melalui notasi Fork dan Join node), sedangkan diagram alir (flowchart) konvensional pada prinsipnya hanya mendukung aliran proses sekuensial tunggal.",
    opsi: [
      { huruf: "a", teks: "Benar, karena flowchart memiliki percabangan paralel tanpa batasan sinkronisasi", benar: false },
      { huruf: "b", teks: "Salah", benar: true },
      { huruf: "c", teks: "Benar, hanya jika flowchart digambarkan dengan perulangan do-while", benar: false },
      { huruf: "d", teks: "Benar, khusus untuk perancangan sistem berbasis multi-threading", benar: false },
      { huruf: "e", teks: "Tidak dapat ditentukan tanpa melihat diagram kasus nyata", benar: false }
    ]
  },
  {
    no: 7,
    soal: "Sebuah simpanan data dan atau entitas luar tidak dapat dibuat duplikat dalam satu set penggambaran DFD. Pernyataan ini adalah......",
    codeSnippet: null,
    pembahasan: "Pernyataan ini SALAH. Dalam aturan penggambaran DFD (baik notasi Gane & Sarson maupun Yourdon/DeMarco), external entity dan data store diperbolehkan diduplikasi pada diagram yang sama (biasanya ditandai garis diagonal atau garis ganda) untuk menghindari garis aliran data yang saling bersilangan (crossing lines).",
    opsi: [
      { huruf: "a", teks: "Benar, karena entitas dan simpanan data harus bersifat unik mutlak per diagram", benar: false },
      { huruf: "b", teks: "Salah", benar: true },
      { huruf: "c", teks: "Benar, khusus untuk DFD Level 0 (Context Diagram)", benar: false },
      { huruf: "d", teks: "Benar untuk simpanan data, namun salah untuk entitas luar", benar: false },
      { huruf: "e", teks: "Benar, jika sistem menggunakan basis data non-relasional", benar: false }
    ]
  },
  {
    no: 8,
    soal: "Sequence diagram hanya digunakan untuk menggambarkan skenario tunggal sebuah use case. Pernyataan ini ....",
    codeSnippet: null,
    pembahasan: "Pernyataan ini SALAH. Pada UML 2.x, sequence diagram telah mendukung Combined Fragments (seperti frame alt untuk percabangan alternatif, opt untuk kondisi opsional, dan loop untuk perulangan), sehingga dapat memodelkan beberapa skenario sekaligus dalam satu diagram.",
    opsi: [
      { huruf: "a", teks: "Salah", benar: true },
      { huruf: "b", teks: "Benar, karena sequence diagram tidak memiliki kemampuan memodelkan percabangan", benar: false },
      { huruf: "c", teks: "Benar, karena hanya activity diagram yang diizinkan multi-skenario", benar: false },
      { huruf: "d", teks: "Benar, khusus untuk skenario happy path", benar: false },
      { huruf: "e", teks: "Benar, menurut standar murni UML 1.0", benar: false }
    ]
  },
  {
    no: 9,
    soal: "Berikut adalah ketentuan yang perlu diperhatikan dalam penggambaran sequence diagram: ....",
    codeSnippet: null,
    pembahasan: "Objek-objek tidak memiliki posisi absolut horizontal yang kaku, namun penataan terbaik adalah sesuai urutan partisipasi logis mereka dari kiri ke kanan. Penamaan objek yang benar mengikuti format 'namaObjek : NamaKelas'.",
    opsi: [
      { huruf: "a", teks: "Objek-objek yang ada tidak harus ditempatkan dalam urutan tertentu, meskipun sangat bagus jika mengaturnya sesuai dengan urutan logis proses, seperti urutan partisipasi mereka dalam aktivitas. Untuk setiap objek, nama kelas tempat mereka berada diberikan setelah nama objek", benar: true },
      { huruf: "b", teks: "Objek wajib ditempatkan secara vertikal dari atas ke bawah dan aktor harus berada di paling kanan diagram", benar: false },
      { huruf: "c", teks: "Setiap pesan balasan (return message) wajib digambarkan menggunakan garis lurus tebal dengan kepala panah penuh", benar: false },
      { huruf: "d", teks: "Objek tidak boleh dihancurkan (destroyed) sebelum seluruh siklus waktu sequence diagram berakhir", benar: false },
      { huruf: "e", teks: "Lifeline harus digambarkan miring 45 derajat untuk merepresentasikan latensi jaringan", benar: false }
    ]
  },
  {
    no: 10,
    soal: "Simbol lingkaran dengan lingkaran luar (bullseye / encircled dot) merupakan simbol untuk menggambarkan ... pada activity diagram:",
    codeSnippet: null,
    pembahasan: "Simbol lingkaran hitam padat yang dikelilingi oleh lingkaran luar (bullseye) melambangkan Activity Final Node, yang berfungsi menghentikan seluruh aliran eksekusi di dalam activity diagram.",
    opsi: [
      { huruf: "a", teks: "Initial node (titik awal aktivitas)", benar: false },
      { huruf: "b", teks: "Node aktivitas akhir (Activity final node)", benar: true },
      { huruf: "c", teks: "Decision node (titik keputusan logika)", benar: false },
      { huruf: "d", teks: "Fork node (titik pemecah aliran paralel)", benar: false },
      { huruf: "e", teks: "Join node (titik penggabung aliran paralel)", benar: false }
    ]
  },
  {
    no: 11,
    soal: "Activity diagram dapat digunakan untuk memodelkan event-event yang terjadi dalam suatu use case. Pernyataan tersebut: ....",
    codeSnippet: null,
    pembahasan: "Pernyataan ini BENAR. Activity diagram sangat efektif digunakan untuk merinci aliran peristiwa (flow of events) skenario use case, termasuk aliran normal (main success scenario), aliran alternatif, dan perkecualian (exceptions).",
    opsi: [
      { huruf: "a", teks: "Salah, karena use case hanya boleh dimodelkan dengan class diagram", benar: false },
      { huruf: "b", teks: "Benar", benar: true },
      { huruf: "c", teks: "Salah, karena activity diagram hanya digunakan pada tahap perancangan database fisik", benar: false },
      { huruf: "d", teks: "Salah, event use case hanya dapat dimodelkan menggunakan deployment diagram", benar: false },
      { huruf: "e", teks: "Salah, use case tidak memiliki alur peristiwa internal", benar: false }
    ]
  },
  {
    no: 12,
    soal: "Terdapat tiga jenis pesan yang dapat digambarkan pada sequence diagram, kecuali....",
    codeSnippet: null,
    pembahasan: "Tiga jenis panggilan pesan aksi operasional dasar dalam sequence diagram adalah pesan sinkron (synchronous call), pesan asinkron (asynchronous signal), dan pesan kreasi (create message). Pesan pengembalian (return message) adalah pesan tanggapan nilai hasil operasi, bukan jenis pemanggilan aksi mandiri.",
    opsi: [
      { huruf: "a", teks: "Pesan pengembalian nilai dari pesan operasi (return message)", benar: true },
      { huruf: "b", teks: "Pesan sinkron (synchronous call message)", benar: false },
      { huruf: "c", teks: "Pesan asinkron (asynchronous signal message)", benar: false },
      { huruf: "d", teks: "Pesan pemanggilan mandiri (self-call message)", benar: false },
      { huruf: "e", teks: "Pesan pembuatan objek baru (create message)", benar: false }
    ]
  },
  {
    no: 13,
    soal: "Sequence diagram digunakan untuk memvisualisasi bagaimana objek-objek berinteraksi, dan bukan untuk menyajikan prosedur proses atau sebagai cara pemodelan logika kontrol, seperti pada activity diagram. Pernyataan ini ....",
    codeSnippet: null,
    pembahasan: "Pernyataan ini BENAR. Sequence diagram berfokus pada kolaborasi dan pertukaran pesan antar-objek sepanjang garis waktu hidup (lifeline), bukan untuk merancang algoritma logika kontrol komprehensif layaknya activity diagram.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: true },
      { huruf: "b", teks: "Salah, sequence diagram berfungsi menggantikan seluruh algoritma activity diagram", benar: false },
      { huruf: "c", teks: "Salah, sequence diagram dirancang murni untuk memodelkan struktur data relasional", benar: false },
      { huruf: "d", teks: "Salah, interaksi objek hanya boleh digambarkan pada deployment diagram", benar: false },
      { huruf: "e", teks: "Salah, sequence diagram tidak menggambarkan interaksi objek sama sekali", benar: false }
    ]
  },
  {
    no: 14,
    soal: "Berikut ini yang dapat dikategorikan sebagai simpanan data (data store) pada DFD adalah...",
    codeSnippet: null,
    pembahasan: "Dalam konsep DFD logis maupun fisik, simpanan data (data store) mencakup segala bentuk media penyimpanan data statis yang persisten, baik berupa file komputer, tabel database terkomputerisasi, maupun dokumen manual/arsip fisik.",
    opsi: [
      { huruf: "a", teks: "Semua jawaban a, b dan c benar (file terkomputerisasi, tabel basis data, dan arsip fisik)", benar: true },
      { huruf: "b", teks: "File terkomputerisasi (seperti file spreadsheet, CSV, atau file master teks)", benar: false },
      { huruf: "c", teks: "Tabel dalam sistem basis data relasional (RDBMS)", benar: false },
      { huruf: "d", teks: "Arsip map manual atau lemari berkas fisik di perkantoran", benar: false },
      { huruf: "e", teks: "Buffer memori sementara variabel runtime tanpa persistensi", benar: false }
    ]
  },
  {
    no: 15,
    soal: "Alasan yang paling tepat mengapa DFD digambarkan secara bertingkat (beberapa level) adalah....",
    codeSnippet: null,
    pembahasan: "Prinsip utama penyusunan DFD bertingkat (leveling) adalah dekomposisi fungsional atas-ke-bawah (top-down decomposition), agar sistem yang kompleks dan besar dapat dijelaskan serta dipahami secara bertahap dan sistematis.",
    opsi: [
      { huruf: "a", teks: "Agar proses bisnis lebih mudah dijelaskan atau dipahami secara bertahap (top-down decomposition)", benar: true },
      { huruf: "b", teks: "Agar ukuran file diagram menjadi lebih kecil saat disimpan di komputer", benar: false },
      { huruf: "c", teks: "Karena standar ISO mewajibkan diagram sistem memiliki tepat 5 tingkat level", benar: false },
      { huruf: "d", teks: "Untuk menyembunyikan identitas entitas luar dari pengguna sistem", benar: false },
      { huruf: "e", teks: "Supaya skema fisik database relasional langsung terbentuk secara otomatis", benar: false }
    ]
  },
  {
    no: 16,
    soal: "Untuk menunjukkan objek aktual yang mengalir masuk dan keluar dari suatu action atau activity digunakan....",
    codeSnippet: null,
    pembahasan: "Object Flow (aliran objek) dalam activity diagram digambarkan dengan garis panah yang terhubung ke notasi Object Node atau Pin, yang menunjukkan objek data aktual yang dibutuhkan atau dihasilkan oleh suatu action.",
    opsi: [
      { huruf: "a", teks: "Aliran kontrol (control flow)", benar: false },
      { huruf: "b", teks: "Initial flow", benar: false },
      { huruf: "c", teks: "Aliran objek (object flow)", benar: true },
      { huruf: "d", teks: "Message call flow", benar: false },
      { huruf: "e", teks: "Association link", benar: false }
    ]
  },
  {
    no: 17,
    soal: "Membuat gambar communication diagram harus ekuivalen dengan gambar sequence diagram, terkecuali bahwa communication diagram tidak menampilkan pengembalian nilai pengiriman pesan, sedangkan sequence diagram dapat menampilkannya secara opsional. Pernyataan ini....",
    codeSnippet: null,
    pembahasan: "Pernyataan ini BENAR. Communication diagram dan Sequence diagram merupakan dua bentuk interaction diagram yang isomorfik (dapat saling ditransformasikan), dengan perbedaan utama pada penekanan organisasi struktural objek vs kronologi sumbu waktu.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: true },
      { huruf: "b", teks: "Salah, communication diagram sama sekali tidak memiliki relasi semantik dengan sequence diagram", benar: false },
      { huruf: "c", teks: "Salah, sequence diagram tidak dapat menampilkan nilai pengembalian sama sekali", benar: false },
      { huruf: "d", teks: "Salah, kedua diagram harus memiliki bentuk visual geometris yang persis sama", benar: false },
      { huruf: "e", teks: "Salah, communication diagram hanya memodelkan pewarisan (inheritance)", benar: false }
    ]
  },
  {
    no: 18,
    soal: "Walaupun namanya diagram arus data, namun bukan berarti bahwa DFD dapat digunakan untuk pemodelan data dalam sistem basis data. Pernyataan ini adalah...",
    codeSnippet: null,
    pembahasan: "Pernyataan ini BENAR. DFD adalah alat pemodelan proses bisnis dan aliran data fungsional, bukan alat perancangan skema data. Untuk memodelkan struktur data logis dan fisik basis data, alat yang tepat adalah Entity Relationship Diagram (ERD) atau Class Diagram.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: true },
      { huruf: "b", teks: "Salah, DFD adalah diagram utama untuk perancangan normalisasi database 3NF", benar: false },
      { huruf: "c", teks: "Salah, DFD menggantikan fungsi diagram ERD secara menyeluruh", benar: false },
      { huruf: "d", teks: "Salah, simpanan data pada DFD otomatis terkonversi menjadi tabel basis data fisik", benar: false },
      { huruf: "e", teks: "Salah, DFD digunakan khusus untuk memodelkan struktur class dan inheritance", benar: false }
    ]
  },
  {
    no: 19,
    soal: "Object dalam activity diagram yang merepresentasikan benda, yang biasanya dicantumkan sebagai hasil dari action atau yang akan dipakai oleh action adalah....",
    codeSnippet: null,
    pembahasan: "Object Node dalam activity diagram digambarkan dengan persegi panjang sederhana untuk merepresentasikan sebuah data atau objek yang berada dalam status tertentu sebagai input (yang dipakai) atau output (hasil) dari suatu action.",
    opsi: [
      { huruf: "a", teks: "Control node", benar: false },
      { huruf: "b", teks: "Action node", benar: false },
      { huruf: "c", teks: "Decision node", benar: false },
      { huruf: "d", teks: "Node objek (object node)", benar: true },
      { huruf: "e", teks: "Activity final node", benar: false }
    ]
  },
  {
    no: 20,
    soal: "Swimlane adalah notasi yang harus disertakan pada setiap penggambaran activity diagram...",
    codeSnippet: null,
    pembahasan: "Pernyataan ini SALAH. Notasi Swimlane (Activity Partition) bersifat opsional. Activity diagram tetap valid dan sering digambarkan tanpa swimlane apabila fokus pemodelan hanya pada alur algoritma atau proses komputasi tanpa membedakan peran aktor organisasi.",
    opsi: [
      { huruf: "a", teks: "Salah", benar: true },
      { huruf: "b", teks: "Benar, tanpa swimlane diagram dianggap tidak valid menurut standar OMG", benar: false },
      { huruf: "c", teks: "Benar, karena swimlane menentukan urutan waktu jalannya proses secara matematis", benar: false },
      { huruf: "d", teks: "Benar, hanya jika proses memiliki lebih dari 3 action node", benar: false },
      { huruf: "e", teks: "Benar, khusus pada standar UML versi 2.5", benar: false }
    ]
  },
  {
    no: 21,
    soal: "Jumlah level yang ideal dalam penggambaran DFD adalah....",
    codeSnippet: null,
    pembahasan: "Tidak ada batasan kaku jumlah level dalam DFD. Jumlah level yang tepat sepenuhnya bergantung pada kompleksitas proses bisnis nyata yang sedang dimodelkan hingga mencapai proses primitif fungsional (functional primitive).",
    opsi: [
      { huruf: "a", teks: "Harus selalu tepat 3 level (Level 0, Level 1, dan Level 2)", benar: false },
      { huruf: "b", teks: "Maksimal hanya boleh 1 level saja", benar: false },
      { huruf: "c", teks: "Tergantung pada tingkat kerumitan proses bisnis yang menjadi acuan penggambaran DFD", benar: true },
      { huruf: "d", teks: "Minimal 7 level sesuai dengan prinsip normalisasi data", benar: false },
      { huruf: "e", teks: "Ditentukan secara langsung oleh jumlah tabel dalam database relasional", benar: false }
    ]
  },
  {
    no: 22,
    soal: "Versi UML yang mengkategorikan activity diagram sebagai kasus khusus state diagram adalah....",
    codeSnippet: null,
    pembahasan: "Pada standar UML versi 1.0 (dan seluruh keluarga UML 1.x), activity diagram didefinisikan sebagai variasi khusus dari statechart diagram. Baru sejak UML 2.0, activity diagram direvisi total menjadi diagram independen berbasis semantik Petri-net.",
    opsi: [
      { huruf: "a", teks: "UML Versi 1.0 (dan secara umum, seluruh seri UML 1.x)", benar: true },
      { huruf: "b", teks: "UML Versi 2.0", benar: false },
      { huruf: "c", teks: "UML Versi 2.5", benar: false },
      { huruf: "d", teks: "UML Versi 3.0", benar: false },
      { huruf: "e", teks: "SysML Versi 1.4", benar: false }
    ]
  },
  {
    no: 23,
    soal: "Dalam penggambaran communication diagram, tidak dibenarkan untuk menambah objek baru (selain objek-objek yang telah diidentifikasi selama pengembangan model struktural dan selama proses pembuatan sequence diagram). Pernyataan ini....",
    codeSnippet: null,
    pembahasan: "Pernyataan ini BENAR. Communication diagram dan sequence diagram harus konsisten dengan model struktural (Class Diagram). Menambahkan objek sembarangan tanpa didefinisikan di class diagram akan merusak konsistensi arsitektur sistem.",
    opsi: [
      { huruf: "a", teks: "Benar", benar: true },
      { huruf: "b", teks: "Salah, objek baru bebas ditambahkan kapan saja tanpa harus terdaftar di class diagram", benar: false },
      { huruf: "c", teks: "Salah, communication diagram sama sekali tidak menggunakan objek", benar: false },
      { huruf: "d", teks: "Salah, communication diagram wajib menambahkan minimal dua objek eksternal", benar: false },
      { huruf: "e", teks: "Salah, hanya sequence diagram yang terikat oleh model struktural", benar: false }
    ]
  },
  {
    no: 24,
    soal: "Simbol yang digunakan untuk mengelompokkan action berdasarkan actor pelakunya (khususnya pada UML versi 1.xx) adalah....",
    codeSnippet: null,
    pembahasan: "Swimlane (atau Activity Partition pada UML 2) digunakan untuk membagi activity diagram menjadi kolom atau baris vertikal/horizontal yang merepresentasikan tanggung jawab dari masing-masing aktor atau unit organisasi.",
    opsi: [
      { huruf: "a", teks: "Boundary box", benar: false },
      { huruf: "b", teks: "Package frame", benar: false },
      { huruf: "c", teks: "Component node", benar: false },
      { huruf: "d", teks: "Swimlane (Activity Partition)", benar: true },
      { huruf: "e", teks: "Lifeline", benar: false }
    ]
  },
  {
    no: 25,
    soal: "Dalam penggambaran DFD, berikut ini dapat dikategorikan sebagai arus data, kecuali...",
    codeSnippet: null,
    pembahasan: "Arus data (data flow) adalah data dalam gerak logis yang masuk atau keluar dari proses. Dokumen fisik statis seperti formulir dasar cetak, tumpukan berkas laporan kertas, atau menyalin file fisik tanpa keterlibatan pemrosesan sistem bukanlah representasi data flow logis.",
    opsi: [
      { huruf: "a", teks: "Data input transaksi digital yang dikirim pengguna ke proses", benar: false },
      { huruf: "b", teks: "Data hasil kueri dari proses yang disimpan ke data store", benar: false },
      { huruf: "c", teks: "Informasi faktur elektronik yang dikirim proses ke pelanggan", benar: false },
      { huruf: "d", teks: "Formulir atau dokumen dasar, laporan tercetak, menyalin file fisik secara manual", benar: true },
      { huruf: "e", teks: "Paket data konfirmasi verifikasi dari payment gateway ke sistem", benar: false }
    ]
  },
  {
    no: 26,
    soal: "Node yang digunakan untuk menghentikan aliran kontrol tertentu pada activity diagram adalah....",
    codeSnippet: null,
    pembahasan: "Flow Final Node (simbol lingkaran dengan tanda silang 'X' di dalamnya) digunakan untuk menghentikan satu aliran kontrol tertentu saja tanpa menghentikan aliran paralel lain yang sedang berjalan dalam aktivitas.",
    opsi: [
      { huruf: "a", teks: "Node aliran akhir (Flow Final Node)", benar: true },
      { huruf: "b", teks: "Activity Final Node", benar: false },
      { huruf: "c", teks: "Initial Node", benar: false },
      { huruf: "d", teks: "Decision Node", benar: false },
      { huruf: "e", teks: "Merge Node", benar: false }
    ]
  },
  {
    no: 27,
    soal: "Penggambaran DFD dapat disertai dengan deskripsi proses untuk memberikan informasi tambahan mengenai logika proses yang lebih rinci, yang tidak diberikan oleh DFD. Berikut adalah beberapa teknik yang dapat digunakan sebagai alat deskripsi proses pada DFD, kecuali ......",
    codeSnippet: null,
    pembahasan: "Entity Relationship Diagram (ERD) adalah alat pemodelan data struktural relasional, bukan alat spesifikasi logika proses. Alat deskripsi proses (process specification) pada DFD adalah Structured English, Decision Table, dan Decision Tree.",
    opsi: [
      { huruf: "a", teks: "Entity Relationship Diagram (ERD)", benar: true },
      { huruf: "b", teks: "Structured English (Bahasa Inggris Terstruktur)", benar: false },
      { huruf: "c", teks: "Tabel Keputusan (Decision Table)", benar: false },
      { huruf: "d", teks: "Pohon Keputusan (Decision Tree)", benar: false },
      { huruf: "e", teks: "Spesifikasi Proses (Process Specification / Mini-spec)", benar: false }
    ]
  },
  {
    no: 28,
    soal: "Node yang digunakan untuk memastikan bahwa aliran kontrol atau aliran objek hanya mengarah ke satu jalur keputusan adalah....",
    codeSnippet: null,
    pembahasan: "Decision Node (simbol belah ketupat / diamond) mengevaluasi kondisi penjaga (guard condition) pada setiap jalur keluar dan memastikan aliran kontrol hanya diteruskan ke salah satu jalur keluar yang kondisinya terpenuhi.",
    opsi: [
      { huruf: "a", teks: "Fork node", benar: false },
      { huruf: "b", teks: "Join node", benar: false },
      { huruf: "c", teks: "Node keputusan (Decision node)", benar: true },
      { huruf: "d", teks: "Merge node", benar: false },
      { huruf: "e", teks: "Activity final node", benar: false }
    ]
  },
  {
    no: 29,
    soal: "Terdapat dua jenis data flow diagram yaitu...",
    codeSnippet: null,
    pembahasan: "Dua klasifikasi utama Data Flow Diagram (DFD) adalah Logical DFD (memodelkan apa yang dilakukan sistem secara logika bisnis independen dari teknologi) dan Physical DFD (memodelkan bagaimana sistem diimplementasikan termasuk manusia, hardware, software, dan file).",
    opsi: [
      { huruf: "a", teks: "Conceptual dan relational DFD", benar: false },
      { huruf: "b", teks: "Structural dan behavioral DFD", benar: false },
      { huruf: "c", teks: "Logical dan physical DFD", benar: true },
      { huruf: "d", teks: "Internal dan external DFD", benar: false },
      { huruf: "e", teks: "Synchronous dan asynchronous DFD", benar: false }
    ]
  },
  {
    no: 30,
    soal: "Salah satu perbedaan antara class diagram dan interaction diagram adalah....",
    codeSnippet: null,
    pembahasan: "Class diagram memodelkan struktur statis pada tingkat kelas (definisi tipe, atribut, metode, relasi umum), sedangkan Interaction diagram (seperti sequence dan communication diagram) memodelkan perilaku dinamis pada tingkat objek (instansiasi objek individual yang saling bertukar pesan sepanjang waktu).",
    opsi: [
      { huruf: "a", teks: "Class diagram bersifat dinamis, sedangkan interaction diagram bersifat statis", benar: false },
      { huruf: "b", teks: "Class diagram hanya untuk database relasional, sedangkan interaction diagram untuk jaringan", benar: false },
      { huruf: "c", teks: "Class diagram berfokus pada pemodelan tingkat kelas, sedangkan interaction diagram berfokus pada pemodelan tingkat objek", benar: true },
      { huruf: "d", teks: "Class diagram tidak memiliki operasi, sedangkan interaction diagram memiliki operasi", benar: false },
      { huruf: "e", teks: "Class diagram dibuat saat tahap pengujian, sedangkan interaction diagram pada tahap analisis kebutuhan", benar: false }
    ]
  }
];
