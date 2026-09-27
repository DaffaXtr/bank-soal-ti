/**
 * ============================================================================
 * BANK SOAL: ALJABAR LINIER (MAT102) — UTS TIPE A
 * Semester 1 Teknik Informatika
 * Memuat 10 butir soal evaluasi asli UTS Tipe A:
 * 1. Determinan Matriks 3×3 (Metode Kofaktor / Sarrus)
 * 2. Determinan Matriks 4×4 dengan Baris/Kolom Nol
 * 3. Pembuktian Teorema Determinan Berfaktor Skalar Kolom
 * 4. Perkalian Matriks Ordo (4×3) × (3×3)
 * 5. Invers dari Transpose Penjumlahan Matriks: ((A + B)^T)^-1
 * 6. Invers Matriks 3×3 (Metode Matriks Adjoin & Kofaktor)
 * 7. Invers Matriks 4×4 (Metode Eliminasi Gauss-Jordan)
 * 8. Penjabaran Operasi Baris Elementer (OBE) Reduksi Matriks ke Identitas
 * 9. Eliminasi Gauss Matriks Augmented 3 Variabel & Back-Substitution
 * 10. Penyelesaian Sistem Persamaan Linier 4 Variabel (Metode Substitusi/Eliminasi)
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

// Helper formatter matriks 3x3
function formatMat3x3(rows) {
  const cells = rows.flat().map(val => `<span>${val}</span>`).join('');
  return `
    <span class="inline-flex items-center align-middle mx-1 font-mono">
      <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
      <span class="grid grid-cols-3 gap-x-3 gap-y-1 px-2.5 py-0.5 text-center font-mono text-xs sm:text-sm">
        ${cells}
      </span>
      <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
    </span>
  `.trim();
}

// Helper formatter matriks 4x4
function formatMat4x4(rows) {
  const cells = rows.flat().map(val => `<span>${val}</span>`).join('');
  return `
    <span class="inline-flex items-center align-middle mx-1 font-mono">
      <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
      <span class="grid grid-cols-4 gap-x-3 gap-y-1 px-2.5 py-0.5 text-center font-mono text-xs sm:text-sm">
        ${cells}
      </span>
      <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
    </span>
  `.trim();
}

window.BankSoalData.questions['sem1-alin-uts-a'] = [
  {
    no: 1,
    soal: `Tentukan nilai determinan dari matriks berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat3x3([
          [2, 3, -1],
          [3, -4, 5],
          [4, 1, 2]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Determinan 3×3 (Metode Sarrus):</p>
        <p>Gunakan rumus Sarrus atau ekspansi kofaktor sepanjang baris pertama:</p>
        <p><code>det = 2 · [(-4)(2) - (5)(1)] - 3 · [(3)(2) - (5)(4)] + (-1) · [(3)(1) - (-4)(4)]</code></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Suku ke-1: <code>2 · (-8 - 5) = 2 · (-13) = -26</code></li>
          <li>Suku ke-2: <code>-3 · (6 - 20) = -3 · (-14) = +42</code></li>
          <li>Suku ke-3: <code>-1 · (3 + 16) = -1 · (19) = -19</code></li>
        </ul>
        <p><code>det = -26 + 42 - 19 = 16 - 19 = <b>-3</b></code></p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>-3</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-3", benar: true },
      { huruf: "b", teks: "3", benar: false },
      { huruf: "c", teks: "-15", benar: false },
      { huruf: "d", teks: "12", benar: false },
      { huruf: "e", teks: "-7", benar: false }
    ]
  },
  {
    no: 2,
    soal: `Tentukan nilai determinan dari matriks 4×4 berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat4x4([
          [0, 3, 5, 8],
          [0, 1, 0, 4],
          [1, 0, 5, 1],
          [7, 6, 8, 5]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Ekspansi Kofaktor Sepanjang Kolom Pertama:</p>
        <p>Kolom 1 memuat elemen bernilai 0 pada baris 1 dan 2, sehingga:</p>
        <p><code>det = 0 · C₁₁ + 0 · C₂₁ + 1 · C₃₁ + 7 · C₄₁ = 1 · (+M₃₁) + 7 · (-M₄₁) = M₃₁ - 7 · M₄₁</code></p>
        <ol class="list-decimal pl-5 space-y-1">
          <li>
            <b>Hitung Minor M₃₁ (tutup baris 3, kolom 1):</b><br/>
            <code>M₃₁ = det([[3, 5, 8], [1, 0, 4], [6, 8, 5]]) = -1(25 - 64) - 4(24 - 30) = 39 + 24 = 63</code>.
          </li>
          <li>
            <b>Hitung Minor M₄₁ (tutup baris 4, kolom 1):</b><br/>
            <code>M₄₁ = det([[3, 5, 8], [1, 0, 4], [0, 5, 1]]) = -1(5 - 40) - 4(15 - 0) = 35 - 60 = -25</code>.
          </li>
          <li>
            <b>Total Determinan:</b><br/>
            <code>det = (+1)(63) + (-7)(-25) = 63 + 175 = <b>238</b></code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>238</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "238", benar: true },
      { huruf: "b", teks: "175", benar: false },
      { huruf: "c", teks: "-238", benar: false },
      { huruf: "d", teks: "112", benar: false },
      { huruf: "e", teks: "63", benar: false }
    ]
  },
  {
    no: 3,
    soal: `Buktikan persamaan yang memuat determinan berikut:<br/>
      <div class="my-3 flex items-center justify-center gap-3 flex-wrap font-mono text-xs sm:text-sm">
        ${formatMat4x4([
          [7, 6, 6, 6],
          [1, 1, 2, 3],
          [7, 3, 2, 3],
          [3, 4, 3, 6]
        ])}
        <span class="font-bold text-base">= 3 ·</span>
        ${formatMat4x4([
          [7, 6, 6, 2],
          [1, 1, 2, 1],
          [7, 3, 2, 1],
          [3, 4, 3, 2]
        ])}
      </div>
      Pernyataan kesamaan nilai determinan di atas adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Bukti Matematis (Sifat Linearitas / Skalar Kolom Determinan):</p>
        <p>Berdasarkan teorema sifat determinan:</p>
        <p class="bg-blue-50 p-2 border border-blue-200 font-mono text-xs">
          "Jika suatu baris atau kolom pada matriks dikalikan dengan skalar k, maka nilai determinan matriks tersebut sama dengan k kali nilai determinan matriks semula: det([C₁, C₂, C₃, k·C₄]) = k · det([C₁, C₂, C₃, C₄])"
        </p>
        <p>Perhatikan bahwa kolom 1, 2, dan 3 pada kedua matriks adalah identik:</p>
        <ul class="list-disc pl-5 space-y-0.5">
          <li>Kolom 1: [7, 1, 7, 3]ᵀ</li>
          <li>Kolom 2: [6, 1, 3, 4]ᵀ</li>
          <li>Kolom 3: [6, 2, 2, 3]ᵀ</li>
        </ul>
        <p>Sedangkan pada kolom ke-4 ruas kiri memuat kelipatan 3 dari kolom ke-4 ruas kanan:</p>
        <p><code>[6, 3, 3, 6]ᵀ = 3 · [2, 1, 1, 2]ᵀ</code></p>
        <p>Faktorkan skalar 3 keluar dari kolom ke-4 ruas kiri, maka langsung terbukti bahwa kedua ruas bernilai sama.</p>
        <p class="text-emerald-700 font-semibold">Kesimpulan: <b>Terbukti Benar (Valid)</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Terbukti Benar (Valid berdasarkan sifat skalar faktor pada kolom determinan)", benar: true },
      { huruf: "b", teks: "Salah, seharusnya pengalinya adalah 3⁴ = 81", benar: false },
      { huruf: "c", teks: "Salah, karena hanya satu baris yang berubah", benar: false },
      { huruf: "d", teks: "Salah, skalar tidak dapat difaktorkan dari satu kolom tunggal", benar: false },
      { huruf: "e", teks: "Hanya berlaku jika matriks berbentuk diagonal", benar: false }
    ]
  },
  {
    no: 4,
    soal: `Jika diketahui matriks:<br/>
      <div class="my-3 flex items-center justify-center gap-6 flex-wrap font-mono text-xs sm:text-sm">
        <div>
          <span>A = </span>
          <span class="inline-flex items-center align-middle mx-1 font-mono">
            <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
            <span class="grid grid-cols-3 gap-x-3 gap-y-1 px-2.5 py-0.5 text-center font-mono text-xs sm:text-sm">
              <span>6</span><span>5</span><span>3</span>
              <span>2</span><span>3</span><span>1</span>
              <span>5</span><span>1</span><span>3</span>
              <span>7</span><span>2</span><span>5</span>
            </span>
            <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
          </span>
          <span class="text-xs text-slate-500 font-sans">(ordo 4×3)</span>
        </div>
        <div>
          <span>B = </span>
          ${formatMat3x3([
            [4, 3, 1],
            [4, 5, 3],
            [6, 6, 3]
          ])}
          <span class="text-xs text-slate-500 font-sans">(ordo 3×3)</span>
        </div>
      </div>
      Tentukan hasil perkalian matriks <b>AB</b> = ...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Perkalian Matriks (4×3) × (3×3) = (4×3):</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Baris 1 A × Kolom B:</b><br/>
            c₁₁ = 6(4)+5(4)+3(6) = 24+20+18 = <b>62</b><br/>
            c₁₂ = 6(3)+5(5)+3(6) = 18+25+18 = <b>61</b><br/>
            c₁₃ = 6(1)+5(3)+3(3) = 6+15+9 = <b>30</b>
          </li>
          <li><b>Baris 2 A × Kolom B:</b><br/>
            c₂₁ = 2(4)+3(4)+1(6) = 8+12+6 = <b>26</b><br/>
            c₂₂ = 2(3)+3(5)+1(6) = 6+15+6 = <b>27</b><br/>
            c₂₃ = 2(1)+3(3)+1(3) = 2+9+3 = <b>14</b>
          </li>
          <li><b>Baris 3 A × Kolom B:</b><br/>
            c₃₁ = 5(4)+1(4)+3(6) = 20+4+18 = <b>42</b><br/>
            c₃₂ = 5(3)+1(5)+3(6) = 15+5+18 = <b>38</b><br/>
            c₃₃ = 5(1)+1(3)+3(3) = 5+3+9 = <b>17</b>
          </li>
          <li><b>Baris 4 A × Kolom B:</b><br/>
            c₄₁ = 7(4)+2(4)+5(6) = 28+8+30 = <b>66</b><br/>
            c₄₂ = 7(3)+2(5)+5(6) = 21+10+30 = <b>61</b><br/>
            c₄₃ = 7(1)+2(3)+5(3) = 7+6+15 = <b>28</b>
          </li>
        </ul>
        <p class="text-emerald-700 font-semibold pt-1">Hasil Matriks AB berordo 4×3 dengan baris berturut-turut: [62, 61, 30], [26, 27, 14], [42, 38, 17], dan [66, 61, 28].</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Matriks ordo 4×3: [[62, 61, 30], [26, 27, 14], [42, 38, 17], [66, 61, 28]]", benar: true },
      { huruf: "b", teks: "Matriks ordo 3×4: [[62, 26, 42, 66], [61, 27, 38, 61], [30, 14, 17, 28]]", benar: false },
      { huruf: "c", teks: "Matriks ordo 4×3: [[54, 55, 28], [24, 25, 12], [40, 36, 15], [60, 58, 25]]", benar: false },
      { huruf: "d", teks: "Tidak terdefinisi karena ordo matriks A tidak sama dengan ordo matriks B", benar: false },
      { huruf: "e", teks: "Matriks ordo 3×3: [[62, 61, 30], [26, 27, 14], [42, 38, 17]]", benar: false }
    ]
  },
  {
    no: 5,
    soal: `Jika diketahui matriks:<br/>
      <div class="my-3 flex items-center justify-center gap-6 flex-wrap font-mono text-xs sm:text-sm">
        <div><span>A = </span>${formatMat3x3([[4, 1, 2], [2, 1, 0], [4, 3, 1]])}</div>
        <div><span>B = </span>${formatMat3x3([[3, 5, 0], [1, 2, 6], [1, 4, 4]])}</div>
      </div>
      Tentukan invers dari matriks <b>(A + B)ᵀ</b> = ...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Invers ((A + B)ᵀ):</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Hitung Penjumlahan S = A + B:</b><br/>
            <code>S = [[4+3, 1+5, 2+0], [2+1, 1+2, 0+6], [4+1, 3+4, 1+4]] = [[7, 6, 2], [3, 3, 6], [5, 7, 5]]</code>
          </li>
          <li>
            <b>Transpose Sᵀ = (A + B)ᵀ:</b><br/>
            <code>Sᵀ = [[7, 3, 5], [6, 3, 7], [2, 6, 5]]</code>
          </li>
          <li>
            <b>Hitung Determinan det(Sᵀ) = det(S):</b><br/>
            <code>det = 7(15 - 42) - 3(30 - 14) + 5(36 - 6) = 7(-27) - 3(16) + 5(30) = -189 - 48 + 150 = -87</code>.
          </li>
          <li>
            <b>Matriks Kofaktor dari Sᵀ:</b><br/>
            C₁₁ = -27, C₁₂ = -16, C₁₃ = 30<br/>
            C₂₁ = 15,  C₂₂ = 25,  C₂₃ = -36<br/>
            C₃₁ = 6,   C₃₂ = -19, C₃₃ = 3<br/>
            <code>Adj(Sᵀ) = Cᵀ = [[-27, 15, 6], [-16, 25, -19], [30, -36, 3]]</code>
          </li>
          <li>
            <b>Invers:</b><br/>
            <code>(Sᵀ)⁻¹ = (1 / -87) · Adj(Sᵀ) = [[27/87, -15/87, -6/87], [16/87, -25/87, 19/87], [-30/87, 36/87, -3/87]] = [[9/29, -5/29, -2/29], [16/87, -25/87, 19/87], [-10/29, 12/29, -1/29]]</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: Matriks invers dengan penyebut determinan -87 (atau reduksi /29).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "(1/-87) · [[-27, 15, 6], [-16, 25, -19], [30, -36, 3]] (atau [[9/29, -5/29, -2/29], [16/87, -25/87, 19/87], [-10/29, 12/29, -1/29]])", benar: true },
      { huruf: "b", teks: "(1/87) · [[27, -15, -6], [16, -25, 19], [-30, 36, -3]]", benar: false },
      { huruf: "c", teks: "(1/-87) · [[-27, -16, 30], [15, 25, -36], [6, -19, 3]]", benar: false },
      { huruf: "d", teks: "Matriks singular sehingga tidak memiliki invers (det = 0)", benar: false },
      { huruf: "e", teks: "(1/105) · [[9, -5, -2], [16, -25, 19], [-10, 12, -1]]", benar: false }
    ]
  },
  {
    no: 6,
    soal: `Tentukan invers dari matriks A berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat3x3([
          [3, 1, 9],
          [3, 3, 0],
          [3, 1, 7]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Menghitung Invers Matriks A (Ordo 3×3):</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Hitung Determinan det(A):</b><br/>
            Perhatikan R₁ - R₃ = [0, 0, 2].<br/>
            <code>det(A) = 2 · (3(3) - 3(1)) = 2 · (9 - 3) = 2 · 6 = 12 ... (dengan tanda kofaktor baris 3 = -12)</code>.<br/>
            Secara ekspansi langsung: <code>3(21 - 0) - 1(21 - 0) + 9(3 - 9) = 63 - 21 - 54 = -12</code>.
          </li>
          <li>
            <b>Matriks Kofaktor C:</b><br/>
            C₁₁ = +(21) = 21,  C₁₂ = -(21) = -21, C₁₃ = +(3 - 9) = -6<br/>
            C₂₁ = -(7 - 9) = 2, C₂₂ = +(21 - 27) = -6, C₂₃ = -(3 - 3) = 0<br/>
            C₃₁ = +(0 - 27) = -27, C₃₂ = -(0 - 27) = 27, C₃₃ = +(9 - 3) = 6
          </li>
          <li>
            <b>Adjoin Matriks Adj(A) = Cᵀ:</b><br/>
            <code>Adj(A) = [[21, 2, -27], [-21, -6, 27], [-6, 0, 6]]</code>
          </li>
          <li>
            <b>Invers A⁻¹ = (1 / det(A)) · Adj(A):</b><br/>
            <code>A⁻¹ = (1 / -12) · [[21, 2, -27], [-21, -6, 27], [-6, 0, 6]] = [[-7/4, -1/6, 9/4], [7/4, 1/2, -9/4], [1/2, 0, -1/2]]</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>[[-7/4, -1/6, 9/4], [7/4, 1/2, -9/4], [1/2, 0, -1/2]]</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "[[-7/4, -1/6, 9/4], [7/4, 1/2, -9/4], [1/2, 0, -1/2]]", benar: true },
      { huruf: "b", teks: "[[7/4, 1/6, -9/4], [-7/4, -1/2, 9/4], [-1/2, 0, 1/2]]", benar: false },
      { huruf: "c", teks: "[[-21, -2, 27], [21, 6, -27], [6, 0, -6]]", benar: false },
      { huruf: "d", teks: "[[-7/4, 7/4, 1/2], [-1/6, 1/2, 0], [9/4, -9/4, -1/2]]", benar: false },
      { huruf: "e", teks: "Matriks tidak memiliki invers karena det(A) = 0", benar: false }
    ]
  },
  {
    no: 7,
    soal: `Tentukan invers dari matriks A berordo 4×4 berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat4x4([
          [9, 9, 9, 6],
          [9, 5, 6, 9],
          [3, 0, 3, 5],
          [7, 2, 4, 8]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Metode Reduksi Gauss-Jordan [A | I] ⟶ [I | A⁻¹]:</p>
        <p>Bentuk matriks gabungan berukuran 4×8: <code>[A | I₄]</code>.</p>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Normalisasi baris 1 (R₁ / 9): diperoleh pivot utama 1 pada posisi (1,1).</li>
          <li>Eliminasi kolom 1 di bawah pivot dengan R₂' = R₂ - 9R₁, R₃' = R₃ - 3R₁, R₄' = R₄ - 7R₁.</li>
          <li>Lakukan eliminasi bertahap pada pivot kolom 2, 3, dan 4 hingga ruas kiri tereduksi penuh menjadi matriks identitas I₄.</li>
          <li>Matriks pada ruas kanan adalah matriks invers A⁻¹. Perhatikan bahwa matriks A nonsingular (det(A) ≠ 0) sehingga inversnya unik dan terdefinisi.</li>
        </ol>
        <p class="text-emerald-700 font-semibold">Hasil akhir A⁻¹ diperoleh melalui eliminasi terbalik (back-elimination) dari baris ke-4 ke baris ke-1.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Matriks invers A⁻¹ terdefinisi dan diperoleh melalui operasi baris elementer terbalik Gauss-Jordan [A | I₄] ⟶ [I₄ | A⁻¹]", benar: true },
      { huruf: "b", teks: "Matriks A singular (det = 0) sehingga tidak memiliki invers", benar: false },
      { huruf: "c", teks: "Invers hanya dapat dicari jika matriks berordo 2×2 atau 3×3", benar: false },
      { huruf: "d", teks: "A⁻¹ = Aᵀ (matriks ortogonal)", benar: false },
      { huruf: "e", teks: "A⁻¹ = -A", benar: false }
    ]
  },
  {
    no: 8,
    soal: `Jabarkan perhitungan dari OBE yang digunakan untuk mendapatkan matriks di sebelah kanan dari matriks di kiri-nya:<br/>
      <div class="my-3 space-y-2 bg-slate-50 p-3 border border-slate-200 font-mono text-xs">
        <div class="font-bold text-slate-800">Matriks Awal:</div>
        <div class="flex items-center gap-3 flex-wrap">
          <div>Kiri: ${formatMat4x4([[1, 0, 0, 18], [0, 1, 0, -7], [0, 0, 1, -2], [0, 0, 0, 1]])}</div>
          <div>Kanan: ${formatMat4x4([[13, -7, -2, 0], [-4, 2, 1, 0], [-3, 2, 0, 0], [2, -2, '3/5', '1/5']])}</div>
        </div>
        <div class="font-bold text-slate-800 pt-2">Matriks Akhir:</div>
        <div class="flex items-center gap-3 flex-wrap">
          <div>Kiri: ${formatMat4x4([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]])}</div>
          <div>Kanan: ${formatMat4x4([[-23, 29, '-64/5', '-18/5'], [10, -12, '26/5', '7/5'], [1, -2, '6/5', '2/5'], [2, -2, '3/5', '1/5']])}</div>
        </div>
      </div>
      Operasi Baris Elementer (OBE) yang diterapkan pada matriks awal untuk menghasilkan matriks akhir adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Analisis Penjabaran OBE (Eliminasi Mundur / Back-Substitution Kolom 4):</p>
        <p>Tujuan operasi adalah mengubah kolom ke-4 pada matriks kiri dari <code>[18, -7, -2, 1]ᵀ</code> menjadi <code>[0, 0, 0, 1]ᵀ</code> menggunakan baris acuan R₄:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Operasi Baris 1: R₁' = R₁ - 18 · R₄</b><br/>
            Ruas Kanan: <code>[13, -7, -2, 0] - 18 · [2, -2, 3/5, 1/5] = [13 - 36, -7 + 36, -2 - 54/5, 0 - 18/5] = [-23, 29, -64/5, -18/5]</code> (Tepat!)
          </li>
          <li>
            <b>Operasi Baris 2: R₂' = R₂ + 7 · R₄</b><br/>
            Ruas Kanan: <code>[-4, 2, 1, 0] + 7 · [2, -2, 3/5, 1/5] = [-4 + 14, 2 - 14, 1 + 21/5, 0 + 7/5] = [10, -12, 26/5, 7/5]</code> (Tepat!)
          </li>
          <li>
            <b>Operasi Baris 3: R₃' = R₃ + 2 · R₄</b><br/>
            Ruas Kanan: <code>[-3, 2, 0, 0] + 2 · [2, -2, 3/5, 1/5] = [-3 + 4, 2 - 4, 0 + 6/5, 0 + 2/5] = [1, -2, 6/5, 2/5]</code> (Tepat!)
          </li>
          <li>
            <b>Baris 4 Tetap:</b> <code>R₄' = R₄</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Rangkaian OBE: <b>R₁' = R₁ - 18R₄, &nbsp;R₂' = R₂ + 7R₄, &nbsp;R₃' = R₃ + 2R₄</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "R₁' = R₁ - 18R₄, R₂' = R₂ + 7R₄, R₃' = R₃ + 2R₄", benar: true },
      { huruf: "b", teks: "R₁' = R₁ + 18R₄, R₂' = R₂ - 7R₄, R₃' = R₃ - 2R₄", benar: false },
      { huruf: "c", teks: "R₁' = R₁ - 18R₂, R₂' = R₂ + 7R₃, R₃' = R₃ + 2R₁", benar: false },
      { huruf: "d", teks: "R₄' = R₄ - 18R₁, R₄' = R₄ + 7R₂, R₄' = R₄ + 2R₃", benar: false },
      { huruf: "e", teks: "R₁' = (1/18)R₁, R₂' = (-1/7)R₂, R₃' = (-1/2)R₃", benar: false }
    ]
  },
  {
    no: 9,
    soal: `Teruskan proses dari metode Gauss berikut kemudian tentukan nilai variabel-variabelnya:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        <span class="inline-flex items-center align-middle mx-1 font-mono">
          <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
          <span class="grid grid-cols-4 gap-x-3 gap-y-1 px-2.5 py-0.5 text-center font-mono text-xs sm:text-sm">
            <span>2</span><span>5</span><span>3</span><span class="border-l border-slate-400 pl-2">10</span>
            <span>0</span><span>1/2</span><span>3/2</span><span class="border-l border-slate-400 pl-2">10</span>
            <span>0</span><span>-1/2</span><span>7/2</span><span class="border-l border-slate-400 pl-2">2</span>
          </span>
          <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
        </span>
      </div>
      Nilai penyelesaian (x, y, z) adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Eliminasi Gauss & Substitusi Balik:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Eliminasi Baris 3 dengan R₃' = R₃ + R₂:</b><br/>
            <code>R₃' = [0 + 0, (-1/2 + 1/2), (7/2 + 3/2) | 2 + 10] = [0, 0, 5 | 12]</code><br/>
            Persamaan baris ke-3 menjadi: <code>5z = 12 ⟹ <b>z = 12/5 = 2.4</b></code>.
          </li>
          <li>
            <b>Substitusi Balik ke Baris 2:</b><br/>
            <code>(1/2)y + (3/2)z = 10 ⟹ y + 3z = 20</code><br/>
            <code>y + 3(12/5) = 20 ⟹ y = 20 - 36/5 = (100 - 36)/5 ⟹ <b>y = 64/5 = 12.8</b></code>.
          </li>
          <li>
            <b>Substitusi Balik ke Baris 1:</b><br/>
            <code>2x + 5y + 3z = 10</code><br/>
            <code>2x + 5(64/5) + 3(12/5) = 10 ⟹ 2x + 64 + 36/5 = 10</code><br/>
            <code>2x = 10 - 64 - 7.2 = -61.2 ⟹ <b>x = -30.6 = -153/5</b></code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Himpunan Penyelesaian: <b>x = -153/5 (-30.6), y = 64/5 (12.8), z = 12/5 (2.4)</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "x = -153/5 (-30.6), y = 64/5 (12.8), z = 12/5 (2.4)", benar: true },
      { huruf: "b", teks: "x = 153/5 (30.6), y = -64/5 (-12.8), z = 12/5 (2.4)", benar: false },
      { huruf: "c", teks: "x = -10, y = 5, z = 2", benar: false },
      { huruf: "d", teks: "x = -25/2, y = 8, z = 3", benar: false },
      { huruf: "e", teks: "Sistem tidak memiliki solusi (inkonsisten)", benar: false }
    ]
  },
  {
    no: 10,
    soal: `Selesaikanlah sistem persamaan linier 4 variabel berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>(1) 3x₁ + 5x₂ + x₃ = 14</div>
        <div>(2) 2x₁ + 3x₂ + 4x₄ = 16</div>
        <div>(3) x₂ + 5x₃ + x₄ = 9</div>
        <div>(4) x₁ + 3x₃ + 2x₄ = 8</div>
      </div>
      Maka nilai dari (x₁, x₂, x₃, x₄) berturut-turut adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Sistem Persamaan Linier 4 Variabel:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Dari Persamaan (4):</b><br/>
            <code>x₁ = 8 - 3x₃ - 2x₄</code>.
          </li>
          <li>
            <b>Substitusikan ke Persamaan (2):</b><br/>
            <code>2(8 - 3x₃ - 2x₄) + 3x₂ + 4x₄ = 16 ⟹ 16 - 6x₃ - 4x₄ + 3x₂ + 4x₄ = 16</code><br/>
            <code>3x₂ - 6x₃ = 0 ⟹ 3x₂ = 6x₃ ⟹ <b>x₂ = 2x₃</b></code>.
          </li>
          <li>
            <b>Substitusikan x₂ = 2x₃ ke Persamaan (3):</b><br/>
            <code>(2x₃) + 5x₃ + x₄ = 9 ⟹ 7x₃ + x₄ = 9 ⟹ <b>x₄ = 9 - 7x₃</b></code>.
          </li>
          <li>
            <b>Substitusikan x₁ dan x₂ ke Persamaan (1):</b><br/>
            <code>3(8 - 3x₃ - 2x₄) + 5(2x₃) + x₃ = 14</code><br/>
            <code>24 - 9x₃ - 6(9 - 7x₃) + 10x₃ + x₃ = 14</code><br/>
            <code>24 - 9x₃ - 54 + 42x₃ + 11x₃ = 14 ⟹ 44x₃ - 30 = 14 ⟹ 44x₃ = 44 ⟹ <b>x₃ = 1</b></code>.
          </li>
          <li>
            <b>Hitung nilai variabel lainnya:</b><br/>
            <code>x₂ = 2(1) = <b>2</b></code><br/>
            <code>x₄ = 9 - 7(1) = <b>2</b></code><br/>
            <code>x₁ = 8 - 3(1) - 2(2) = 8 - 3 - 4 = <b>1</b></code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Solusi Eksak: <b>x₁ = 1, x₂ = 2, x₃ = 1, x₄ = 2</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "x₁ = 1, x₂ = 2, x₃ = 1, x₄ = 2", benar: true },
      { huruf: "b", teks: "x₁ = 2, x₂ = 1, x₃ = 2, x₄ = 1", benar: false },
      { huruf: "c", teks: "x₁ = 1, x₂ = 1, x₃ = 1, x₄ = 1", benar: false },
      { huruf: "d", teks: "x₁ = 3, x₂ = 1, x₃ = 2, x₄ = 0", benar: false },
      { huruf: "e", teks: "x₁ = -1, x₂ = 4, x₃ = 1, x₄ = 3", benar: false }
    ]
  }
];

// Alias ke paket UTS Aljabar Linier
window.BankSoalData.questions['sem1-alin-uts'] = window.BankSoalData.questions['sem1-alin-uts-a'];
