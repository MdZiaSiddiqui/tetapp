import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { getNotesBySubject, LANGUAGE_LABELS, getBookCover, type Language } from '@/lib/notes-data';

export default function NotesScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | 'all'>('all');

  const notesBySubject = getNotesBySubject();

  // Filter notes based on search and language
  const filteredNotes = Object.entries(notesBySubject).reduce((acc, [subject, notes]) => {
    const filtered = notes.filter(note => {
      const matchesSearch =
        subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.displayName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLanguage =
        selectedLanguage === 'all' || note.language === selectedLanguage;
      return matchesSearch && matchesLanguage;
    });

    if (filtered.length > 0) {
      acc[subject] = filtered;
    }
    return acc;
  }, {} as Record<string, typeof notesBySubject[string]>);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Study Notes</Text>
        <Text style={styles.subtitle}>Comprehensive study material for TET</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search subjects..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Language Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.languageFilter}
        contentContainerStyle={styles.languageFilterContent}
      >
        <TouchableOpacity
          style={[
            styles.languageChip,
            selectedLanguage === 'all' && styles.languageChipActive
          ]}
          onPress={() => setSelectedLanguage('all')}
        >
          <Text style={[
            styles.languageChipText,
            selectedLanguage === 'all' && styles.languageChipTextActive
          ]}>
            All Languages
          </Text>
        </TouchableOpacity>

        {(['english', 'telugu', 'urdu'] as Language[]).map((lang) => (
          <TouchableOpacity
            key={lang}
            style={[
              styles.languageChip,
              selectedLanguage === lang && styles.languageChipActive
            ]}
            onPress={() => setSelectedLanguage(lang)}
          >
            <Text style={[
              styles.languageChipText,
              selectedLanguage === lang && styles.languageChipTextActive
            ]}>
              {LANGUAGE_LABELS[lang]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Notes List */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(filteredNotes).map(([subject, notes]) => {
          const bookCover = getBookCover(subject);
          return (
            <View key={subject} style={styles.subjectSection}>
              <Text style={styles.subjectTitle}>{subject}</Text>

              {/* Book Cover Card */}
              {bookCover && (
                <View style={styles.bookCoverCard}>
                  <Image
                    source={bookCover}
                    style={styles.bookCoverImage}
                    resizeMode="cover"
                  />
                </View>
              )}

              {/* Note Cards */}
              {notes.map((note) => (
                <TouchableOpacity
                  key={note.id}
                  style={styles.noteCard}
                  onPress={() => router.push({
                    pathname: '/notes/viewer',
                    params: { noteId: note.id }
                  })}
                >
                  <View style={styles.noteIcon}>
                    <Text style={styles.noteIconText}>{note.icon}</Text>
                  </View>
                  <View style={styles.noteInfo}>
                    <Text style={styles.noteName}>{note.displayName}</Text>
                    <Text style={styles.noteLanguage}>
                      {LANGUAGE_LABELS[note.language]}
                    </Text>
                  </View>
                  <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        })}

        {Object.keys(filteredNotes).length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyText}>No notes found</Text>
            <Text style={styles.emptySubtext}>
              Try adjusting your search or language filter
            </Text>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  languageFilter: {
    maxHeight: 50,
    marginBottom: 10,
  },
  languageFilterContent: {
    paddingHorizontal: 20,
    gap: 10,
  },
  languageChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginRight: 8,
  },
  languageChipActive: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  languageChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  languageChipTextActive: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subjectSection: {
    marginBottom: 24,
  },
  subjectTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 12,
  },
  bookCoverCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  bookCoverImage: {
    width: 140,
    height: 180,
    borderRadius: 8,
  },
  noteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  noteIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  noteIconText: {
    fontSize: 24,
  },
  noteInfo: {
    flex: 1,
  },
  noteName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  noteLanguage: {
    fontSize: 13,
    color: '#6b7280',
  },
  arrow: {
    fontSize: 28,
    color: '#9ca3af',
    marginLeft: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
  },
});
