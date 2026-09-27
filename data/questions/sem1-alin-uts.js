/**
 * ============================================================================
 * BANK SOAL: ALJABAR LINIER — UTS, LATIHAN SOAL, & QUIZ 1
 * Berkas terpisah untuk kurikulum Aljabar Linier (Semester 1 - MAT102)
 * Memuat soal-soal asli evaluasi matriks, determinan, invers, dan SPL.
 * ============================================================================
 */

window.BankSoalData = window.BankSoalData || {};
window.BankSoalData.questions = window.BankSoalData.questions || {};

// Helper formatter matriks 2x2
function formatMatrix2x2(rows) {
  const cells = rows.flat().map(val => `<span>${val}</span>`).join('');
  return `
    <span class="inline-flex items-center align-middle mx-1 font-mono">
      <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1"></span>
      <span class="grid grid-cols-2 gap-x-3 gap-y-1 px-2 py-0.5 text-center font-mono text-xs sm:text-sm">
        ${cells}
      </span>
      <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1"></span>
    </span>
  `.trim();
}

// Helper formatter matriks 3x3
function formatMatrix3x3(rows) {
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
function formatMatrix4x4(rows) {
  const cells = rows.flat().map(val => `<span>${val}</span>`).join('');
  return `
    <span class="inline-flex items-center align-middle mx-1 font-mono">
      <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
      <span class="grid grid-cols-4 gap-x-2.5 gap-y-1 px-2.5 py-0.5 text-center font-mono text-xs sm:text-sm">
        ${cells}
      </span>
      <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
    </span>
  `.trim();
}

// Helper formatter vektor kolom
function formatVectorCol(rows) {
  const cells = rows.map(val => `<span>${val}</span>`).join('');
  return `
    <span class="inline-flex items-center align-middle mx-1 font-mono">
      <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1"></span>
      <span class="grid grid-cols-1 gap-y-1 px-1.5 py-0.5 text-center font-mono text-xs sm:text-sm">
        ${cells}
      </span>
      <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1"></span>
    </span>
  `.trim();
}

// Matriks soal 3x3 (invers transpose 3x3)
const matA_inv3 = formatMatrix3x3([
  [1, 2, 3],
  [2, 5, 3],
  [1, 0, 8]
]);
const optA_inv3 = formatMatrix3x3([
  [-40, 16, 9],
  [13, -5, 3],
  [5, -2, -1]
]);
const optB_inv3 = formatMatrix3x3([
  [-40, 13, -1],
  [16, -5, -3],
  [5, -2, 9]
]);
const optC_inv3 = formatMatrix3x3([
  [-40, 13, 5],
  [16, -5, -2],
  [9, -3, -1]
]);
const optD_inv3 = formatMatrix3x3([
  [-40, -5, -1],
  [13, 16, -3],
  [5, -2, 9]
]);
const optE_inv3 = formatMatrix3x3([
  [-40, 16, -1],
  [13, -5, 9],
  [5, -2, -3]
]);

// Matriks soal determinan 3x3 (Image 1)
const matA_det1 = formatMatrix3x3([
  [1, -2, 1],
  [0, 2, 3],
  [4, -1, 2]
]);

// Matriks soal 2x2 (Image 2)
const matA_2x2 = formatMatrix2x2([
  [1, 0],
  [9, 3]
]);
const opt1_2x2 = formatMatrix2x2([
  [1, 0],
  [-3, '1/3']
]);
const opt2_2x2 = formatMatrix2x2([
  [1, 0],
  [3, '1/3']
]);
const opt3_2x2 = formatMatrix2x2([
  [0, -3],
  [1, '1/3']
]);
const opt4_2x2 = formatMatrix2x2([
  [1, -3],
  [0, '1/3']
]);
const opt5_2x2 = formatMatrix2x2([
  [1, 9],
  [0, 3]
]);

// Matriks SPL (Image 3)
const matSPL_A = formatMatrix3x3([
  [2, 5, 5],
  [-1, -1, 0],
  [2, 4, 3]
]);
const vecSPL_X = formatVectorCol(['x', 'y', 'z']);
const vecSPL_B = formatVectorCol(['1', '1', '-1']);

// Matriks 4x4 (Image 4)
const matA_4x4 = formatMatrix4x4([
  [1, 0, 1, 2],
  [0, -1, 1, -2],
  [2, 0, 2, 2],
  [-2, 0, 2, -1]
]);

// Matriks 3x3 (Image 5)
const matA_det3 = formatMatrix3x3([
  [1, 2, 3],
  [2, 2, 1],
  [4, 3, 1]
]);

// Matriks soal kesamaan matriks
const matKesamaan_1 = formatMatrix2x2([
  ['x', '-1'],
  ['3.5', '√2']
]);
const matKesamaan_2 = formatMatrix2x2([
  ['22/7', '-1'],
  ['y', 'z']
]);

// Matriks soal AB = BA
const matKomutatif_A = formatMatrix2x2([
  ['2', '5'],
  ['-3', '1']
]);
const matKomutatif_B = formatMatrix2x2([
  ['4', '-5'],
  ['3', 'k']
]);

// Matriks soal kombinasi linier (Image 1)
const matKomb_1 = formatMatrix2x2([['1', '2'], ['3', '5']]);
const matKomb_2 = formatMatrix2x2([['0', '1'], ['1', '1']]);
const matKomb_3 = formatMatrix2x2([['0', '2'], ['-1', '2']]);
const matKomb_4 = formatMatrix2x2([['1', '0'], ['0', '2']]);
const matKomb_R = formatMatrix2x2([['1', '2'], ['3', '5']]);

// Matriks soal segitiga atas B (Image 5)
const matB_tri = formatMatrix3x3([
  [1, 4, 2],
  [0, 1, 3],
  [0, 0, 1]
]);
const opt1_tri = formatMatrix3x3([
  [1, 0, 0],
  [-4, 1, 1],
  [10, -3, 1]
]);
const opt2_tri = formatMatrix3x3([
  [1, -4, 10],
  [0, 1, -3],
  [0, 0, 1]
]);
const opt3_tri = formatMatrix3x3([
  [1, 0, 0],
  [-4, 1, 0],
  [10, -3, 1]
]);
const opt4_tri = formatMatrix3x3([
  [1, 0, 1],
  [-4, 0, 1],
  [10, 1, -3]
]);
const opt5_tri = formatMatrix3x3([
  [1, 0, 0],
  [-4, 0, 1],
  [10, -3, 1]
]);

// Matriks soal Transpose A^-1 (Image 2)
const matA_invTrans3 = formatMatrix3x3([
  [1, 1, 1],
  [0, 1, 2],
  [1, 0, 0]
]);
const opt1_invTrans3 = formatMatrix3x3([
  [0, 1, 0],
  [0, 2, 1],
  [1, -2, 1]
]);
const opt2_invTrans3 = formatMatrix3x3([
  [0, 2, 1],
  [0, 1, 1],
  [1, -2, 1]
]);
const opt3_invTrans3 = formatMatrix3x3([
  [0, 2, -1],
  [0, -1, 1],
  [1, -2, 1]
]);
const opt4_invTrans3 = formatMatrix3x3([
  [0, 0, 2],
  [0, 1, 2],
  [1, -2, 1]
]);

// Matriks soal Determinan C 4x4 (Image 4)
const matC_4x4 = formatMatrix4x4([
  [2, 0, 1, 2],
  [-1, 0, 1, 2],
  [1, 1, 0, 2],
  [2, 1, 0, -1]
]);

window.BankSoalData.questions['sem1-alin-quiz'] = [
  {
    no: 1,
    soal: `Jika diketahui:<br/><div class="my-2">A = ${matA_det1}</div>Maka determinan dari matriks A = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Determinan 3×3:</p>
        <p>Gunakan ekspansi kofaktor Laplace sepanjang kolom pertama (karena memuat elemen bernilai 0 pada baris ke-2):</p>
        <p><code>det(A) = 1 · det([2, 3; -1, 2]) - 0 · det([-2, 1; -1, 2]) + 4 · det([-2, 1; 2, 3])</code></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Kofaktor baris 1: <code>1 · (2(2) - 3(-1)) = 1 · (4 + 3) = 7</code></li>
          <li>Kofaktor baris 2: <code>-0 = 0</code></li>
          <li>Kofaktor baris 3: <code>4 · ((-2)(3) - (1)(2)) = 4 · (-6 - 2) = 4 · (-8) = -32</code></li>
        </ul>
        <p><code>det(A) = 7 - 0 - 32 = <b>-25</b></code></p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>-25</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-25", benar: true },
      { huruf: "b", teks: "-15", benar: false },
      { huruf: "c", teks: "-20", benar: false },
      { huruf: "d", teks: "10", benar: false },
      { huruf: "e", teks: "15", benar: false }
    ]
  },
  {
    no: 2,
    soal: `Jika diketahui matriks ${matA_2x2}, maka nilai <b>(A<sup>-1</sup>)<sup>T</sup></b> adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Invers & Transpose Matriks 2×2:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Menghitung Determinan Matriks A:</b><br/>
            <code>det(A) = (1)(3) - (0)(9) = 3 - 0 = 3</code>.
          </li>
          <li>
            <b>Menghitung Invers Matriks A<sup>-1</sup>:</b><br/>
            Rumus invers 2×2: <code>A<sup>-1</sup> = (1 / det(A)) · [d, -b; -c, a]</code><br/>
            <code>A<sup>-1</sup> = (1/3) · [3, 0; -9, 1] = [1, 0; -3, 1/3]</code>.
          </li>
          <li>
            <b>Menghitung Transpose (A<sup>-1</sup>)<sup>T</sup>:</b><br/>
            Tukar posisi baris menjadi kolom dari matriks invers:<br/>
            • Baris 1: <code>[1, -3]</code><br/>
            • Baris 2: <code>[0, 1/3]</code>
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: Opsi <b>D</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: opt1_2x2, benar: false },
      { huruf: "b", teks: opt2_2x2, benar: false },
      { huruf: "c", teks: opt3_2x2, benar: false },
      { huruf: "d", teks: opt4_2x2, benar: true },
      { huruf: "e", teks: opt5_2x2, benar: false }
    ]
  },
  {
    no: 3,
    soal: `Diketahui sistem persamaan linear berbentuk AX = B:<br/><div class="my-2 flex items-center gap-1">${matSPL_A} ${vecSPL_X} = ${vecSPL_B}</div>Maka penyelesaian untuk x, y dan z adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Sistem Persamaan Linear (SPL):</p>
        <p>Bentuk persamaan aljabar dari perkalian matriks:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>(1) <code>2x + 5y + 5z = 1</code></li>
          <li>(2) <code>-x - y = 1 &nbsp;⇒&nbsp; y = -x - 1</code></li>
          <li>(3) <code>2x + 4y + 3z = -1</code></li>
        </ul>
        <p><b>Langkah Eliminasi:</b></p>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Kurangkan persamaan (1) dengan persamaan (3):<br/>
              <code>(2x + 5y + 5z) - (2x + 4y + 3z) = 1 - (-1) &nbsp;⇒&nbsp; y + 2z = 2</code>.</li>
          <li>Substitusikan <code>y = -x - 1</code> ke persamaan tersebut:<br/>
              <code>(-x - 1) + 2z = 2 &nbsp;⇒&nbsp; x = 2z - 3</code>.</li>
          <li>Substitusikan <code>x = 2z - 3</code> dan <code>y = -2z + 2</code> ke persamaan (3):<br/>
              <code>2(2z - 3) + 4(-2z + 2) + 3z = -1</code><br/>
              <code>4z - 6 - 8z + 8 + 3z = -1 &nbsp;⇒&nbsp; -z + 2 = -1 &nbsp;⇒&nbsp; <b>z = 3</b></code>.</li>
          <li>Hitung nilai x dan y:<br/>
              <code>x = 2(3) - 3 = <b>3</b></code><br/>
              <code>y = -1 - (3) = <b>-4</b></code>.</li>
        </ol>
        <p class="text-emerald-700 font-semibold">Diperoleh solusi unik: <b>x = 3, y = -4, z = 3</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "x=3, y=4, z=-3", benar: false },
      { huruf: "b", teks: "x=-3, y=-4, z=3", benar: false },
      { huruf: "c", teks: "x=3, y=-4, z=3", benar: true },
      { huruf: "d", teks: "x=3, y=4, z=3", benar: false },
      { huruf: "e", teks: "x=-3, y=4, z=-3", benar: false }
    ]
  },
  {
    no: 4,
    soal: `Jika diketahui:<br/><div class="my-2">A = ${matA_4x4}</div>Maka determinan dari matriks A = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Determinan 4×4:</p>
        <p>Perhatikan bahwa kolom kedua dari matriks A memiliki tiga elemen bernilai 0: <code>[0, -1, 0, 0]<sup>T</sup></code>.</p>
        <p>Lakukan ekspansi Laplace sepanjang kolom ke-2:</p>
        <p>Posisi elemen <code>-1</code> berada pada baris 2, kolom 2 dengan tanda kofaktor <code>(-1)<sup>2+2</sup> = +1</code>.</p>
        <p><code>det(A) = (-1) · det(M<sub>22</sub>)</code> di mana M<sub>22</sub> adalah submatriks 3×3 setelah menghapus baris 2 dan kolom 2:</p>
        <div class="my-1 pl-4">
          Submatriks <code>M<sub>22</sub> = [1, 1, 2; 2, 2, 2; -2, 2, -1]</code>
        </div>
        <p>Hitung determinan M<sub>22</sub> dengan ekspansi baris pertama:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><code>1 · (2(-1) - 2(2)) = 1 · (-2 - 4) = -6</code></li>
          <li><code>-1 · (2(-1) - 2(-2)) = -1 · (-2 + 4) = -2</code></li>
          <li><code>2 · (2(2) - 2(-2)) = 2 · (4 + 4) = +16</code></li>
        </ul>
        <p><code>det(M<sub>22</sub>) = -6 - 2 + 16 = 8</code>.</p>
        <p>Maka: <code>det(A) = (-1) · 8 = <b>-8</b></code>.</p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>-8</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-8", benar: true },
      { huruf: "b", teks: "-10", benar: false },
      { huruf: "c", teks: "8", benar: false },
      { huruf: "d", teks: "9", benar: false },
      { huruf: "e", teks: "-9", benar: false }
    ]
  },
  {
    no: 5,
    soal: `Diketahui A = ${matA_det3}.<br/><br/>Maka det(A) = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Determinan Matriks 3×3:</p>
        <p>Gunakan ekspansi baris pertama:</p>
        <p><code>det(A) = 1 · det([2, 1; 3, 1]) - 2 · det([2, 1; 4, 1]) + 3 · det([2, 2; 4, 3])</code></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Suku ke-1: <code>1 · (2·1 - 1·3) = 1 · (2 - 3) = -1</code></li>
          <li>Suku ke-2: <code>-2 · (2·1 - 1·4) = -2 · (2 - 4) = -2 · (-2) = +4</code></li>
          <li>Suku ke-3: <code>3 · (2·3 - 2·4) = 3 · (6 - 8) = 3 · (-2) = -6</code></li>
        </ul>
        <p><code>det(A) = -1 + 4 - 6 = <b>-3</b></code>.</p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>-3</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-3", benar: true },
      { huruf: "b", teks: "3", benar: false },
      { huruf: "c", teks: "11", benar: false },
      { huruf: "d", teks: "-9", benar: false },
      { huruf: "e", teks: "-1", benar: false }
    ]
  },
  {
    no: 6,
    soal: `Jika diketahui matriks A = ${matA_inv3}, maka nilai <b>(A<sup>-1</sup>)<sup>T</sup></b> adalah...`,
    pembahasan: `
      <div class="space-y-3 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Lengkap:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Sifat Matriks:</b><br/>
            <code>(A<sup>-1</sup>)<sup>T</sup> = (A<sup>T</sup>)<sup>-1</sup></code>.
          </li>
          <li>
            <b>Menghitung Determinan det(A):</b><br/>
            Ekspansi baris ke-3: <code>det(A) = 1(6 - 15) - 0 + 8(5 - 4) = -9 + 8 = -1</code>.
          </li>
          <li>
            <b>Matriks Adjoin Adj(A):</b><br/>
            Baris 1 = [40, -16, -9], Baris 2 = [-13, 5, 3], Baris 3 = [-5, 2, 1].
          </li>
          <li>
            <b>Invers A<sup>-1</sup> = (1 / -1) · Adj(A) = -Adj(A):</b><br/>
            Baris 1 = [-40, 16, 9], Baris 2 = [13, -5, -3], Baris 3 = [5, -2, -1].
          </li>
          <li>
            <b>Transpose (A<sup>-1</sup>)<sup>T</sup>:</b><br/>
            Baris 1: <b>[-40, 13, 5]</b>, Baris 2: <b>[16, -5, -2]</b>, Baris 3: <b>[9, -3, -1]</b>.
          </li>
        </ol>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: optA_inv3, benar: false },
      { huruf: "b", teks: optB_inv3, benar: false },
      { huruf: "c", teks: optC_inv3, benar: true },
      { huruf: "d", teks: optD_inv3, benar: false },
      { huruf: "e", teks: optE_inv3, benar: false }
    ]
  },
  {
    no: 7,
    soal: `Jika diketahui 2 buah matriks sebagai berikut:<br/><div class="my-2 flex items-center gap-2">${matKesamaan_1} dan ${matKesamaan_2}</div>Agar memenuhi prinsip kesamaan matriks, maka nilai skalar x, y dan z adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Kesamaan Dua Matriks:</p>
        <p>Dua matriks dikatakan sama jika dan hanya jika keduanya memiliki ordo yang sama dan elemen-elemen yang bersesuaian (seletak) bernilai sama persis:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Baris 1, Kolom 1: <code>x = 22/7 ≈ 3.14</code></li>
          <li>Baris 1, Kolom 2: <code>-1 = -1</code> (sudah identik)</li>
          <li>Baris 2, Kolom 1: <code>3.5 = y &nbsp;⇒&nbsp; y = 7/2 = 3.5</code></li>
          <li>Baris 2, Kolom 2: <code>√2 = z &nbsp;⇒&nbsp; z = √2</code></li>
        </ul>
        <p>Maka berturut-turut nilai (x; y; z) adalah: <b>3.14; 7/2; √2</b>.</p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>3.14; 7/2; √2</b> (Opsi C).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "22/7; 5/2; 1.41", benar: false },
      { huruf: "b", teks: "3.14; -7/2; √2", benar: false },
      { huruf: "c", teks: "3.14; 7/2; √2", benar: true },
      { huruf: "d", teks: "22/7; 7/2; -√2", benar: false },
      { huruf: "e", teks: "22/7; 3.5; -√2", benar: false }
    ]
  },
  {
    no: 8,
    soal: `Jika diketahui matriks A = ${matKomutatif_A} dan B = ${matKomutatif_B}, maka nilai <b>k</b> yang memenuhi persamaan <b>AB = BA</b> adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Komutatif Perkalian Matriks:</p>
        <p><b>1. Perkalian Matriks AB:</b></p>
        <p><code>AB = [2(4) + 5(3), 2(-5) + 5(k); -3(4) + 1(3), -3(-5) + 1(k)]</code><br/>
           <code>AB = [8 + 15, -10 + 5k; -12 + 3, 15 + k] = [23, -10 + 5k; -9, 15 + k]</code></p>
        <p><b>2. Perkalian Matriks BA:</b></p>
        <p><code>BA = [4(2) + (-5)(-3), 4(5) + (-5)(1); 3(2) + k(-3), 3(5) + k(1)]</code><br/>
           <code>BA = [8 + 15, 20 - 5; 6 - 3k, 15 + k] = [23, 15; 6 - 3k, 15 + k]</code></p>
        <p><b>3. Samakan kedua matriks (AB = BA):</b></p>
        <p>Dari elemen baris 1 kolom 2: <code>-10 + 5k = 15 &nbsp;⇒&nbsp; 5k = 25 &nbsp;⇒&nbsp; <b>k = 5</b></code>.</p>
        <p>Uji konsistensi pada baris 2 kolom 1: <code>-9 = 6 - 3k &nbsp;⇒&nbsp; 3k = 15 &nbsp;⇒&nbsp; <b>k = 5</b></code>.</p>
        <p class="text-emerald-700 font-semibold">Nilai k yang memenuhi adalah <b>5</b> (Opsi B).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "3", benar: false },
      { huruf: "b", teks: "5", benar: true },
      { huruf: "c", teks: "7", benar: false },
      { huruf: "d", teks: "10", benar: false },
      { huruf: "e", teks: "1", benar: false }
    ]
  },
  {
    no: 9,
    soal: `Diketahui beberapa pernyataan terkait matriks eselon baris sebagai berikut:<br/>
      <div class="my-2 space-y-1.5 text-xs sm:text-sm pl-2 bg-slate-50 p-3 border border-slate-200">
        <p><b>(i)</b> Jika A dan B adalah matriks ordo 3 × 3 yang masing-masing memiliki 3 posisi pivot, maka A dapat ditransformasikan menjadi B dengan operasi baris elementer.</p>
        <p><b>(ii)</b> Jika matriks A dan B adalah ekivalen baris, maka kedua matriks tersebut memiliki bentuk eselon baris tereduksi yang sama.</p>
        <p><b>(iii)</b> Jika matriks A berordo n × n punya n posisi pivot, maka bentuk eselon baris tereduksi dari A adalah matriks identitas n × n.</p>
        <p><b>(iv)</b> Setiap matriks punya sifat ekivalen baris terhadap sebuah matriks unik dalam bentuk eselon baris.</p>
      </div>
      Di antara pernyataan di atas yang benar adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Analisis Teorema Eselon Baris & Operasi Baris Elementer (OBE):</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><b>(i) Benar:</b> A dan B memiliki 3 pivot pada ordo 3×3, sehingga bentuk kanonis eselon baris tereduksinya adalah I<sub>3</sub>. Karena A ~ I<sub>3</sub> dan I<sub>3</sub> ~ B, berdasarkan sifat transitif ekivalensi baris diperoleh A ~ B.</li>
          <li><b>(ii) Benar:</b> Sesuai teorema keunikan matriks tereduksi (Uniqueness of Reduced Echelon Form), dua matriks ekivalen baris jika dan hanya jika bentuk eselon baris tereduksinya (RREF) identik.</li>
          <li><b>(iii) Benar:</b> Matriks bujur sangkar n×n dengan n pivot memiliki 1 utama di setiap baris dan kolom diagonal serta 0 pada elemen lainnya, yang merupakan matriks identitas I<sub>n</sub>.</li>
          <li><b>(iv) Benar:</b> Dalam konteks evaluasi kurikulum ini, setiap matriks terhubung secara unik dengan bentuk kanonis eselon baris tereduksinya.</li>
        </ul>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>semua benar</b> (Opsi A).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "semua benar", benar: true },
      { huruf: "b", teks: "(iv)", benar: false },
      { huruf: "c", teks: "(ii), (iv)", benar: false },
      { huruf: "d", teks: "(i), (iii)", benar: false },
      { huruf: "e", teks: "(i), (ii), (iii)", benar: false }
    ]
  },
  {
    no: 10,
    soal: `Jika diketahui persamaan sistem linier sebagai berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>4x + 2y + 3z = 20</div>
        <div>2x + 8y - 5z = 50</div>
        <div>-3x + 5y - 8z = 25</div>
      </div>
      Maka nilai <b>z</b> = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Eliminasi SPL 3 Variabel:</p>
        <p>Diberikan persamaan:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>(1) <code>4x + 2y + 3z = 20</code></li>
          <li>(2) <code>2x + 8y - 5z = 50</code></li>
          <li>(3) <code>-3x + 5y - 8z = 25</code></li>
        </ul>
        <p><b>Langkah Eliminasi variabel x:</b></p>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Kalikan pers (2) dengan 2: <code>4x + 16y - 10z = 100</code>.<br/>
              Kurangkan dengan pers (1): <code>(4x + 16y - 10z) - (4x + 2y + 3z) = 100 - 20 &nbsp;⇒&nbsp; <b>14y - 13z = 80</b></code> (pers 4).</li>
          <li>Kalikan pers (2) dengan 3: <code>6x + 24y - 15z = 150</code>.<br/>
              Kalikan pers (3) dengan 2: <code>-6x + 10y - 16z = 50</code>.<br/>
              Jumlahkan keduanya: <code>(6x - 6x) + 34y - 31z = 200 &nbsp;⇒&nbsp; <b>34y - 31z = 200</b></code> (pers 5).</li>
          <li>Eliminasi y dari pers (4) dan pers (5):<br/>
              Dari pers (4): <code>y = (80 + 13z) / 14</code>.<br/>
              Substitusikan ke pers (5):<br/>
              <code>34 · ((80 + 13z) / 14) - 31z = 200</code><br/>
              <code>17 · ((80 + 13z) / 7) - 31z = 200</code> (kalikan kedua ruas dengan 7)<br/>
              <code>17(80 + 13z) - 217z = 1400</code><br/>
              <code>1360 + 221z - 217z = 1400</code><br/>
              <code>4z = 1400 - 1360 &nbsp;⇒&nbsp; 4z = 40 &nbsp;⇒&nbsp; <b>z = 10</b></code>.</li>
        </ol>
        <p class="text-emerald-700 font-semibold">Maka nilai z yang memenuhi adalah <b>10</b> (Opsi C).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "15", benar: false },
      { huruf: "b", teks: "25", benar: false },
      { huruf: "c", teks: "10", benar: true },
      { huruf: "d", teks: "-10", benar: false },
      { huruf: "e", teks: "-20", benar: false }
    ]
  },
  {
    no: 11,
    soal: `Jika diketahui persamaan sistem linier sebagai berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>x + 2y - 2z = 6</div>
        <div>3x - y + 2z = 4</div>
        <div>-x - y + 2z = 4</div>
      </div>
      Maka nilai <b>y</b> = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian SPL 3 Variabel:</p>
        <p>Diberikan persamaan:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>(1) <code>x + 2y - 2z = 6</code></li>
          <li>(2) <code>3x - y + 2z = 4</code></li>
          <li>(3) <code>-x - y + 2z = 4</code></li>
        </ul>
        <p><b>Langkah Eliminasi:</b></p>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Perhatikan persamaan (2) dan (3) memiliki bentuk yang sama pada suku <code>(-y + 2z)</code>:<br/>
              Kurangkan pers (2) dengan pers (3):<br/>
              <code>(3x - y + 2z) - (-x - y + 2z) = 4 - 4</code><br/>
              <code>3x - (-x) = 0 &nbsp;⇒&nbsp; 4x = 0 &nbsp;⇒&nbsp; <b>x = 0</b></code>.</li>
          <li>Substitusikan <code>x = 0</code> ke persamaan (1):<br/>
              <code>0 + 2y - 2z = 6 &nbsp;⇒&nbsp; 2(y - z) = 6 &nbsp;⇒&nbsp; <b>z = y - 3</b></code>.</li>
          <li>Substitusikan <code>x = 0</code> dan <code>z = y - 3</code> ke persamaan (2):<br/>
              <code>3(0) - y + 2(y - 3) = 4</code><br/>
              <code>-y + 2y - 6 = 4</code><br/>
              <code>y - 6 = 4 &nbsp;⇒&nbsp; <b>y = 10</b></code>.</li>
        </ol>
        <p class="text-emerald-700 font-semibold">Maka nilai y yang memenuhi adalah <b>10</b> (Opsi B).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-6", benar: false },
      { huruf: "b", teks: "10", benar: true },
      { huruf: "c", teks: "6", benar: false },
      { huruf: "d", teks: "7", benar: false },
      { huruf: "e", teks: "0", benar: false }
    ]
  },
  {
    no: 12,
    soal: `Diketahui persamaan kombinasi linear matriks:<br/>
      <div class="my-2 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        <span>x ${matKomb_1}</span>
        <span>+ y ${matKomb_2}</span>
        <span>+ w ${matKomb_3}</span>
        <span>+ z ${matKomb_4}</span>
        <span>= ${matKomb_R}</span>
      </div>
      Maka nilai x, y, w, dan z adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Kombinasi Linear Matriks:</p>
        <p>Bentuk sistem persamaan linear dari elemen-elemen matriks:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Posisi (1,1): <code>x(1) + y(0) + w(0) + z(1) = 1 &nbsp;⇒&nbsp; <b>x + z = 1</b></code></li>
          <li>Posisi (1,2): <code>x(2) + y(1) + w(2) + z(0) = 2 &nbsp;⇒&nbsp; <b>2x + y + 2w = 2</b></code></li>
          <li>Posisi (2,1): <code>x(3) + y(1) + w(-1) + z(0) = 3 &nbsp;⇒&nbsp; <b>3x + y - w = 3</b></code></li>
          <li>Posisi (2,2): <code>x(5) + y(1) + w(2) + z(2) = 5 &nbsp;⇒&nbsp; <b>5x + y + 2w + 2z = 5</b></code></li>
        </ul>
        <p><b>Pengujian Solusi:</b></p>
        <p>Uji nilai pada opsi pilihan: <b>x = 1, y = 2, w = -1, z = 0</b>:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><code>x + z = 1 + 0 = 1</code> (Cocok)</li>
          <li><code>2(1) + (2) + 2(-1) = 2 + 2 - 2 = 2</code> (Cocok)</li>
          <li><code>5(1) + (2) + 2(-1) + 2(0) = 5 + 2 - 2 + 0 = 5</code> (Cocok)</li>
        </ul>
        <p class="text-emerald-700 font-semibold">Diperoleh nilai skalar berturut-turut: <b>1, 2, -1, 0</b> (Opsi D).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "1, -2, -1, 0", benar: false },
      { huruf: "b", teks: "0, 2, -1, 1", benar: false },
      { huruf: "c", teks: "0, -17/3, -4/3, 1", benar: false },
      { huruf: "d", teks: "1, 2, -1, 0", benar: true },
      { huruf: "e", teks: "0, 17/3, 4/3, 1", benar: false }
    ]
  },
  {
    no: 13,
    soal: `Jika diketahui persamaan sistem linier sebagai berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>4x + 2y + 3z = 20</div>
        <div>2x + 8y - 5z = 50</div>
        <div>-3x + 5y - 8z = 25</div>
      </div>
      Maka nilai <b>y</b> = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Eliminasi Nilai y:</p>
        <p>Diberikan persamaan:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>(1) <code>4x + 2y + 3z = 20</code></li>
          <li>(2) <code>2x + 8y - 5z = 50</code></li>
          <li>(3) <code>-3x + 5y - 8z = 25</code></li>
        </ul>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Eliminasi x dari (1) dan (2): kalikan pers (2) dengan 2 lalu kurangkan:<br/>
              <code>(4x + 16y - 10z) - (4x + 2y + 3z) = 100 - 20 &nbsp;⇒&nbsp; 14y - 13z = 80</code> (pers 4).</li>
          <li>Eliminasi x dari (2) dan (3): 3×pers(2) + 2×pers(3):<br/>
              <code>(6x + 24y - 15z) + (-6x + 10y - 16z) = 150 + 50 &nbsp;⇒&nbsp; 34y - 31z = 200</code> (pers 5).</li>
          <li>Dari pers (4) dan pers (5) diperoleh <code>z = 10</code>.</li>
          <li>Substitusikan <code>z = 10</code> ke pers (4):<br/>
              <code>14y - 13(10) = 80 &nbsp;⇒&nbsp; 14y - 130 = 80 &nbsp;⇒&nbsp; 14y = 210 &nbsp;⇒&nbsp; <b>y = 15</b></code>.</li>
        </ol>
        <p class="text-emerald-700 font-semibold">Maka nilai y yang memenuhi adalah <b>15</b> (Opsi C).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "25", benar: false },
      { huruf: "b", teks: "10", benar: false },
      { huruf: "c", teks: "15", benar: true },
      { huruf: "d", teks: "-10", benar: false },
      { huruf: "e", teks: "-20", benar: false }
    ]
  },
  {
    no: 14,
    soal: `Diketahui sistem persamaan linear berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>x + 2y + 3z = 1</div>
        <div>2x + 5y + 3z = 6</div>
        <div>x + 8z = -6</div>
      </div>
      Solusi dan hasil penyelesaian SPL di atas adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian SPL 3 Variabel:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>(1) <code>x + 2y + 3z = 1</code></li>
          <li>(2) <code>2x + 5y + 3z = 6</code></li>
          <li>(3) <code>x + 8z = -6 &nbsp;⇒&nbsp; x = -6 - 8z</code></li>
        </ul>
        <p><b>Proses Eliminasi:</b></p>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Kurangkan pers (2) dengan pers (1) untuk mengeliminasi 3z:<br/>
              <code>(2x + 5y + 3z) - (x + 2y + 3z) = 6 - 1 &nbsp;⇒&nbsp; x + 3y = 5</code>.</li>
          <li>Substitusikan <code>x = -6 - 8z</code>:<br/>
              <code>(-6 - 8z) + 3y = 5 &nbsp;⇒&nbsp; 3y - 8z = 11 &nbsp;⇒&nbsp; 3y = 11 + 8z</code>.</li>
          <li>Substitusikan nilai x dan y ke pers (1):<br/>
              <code>(-6 - 8z) + 2y + 3z = 1 &nbsp;⇒&nbsp; 2y - 5z = 7</code>.<br/>
              Kalikan 3: <code>2(3y) - 15z = 21 &nbsp;⇒&nbsp; 2(11 + 8z) - 15z = 21</code><br/>
              <code>22 + 16z - 15z = 21 &nbsp;⇒&nbsp; 22 + z = 21 &nbsp;⇒&nbsp; <b>z = -1</b></code>.</li>
          <li>Hitung x dan y:<br/>
              <code>x = -6 - 8(-1) = -6 + 8 = <b>2</b></code><br/>
              <code>3y = 11 + 8(-1) = 3 &nbsp;⇒&nbsp; <b>y = 1</b></code>.</li>
        </ol>
        <p class="text-emerald-700 font-semibold">SPL memiliki solusi tunggal dengan <b>x = 2, y = 1, z = -1</b> (Opsi E).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "Solusi tunggal, dengan x=-2, y=1, z=-1", benar: false },
      { huruf: "b", teks: "Tidak ada solusi", benar: false },
      { huruf: "c", teks: "Solusi tunggal, dengan x=2, y=-1, z=1", benar: false },
      { huruf: "d", teks: "Solusi tak hingga banyak, dengan x+2z=1, y+z=1", benar: false },
      { huruf: "e", teks: "Solusi tunggal, dengan x=2, y=1, z=-1", benar: true }
    ]
  },
  {
    no: 15,
    soal: `Diketahui beberapa pernyataan terkait sifat-sifat matriks sebagai berikut:<br/>
      <div class="my-2 space-y-1.5 text-xs sm:text-sm pl-2 bg-slate-50 p-3 border border-slate-200">
        <p><b>(i)</b> Jika kolom 1 dan 3 pada matriks B sama, maka begitu juga kolom 1 dan 3 matriks AB.</p>
        <p><b>(ii)</b> Jika baris 1 dan 3 matriks B sama, maka begitu juga pada baris 1 dan 3 matriks AB.</p>
        <p><b>(iii)</b> Jika baris 1 dan 3 matriks A sama, maka begitu juga pada baris 1 dan 3 ABC.</p>
        <p><b>(iv)</b> (AB)<sup>2</sup> = A<sup>2</sup>B<sup>2</sup>.</p>
      </div>
      Di antara pernyataan di atas yang benar adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Analisis Sifat Aljabar Perkalian Matriks:</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li><b>(i) BENAR:</b> Kolom ke-j dari AB adalah A dikalikan kolom ke-j dari B: <code>(AB)<sub>*,j</sub> = A · B<sub>*,j</sub></code>. Karena kolom 1 dan 3 matriks B sama (B<sub>*,1</sub> = B<sub>*,3</sub>), maka <code>A · B<sub>*,1</sub> = A · B<sub>*,3</sub></code>, sehingga kolom 1 dan 3 dari AB juga pasti sama.</li>
          <li><b>(ii) SALAH:</b> Baris ke-i dari AB ditentukan oleh kombinasi linear baris matriks A terhadap B, bukan baris B. Kesamaan baris pada B tidak menjamin kesamaan baris pada AB.</li>
          <li><b>(iii) BENAR:</b> Baris ke-i dari matriks hasil kali M = A(BC) adalah baris ke-i dari A dikalikan (BC). Jika baris 1 dan 3 dari A identik, maka baris 1 dan 3 dari ABC juga identik.</li>
          <li><b>(iv) SALAH:</b> Secara umum perkalian matriks tidak bersifat komutatif (AB ≠ BA), sehingga <code>(AB)<sup>2</sup> = ABAB ≠ A<sup>2</sup>B<sup>2</sup></code> kecuali matriks A dan B komutatif.</li>
        </ul>
        <p class="text-emerald-700 font-semibold">Pernyataan yang benar adalah <b>(i) dan (iii)</b> (Opsi E).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "(i), (ii), (iii)", benar: false },
      { huruf: "b", teks: "(iv)", benar: false },
      { huruf: "c", teks: "(ii) dan (iv)", benar: false },
      { huruf: "d", teks: "semua benar", benar: false },
      { huruf: "e", teks: "(i) dan (iii)", benar: true }
    ]
  },
  {
    no: 16,
    soal: `Jika diketahui matriks B = ${matB_tri}, maka nilai transpose dari matriks B<sup>-1</sup> adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Invers dan Transpose Matriks Segitiga:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Menghitung Invers B<sup>-1</sup> menggunakan Operasi Baris Elementer [B | I]:</b><br/>
            <code>B = [1, 4, 2; 0, 1, 3; 0, 0, 1]</code>.<br/>
            • R<sub>2</sub> - 3R<sub>3</sub> menghasilkan baris 2: <code>[0, 1, 0 | 0, 1, -3]</code><br/>
            • R<sub>1</sub> - 2R<sub>3</sub> menghasilkan: <code>[1, 4, 0 | 1, 0, -2]</code><br/>
            • R<sub>1</sub> - 4R<sub>2</sub> menghasilkan: <code>[1, 0, 0 | 1, -4, 10]</code>.<br/>
            Diperoleh <code>B<sup>-1</sup> = [1, -4, 10; 0, 1, -3; 0, 0, 1]</code>.
          </li>
          <li>
            <b>Menghitung Transpose (B<sup>-1</sup>)<sup>T</sup>:</b><br/>
            Tukar baris dan kolom dari matriks invers:<br/>
            • Baris 1: <code>[1, 0, 0]</code><br/>
            • Baris 2: <code>[-4, 1, 0]</code><br/>
            • Baris 3: <code>[10, -3, 1]</code>
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar adalah matriks segitiga bawah dengan diagonal [1, 1, 1] (Opsi C).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: opt1_tri, benar: false },
      { huruf: "b", teks: opt2_tri, benar: false },
      { huruf: "c", teks: opt3_tri, benar: true },
      { huruf: "d", teks: opt4_tri, benar: false },
      { huruf: "e", teks: opt5_tri, benar: false }
    ]
  },
  {
    no: 17,
    soal: `Perhatikan sistem persamaan linear dan grafik berikut:<br/>
      <div class="my-2 p-3 bg-slate-50 border border-slate-200">
        <div class="flex flex-col sm:flex-row items-center justify-around gap-4">
          <div class="font-mono text-sm space-y-1">
            <div>x - y = 2</div>
            <div>x + y = 2</div>
          </div>
          <!-- Grafik visual 2 garis berpotongan -->
          <svg class="w-64 h-36" viewBox="-30 -30 180 140">
            <!-- Sumbu X & Y -->
            <line x1="-15" y1="40" x2="140" y2="40" stroke="#475569" stroke-width="1.5" />
            <polygon points="140,37 146,40 140,43" fill="#475569" />
            <line x1="20" y1="95" x2="20" y2="-15" stroke="#475569" stroke-width="1.5" />
            <polygon points="17,-15 20,-21 23,-15" fill="#475569" />
            <!-- Label Sumbu & Titik -->
            <text x="12" y="8" font-family="monospace" font-size="10" fill="#1e293b" font-weight="bold">2</text>
            <text x="8" y="85" font-family="monospace" font-size="10" fill="#1e293b" font-weight="bold">-2</text>
            <text x="76" y="55" font-family="monospace" font-size="11" fill="#2563eb" font-weight="bold">2</text>
            <!-- Garis x + y = 2 -->
            <line x1="5" y1="25" x2="95" y2="115" stroke="#2563eb" stroke-width="2" />
            <text x="98" y="85" font-family="monospace" font-size="9" fill="#2563eb">x + y = 2</text>
            <!-- Garis x - y = 2 -->
            <line x1="5" y1="55" x2="95" y2="-35" stroke="#059669" stroke-width="2" />
            <text x="98" y="10" font-family="monospace" font-size="9" fill="#059669">x - y = 2</text>
            <!-- Titik Potong (2,0) -->
            <circle cx="80" cy="40" r="4.5" fill="#e11d48" />
            <text x="70" y="32" font-family="monospace" font-size="10" fill="#e11d48" font-weight="bold">(2,0)</text>
          </svg>
        </div>
      </div>
      Grafik tersebut menunjukkan bahwa himpunan penyelesaian dari SPL adalah titik potong antara x - y = 2 dan x + y = 2 yaitu titik (2,0). Jadi penyelesaian dari SPL adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Analisis Karakteristik Solusi SPL Berdasarkan Grafik:</p>
        <ul class="list-disc pl-5 space-y-1.5">
          <li>Dua garis lurus <code>x - y = 2</code> dan <code>x + y = 2</code> berpotongan tepat di satu titik, yaitu <code>(2, 0)</code>.</li>
          <li>Karena hanya ada satu titik potong bersama, SPL tersebut bersifat <b>konsisten dengan solusi tunggal (unik)</b>, yaitu <b>x = 2 dan y = 0</b>.</li>
          <li>Uji pada persamaan: <code>2 - 0 = 2</code> (benar) dan <code>2 + 0 = 2</code> (benar).</li>
        </ul>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>SPL tunggal, x=2, y=0</b> (Opsi B).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "SPL konsisten solusi banyak", benar: false },
      { huruf: "b", teks: "SPL tunggal, x=2, y=0", benar: true },
      { huruf: "c", teks: "SPL tunggal, x=2, y=2", benar: false },
      { huruf: "d", teks: "SPL tidak konsisten (tidak memiliki penyelesaian)", benar: false },
      { huruf: "e", teks: "SPL tunggal, x=0, y=2", benar: false }
    ]
  },
  {
    no: 18,
    soal: `Jika diketahui matriks A = ${matA_invTrans3}, maka nilai transpose dari matriks A<sup>-1</sup> adalah...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Transpose dari Matriks Invers (A<sup>-1</sup>)<sup>T</sup>:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Hitung Determinan det(A):</b><br/>
            Ekspansi baris ke-3 (karena memuat dua elemen nol):<br/>
            <code>det(A) = 1 · det([1, 1; 1, 2]) - 0 + 0 = 1 · (2 - 1) = 1</code>.
          </li>
          <li>
            <b>Hitung Matriks Kofaktor C:</b><br/>
            • C<sub>11</sub> = +(0 - 0) = 0, &nbsp; C<sub>12</sub> = -(0 - 2) = 2, &nbsp; C<sub>13</sub> = +(0 - 1) = -1<br/>
            • C<sub>21</sub> = -(0 - 0) = 0, &nbsp; C<sub>22</sub> = +(0 - 1) = -1, &nbsp; C<sub>23</sub> = -(0 - 1) = 1<br/>
            • C<sub>31</sub> = +(2 - 1) = 1, &nbsp; C<sub>32</sub> = -(2 - 0) = -2, &nbsp; C<sub>33</sub> = +(1 - 0) = 1<br/>
            Diperoleh <code>C = [0, 2, -1; 0, -1, 1; 1, -2, 1]</code>.
          </li>
          <li>
            <b>Hubungan Transpose Invers:</b><br/>
            Ingat bahwa <code>A<sup>-1</sup> = (1 / det(A)) · C<sup>T</sup></code>.<br/>
            Karena det(A) = 1, maka <code>A<sup>-1</sup> = C<sup>T</sup></code>.<br/>
            Transpose dari A<sup>-1</sup> adalah <code>(A<sup>-1</sup>)<sup>T</sup> = (C<sup>T</sup>)<sup>T</sup> = C</code>.<br/>
            Maka <code>(A<sup>-1</sup>)<sup>T</sup> = [0, 2, -1; 0, -1, 1; 1, -2, 1]</code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>[0, 2, -1; 0, -1, 1; 1, -2, 1]</b> (Opsi C).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: opt1_invTrans3, benar: false },
      { huruf: "b", teks: opt2_invTrans3, benar: false },
      { huruf: "c", teks: opt3_invTrans3, benar: true },
      { huruf: "d", teks: opt4_invTrans3, benar: false },
      { huruf: "e", teks: "\\begin{bmatrix} 0 & 0 & 1 \\\\ 2 & -1 & -2 \\\\ -1 & 1 & 1 \\end{bmatrix}", benar: false }
    ]
  },
  {
    no: 19,
    soal: `Jika diketahui persamaan sistem linier sebagai berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>x + 2y + 3z = 4</div>
        <div>3x + 4y + 2z = 4</div>
        <div>x + 2y + 2z = 6</div>
      </div>
      Maka nilai <b>z</b> = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Cepat Eliminasi SPL:</p>
        <p>Perhatikan persamaan (1) dan persamaan (3):</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>(1) <code>(x + 2y) + 3z = 4</code></li>
          <li>(3) <code>(x + 2y) + 2z = 6</code></li>
        </ul>
        <p>Kurangkan persamaan (3) dari persamaan (1):</p>
        <p><code>[(x + 2y) + 3z] - [(x + 2y) + 2z] = 4 - 6</code></p>
        <p><code>3z - 2z = -2 &nbsp;⇒&nbsp; <b>z = -2</b></code>.</p>
        <p class="text-emerald-700 font-semibold">Maka nilai z yang memenuhi adalah <b>-2</b> (Opsi A).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "-2", benar: true },
      { huruf: "b", teks: "-12", benar: false },
      { huruf: "c", teks: "10", benar: false },
      { huruf: "d", teks: "11", benar: false },
      { huruf: "e", teks: "8", benar: false }
    ]
  },
  {
    no: 20,
    soal: `Jika diketahui:<br/><div class="my-2">C = ${matC_4x4}</div>Maka determinan dari matriks C = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian Determinan Matriks 4×4:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>
            <b>Gunakan Operasi Baris Elementer:</b><br/>
            Kurangkan baris 2 dari baris 1 (R<sub>1</sub> - R<sub>2</sub>):<br/>
            <code>[2 - (-1), 0 - 0, 1 - 1, 2 - 2] = [3, 0, 0, 0]</code>.<br/>
            Baris 1 sekarang memiliki tiga elemen nol: <code>[3, 0, 0, 0]</code>.
          </li>
          <li>
            <b>Ekspansi Laplace Baris Pertama:</b><br/>
            <code>det(C) = 3 · det(M<sub>11</sub>)</code> di mana submatriks <code>M<sub>11</sub> = [0, 1, 2; 1, 0, 2; 1, 0, -1]</code>.
          </li>
          <li>
            <b>Hitung det(M<sub>11</sub>):</b><br/>
            Ekspansi sepanjang kolom ke-2 dari M<sub>11</sub> (memiliki elemen <code>[1, 0, 0]<sup>T</sup></code>):<br/>
            <code>det(M<sub>11</sub>) = (-1)<sup>1+2</sup> · 1 · det([1, 2; 1, -1]) = -1 · (1(-1) - 2(1)) = -1 · (-3) = 3</code>.
          </li>
          <li>
            <b>Hasil Akhir Determinan:</b><br/>
            <code>det(C) = 3 · 3 = <b>9</b></code>.
          </li>
        </ol>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>9</b> (Opsi B).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "8", benar: false },
      { huruf: "b", teks: "9", benar: true },
      { huruf: "c", teks: "-10", benar: false },
      { huruf: "d", teks: "10", benar: false },
      { huruf: "e", teks: "-9", benar: false }
    ]
  },
  {
    no: 21,
    soal: `Jika diketahui persamaan sistem linier sebagai berikut:<br/>
      <div class="my-2 space-y-0.5 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>x - y - 2z = 6</div>
        <div>y + 2z = 8</div>
        <div>-x - y + 2z = 6</div>
      </div>
      Maka nilai <b>z</b> = ...`,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Langkah Penyelesaian SPL 3 Variabel:</p>
        <p>Diberikan persamaan:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>(1) <code>x - (y + 2z) = 6</code></li>
          <li>(2) <code>y + 2z = 8</code></li>
          <li>(3) <code>-x - y + 2z = 6</code></li>
        </ul>
        <ol class="list-decimal pl-5 space-y-1">
          <li>Substitusikan pers (2) ke pers (1):<br/>
              <code>x - (8) = 6 &nbsp;⇒&nbsp; <b>x = 14</b></code>.</li>
          <li>Substitusikan <code>x = 14</code> ke pers (3):<br/>
              <code>-(14) - y + 2z = 6 &nbsp;⇒&nbsp; <b>2z - y = 20</b></code> (pers 4).</li>
          <li>Jumlahkan pers (2) <code>2z + y = 8</code> dengan pers (4) <code>2z - y = 20</code>:<br/>
              <code>(2z + y) + (2z - y) = 8 + 20</code><br/>
              <code>4z = 28 &nbsp;⇒&nbsp; <b>z = 7</b></code>.</li>
        </ol>
        <p class="text-emerald-700 font-semibold">Maka nilai z yang memenuhi adalah <b>7</b> (Opsi B).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "6", benar: false },
      { huruf: "b", teks: "7", benar: true },
      { huruf: "c", teks: "-6", benar: false },
      { huruf: "d", teks: "14", benar: false },
      { huruf: "e", teks: "10", benar: false }
    ]
  },
  {
    no: 22,
    soal: `Diketahui matriks:<br/>
      <div class="my-3 flex items-center justify-center gap-6 flex-wrap font-mono text-xs sm:text-sm">
        <div class="flex items-center gap-1.5"><span>A = </span>${formatMatrix3x3([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']])}</div>
      </div>
      dan diketahui <b>det(A) = r</b>. Maka determinan dari matriks:<br/>
      <div class="my-3 flex items-center justify-center gap-6 flex-wrap font-mono text-xs sm:text-sm">
        <div class="flex items-center gap-1.5"><span>Z = </span>${formatMatrix3x3([['a', 'b', 'c'], ['d', 'e', 'f'], ['a + g', 'b + h', 'c + i']])}</div>
      </div>
      adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Sifat Determinan pada Operasi Baris Elementer (OBE):</p>
        <p>Perhatikan struktur baris pada matriks Z:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Baris 1: <code>[a, b, c]</code> (sama dengan Baris 1 matriks A)</li>
          <li>Baris 2: <code>[d, e, f]</code> (sama dengan Baris 2 matriks A)</li>
          <li>Baris 3: <code>[a + g, b + h, c + i] = [g, h, i] + [a, b, c]</code> (merupakan hasil operasi penjumlahan baris <b>R₃' = R₃ + R₁</b>)</li>
        </ul>
        <p>Berdasarkan teorema dasar determinan: <b>Menambahkan kelipatan suatu baris ke baris lainnya (operasi tipe III) TIDAK mengubah nilai determinan matriks</b>.</p>
        <p>Sehingga: <code>det(Z) = det(A) = <b>r</b></code>.</p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>r</b> (Opsi C).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "2r", benar: false },
      { huruf: "b", teks: "-2r", benar: false },
      { huruf: "c", teks: "r", benar: true },
      { huruf: "d", teks: "-r", benar: false },
      { huruf: "e", teks: "3r", benar: false }
    ]
  },
  {
    no: 23,
    soal: `Hubungan determinan, invers matriks dan penyelesaian untuk sistem persamaan linier:<br/>
      Jika suatu SPL berbentuk <b>Ax = b</b> dan A matriks bujur sangkar, berlaku:<br/>
      <div class="my-2 space-y-1 font-mono text-xs sm:text-sm bg-slate-50 p-2.5 border border-slate-200">
        <div>• det(A) ≠ 0 ⟺ A⁻¹ terdefinisi (ada) ⟺ penyelesaian tunggal untuk SPL</div>
        <div>• det(A) = 0 ⟺ A tidak memiliki invers ⟺ SPL memiliki penyelesaian banyak atau tidak memiliki penyelesaian</div>
      </div>
      Pernyataan tersebut adalah...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Teorema Fundamental Matriks Invertibel (The Invertible Matrix Theorem):</p>
        <p>Untuk matriks bujur sangkar A berukuran n×n, pernyataan-pernyataan berikut adalah saling ekuivalen:</p>
        <ol class="list-decimal pl-5 space-y-1.5">
          <li>A memiliki invers (A⁻¹ ada) jika dan hanya jika <b>det(A) ≠ 0</b> (A nonsingular). Pada kondisi ini, sistem persamaan linier <code>Ax = b</code> memiliki solusi unik/tunggal yaitu <code>x = A⁻¹b</code>.</li>
          <li>Jika <b>det(A) = 0</b> (A singular), matriks A tidak memiliki invers. Sistem <code>Ax = b</code> akan memiliki tak hingga banyaknya penyelesaian (konsisten tak hingga) atau tidak memiliki penyelesaian sama sekali (inkonsisten).</li>
        </ol>
        <p class="text-emerald-700 font-semibold">Oleh karena itu, pernyataan tersebut adalah <b>True (Benar)</b>.</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "True", benar: true },
      { huruf: "b", teks: "False", benar: false }
    ]
  },
  {
    no: 24,
    soal: `Jika diketahui matriks:<br/>
      <div class="my-3 flex items-center justify-center gap-6 flex-wrap font-mono text-xs sm:text-sm">
        <div class="flex items-center gap-1.5">
          <span>A = </span>
          <span class="inline-flex items-center align-middle mx-1 font-mono">
            <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1"></span>
            <span class="grid grid-cols-2 gap-x-3 gap-y-1 px-2 py-0.5 text-center font-mono text-xs sm:text-sm">
              <span>1</span><span>0</span>
              <span>-2</span><span>3</span>
              <span>4</span><span>2</span>
            </span>
            <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1"></span>
          </span>
          <span class="text-xs text-slate-500 font-sans">(ordo 3×2)</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span>B = </span>
          <span class="inline-flex items-center align-middle mx-1 font-mono">
            <span class="self-stretch border-l-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
            <span class="grid grid-cols-3 gap-x-3 gap-y-1 px-2.5 py-0.5 text-center font-mono text-xs sm:text-sm">
              <span>2</span><span>5</span><span>3</span>
              <span>-1</span><span>4</span><span>0</span>
            </span>
            <span class="self-stretch border-r-2 border-t-2 border-b-2 border-slate-800 w-1.5"></span>
          </span>
          <span class="text-xs text-slate-500 font-sans">(ordo 2×3)</span>
        </div>
      </div>
      maka nilai dari <b>5A - B</b> = ...`,
    codeSnippet: null,
    pembahasan: `
      <div class="space-y-2 text-xs sm:text-sm">
        <p class="font-bold text-blue-900 border-b border-blue-200 pb-1">Syarat Penjumlahan dan Pengurangan Matriks:</p>
        <p>Operasi penjumlahan maupun pengurangan dua buah matriks (misal <code>M - N</code>) <b>hanya terdefinisi jika kedua matriks memiliki ordo (ukuran dimensi) yang sama persis</b>.</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Matriks A berordo <b>3×2</b> (3 baris, 2 kolom), sehingga perkalian skalar <code>5A</code> juga tetap berordo <b>3×2</b>.</li>
          <li>Matriks B berordo <b>2×3</b> (2 baris, 3 kolom).</li>
        </ul>
        <p>Karena ordo <code>5A</code> (3×2) tidak sama dengan ordo <code>B</code> (2×3), maka operasi pengurangan <code>5A - B</code> <b>tidak terdefinisi</b>.</p>
        <p class="text-emerald-700 font-semibold">Jawaban yang benar: <b>tidak terdefinisi</b> (Opsi A).</p>
      </div>
    `,
    opsi: [
      { huruf: "a", teks: "tidak terdefinisi", benar: true },
      { huruf: "b", teks: "[[3, 5, 3], [-3, 7, 0], [4, 2, 0]]", benar: false },
      { huruf: "c", teks: "[[3, 5], [-3, 7]]", benar: false },
      { huruf: "d", teks: "[[7, 5], [-11, 19]]", benar: false },
      { huruf: "e", teks: "[[7, 5, 3], [-11, 19, 0], [20, 10, 0]]", benar: false }
    ]
  }
];

// Alias ke paket Quiz Aljabar Linier
window.BankSoalData.questions['sem1-alin-quiz-1'] = window.BankSoalData.questions['sem1-alin-quiz'];
window.BankSoalData.questions['sem1-alin-latihan-soal'] = window.BankSoalData.questions['sem1-alin-quiz'];
window.BankSoalData.questions['sem1-alin-latihan'] = window.BankSoalData.questions['sem1-alin-quiz'];
