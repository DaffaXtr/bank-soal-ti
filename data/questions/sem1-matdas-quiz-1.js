/**
 * ============================================================================
 * BANK SOAL: MATEMATIKA DASAR (MAT101) — QUIZ 1, LATIHAN SOAL, & UTS
 * Semester 1 Teknik Informatika
 * Memuat butir-butir soal evaluasi asli materi Kalkulus & Aljabar Dasar:
 * - Domain dan Range Fungsi Rasional
 * - Pertaksamaan Nilai Mutlak Linier
 * - Titik Potong Dua Lingkaran (Geometri Analitik)
 * - Pertaksamaan Rasional Pecahan
 * - Pertaksamaan Nilai Mutlak Pecahan
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

window.BankSoalData.questions['sem1-matdas-quiz-1'] = [
  {
    no: 1,
    soal: `Tentukan domain dan range dari fungsi berikut:<br/><div class="my-3 text-center text-sm sm:text-base font-mono font-bold text-slate-800 bg-blue-50/50 py-2 border border-blue-100">g(x) = (x² - 16) / (x - 4)</div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Domain dan Range:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Menentukan Domain (D<sub>g</sub>):</b><br/>
            Fungsi rasional pecahan mensyaratkan penyebut tidak boleh bernilai nol.<br/>
            <code>x - 4 ≠ 0 ⟹ x ≠ 4</code><br/>
            Sehingga Domain fungsi adalah seluruh bilangan riil kecuali 4:<br/>
            <b>D<sub>g</sub> = {x ∈ ℝ | x ≠ 4}</b> atau dalam interval <code>(-∞, 4) ∪ (4, ∞)</code>.
          </li>
          <li>
            <b>Menentukan Range (R<sub>g</sub>):</b><br/>
            Untuk setiap nilai <code>x ≠ 4</code>, bentuk fungsi dapat disederhanakan dengan faktorisasi selisih kuadrat:<br/>
            <code>g(x) = ((x - 4)(x + 4)) / (x - 4) = x + 4</code><br/>
            Karena nilai <code>x = 4</code> tidak termasuk dalam domain (titik lubang / removable discontinuity), maka nilai <code>g(x)</code> tidak akan pernah bernilai:<br/>
            <code>g(4) = 4 + 4 = 8 ⟹ g(x) ≠ 8</code><br/>
            Sehingga Range fungsi adalah:<br/>
            <b>R<sub>g</sub> = {y ∈ ℝ | y ≠ 8}</b> atau dalam interval <code>(-∞, 8) ∪ (8, ∞)</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Jawaban yang benar: Domain = {x ∈ ℝ | x ≠ 4} dan Range = {y ∈ ℝ | y ≠ 8}.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Domain = {x ∈ ℝ | x ≠ 4} dan Range = {y ∈ ℝ | y ≠ 8}", benar: true },
      { huruf: "b", teks: "Domain = {x ∈ ℝ | x ≠ 4} dan Range = {y ∈ ℝ | y ∈ ℝ}", benar: false },
      { huruf: "c", teks: "Domain = {x ∈ ℝ | x ≠ -4 dan x ≠ 4} dan Range = {y ∈ ℝ | y ≠ 0}", benar: false },
      { huruf: "d", teks: "Domain = {x ∈ ℝ | x > 4} dan Range = {y ∈ ℝ | y > 8}", benar: false },
      { huruf: "e", teks: "Domain = ℝ dan Range = ℝ", benar: false }
    ]
  },
  {
    no: 2,
    soal: `Tentukan himpunan penyelesaian dari pertaksamaan berikut:<br/><div class="my-3 text-center text-sm sm:text-base font-mono font-bold text-slate-800 bg-blue-50/50 py-2 border border-blue-100">|2x - 5| > |x + 2|</div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Pertaksamaan Nilai Mutlak:</p>
        <p>Karena kedua ruas memuat nilai mutlak yang selalu bernilai non-negatif, kita dapat menggunakan sifat:</p>
        <p><code>|A| > |B| ⟺ A² > B² ⟺ A² - B² > 0 ⟺ (A - B)(A + B) > 0</code></p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Substitusikan A = (2x - 5) dan B = (x + 2):</b><br/>
            <code>[(2x - 5) - (x + 2)] · [(2x - 5) + (x + 2)] > 0</code><br/>
            <code>(2x - 5 - x - 2)(2x - 5 + x + 2) > 0</code><br/>
            <code>(x - 7)(3x - 3) > 0</code><br/>
            <code>3(x - 7)(x - 1) > 0 ⟹ (x - 1)(x - 7) > 0</code>
          </li>
          <li>
            <b>Menentukan Pembuat Nol:</b><br/>
            Pembuat nol pada garis bilangan adalah <code>x = 1</code> dan <code>x = 7</code>.
          </li>
          <li>
            <b>Uji Tanda Interval:</b><br/>
            - Untuk <code>x < 1</code> (misal x = 0): <code>(0 - 1)(0 - 7) = (-1)(-7) = 7 > 0</code> (+) [Memenuhi]<br/>
            - Untuk <code>1 < x < 7</code> (misal x = 2): <code>(2 - 1)(2 - 7) = (1)(-5) = -5 < 0</code> (-)<br/>
            - Untuk <code>x > 7</code> (misal x = 8): <code>(8 - 1)(8 - 7) = (7)(1) = 7 > 0</code> (+) [Memenuhi]
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Himpunan Penyelesaian (HP): <b>{x ∈ ℝ | x < 1 atau x > 7}</b> atau <code>(-∞, 1) ∪ (7, ∞)</code>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "{x ∈ ℝ | x < 1 atau x > 7}", benar: true },
      { huruf: "b", teks: "{x ∈ ℝ | 1 < x < 7}", benar: false },
      { huruf: "c", teks: "{x ∈ ℝ | x < -7 atau x > 1}", benar: false },
      { huruf: "d", teks: "{x ∈ ℝ | -7 < x < 1}", benar: false },
      { huruf: "e", teks: "{x ∈ ℝ | x < -2 atau x > 5/2}", benar: false }
    ]
  },
  {
    no: 3,
    soal: `Tentukan titik potong dari 2 lingkaran berikut:<br/><div class="my-3 text-center text-sm sm:text-base font-mono font-bold text-slate-800 bg-blue-50/50 py-2 border border-blue-100">(x + 3)² + y² = 18 &nbsp;&nbsp;dan&nbsp;&nbsp; x² + (y + 4)² = 34</div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Titik Potong 2 Lingkaran:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Buka bentuk kuadrat kedua persamaan lingkaran:</b><br/>
            L₁: <code>x² + 6x + 9 + y² = 18 ⟹ x² + y² + 6x - 9 = 0</code> ... (Persamaan 1)<br/>
            L₂: <code>x² + y² + 8y + 16 = 34 ⟹ x² + y² + 8y - 18 = 0</code> ... (Persamaan 2)
          </li>
          <li>
            <b>Eliminasi untuk mencari Garis Radikal (Tali Busur Persekutuan):</b><br/>
            Kurangkan Persamaan (1) dengan Persamaan (2):<br/>
            <code>(x² + y² + 6x - 9) - (x² + y² + 8y - 18) = 0</code><br/>
            <code>6x - 8y + 9 = 0 ⟹ 6x = 8y - 9 ⟹ x = (8y - 9) / 6 = (4/3)y - (3/2)</code>
          </li>
          <li>
            <b>Substitusikan ke persamaan L₁:</b><br/>
            Perhatikan <code>x + 3 = [(8y - 9)/6] + (18/6) = (8y + 9) / 6</code>.<br/>
            Maka: <code>[(8y + 9) / 6]² + y² = 18</code><br/>
            <code>(64y² + 144y + 81) / 36 + y² = 18</code><br/>
            Kalikan 36 ke kedua ruas:<br/>
            <code>64y² + 144y + 81 + 36y² = 648</code><br/>
            <code>100y² + 144y - 567 = 0</code>
          </li>
          <li>
            <b>Akar Kuadrat & Koordinat Titik Potong:</b><br/>
            Diskriminan D: <code>144² - 4(100)(-567) = 20.736 + 226.800 = 247.536 = (36√191)²</code><br/>
            <code>y = (-144 ± 36√191) / 200 = (-36 ± 9√191) / 50 ≈ 1.77 atau -3.21</code><br/>
            Substitusi ke nilai x:<br/>
            <code>x = (4/3)y - 3/2 = (-123 ± 12√191) / 50 ≈ 0.86 atau -5.78</code><br/>
            Kedua lingkaran berpotongan pada 2 titik riil.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Jawaban: Berpotongan di 2 titik: <b>((-123 + 12√191)/50, (-36 + 9√191)/50)</b> dan <b>((-123 - 12√191)/50, (-36 - 9√191)/50)</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Berpotongan di 2 titik: ((-123 + 12√191)/50, (-36 + 9√191)/50) dan ((-123 - 12√191)/50, (-36 - 9√191)/50) [x ≈ 0.86, y ≈ 1.77 dan x ≈ -5.78, y ≈ -3.21]", benar: true },
      { huruf: "b", teks: "Berpotongan di 2 titik bulat: (0, 3) dan (-6, -3)", benar: false },
      { huruf: "c", teks: "Berpotongan di 1 titik (saling bersinggungan di titik (-3, 0))", benar: false },
      { huruf: "d", teks: "Kedua lingkaran tidak saling berpotongan (saling lepas di luar)", benar: false },
      { huruf: "e", teks: "Berpotongan di 2 titik simetris: (3, 4) dan (-3, -4)", benar: false }
    ]
  },
  {
    no: 4,
    soal: `Tentukan himpunan penyelesaian dari pertaksamaan berikut:<br/><div class="my-3 text-center text-sm sm:text-base font-mono font-bold text-slate-800 bg-blue-50/50 py-2 border border-blue-100">(x + 8) / (x - 3) < 2</div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Pertaksamaan Rasional:</p>
        <p class="text-amber-800 font-medium">Perhatian: Jangan langsung mengalikan silang dengan (x - 3) karena tanda (x - 3) bergantung pada nilai x (bisa positif atau negatif).</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Pindahkan konstanta 2 ke ruas kiri:</b><br/>
            <code>[(x + 8) / (x - 3)] - 2 < 0</code><br/>
            <code>[(x + 8) - 2(x - 3)] / (x - 3) < 0</code><br/>
            <code>(x + 8 - 2x + 6) / (x - 3) < 0</code><br/>
            <code>(-x + 14) / (x - 3) < 0</code>
          </li>
          <li>
            <b>Kalikan dengan -1 (Tanda pertaksamaan berbalik arah dari < menjadi >):</b><br/>
            <code>(x - 14) / (x - 3) > 0</code>
          </li>
          <li>
            <b>Pembuat Nol & Syarat Penyebut:</b><br/>
            - Pembilang: <code>x - 14 = 0 ⟹ x = 14</code><br/>
            - Penyebut: <code>x - 3 = 0 ⟹ x = 3</code> (syarat <code>x ≠ 3</code>)
          </li>
          <li>
            <b>Uji Garis Bilangan:</b><br/>
            - Untuk <code>x < 3</code> (misal x = 0): <code>(0 - 14)/(0 - 3) = 14/3 > 0</code> (+) [Memenuhi]<br/>
            - Untuk <code>3 < x < 14</code> (misal x = 4): <code>(4 - 14)/(4 - 3) = -10/1 = -10 < 0</code> (-)<br/>
            - Untuk <code>x > 14</code> (misal x = 15): <code>(15 - 14)/(15 - 3) = 1/12 > 0</code> (+) [Memenuhi]
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Himpunan Penyelesaian (HP): <b>{x ∈ ℝ | x < 3 atau x > 14}</b> atau <code>(-∞, 3) ∪ (14, ∞)</code>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "{x ∈ ℝ | x < 3 atau x > 14}", benar: true },
      { huruf: "b", teks: "{x ∈ ℝ | 3 < x < 14}", benar: false },
      { huruf: "c", teks: "{x ∈ ℝ | x < -14 atau x > 3}", benar: false },
      { huruf: "d", teks: "{x ∈ ℝ | x > 14}", benar: false },
      { huruf: "e", teks: "{x ∈ ℝ | x ≤ 3 atau x ≥ 14}", benar: false }
    ]
  },
  {
    no: 5,
    soal: `Tentukan himpunan penyelesaian dari pertaksamaan berikut:<br/><div class="my-3 text-center text-sm sm:text-base font-mono font-bold text-slate-800 bg-blue-50/50 py-2 border border-blue-100">|1/x - 3| > 4</div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Pertaksamaan Nilai Mutlak Pecahan:</p>
        <p>Syarat nilai terdefinisi: <b>x ≠ 0</b>.</p>
        <p>Berdasarkan sifat <code>|u| > a ⟺ u < -a atau u > a</code> (untuk a > 0):</p>
        <ol class="list-decimal pl-5 space-y-2">
          <li>
            <b>Kasus 1: (1/x - 3) < -4</b><br/>
            <code>1/x < -1 ⟹ 1/x + 1 < 0 ⟹ (x + 1)/x < 0</code><br/>
            Pembuat nol: <code>x = -1</code> dan <code>x = 0</code>.<br/>
            Daerah uji bernilai negatif ada pada interval: <b>-1 < x < 0</b>.
          </li>
          <li>
            <b>Kasus 2: (1/x - 3) > 4</b><br/>
            <code>1/x > 7 ⟹ 1/x - 7 > 0 ⟹ (1 - 7x)/x > 0</code><br/>
            Kalikan -1 (tanda berbalik): <code>(7x - 1)/x < 0</code><br/>
            Pembuat nol: <code>x = 0</code> dan <code>x = 1/7</code>.<br/>
            Daerah uji bernilai negatif ada pada interval: <b>0 < x < 1/7</b>.
          </li>
          <li>
            <b>Gabungan Himpunan Penyelesaian (Kasus 1 ∪ Kasus 2):</b><br/>
            Gabungkan kedua interval (dengan tetap memperhatikan syarat <code>x ≠ 0</code>):<br/>
            <b>HP = {x ∈ ℝ | -1 < x < 0 atau 0 < x < 1/7}</b> atau <code>(-1, 0) ∪ (0, 1/7)</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Jawaban yang benar: <b>{x ∈ ℝ | -1 < x < 0 atau 0 < x < 1/7}</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "{x ∈ ℝ | -1 < x < 0 atau 0 < x < 1/7}", benar: true },
      { huruf: "b", teks: "{x ∈ ℝ | x < -1 atau x > 1/7}", benar: false },
      { huruf: "c", teks: "{x ∈ ℝ | -1 < x < 1/7}", benar: false },
      { huruf: "d", teks: "{x ∈ ℝ | 0 < x < 1/7}", benar: false },
      { huruf: "e", teks: "{x ∈ ℝ | x < 0 atau x > 7}", benar: false }
    ]
  },
  {
    no: 6,
    soal: `Tentukan titik diskontinu (jika ada) dari fungsi f(x) = (x² - 4)/(x + 2) untuk x ≠ -2 dan f(x) = 0 untuk x = -2.`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Analisis Kontinuitas Fungsi:</p>
        <p>Suatu fungsi f(x) dikatakan kontinu di titik x = c jika memenuhi tiga syarat:</p>
        <ol class="list-decimal pl-5 space-y-1">
          <li><b>f(c) terdefinisi:</b> Untuk x = -2, didefinisikan f(-2) = 0 (terdefinisi).</li>
          <li><b>Limit lim_{x → c} f(x) ada:</b> Untuk x ≠ -2, f(x) = ((x - 2)(x + 2)) / (x + 2) = x - 2. Maka lim_{x → -2} (x - 2) = -2 - 2 = <b>-4</b>.</li>
          <li><b>lim_{x → c} f(x) = f(c):</b> Karena limit bernilai -4 sedangkan f(-2) = 0, maka <b>lim_{x → -2} f(x) ≠ f(-2)</b>.</li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Kesimpulan: Karena nilai limit tidak sama dengan nilai fungsi di titik tersebut, maka fungsi f(x) <b>diskontinu di x = -2</b> (jenis <i>removable discontinuity</i> / diskontinuitas yang dapat dihapuskan).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Diskontinu di x = 2", benar: false },
      { huruf: "b", teks: "Diskontinu di x = -2", benar: true },
      { huruf: "c", teks: "Diskontinu di x = 0", benar: false },
      { huruf: "d", teks: "Diskontinu di x = -4", benar: false },
      { huruf: "e", teks: "Fungsi kontinu di semua bilangan riil (tidak ada titik diskontinu)", benar: false }
    ]
  },
  {
    no: 7,
    soal: `Tentukan persamaan lingkaran jika diketahui pusat lingkarannya (-2, 4) dan melalui titik (1, 6).`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Persamaan Lingkaran:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Bentuk Baku Persamaan Lingkaran:</b><br/>
            Lingkaran berpusat di (a, b) dengan jari-jari r memiliki rumus baku:<br/>
            <code>(x - a)² + (y - b)² = r²</code>
          </li>
          <li>
            <b>Substitusi Pusat (-2, 4):</b><br/>
            <code>(x - (-2))² + (y - 4)² = r² ⟹ (x + 2)² + (y - 4)² = r²</code>
          </li>
          <li>
            <b>Hitung r² dengan Melalui Titik (1, 6):</b><br/>
            <code>r² = (1 + 2)² + (6 - 4)² = (3)² + (2)² = 9 + 4 = 13</code>
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Persamaan lingkaran yang terbentuk: <b>(x + 2)² + (y - 4)² = 13</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "(x - 2)² + (y + 4)² = 13", benar: false },
      { huruf: "b", teks: "(x + 2)² + (y - 4)² = √13", benar: false },
      { huruf: "c", teks: "(x + 2)² + (y - 4)² = 13", benar: true },
      { huruf: "d", teks: "(x - 2)² + (y - 4)² = 25", benar: false },
      { huruf: "e", teks: "(x + 2)² + (y + 4)² = 13", benar: false }
    ]
  },
  {
    no: 8,
    soal: `Tentukan domain dan range dari fungsi f(x) = |x - 2| - 3.`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penentuan Domain & Range Fungsi Nilai Mutlak:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Domain:</b><br/>
            Fungsi nilai mutlak |x - 2| terdefinisi untuk seluruh bilangan riil tanpa adanya batasan penyebut nol atau akar negatif.<br/>
            <b>Domain = {x | x ∈ ℝ}</b>.
          </li>
          <li>
            <b>Range:</b><br/>
            Berdasarkan sifat nilai mutlak, <code>|x - 2| ≥ 0</code> untuk setiap <code>x ∈ ℝ</code> (nilai minimum = 0 saat x = 2).<br/>
            Maka: <code>f(x) = |x - 2| - 3 ≥ 0 - 3 = -3</code>.<br/>
            <b>Range = {y | y ≥ -3, y ∈ ℝ}</b>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Jawaban yang benar: <b>Domain: {x | x ∈ ℝ}, Range: {y | y ≥ -3, y ∈ ℝ}</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Domain: {x | x ∈ ℝ}, Range: {y | y ≥ -3, y ∈ ℝ}", benar: true },
      { huruf: "b", teks: "Domain: {x | x ≥ 2, x ∈ ℝ}, Range: {y | y ≥ -3, y ∈ ℝ}", benar: false },
      { huruf: "c", teks: "Domain: {x | x ∈ ℝ}, Range: {y | y ≥ 0, y ∈ ℝ}", benar: false },
      { huruf: "d", teks: "Domain: {x | x ∈ ℝ}, Range: {y | y ≤ -3, y ∈ ℝ}", benar: false },
      { huruf: "e", teks: "Domain: {x | x ≠ 2, x ∈ ℝ}, Range: {y | y ≥ -3, y ∈ ℝ}", benar: false }
    ]
  },
  {
    no: 9,
    soal: `Karakteristik geometris dari grafik persamaan 4x² + 4y² + 8y = 0 adalah lingkaran dengan...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Pengubahan ke Bentuk Baku Lingkaran:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Bagi seluruh persamaan dengan koefisien kuadrat (4):</b><br/>
            <code>(4x² + 4y² + 8y) / 4 = 0 ⟹ x² + y² + 2y = 0</code>
          </li>
          <li>
            <b>Lengkapkan kuadrat sempurna pada variabel y:</b><br/>
            <code>x² + (y² + 2y + 1) = 0 + 1</code><br/>
            <code>x² + (y + 1)² = 1²</code>
          </li>
          <li>
            <b>Identifikasi Pusat dan Jari-jari:</b><br/>
            Bentuk baku <code>(x - a)² + (y - b)² = r²</code> memberikan:<br/>
            - Pusat <code>(a, b) = (0, -1)</code><br/>
            - Jari-jari <code>r = √1 = 1</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Karakteristik: <b>Pusat (0, -1) dan jari-jari 1</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Pusat (0, 1) dan jari-jari 1", benar: false },
      { huruf: "b", teks: "Pusat (0, -1) dan jari-jari 2", benar: false },
      { huruf: "c", teks: "Pusat (0, -1) dan jari-jari 1", benar: true },
      { huruf: "d", teks: "Pusat (-1, 0) dan jari-jari 1", benar: false },
      { huruf: "e", teks: "Pusat (0, -2) dan jari-jari 4", benar: false }
    ]
  },
  {
    no: 10,
    soal: `Tentukan himpunan penyelesaian dari pertaksamaan (2x - 1)/(3x - 5) ≤ 3.`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Pertaksamaan Pecahan:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Pindahkan 3 ke ruas kiri dan samakan penyebut:</b><br/>
            <code>[(2x - 1) / (3x - 5)] - 3 ≤ 0</code><br/>
            <code>[(2x - 1) - 3(3x - 5)] / (3x - 5) ≤ 0</code><br/>
            <code>(2x - 1 - 9x + 15) / (3x - 5) ≤ 0</code><br/>
            <code>(-7x + 14) / (3x - 5) ≤ 0</code>
          </li>
          <li>
            <b>Kalikan kedua ruas dengan -1 (tanda berbalik dari ≤ menjadi ≥):</b><br/>
            <code>(7x - 14) / (3x - 5) ≥ 0 ⟹ [7(x - 2)] / (3x - 5) ≥ 0</code>
          </li>
          <li>
            <b>Titik Kritis & Syarat Penyebut:</b><br/>
            - Pembilang: <code>x - 2 = 0 ⟹ x = 2</code> (bulat penuh karena tanda pertaksamaan ≥).<br/>
            - Penyebut: <code>3x - 5 = 0 ⟹ x = 5/3</code> (bulat kosong karena syarat penyebut x ≠ 5/3).
          </li>
          <li>
            <b>Uji Tanda Interval:</b><br/>
            - Untuk <code>x < 5/3</code> (misal x = 0): <code>7(0 - 2)/(3(0) - 5) = -14/-5 = 2.8 > 0</code> (+) [Memenuhi]<br/>
            - Untuk <code>5/3 < x < 2</code> (misal x = 1.8): <code>7(1.8 - 2)/(3(1.8) - 5) = -1.4/0.4 = -3.5 < 0</code> (-)<br/>
            - Untuk <code>x ≥ 2</code> (misal x = 3): <code>7(3 - 2)/(3(3) - 5) = 7/4 > 0</code> (+) [Memenuhi]
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Himpunan Penyelesaian (HP): <b>{x | x < 5/3 atau x ≥ 2}</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "{x | 5/3 < x ≤ 2}", benar: false },
      { huruf: "b", teks: "{x | x < 5/3 atau x ≥ 2}", benar: true },
      { huruf: "c", teks: "{x | x ≤ 5/3 atau x ≥ 2}", benar: false },
      { huruf: "d", teks: "{x | x ≤ 2}", benar: false },
      { huruf: "e", teks: "{x | 5/3 ≤ x ≤ 2}", benar: false }
    ]
  }
];

