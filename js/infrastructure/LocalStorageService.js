/**
 * ============================================================================
 * INFRASTRUCTURE: LOCAL STORAGE SERVICE
 * Handles persistence of exam history, scores, and bookmarks without login.
 * ============================================================================
 */

window.App = window.App || {};
window.App.Infrastructure = window.App.Infrastructure || {};

window.App.Infrastructure.LocalStorageService = (function () {
  'use strict';

  const STORAGE_KEYS = {
    HISTORY: 'cat_exam_history_v1',
    BOOKMARKS: 'cat_bookmarked_questions_v1',
    LAST_MODE: 'cat_last_selected_mode_v1'
  };

  class LocalStorageService {
    // 1. History & Scores
    static getHistory() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.error("Failed to read history from localStorage", e);
        return [];
      }
    }

    static saveExamRecord(record) {
      try {
        const history = this.getHistory();
        // Insert at beginning (newest first)
        history.unshift({
          id: 'rec-' + Date.now(),
          timestamp: new Date().toISOString(),
          formattedDate: new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          ...record
        });

        // Keep maximum 50 records
        if (history.length > 50) history.pop();
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
      } catch (e) {
        console.error("Failed to save exam record", e);
      }
    }

    static clearHistory() {
      try {
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
      } catch (e) {
        console.error("Failed to clear history", e);
      }
    }

    // 2. Bookmarks (Soal Ditandai Bintang)
    static getBookmarks() {
      try {
        const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.error("Failed to read bookmarks", e);
        return [];
      }
    }

    static toggleBookmark(questionId) {
      try {
        let bookmarks = this.getBookmarks();
        if (bookmarks.includes(questionId)) {
          bookmarks = bookmarks.filter(id => id !== questionId);
        } else {
          bookmarks.push(questionId);
        }
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
        return bookmarks.includes(questionId);
      } catch (e) {
        console.error("Failed to toggle bookmark", e);
        return false;
      }
    }

    static isBookmarked(questionId) {
      const bookmarks = this.getBookmarks();
      return bookmarks.includes(questionId);
    }

    // 3. User Preferred Mode ('study' | 'exam')
    static getPreferredMode() {
      try {
        return localStorage.getItem(STORAGE_KEYS.LAST_MODE) || 'study';
      } catch (e) {
        return 'study';
      }
    }

    static setPreferredMode(mode) {
      try {
        localStorage.setItem(STORAGE_KEYS.LAST_MODE, mode);
      } catch (e) {
        console.error("Failed to save mode preference", e);
      }
    }

    // 4. Temporary Active Session State (Bisa direset manual via tombol Reset Jawaban)
    static getActiveSession(packageId) {
      try {
        const raw = localStorage.getItem(`cat_active_sess_${packageId}`);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    static saveActiveSession(packageId, snapshot) {
      try {
        localStorage.setItem(`cat_active_sess_${packageId}`, JSON.stringify(snapshot));
      } catch (e) {}
    }

    static clearActiveSession(packageId) {
      try {
        localStorage.removeItem(`cat_active_sess_${packageId}`);
      } catch (e) {}
    }

    static clearAllActiveSessions() {
      try {
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('cat_active_sess_')) {
            localStorage.removeItem(key);
          }
        });
      } catch (e) {}
    }
  }

  return LocalStorageService;
})();
