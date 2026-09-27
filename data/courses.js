/**
 * ============================================================================
 * DATA CATALOG: MATA KULIAH TEKNIK INFORMATIKA (SEMESTER 1 - 5)
 * Berkas ini terpisah khusus untuk konfigurasi kurikulum mata kuliah.
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};

window.BankSoalData.courses = [
  // ================= SEMESTER 1 (Gambar 1) =================
  { 
    id: 'sem1-matdas', 
    code: 'MAT101', 
    name: 'Matematika Dasar', 
    sks: 3, 
    semester: 1, 
    desc: 'Kalkulus dasar, fungsi, limit, turunan, dan integral serta aplikasinya dalam pemodelan sains.' 
  },
  { 
    id: 'sem1-alin', 
    code: 'MAT102', 
    name: 'Aljabar Linier', 
    sks: 3, 
    semester: 1, 
    desc: 'Matriks, vektor, sistem persamaan linier, determinan, ruang vektor, dan transformasi linier.' 
  },

  // ================= SEMESTER 2 (Gambar 2) =================
  { 
    id: 'sem2-bhs-inggris', 
    code: 'UNI201', 
    name: 'Bahasa Inggris Profesi', 
    sks: 2, 
    semester: 2, 
    desc: 'Komunikasi teknis, penulisan dokumentasi teknis TI, dan presentasi profesional dalam bahasa Inggris.' 
  },
  { 
    id: 'sem2-matdis', 
    code: 'IF201', 
    name: 'Matematika Diskrit', 
    sks: 3, 
    semester: 2, 
    desc: 'Logika proposisi, predikat, teori himpunan, relasi, fungsi, kombinatorika, teori graf, dan pohon.' 
  },
  { 
    id: 'sem2-logpro', 
    code: 'IF202', 
    name: 'Logika & Pemrograman Dasar', 
    sks: 3, 
    semester: 2, 
    desc: 'Konsep dasar algoritma, tipe data, struktur kendali (if-else, loop), fungsi, array, dan paradigma prosedural.' 
  },
  { 
    id: 'sem2-logpro-prak', 
    code: 'IF202P', 
    name: 'Logika & Pemrograman Dasar (Praktikum)', 
    sks: 1, 
    semester: 2, 
    desc: 'Implementasi praktikum koding bahasa C/C++ atau Python untuk menyelesaikan persoalan algoritma.' 
  },
  { 
    id: 'sem2-basdat', 
    code: 'IF203', 
    name: 'Basis Data Relasional', 
    sks: 3, 
    semester: 2, 
    desc: 'Konsep Entity Relationship Diagram (ERD), model relasional, aljabar relasional, dan normalisasi database.' 
  },
  { 
    id: 'sem2-basdat-prak', 
    code: 'IF203P', 
    name: 'Basis Data Relasional (Praktikum)', 
    sks: 1, 
    semester: 2, 
    desc: 'Praktikum DDL, DML, DCL, subquery, join, dan optimasi kueri SQL menggunakan RDBMS.' 
  },
  { 
    id: 'sem2-adsi', 
    code: 'IF204', 
    name: 'Analisa dan Desain Sistem Informasi', 
    sks: 3, 
    semester: 2, 
    desc: 'Metodologi SDLC, analisis kebutuhan sistem, Data Flow Diagram (DFD), dan pemodelan berorientasi objek UML.' 
  },
  { 
    id: 'sem2-adsi-prak', 
    code: 'IF204P', 
    name: 'Analisa dan Desain Sistem Informasi (Praktium)', 
    sks: 1, 
    semester: 2, 
    desc: 'Praktikum pembuatan dokumen SRS, perancangan use case diagram, activity diagram, dan prototype sistem.' 
  },
  { 
    id: 'sem2-pso', 
    code: 'IF205', 
    name: 'Pengantar Sistem Operasi', 
    sks: 3, 
    semester: 2, 
    desc: 'Konsep proses dan thread, penjadwalan CPU, sinkronisasi, deadlock, manajemen memori, dan sistem berkas.' 
  },
  { 
    id: 'sem2-pso-prak', 
    code: 'IF205P', 
    name: 'Pengantar Sistem Operasi (Praktikum)', 
    sks: 1, 
    semester: 2, 
    desc: 'Praktikum dasar Linux, command line interface (CLI), shell scripting, dan manajemen permission.' 
  },

  // ================= SEMESTER 3 (Gambar 3) =================
  { 
    id: 'sem3-pdb', 
    code: 'IF301', 
    name: 'Pemrograman Basis Data', 
    sks: 3, 
    semester: 3, 
    desc: 'Stored procedure, function, trigger, view, cursor, manajemen transaksi ACID, dan database tuning.' 
  },
  { 
    id: 'sem3-pdb-prak', 
    code: 'IF301P', 
    name: 'Pemrograman Basis Data (Praktikum)', 
    sks: 1, 
    semester: 3, 
    desc: 'Praktikum penulisan PL/SQL atau pgSQL untuk otomasi proses bisnis dan manajemen data kompleks.' 
  },
  { 
    id: 'sem3-uiux', 
    code: 'IF302', 
    name: 'Desain UI/UX', 
    sks: 3, 
    semester: 3, 
    desc: 'Prinsip desain antarmuka, User Experience research, wireframing, usability testing, dan design system.' 
  },
  { 
    id: 'sem3-uiux-prak', 
    code: 'IF302P', 
    name: 'Desain UI/UX (Praktikum)', 
    sks: 1, 
    semester: 3, 
    desc: 'Praktikum prototyping interaktif high-fidelity menggunakan Figma dan pengujian kegunaan pengguna.' 
  },
  { 
    id: 'sem3-microservice', 
    code: 'IF303', 
    name: 'Arsitektur Microservice', 
    sks: 3, 
    semester: 3, 
    desc: 'Arsitektur monolitik vs microservices, REST API, API Gateway, event-driven architecture, dan container Docker.' 
  },
  { 
    id: 'sem3-jarkom', 
    code: 'IF304', 
    name: 'Jaringan Komputer', 
    sks: 3, 
    semester: 3, 
    desc: 'Model OSI 7-Layer, TCP/IP, IP addressing (IPv4/IPv6), subnetting CIDR, VLAN, dan protokol routing.' 
  },
  { 
    id: 'sem3-jarkom-prak', 
    code: 'IF304P', 
    name: 'Jaringan Komputer (Praktikum)', 
    sks: 1, 
    semester: 3, 
    desc: 'Praktikum simulasi topologi jaringan menggunakan Cisco Packet Tracer dan konfigurasi router/switch.' 
  },
  { 
    id: 'sem3-web-fw', 
    code: 'IF305', 
    name: 'Pengembangan Perangkat lunak Web (Framework)', 
    sks: 3, 
    semester: 3, 
    desc: 'Arsitektur MVC, integrasi ORM, middleware, routing, validasi data, dan keamanan aplikasi web modern.' 
  },
  { 
    id: 'sem3-web-fw-prak', 
    code: 'IF305P', 
    name: 'Pengembangan Perangkat lunak Web (Framework) (Praktikum)', 
    sks: 1, 
    semester: 3, 
    desc: 'Praktikum membangun aplikasi web fullstack menggunakan framework seperti Laravel, Express, atau Next.js.' 
  },
  { 
    id: 'sem3-rkpl', 
    code: 'IF306', 
    name: 'Rekayasa Kebutuhan Perangkat Lunak', 
    sks: 3, 
    semester: 3, 
    desc: 'Teknik elisitasi requirement, pemodelan spesifikasi kebutuhan, verifikasi & validasi SRS, dan manajemen perubahan.' 
  },
  { 
    id: 'sem3-rkpl-prak', 
    code: 'IF306P', 
    name: 'Rekayasa Kebutuhan Perangkat Lunak (Praktikum)', 
    sks: 1, 
    semester: 3, 
    desc: 'Praktikum penyusunan dokumen SRS berstandar IEEE/ISO dan teknik wawancara stakeholder.' 
  },

  // ================= SEMESTER 4 (Gambar 4) =================
  { 
    id: 'sem4-ai', 
    code: 'IF401', 
    name: 'Kecerdasan Buatan', 
    sks: 3, 
    semester: 4, 
    desc: 'Konsep agen cerdas, algoritma pencarian (DFS, BFS, A*), sistem berbasis aturan, logika fuzzy, dan jaringan saraf.' 
  },
  { 
    id: 'sem4-ai-prak', 
    code: 'IF401P', 
    name: 'Kecerdasan Buatan (Praktikum)', 
    sks: 1, 
    semester: 4, 
    desc: 'Praktikum pemrograman algoritma kecerdasan buatan dan optimasi pencarian menggunakan Python.' 
  },
  { 
    id: 'sem4-workshop-ui', 
    code: 'IF402', 
    name: 'Workshop Desain UI', 
    sks: 2, 
    semester: 4, 
    desc: 'Studi kasus perancangan antarmuka pengguna digital, eksplorasi micro-interaction, dan typography token.' 
  },
  { 
    id: 'sem4-mobile', 
    code: 'IF403', 
    name: 'Aplikasi Mobile', 
    sks: 3, 
    semester: 4, 
    desc: 'Arsitektur aplikasi perangkat bergerak, lifecycle activity, manajemen state, dan integrasi API RESTful.' 
  },
  { 
    id: 'sem4-mobile-prak', 
    code: 'IF403P', 
    name: 'Aplikasi Mobile (Praktikum)', 
    sks: 1, 
    semester: 4, 
    desc: 'Praktikum pembuatan aplikasi mobile Android/Flutter/React Native dari dasar hingga siap rilis.' 
  },
  { 
    id: 'sem4-mpl', 
    code: 'IF404', 
    name: 'Manajemen Proyek Perangkat Lunak', 
    sks: 3, 
    semester: 4, 
    desc: 'Kerangka kerja PMBOK, metodologi Agile Scrum, estimasi Function Point, manajemen risiko, dan sprint planning.' 
  },
  { 
    id: 'sem4-mpl-prak', 
    code: 'IF404P', 
    name: 'Manajemen Proyek Perangkat Lunak (Praktikum)', 
    sks: 1, 
    semester: 4, 
    desc: 'Praktikum penggunaan project management tool (Jira/Trello), pembuatan Gantt chart, dan burn-down chart.' 
  },
  { 
    id: 'sem4-ppl', 
    code: 'IF405', 
    name: 'Pengujian Perangkat Lunak', 
    sks: 3, 
    semester: 4, 
    desc: 'Black-box testing, white-box testing, unit testing, integration testing, boundary value analysis, dan equivalence partitioning.' 
  },
  { 
    id: 'sem4-ppl-prak', 
    code: 'IF405P', 
    name: 'Pengujian Perangkat Lunak (Praktikum)', 
    sks: 1, 
    semester: 4, 
    desc: 'Praktikum pembuatan test case, test execution, bug reporting, dan automated testing framework.' 
  },
  { 
    id: 'sem4-workshop-web', 
    code: 'IF406', 
    name: 'Workshop Pengembangan Perangkat Lunak WEB (Framework) Praktikum', 
    sks: 2, 
    semester: 4, 
    desc: 'Workshop proyek intensif kolaboratif mengembangkan solusi web enterprise dengan CI/CD deployment.' 
  },

  // ================= SEMESTER 5 (Gambar 5) =================
  { 
    id: 'sem5-agama', 
    code: 'UNI501', 
    name: 'Agama Islam II', 
    sks: 2, 
    semester: 5, 
    desc: 'Kajian nilai-nilai moralitas, etika profesi, muamalah, dan tanggung jawab sosial dalam konteks teknologi digital.' 
  },
  { 
    id: 'sem5-ml', 
    code: 'IF501', 
    name: 'Pembelajaran Mesin', 
    sks: 3, 
    semester: 5, 
    desc: 'Supervised learning, unsupervised learning, regresi linier, klasifikasi decision tree, SVM, dan clustering.' 
  },
  { 
    id: 'sem5-ml-prak', 
    code: 'IF501P', 
    name: 'Pembelajaran Mesin (Praktikum)', 
    sks: 1, 
    semester: 5, 
    desc: 'Praktikum eksplorasi data, preprocessing, evaluasi metrik (accuracy, recall, F1-score) menggunakan Scikit-Learn.' 
  },
  { 
    id: 'sem5-design-thinking', 
    code: 'IF502', 
    name: 'Design Thinking', 
    sks: 2, 
    semester: 5, 
    desc: 'Tahapan Empathize, Define, Ideate, Prototype, dan Test untuk inovasi pemecahan masalah produk digital.' 
  },
  { 
    id: 'sem5-cyber', 
    code: 'IF503', 
    name: 'Keamanan Cyber', 
    sks: 3, 
    semester: 5, 
    desc: 'Prinsip CIA Triad, vulnerability assessment, ethical hacking, malware analysis, enkripsi, dan keamanan jaringan.' 
  },
  { 
    id: 'sem5-cyber-prak', 
    code: 'IF503P', 
    name: 'Keamanan Cyber (Praktikum)', 
    sks: 1, 
    semester: 5, 
    desc: 'Praktikum network packet sniffing (Wireshark), scanning port (Nmap), dan pengujian penetrasi keamanan.' 
  },
  { 
    id: 'sem5-backend', 
    code: 'IF504', 
    name: 'Pemrograman Backend Lanjut', 
    sks: 3, 
    semester: 5, 
    desc: 'High-performance API, message broker (RabbitMQ/Kafka), caching Redis, load balancing, dan security JWT.' 
  },
  { 
    id: 'sem5-backend-prak', 
    code: 'IF504P', 
    name: 'Pemrograman Backend Lanjut (Praktikum)', 
    sks: 1, 
    semester: 5, 
    desc: 'Praktikum pengembangan arsitektur backend asynchronous scalable dan integrasi database terdistribusi.' 
  },
  { 
    id: 'sem5-proyek1', 
    code: 'IF505', 
    name: 'Proyek 1 (Analisa dan Desain PL)', 
    sks: 3, 
    semester: 5, 
    desc: 'Proyek rintisan capstone: analisis kebutuhan mendalam, studi kelayakan, perancangan arsitektur, dan validasi klien.' 
  },
  { 
    id: 'sem5-sqa', 
    code: 'IF506', 
    name: 'Jaminan Kualitas Perangkat Lunak (Quality Assurance)', 
    sks: 3, 
    semester: 5, 
    desc: 'Standar penjaminan kualitas ISO/IEC 25010, reviu teknis formal (FTR), audit mutu, metrics rekayasa, dan SQA planning.' 
  },
  { 
    id: 'sem5-kewirausahaan', 
    code: 'IF507', 
    name: 'Kewirausahaan Bidang IT', 
    sks: 2, 
    semester: 5, 
    desc: 'Membangun startup teknologi, business model canvas (BMC), validasi pasar produk digital, dan pitching investor.' 
  }
];
