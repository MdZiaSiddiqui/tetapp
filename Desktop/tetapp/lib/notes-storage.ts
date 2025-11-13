/**
 * Notes Storage Utility
 * Handles bookmarks, reading progress, and other note-related data
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARKS_KEY = '@notes_bookmarks';
const PROGRESS_KEY = '@notes_progress';
const RECENT_KEY = '@notes_recent';

export interface Bookmark {
  noteId: string;
  sectionId: string;
  title: string;
  timestamp: number;
}

export interface ReadingProgress {
  noteId: string;
  scrollPosition: number;
  lastRead: number;
}

export interface RecentNote {
  noteId: string;
  lastAccessed: number;
}

/**
 * Bookmarks
 */
export const getBookmarks = async (): Promise<Bookmark[]> => {
  try {
    const data = await AsyncStorage.getItem(BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return [];
  }
};

export const addBookmark = async (bookmark: Bookmark): Promise<void> => {
  try {
    const bookmarks = await getBookmarks();
    const updated = [...bookmarks, bookmark];
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error adding bookmark:', error);
  }
};

export const removeBookmark = async (noteId: string, sectionId: string): Promise<void> => {
  try {
    const bookmarks = await getBookmarks();
    const updated = bookmarks.filter(
      b => !(b.noteId === noteId && b.sectionId === sectionId)
    );
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error removing bookmark:', error);
  }
};

export const getBookmarksForNote = async (noteId: string): Promise<Bookmark[]> => {
  const bookmarks = await getBookmarks();
  return bookmarks.filter(b => b.noteId === noteId);
};

/**
 * Reading Progress
 */
export const getProgress = async (noteId: string): Promise<ReadingProgress | null> => {
  try {
    const data = await AsyncStorage.getItem(`${PROGRESS_KEY}_${noteId}`);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting progress:', error);
    return null;
  }
};

export const saveProgress = async (progress: ReadingProgress): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      `${PROGRESS_KEY}_${progress.noteId}`,
      JSON.stringify(progress)
    );
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

/**
 * Recent Notes
 */
export const getRecentNotes = async (): Promise<RecentNote[]> => {
  try {
    const data = await AsyncStorage.getItem(RECENT_KEY);
    const recent = data ? JSON.parse(data) : [];
    // Sort by last accessed (most recent first)
    return recent.sort((a: RecentNote, b: RecentNote) => b.lastAccessed - a.lastAccessed);
  } catch (error) {
    console.error('Error getting recent notes:', error);
    return [];
  }
};

export const addRecentNote = async (noteId: string): Promise<void> => {
  try {
    const recent = await getRecentNotes();
    const updated = [
      { noteId, lastAccessed: Date.now() },
      ...recent.filter(r => r.noteId !== noteId)
    ].slice(0, 10); // Keep only last 10

    await AsyncStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error adding recent note:', error);
  }
};

/**
 * Clear all notes data
 */
export const clearNotesData = async (): Promise<void> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const notesKeys = keys.filter(
      key => key.startsWith(BOOKMARKS_KEY) ||
             key.startsWith(PROGRESS_KEY) ||
             key.startsWith(RECENT_KEY)
    );
    await AsyncStorage.multiRemove(notesKeys);
  } catch (error) {
    console.error('Error clearing notes data:', error);
  }
};
