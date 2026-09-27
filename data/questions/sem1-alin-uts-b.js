/**
 * ============================================================================
 * BANK SOAL: ALJABAR LINIER (MAT102) — UTS TIPE B
 * Semester 1 Teknik Informatika
 * Memuat 10 butir soal evaluasi asli UTS Tipe B:
 * 1. Determinan Matriks 3×3 (Metode Ekspansi Kofaktor)
 * 2. Determinan Matriks 4×4 dengan Baris/Kolom Nol
 * 3. Pembuktian Teorema Determinan Berfaktor Skalar pada Baris
 * 4. Perkalian Matriks Ordo (4×3) × (3×3)
 * 5. Invers dari Transpose Penjumlahan Matriks: ((A + B)^T)^-1
 * 6. Invers Matriks 3×3 (Metode Matriks Adjoin & Kofaktor)
 * 7. Invers Matriks 4×4 (Metode Adjoin & Kofaktor)
 * 8. Penjabaran Operasi Baris Elementer (OBE) Tiga Langkah
 * 9. Metode Eliminasi Gauss & Back-Substitution
 * 10. Penyelesaian Sistem Persamaan Linier 4 Variabel Pecahan
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

// Helper formatter matriks 3x3
function formatMat3x3_B(rows) {
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
function formatMat4x4_B(rows) {
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

// Helper formatter matriks augmented berpartisi 4x4 | 4x4 (sesuai Gambar 2)
function formatPartitionedMat4x8_B(leftRows, rightRows) {
  const leftCells = leftRows.flat().map(val => `<span style="padding: 2px 4px; text-align: center; white-space: nowrap;">${val}</span>`).join('');
  const rightCells = rightRows.flat().map(val => `<span style="padding: 2px 4px; text-align: center; white-space: nowrap;">${val}</span>`).join('');
  return `
    <span class="inline-flex items-center align-middle font-mono my-2 text-slate-900" style="display: inline-flex; vertical-align: middle;">
      <span style="align-self: stretch; border-left: 2px solid currentColor; border-top: 2px solid currentColor; border-bottom: 2px solid currentColor; width: 5px; flex-shrink: 0; margin-right: 3px;"></span>
      <span style="display: grid; grid-template-columns: repeat(4, auto); column-gap: 10px; row-gap: 4px; padding: 2px 6px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.25;">
        ${leftCells}
      </span>
      <span style="align-self: stretch; border-right: 1.5px dashed #475569; margin: 0 6px;"></span>
      <span style="display: grid; grid-template-columns: repeat(4, auto); column-gap: 10px; row-gap: 4px; padding: 2px 6px; text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1.25;">
        ${rightCells}
      </span>
      <span style="align-self: stretch; border-right: 2px solid currentColor; border-top: 2px solid currentColor; border-bottom: 2px solid currentColor; width: 5px; flex-shrink: 0; margin-left: 3px;"></span>
    </span>
  `.trim();
}

window.BankSoalData.questions['sem1-alin-uts-b'] = [
  {
    no: 1,
    soal: `Tentukan nilai determinan dari matriks 3×3 berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat3x3_B([
          [1, 2, -2],
          [4, -3, 2],
          [2, 5, 1]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Determinan 3×3 (Ekspansi Kofaktor Baris Pertama):</p>
        <p><code>det = 1 · [(-3)(1) - (2)(5)] - 2 · [(4)(1) - (2)(2)] + (-2) · [(4)(5) - (-3)(2)]</code></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Suku 1: <code>1 · (-3 - 10) = 1 · (-13) = -13</code></li>
          <li>Suku 2: <code>-2 · (4 - 4) = -2 · (0) = 0</code></li>
          <li>Suku 3: <code>-2 · (20 - (-6)) = -2 · (20 + 6) = -2 · (26) = -52</code></li>
        </ul>
        <p><code>det = -13 - 0 - 52 = <b>-65</b></code></p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>-65</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-65", benar: true },
      { huruf: "b", teks: "65", benar: false },
      { huruf: "c", teks: "-39", benar: false },
      { huruf: "d", teks: "-52", benar: false },
      { huruf: "e", teks: "13", benar: false }
    ]
  },
  {
    no: 2,
    soal: `Tentukan nilai determinan dari matriks 4×4 berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat4x4_B([
          [2, 0, 1, 1],
          [1, 0, 9, 0],
          [6, 5, 1, 0],
          [1, 1, 4, 1]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Ekspansi Kofaktor Baris Kedua:</p>
        <p>Baris kedua memiliki tiga elemen bernilai 0 dan hanya memuat elemen pada kolom 1 dan 3:</p>
        <p><code>det = -1 · det(M₂₁) + 0 - 9 · det(M₂₃) + 0 = -1 · det(M₂₁) - 9 · det(M₂₃)</code></p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Hitung Minor M₂₁ (tutup baris 2, kolom 1):</b><br/>
            <code>M₂₁ = [[0, 1, 1], [5, 1, 0], [1, 4, 1]]</code><br/>
            <code>det(M₂₁) = -1(5 - 0) + 1(20 - 1) = -5 + 19 = 14</code>.
          </li>
          <li>
            <b>Hitung Minor M₂₃ (tutup baris 2, kolom 3):</b><br/>
            <code>M₂₃ = [[2, 0, 1], [6, 5, 0], [1, 1, 1]]</code><br/>
            <code>det(M₂₃) = 2(5 - 0) - 0 + 1(6 - 5) = 10 + 1 = 11</code>.
          </li>
          <li>
            <b>Total Determinan:</b><br/>
            <code>det = -1(14) - 9(11) = -14 - 99 = <b>-113</b></code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>-113</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-113", benar: true },
      { huruf: "b", teks: "113", benar: false },
      { huruf: "c", teks: "-99", benar: false },
      { huruf: "d", teks: "-127", benar: false },
      { huruf: "e", teks: "85", benar: false }
    ]
  },
  {
    no: 3,
    soal: `Buktikan persamaan yang memuat determinan berikut:<br/>
      <div class="my-3 flex items-center justify-center gap-3 flex-wrap font-mono text-xs sm:text-sm">
        ${formatMat4x4_B([
          [3, 12, 3, 3],
          [6, 7, 1, 3],
          [9, 7, 7, 8],
          [7, 9, 7, 7]
        ])}
        <span class="font-bold text-base">= 3 ·</span>
        ${formatMat4x4_B([
          [1, 4, 1, 1],
          [6, 7, 1, 3],
          [9, 7, 7, 8],
          [7, 9, 7, 7]
        ])}
      </div>
      Pernyataan kesamaan determinan di atas adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Bukti Matematis (Sifat Penggandaan Skalar pada Baris Matriks):</p>
        <p>Berdasarkan teorema determinan:</p>
        <p class="bg-blue-50 p-2 border border-blue-200 font-mono text-xs">
          "Jika salah satu baris (atau kolom) suatu matriks dikalikan dengan skalar k, maka nilai determinan matriks tersebut juga menjadi k kali determinan semula."
        </p>
        <p>Perhatikan baris pertama pada matriks di ruas kiri:</p>
        <p><code>[3, 12, 3, 3] = 3 · [1, 4, 1, 1]</code></p>
        <p>Karena baris kedua, ketiga, dan keempat pada kedua matriks identik sama persis, maka skalar 3 dapat dikeluarkan dari baris pertama matriks ruas kiri sehingga terbukti sama persis dengan ruas kanan.</p>
        <p class="text-emerald-700 font-semibold">Kesimpulan: <b>Terbukti berdasarkan sifat skalar pada baris matriks</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Terbukti Benar (Berdasarkan sifat skalar faktor pada baris determinan matriks)", benar: true },
      { huruf: "b", teks: "Salah, seharusnya pengalinya adalah 3⁴ = 81", benar: false },
      { huruf: "c", teks: "Salah, karena hanya baris pertama yang memuat faktor 3", benar: false },
      { huruf: "d", teks: "Salah, skalar hanya dapat dikeluarkan jika mengalikan seluruh elemen matriks", benar: false },
      { huruf: "e", teks: "Hanya berlaku jika matriks berordo 2×2", benar: false }
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
              <span>3</span><span>1</span><span>2</span>
              <span>4</span><span>3</span><span>2</span>
              <span>2</span><span>5</span><span>1</span>
              <span>1</span><span>7</span><span>3</span>
            </span>
            <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
          </span>
          <span class="text-xs text-slate-500 font-sans">(ordo 4×3)</span>
        </div>
        <div>
          <span>B = </span>
          ${formatMat3x3_B([
            [6, 5, 1],
            [3, 1, 0],
            [2, 7, 5]
          ])}
          <span class="text-xs text-slate-500 font-sans">(ordo 3×3)</span>
        </div>
      </div>
      Maka hasil perkalian matriks <b>AB</b> = ...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Perkalian Matriks (4×3) × (3×3) = (4×3):</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Baris 1 A × Kolom B:</b><br/>
            c₁₁ = 3(6) + 1(3) + 2(2) = 18 + 3 + 4 = <b>25</b><br/>
            c₁₂ = 3(5) + 1(1) + 2(7) = 15 + 1 + 14 = <b>30</b><br/>
            c₁₃ = 3(1) + 1(0) + 2(5) = 3 + 0 + 10 = <b>13</b>
          </li>
          <li><b>Baris 2 A × Kolom B:</b><br/>
            c₂₁ = 4(6) + 3(3) + 2(2) = 24 + 9 + 4 = <b>37</b><br/>
            c₂₂ = 4(5) + 3(1) + 2(7) = 20 + 3 + 14 = <b>37</b><br/>
            c₂₃ = 4(1) + 3(0) + 2(5) = 4 + 0 + 10 = <b>14</b>
          </li>
          <li><b>Baris 3 A × Kolom B:</b><br/>
            c₃₁ = 2(6) + 5(3) + 1(2) = 12 + 15 + 2 = <b>29</b><br/>
            c₃₂ = 2(5) + 5(1) + 1(7) = 10 + 5 + 7 = <b>22</b><br/>
            c₃₃ = 2(1) + 5(0) + 1(5) = 2 + 0 + 5 = <b>7</b>
          </li>
          <li><b>Baris 4 A × Kolom B:</b><br/>
            c₄₁ = 1(6) + 7(3) + 3(2) = 6 + 21 + 6 = <b>33</b><br/>
            c₄₂ = 1(5) + 7(1) + 3(7) = 5 + 7 + 21 = <b>33</b><br/>
            c₄₃ = 1(1) + 7(0) + 3(5) = 1 + 0 + 15 = <b>16</b>
          </li>
        </ul>
        <p class="text-emerald-700 font-semibold pt-1">Hasil matriks AB berordo 4×3: <b>[[25, 30, 13], [37, 37, 14], [29, 22, 7], [33, 33, 16]]</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Matriks ordo 4×3: [[25, 30, 13], [37, 37, 14], [29, 22, 7], [33, 33, 16]]", benar: true },
      { huruf: "b", teks: "Matriks ordo 3×4: [[25, 37, 29, 33], [30, 37, 22, 33], [13, 14, 7, 16]]", benar: false },
      { huruf: "c", teks: "Matriks ordo 4×3: [[20, 25, 10], [32, 30, 12], [24, 18, 5], [30, 28, 14]]", benar: false },
      { huruf: "d", teks: "Tidak terdefinisi karena jumlah baris A tidak sama dengan kolom B", benar: false },
      { huruf: "e", teks: "Matriks ordo 3×3: [[25, 30, 13], [37, 37, 14], [29, 22, 7]]", benar: false }
    ]
  },
  {
    no: 5,
    soal: `Jika diketahui matriks penjumlahan:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        <span>(A + B) = </span>
        ${formatMat3x3_B([
          [4, 3, 5],
          [8, 7, 8],
          [5, 5, 4]
        ])}
      </div>
      Maka invers dari matriks transpose <b>(A + B)ᵀ</b> adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Invers ((A + B)ᵀ):</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Bentuk Matriks Transpose C = (A + B)ᵀ:</b><br/>
            <code>C = [[4, 8, 5], [3, 7, 5], [5, 8, 4]]</code>
          </li>
          <li>
            <b>Hitung Determinan det(C):</b><br/>
            <code>det(C) = 4(28 - 40) - 8(12 - 25) + 5(24 - 35) = 4(-12) - 8(-13) + 5(-11) = -48 + 104 - 55 = <b>1</b></code>.
          </li>
          <li>
            <b>Matriks Kofaktor & Adjoin:</b><br/>
            Karena determinan = 1, maka <code>C⁻¹ = (1 / det) · Adj(C) = Adj(C)</code>.<br/>
            <code>Adj(C) = [[-12, 8, 5], [13, -9, -5], [-11, 8, 4]]</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Hasil Invers: <b>[[-12, 8, 5], [13, -9, -5], [-11, 8, 4]]</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "[[-12, 8, 5], [13, -9, -5], [-11, 8, 4]]", benar: true },
      { huruf: "b", teks: "[[12, -8, -5], [-13, 9, 5], [11, -8, -4]]", benar: false },
      { huruf: "c", teks: "[[-12, 13, -11], [8, -9, 8], [5, -5, 4]]", benar: false },
      { huruf: "d", teks: "Matriks tidak memiliki invers karena det = 0", benar: false },
      { huruf: "e", teks: "(1/2) · [[-12, 8, 5], [13, -9, -5], [-11, 8, 4]]", benar: false }
    ]
  },
  {
    no: 6,
    soal: `Tentukan invers dari matriks A berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat3x3_B([
          [3, 7, 1],
          [6, 2, 4],
          [2, 7, 0]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Invers 3×3:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Hitung Determinan det(A):</b><br/>
            Ekspansi pada baris ketiga (memuat elemen 0):<br/>
            <code>det(A) = 2(28 - 2) - 7(12 - 6) + 0 = 2(26) - 7(6) = 52 - 42 = <b>10</b></code>.
          </li>
          <li>
            <b>Matriks Adjoin Adj(A):</b><br/>
            <code>Adj(A) = [[-28, 7, 26], [8, -2, -6], [38, -7, -36]]</code>.
          </li>
          <li>
            <b>Invers A⁻¹ = (1/10) · Adj(A):</b><br/>
            <code>A⁻¹ = (1/10) · [[-28, 7, 26], [8, -2, -6], [38, -7, -36]] = [[-2.8, 0.7, 2.6], [0.8, -0.2, -0.6], [3.8, -0.7, -3.6]]</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Hasil Invers: <b>[[-2.8, 0.7, 2.6], [0.8, -0.2, -0.6], [3.8, -0.7, -3.6]]</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "[[-2.8, 0.7, 2.6], [0.8, -0.2, -0.6], [3.8, -0.7, -3.6]] (atau (1/10) · [[-28, 7, 26], [8, -2, -6], [38, -7, -36]])", benar: true },
      { huruf: "b", teks: "[[2.8, -0.7, -2.6], [-0.8, 0.2, 0.6], [-3.8, 0.7, 3.6]]", benar: false },
      { huruf: "c", teks: "[[-28, 8, 38], [7, -2, -7], [26, -6, -36]]", benar: false },
      { huruf: "d", teks: "Matriks singular sehingga tidak memiliki invers", benar: false },
      { huruf: "e", teks: "(1/12) · [[-28, 7, 26], [8, -2, -6], [38, -7, -36]]", benar: false }
    ]
  },
  {
    no: 7,
    soal: `Tentukan invers dari matriks A berordo 4×4 berikut:<br/>
      <div class="my-3 flex items-center justify-center font-mono text-xs sm:text-sm">
        ${formatMat4x4_B([
          [9, 3, 1, 9],
          [4, 6, 1, 4],
          [2, 4, 1, 2],
          [9, 2, 7, 4]
        ])}
      </div>`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Invers 4×4:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Determinan:</b> Diperoleh <code>det(A) = -80</code>.
          </li>
          <li>
            <b>Matriks Adjoin:</b><br/>
            <code>Adj(A) = [[32, -192, 272, -16], [10, -35, 25, 0], [-20, 150, -210, 0], [-42, 187, -257, 16]]</code>.
          </li>
          <li>
            <b>Invers A⁻¹ = (1 / -80) · Adj(A):</b><br/>
            <code>A⁻¹ = [[-2/5, 12/5, -17/5, 1/5], [-1/8, 7/16, -5/16, 0], [1/4, -15/8, 21/8, 0], [21/40, -187/80, 257/80, -1/5]]</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Hasil Invers pecahan: <b>[[-2/5, 12/5, -17/5, 1/5], [-1/8, 7/16, -5/16, 0], [1/4, -15/8, 21/8, 0], [21/40, -187/80, 257/80, -1/5]]</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "[[-2/5, 12/5, -17/5, 1/5], [-1/8, 7/16, -5/16, 0], [1/4, -15/8, 21/8, 0], [21/40, -187/80, 257/80, -1/5]]", benar: true },
      { huruf: "b", teks: "[[2/5, -12/5, 17/5, -1/5], [1/8, -7/16, 5/16, 0], [-1/4, 15/8, -21/8, 0], [-21/40, 187/80, -257/80, 1/5]]", benar: false },
      { huruf: "c", teks: "(1/80) · [[32, -192, 272, -16], [10, -35, 25, 0], [-20, 150, -210, 0], [-42, 187, -257, 16]]", benar: false },
      { huruf: "d", teks: "Matriks tidak memiliki invers karena det = 0", benar: false },
      { huruf: "e", teks: "[[-1/5, 6/5, -8/5, 1/5], [-1/4, 3/8, -1/8, 0], [1/2, -1, 2, 0], [1/2, -2, 3, -1/5]]", benar: false }
    ]
  },
  {
    no: 8,
    soal: `Jabarkan perhitungan dari OBE yang digunakan untuk mendapatkan matriks di sebelah kanan berikut dari matriks di kiri-nya:<br/>
      <div class="my-4 overflow-x-auto py-2">
        <div class="flex items-center justify-center gap-2 sm:gap-4 flex-nowrap min-w-max px-2">
          ${formatPartitionedMat4x8_B(
            [
              [1, 2, '3/2', 1],
              [0, 1, -1, -5],
              [0, 0, '1/2', -1],
              [0, -3, 8, 10]
            ],
            [
              ['1/2', 0, 0, 0],
              [-1, 0, 1, 0],
              ['-3/2', 1, 0, 0],
              [-2, 0, 0, 1]
            ]
          )}
          <span class="text-base sm:text-2xl font-bold font-mono text-slate-700 px-1 sm:px-2">~</span>
          ${formatPartitionedMat4x8_B(
            [
              [1, 0, '7/2', 11],
              [0, 1, -1, -5],
              [0, 0, 1, -2],
              [0, 0, 5, -5]
            ],
            [
              ['5/2', 0, -2, 0],
              [-1, 0, 1, 0],
              [-3, 2, 0, 0],
              [-5, 0, 3, 1]
            ]
          )}
        </div>
      </div>
      Rangkaian formula Operasi Baris Elementer (OBE) yang diterapkan pada matriks kiri untuk menghasilkan matriks kanan adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Analisis Perubahan Setiap Baris (OBE Matriks Augmented):</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Baris 2 tidak berubah:</b> <code>R₂' = R₂ = [0, 1, -1, -5 | -1, 0, 1, 0]</code> (sebagai baris pivot dengan elemen pivot bernilai 1 pada kolom 2).
          </li>
          <li>
            <b>Eliminasi Baris 1: <code>R₁' = R₁ - 2R₂</code></b><br/>
            Untuk mengeliminasi entri (1, 2) dari 2 menjadi 0:<br/>
            <code>[1, 2, 3/2, 1 | 1/2, 0, 0, 0] - 2[0, 1, -1, -5 | -1, 0, 1, 0] = [1, 0, 7/2, 11 | 5/2, 0, -2, 0]</code>.<br/>
            Sesuai persis dengan Baris 1 matriks kanan.
          </li>
          <li>
            <b>Penskalaan Baris 3: <code>R₃' = 2R₃</code></b><br/>
            Untuk mengubah pivot (3, 3) dari 1/2 menjadi 1:<br/>
            <code>2 · [0, 0, 1/2, -1 | -3/2, 1, 0, 0] = [0, 0, 1, -2 | -3, 2, 0, 0]</code>.<br/>
            Sesuai persis dengan Baris 3 matriks kanan.
          </li>
          <li>
            <b>Eliminasi Baris 4: <code>R₄' = R₄ + 3R₂</code></b><br/>
            Untuk mengeliminasi entri (4, 2) dari -3 menjadi 0:<br/>
            <code>[0, -3, 8, 10 | -2, 0, 0, 1] + 3[0, 1, -1, -5 | -1, 0, 1, 0] = [0, 0, 5, -5 | -5, 0, 3, 1]</code>.<br/>
            Sesuai persis dengan Baris 4 matriks kanan.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Rangkaian formula OBE yang diterapkan: <b>R₁' = R₁ - 2R₂, R₃' = 2R₃, R₄' = R₄ + 3R₂</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "R₁' = R₁ - 2R₂, R₃' = 2R₃, R₄' = R₄ + 3R₂", benar: true },
      { huruf: "b", teks: "R₁' = R₁ + 2R₂, R₃' = (1/2)R₃, R₄' = R₄ - 3R₂", benar: false },
      { huruf: "c", teks: "R₁' = R₁ - 2R₄, R₃' = 2R₁, R₄' = R₄ + 3R₁", benar: false },
      { huruf: "d", teks: "R₂' = R₂ - 2R₁, R₃' = 2R₃, R₂' = R₂ + 3R₄", benar: false },
      { huruf: "e", teks: "R₁' = (1/2)R₁, R₃' = 2R₃, R₄' = (1/3)R₄", benar: false }
    ]
  },
  {
    no: 9,
    soal: `Teruskan proses dari metode Gauss berikut kemudian tentukan nilai variabel-variabelnya:<br/>
      <div class="my-3 space-y-1 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>Persamaan 1: 2x₁ + 5x₂ + 3x₃ = 10</div>
        <div>Persamaan 2: -7x₂ - 4x₃ = -12</div>
        <div>Eliminasi baris 3 dengan R₃' = R₃ - (9/14)R₂ menghasilkan: (1/14)x₃ = 54/7</div>
      </div>
      Nilai (x₁, x₂, x₃) penyelesaian SPL tersebut adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Metode Gauss & Back-Substitution:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Menentukan x₃ dari Baris 3:</b><br/>
            <code>(1/14)x₃ = 54/7 ⟹ x₃ = (54/7) · 14 = 54 · 2 = <b>108</b></code>.
          </li>
          <li>
            <b>Substitusi x₃ = 108 ke Baris 2:</b><br/>
            <code>-7x₂ - 4(108) = -12 ⟹ -7x₂ - 432 = -12 ⟹ -7x₂ = 420 ⟹ <b>x₂ = -60</b></code>.
          </li>
          <li>
            <b>Substitusi x₂ dan x₃ ke Baris 1:</b><br/>
            <code>2x₁ + 5(-60) + 3(108) = 10 ⟹ 2x₁ - 300 + 324 = 10 ⟹ 2x₁ + 24 = 10 ⟹ 2x₁ = -14 ⟹ <b>x₁ = -7</b></code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Solusi SPL: <b>x₁ = -7, x₂ = -60, x₃ = 108</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "x₁ = -7, x₂ = -60, x₃ = 108", benar: true },
      { huruf: "b", teks: "x₁ = 7, x₂ = 60, x₃ = -108", benar: false },
      { huruf: "c", teks: "x₁ = -14, x₂ = -30, x₃ = 54", benar: false },
      { huruf: "d", teks: "x₁ = -7, x₂ = 60, x₃ = 108", benar: false },
      { huruf: "e", teks: "Sistem tidak memiliki solusi (inkonsisten)", benar: false }
    ]
  },
  {
    no: 10,
    soal: `Selesaikanlah sistem persamaan linier 4 variabel berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>(1) 3x₁ + 2x₂ + 3x₃ = 14</div>
        <div>(2) x₁ + 6x₂ + 4x₄ = 12</div>
        <div>(3) x₂ + x₃ + 7x₄ = 10</div>
        <div>(4) 2x₂ + 3x₃ + 2x₄ = 12</div>
      </div>
      Maka nilai dari (x₁, x₂, x₃, x₄) berturut-turut adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Sistem Persamaan Linier:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Dari Persamaan (3):</b> <code>x₃ = 10 - x₂ - 7x₄</code>.
          </li>
          <li>
            <b>Substitusikan ke Persamaan (4):</b><br/>
            <code>2x₂ + 3(10 - x₂ - 7x₄) + 2x₄ = 12 ⟹ -x₂ - 19x₄ = -18 ⟹ <b>x₂ = 18 - 19x₄</b></code>.
          </li>
          <li>
            <b>Nyatakan x₃ dalam x₄:</b><br/>
            <code>x₃ = 10 - (18 - 19x₄) - 7x₄ = <b>-8 + 12x₄</b></code>.
          </li>
          <li>
            <b>Dari Persamaan (2):</b><br/>
            <code>x₁ = 12 - 6x₂ - 4x₄ = 12 - 6(18 - 19x₄) - 4x₄ = <b>-96 + 110x₄</b></code>.
          </li>
          <li>
            <b>Substitusi seluruh variabel ke Persamaan (1):</b><br/>
            <code>3(-96 + 110x₄) + 2(18 - 19x₄) + 3(-8 + 12x₄) = 14</code><br/>
            <code>-288 + 330x₄ + 36 - 38x₄ - 24 + 36x₄ = 14</code><br/>
            <code>328x₄ - 276 = 14 ⟹ 328x₄ = 290 ⟹ <b>x₄ = 290/328 = 145/164</b></code>.
          </li>
          <li>
            <b>Hitung nilai variabel lainnya:</b><br/>
            <code>x₂ = 18 - 19(145/164) = <b>197/164</b></code><br/>
            <code>x₃ = -8 + 12(145/164) = -8 + 435/41 = <b>107/41</b></code><br/>
            <code>x₁ = 12 - 6(197/164) - 4(145/164) = <b>103/82</b></code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold pt-1">Solusi Pecahan: <b>x₁ = 103/82, x₂ = 197/164, x₃ = 107/41, x₄ = 145/164</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "x₁ = 103/82, x₂ = 197/164, x₃ = 107/41, x₄ = 145/164", benar: true },
      { huruf: "b", teks: "x₁ = 107/41, x₂ = 145/164, x₃ = 103/82, x₄ = 197/164", benar: false },
      { huruf: "c", teks: "x₁ = 1, x₂ = 2, x₃ = 1, x₄ = 2", benar: false },
      { huruf: "d", teks: "x₁ = 50/41, x₂ = 100/41, x₃ = 75/41, x₄ = 25/41", benar: false },
      { huruf: "e", teks: "Sistem persamaan inkonsisten (tidak memiliki solusi)", benar: false }
    ]
  }
];
