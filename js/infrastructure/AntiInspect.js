/**
 * ============================================================================
 * INFRASTRUCTURE: ANTI-INSPECT & DEVTOOLS BLOCKER
 * Mencegah pembukaan DevTools, klik kanan, shortcut F12, Ctrl+Shift+I, dan Ctrl+U
 * ============================================================================
 */

(function () {
  'use strict';

  // Opsi Bypass khusus untuk Pengembang: Buka dengan URL `index.html?debug=true`
  const urlParams = new URLSearchParams(window.location.search);
  const isDebugBypass = urlParams.get('debug') === 'true' || localStorage.getItem('allow_devtools') === 'true';

  if (isDebugBypass) {
    console.info('AntiInspect: Mode pengembang aktif via ?debug=true. Proteksi dinonaktifkan.');
    return;
  }

  // 1. Blokir Menu Klik Kanan (Context Menu)
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 2. Blokir Shortcut Keyboard Terkait DevTools & View Source
  window.addEventListener('keydown', function (e) {
    // Tombol F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    const isCtrlOrMeta = e.ctrlKey || e.metaKey;

    // Ctrl + Shift + I (Inspect)
    // Ctrl + Shift + J (Console)
    // Ctrl + Shift + C (Element Picker)
    if (isCtrlOrMeta && e.shiftKey) {
      const key = (e.key || '').toUpperCase();
      if (key === 'I' || key === 'J' || key === 'C') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }

    // Ctrl + U (View Page Source)
    // Ctrl + S (Save Page)
    // Ctrl + P (Print / PDF View)
    if (isCtrlOrMeta) {
      const key = (e.key || '').toUpperCase();
      if (key === 'U' || key === 'S' || key === 'P') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  }, { capture: true });

  // 3. Blokir Drag & Drop elemen untuk mencegah ekstraksi
  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
  });

  // 4. Debugger Trap (Otomatis membekukan/pause jika DevTools dibuka paksa)
  function initDebuggerTrap() {
    setInterval(function () {
      const startTime = performance.now();
      // debugger akan memicu breakpoint otomatis begitu tab Sources/DevTools aktif
      (function () {
        debugger;
      })();
      const endTime = performance.now();
      if (endTime - startTime > 100) {
        // DevTools terdeteksi terbuka karena eksekusi terhenti oleh breakpoint
        console.clear();
      }
    }, 1000);
  }

  initDebuggerTrap();

  // 5. Bersihkan Console secara berkala untuk mencegah pembacaan data di tab Console
  setInterval(function () {
    console.clear();
  }, 3000);

  // 6. Blokir Salin & Potong Teks (Anti-Copy / Anti-Cut)
  document.addEventListener('copy', function (e) {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', 'Menyalin konten soal tidak diperbolehkan demi integritas ujian.');
    }
    return false;
  }, { capture: true });

  document.addEventListener('cut', function (e) {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 7. Tombol Layar Penuh (Fullscreen)
  function initFullscreenListener() {
    const btnFullscreen = document.getElementById('btn-toggle-fullscreen');
    if (btnFullscreen) {
      btnFullscreen.addEventListener('click', function () {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(function () {});
        } else {
          document.exitFullscreen().catch(function () {});
        }
      });

      document.addEventListener('fullscreenchange', function () {
        if (document.fullscreenElement) {
          btnFullscreen.classList.add('bg-blue-700', 'border-blue-400');
        } else {
          btnFullscreen.classList.remove('bg-blue-700', 'border-blue-400');
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFullscreenListener);
  } else {
    initFullscreenListener();
  }

})();
