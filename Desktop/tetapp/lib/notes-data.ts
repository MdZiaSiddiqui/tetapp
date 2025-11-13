/**
 * Notes Data Structure
 * Maps subject names and languages to HTML file paths
 */

export type Language = 'english' | 'telugu' | 'urdu';

export interface NoteFile {
  id: string;
  subject: string;
  language: Language;
  fileName: string;
  displayName: string;
  icon: string;
  bookCover?: any;
}

/**
 * Book cover images mapping
 */
export const BOOK_COVERS = {
  'Child Development & Pedagogy': require('../imgs/development.webp'),
  'Mathematics': require('../imgs/math.webp'),
  'Physical Science': require('../imgs/physics.webp'),
  'Biological Science': require('../imgs/bio.webp'),
  'Environmental Studies': require('../imgs/evs.webp'),
  'Social Studies': require('../imgs/social.webp'),
  'English': require('../imgs/eng.webp'),
};

export const NOTES_DATA: NoteFile[] = [
  // Child Development
  {
    id: 'development-eng',
    subject: 'Child Development & Pedagogy',
    language: 'english',
    fileName: 'development_tet.html',
    displayName: 'Child Development (English)',
    icon: '🧒',
  },
  {
    id: 'development-tel',
    subject: 'Child Development & Pedagogy',
    language: 'telugu',
    fileName: 'development_tel_tet.html',
    displayName: 'Child Development (తెలుగు)',
    icon: '🧒',
  },
  {
    id: 'development-urdu',
    subject: 'Child Development & Pedagogy',
    language: 'urdu',
    fileName: 'development_urdu_tet.html',
    displayName: 'Child Development (اردو)',
    icon: '🧒',
  },

  // Mathematics
  {
    id: 'maths-eng',
    subject: 'Mathematics',
    language: 'english',
    fileName: 'maths_tet.html',
    displayName: 'Mathematics (English)',
    icon: '🔢',
  },
  {
    id: 'maths-tel',
    subject: 'Mathematics',
    language: 'telugu',
    fileName: 'maths_tet_tel.html',
    displayName: 'Mathematics (తెలుగు)',
    icon: '🔢',
  },
  {
    id: 'maths-urdu',
    subject: 'Mathematics',
    language: 'urdu',
    fileName: 'maths_tet_urdu.html',
    displayName: 'Mathematics (اردو)',
    icon: '🔢',
  },

  // Physics
  {
    id: 'physics-eng',
    subject: 'Physical Science',
    language: 'english',
    fileName: 'physics_tet.html',
    displayName: 'Physical Science (English)',
    icon: '⚛️',
  },
  {
    id: 'physics-tel',
    subject: 'Physical Science',
    language: 'telugu',
    fileName: 'physics_tet_tel.html',
    displayName: 'Physical Science (తెలుగు)',
    icon: '⚛️',
  },
  {
    id: 'physics-urdu',
    subject: 'Physical Science',
    language: 'urdu',
    fileName: 'physics_tet_urdu.html',
    displayName: 'Physical Science (اردو)',
    icon: '⚛️',
  },

  // Biology
  {
    id: 'biology-eng',
    subject: 'Biological Science',
    language: 'english',
    fileName: 'biology_tet.html',
    displayName: 'Biological Science (English)',
    icon: '🧬',
  },
  {
    id: 'biology-tel',
    subject: 'Biological Science',
    language: 'telugu',
    fileName: 'biology_telugu.html',
    displayName: 'Biological Science (తెలుగు)',
    icon: '🧬',
  },
  {
    id: 'biology-urdu',
    subject: 'Biological Science',
    language: 'urdu',
    fileName: 'biology_tet_urdu.html',
    displayName: 'Biological Science (اردو)',
    icon: '🧬',
  },

  // EVS
  {
    id: 'evs-eng',
    subject: 'Environmental Studies',
    language: 'english',
    fileName: 'evs_eng.html',
    displayName: 'Environmental Studies (English)',
    icon: '🌱',
  },
  {
    id: 'evs-tel',
    subject: 'Environmental Studies',
    language: 'telugu',
    fileName: 'evs_tel.html',
    displayName: 'Environmental Studies (తెలుగు)',
    icon: '🌱',
  },
  {
    id: 'evs-urdu',
    subject: 'Environmental Studies',
    language: 'urdu',
    fileName: 'evs_urdu.html',
    displayName: 'Environmental Studies (اردو)',
    icon: '🌱',
  },

  // Social Studies
  {
    id: 'social-eng',
    subject: 'Social Studies',
    language: 'english',
    fileName: 'social_studies_tet.html',
    displayName: 'Social Studies (English)',
    icon: '🌍',
  },
  {
    id: 'social-tel',
    subject: 'Social Studies',
    language: 'telugu',
    fileName: 'social_studies_tet_tel.html',
    displayName: 'Social Studies (తెలుగు)',
    icon: '🌍',
  },
  {
    id: 'social-urdu',
    subject: 'Social Studies',
    language: 'urdu',
    fileName: 'social_studies_tet_urdu.html',
    displayName: 'Social Studies (اردو)',
    icon: '🌍',
  },

  // English
  {
    id: 'english-eng',
    subject: 'English',
    language: 'english',
    fileName: 'english_tet.html',
    displayName: 'English Language & Pedagogy',
    icon: '📚',
  },
];

/**
 * Get notes grouped by subject
 */
export const getNotesBySubject = () => {
  const grouped = NOTES_DATA.reduce((acc, note) => {
    if (!acc[note.subject]) {
      acc[note.subject] = [];
    }
    acc[note.subject].push(note);
    return acc;
  }, {} as Record<string, NoteFile[]>);

  return grouped;
};

/**
 * Get all unique subjects
 */
export const getSubjects = () => {
  return Array.from(new Set(NOTES_DATA.map(note => note.subject)));
};

/**
 * Get notes for a specific subject
 */
export const getNotesForSubject = (subject: string) => {
  return NOTES_DATA.filter(note => note.subject === subject);
};

/**
 * Get note by ID
 */
export const getNoteById = (id: string) => {
  return NOTES_DATA.find(note => note.id === id);
};

/**
 * Language labels
 */
export const LANGUAGE_LABELS: Record<Language, string> = {
  english: 'English',
  telugu: 'తెలుగు',
  urdu: 'اردو',
};

/**
 * Get book cover image for a subject
 */
export const getBookCover = (subject: string) => {
  return BOOK_COVERS[subject as keyof typeof BOOK_COVERS];
};
