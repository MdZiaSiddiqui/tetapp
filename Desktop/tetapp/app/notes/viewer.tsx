import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';
import { getNoteById } from '@/lib/notes-data';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { addRecentNote, saveProgress } from '@/lib/notes-storage';

export default function NotesViewer() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const webViewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [showTOC, setShowTOC] = useState(false);

  const noteId = typeof params.noteId === 'string' ? params.noteId : '';
  const note = getNoteById(noteId);

  React.useEffect(() => {
    loadHTMLContent();
    // Track this note as recently accessed
    if (noteId) {
      addRecentNote(noteId);
    }
  }, [noteId]);

  const loadHTMLContent = async () => {
    if (!note) {
      Alert.alert('Error', 'Note not found');
      router.back();
      return;
    }

    try {
      setLoading(true);

      // Create a map of note IDs to require paths
      const htmlFiles: Record<string, any> = {
        'development-eng': require('../../xhtml/development_tet.html'),
        'development-tel': require('../../xhtml/development_tel_tet.html'),
        'development-urdu': require('../../xhtml/development_urdu_tet.html'),
        'maths-eng': require('../../xhtml/maths_tet.html'),
        'maths-tel': require('../../xhtml/maths_tet_tel.html'),
        'maths-urdu': require('../../xhtml/maths_tet_urdu.html'),
        'physics-eng': require('../../xhtml/physics_tet.html'),
        'physics-tel': require('../../xhtml/physics_tet_tel.html'),
        'physics-urdu': require('../../xhtml/physics_tet_urdu.html'),
        'biology-eng': require('../../xhtml/biology_tet.html'),
        'biology-tel': require('../../xhtml/biology_telugu.html'),
        'biology-urdu': require('../../xhtml/biology_tet_urdu.html'),
        'evs-eng': require('../../xhtml/evs_eng.html'),
        'evs-tel': require('../../xhtml/evs_tel.html'),
        'evs-urdu': require('../../xhtml/evs_urdu.html'),
        'social-eng': require('../../xhtml/social_studies_tet.html'),
        'social-tel': require('../../xhtml/social_studies_tet_tel.html'),
        'social-urdu': require('../../xhtml/social_studies_tet_urdu.html'),
        'english-eng': require('../../xhtml/english_tet.html'),
      };

      const htmlModule = htmlFiles[noteId];

      if (!htmlModule) {
        throw new Error('HTML file not found for this note');
      }

      // Load the HTML file using Asset
      const asset = Asset.fromModule(htmlModule);
      await asset.downloadAsync();

      // Fetch the content
      const response = await fetch(asset.localUri || asset.uri);
      const htmlContent = await response.text();

      // Inject mobile-optimized CSS
      const mobileOptimizedHTML = injectMobileCSS(htmlContent);
      setHtmlContent(mobileOptimizedHTML);
      setLoading(false);
    } catch (error) {
      console.error('Error loading HTML:', error);
      Alert.alert(
        'Error',
        'Failed to load notes. Please make sure the file exists and try again.'
      );
      setLoading(false);
    }
  };

  const injectMobileCSS = (html: string) => {
    // Add viewport meta tag
    const viewportMeta = `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">`;

    // Add mobile-optimized CSS
    const mobileCSS = `
      <style>
        /* Mobile Optimizations */
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        html {
          -webkit-text-size-adjust: 100%;
          font-size: 16px;
        }

        body {
          margin: 0 !important;
          padding: 16px !important;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          line-height: 1.6;
          background-color: #ffffff;
          overflow-x: hidden;
          max-width: 100%;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
        }

        /* Typography */
        h1 {
          font-size: 1.8em !important;
          margin: 1em 0 0.5em 0 !important;
          line-height: 1.3 !important;
        }

        h2 {
          font-size: 1.5em !important;
          margin: 0.9em 0 0.5em 0 !important;
          line-height: 1.3 !important;
        }

        h3 {
          font-size: 1.3em !important;
          margin: 0.8em 0 0.5em 0 !important;
          line-height: 1.3 !important;
        }

        h4, h5, h6 {
          font-size: 1.1em !important;
          margin: 0.7em 0 0.4em 0 !important;
          line-height: 1.3 !important;
        }

        p, li {
          font-size: 1em;
          line-height: 1.7;
          margin-bottom: 0.8em;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
        }

        span {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
        }

        div, section, article, main {
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
        }

        /* Table of Contents */
        .index {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 16px;
          margin: 0 0 24px 0;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          max-height: 60vh;
          overflow-y: auto;
        }

        .index h2 {
          margin: 0 0 12px 0 !important;
          font-size: 1.3em !important;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 8px;
        }

        .index ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .index li {
          margin: 0 0 8px 0;
        }

        .index a {
          display: block;
          padding: 10px 12px;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 8px;
          color: #1f2937;
          text-decoration: none;
          font-size: 0.95em;
          transition: all 0.2s;
          border-left: 3px solid transparent;
        }

        .index a:active {
          background: rgba(59, 130, 246, 0.15);
          border-left-color: #3b82f6;
        }

        .index .level-1 {
          font-weight: 600;
        }

        .index .level-2 {
          margin-left: 16px;
          font-weight: 400;
          font-size: 0.9em;
        }

        /* Images */
        img {
          max-width: 100% !important;
          height: auto !important;
          display: block;
          margin: 1em auto;
          border-radius: 8px;
        }

        /* Tables */
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 1em 0;
          font-size: 0.9em;
          overflow-x: auto;
          display: block;
        }

        th, td {
          padding: 10px 8px;
          border: 1px solid #e5e7eb;
          text-align: left;
        }

        th {
          background-color: #f3f4f6;
          font-weight: 600;
          position: sticky;
          top: 0;
        }

        /* Math */
        .math-display {
          overflow-x: auto;
          overflow-y: hidden;
          padding: 12px;
          margin: 1em 0;
          background-color: #f9fafb;
          border-radius: 8px;
          border-left: 3px solid #3b82f6;
        }

        .math-inline {
          display: inline-block;
          padding: 0 4px;
        }

        /* Lists */
        ul, ol {
          padding-left: 24px;
          margin: 0.8em 0;
        }

        li {
          margin-bottom: 0.5em;
        }

        /* Code blocks */
        pre, code {
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          background-color: #f3f4f6;
          padding: 2px 6px;
          border-radius: 4px;
          overflow-x: auto;
        }

        pre {
          padding: 12px;
          margin: 1em 0;
          border-left: 3px solid #6b7280;
        }

        /* Blockquotes */
        blockquote {
          margin: 1em 0;
          padding: 12px 16px;
          background-color: #fef3c7;
          border-left: 4px solid #f59e0b;
          border-radius: 4px;
        }

        /* Links */
        a {
          color: #3b82f6;
          text-decoration: none;
        }

        a:active {
          opacity: 0.7;
        }

        /* Scrollbar (webkit) */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          body {
            padding: 12px !important;
          }

          h1 { font-size: 1.6em !important; }
          h2 { font-size: 1.4em !important; }
          h3 { font-size: 1.2em !important; }

          table {
            font-size: 0.85em;
          }

          th, td {
            padding: 8px 6px;
          }
        }
      </style>
    `;

    // Inject viewport meta tag and CSS into HTML
    let modifiedHtml = html;

    // Add viewport if not present
    if (!html.includes('viewport')) {
      modifiedHtml = modifiedHtml.replace('<head>', `<head>${viewportMeta}`);
    }

    // Inject CSS before closing </head> tag
    return modifiedHtml.replace('</head>', `${mobileCSS}</head>`);
  };

  const scrollToTop = () => {
    webViewRef.current?.injectJavaScript(`
      window.scrollTo({ top: 0, behavior: 'smooth' });
      true;
    `);
  };

  if (!note) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Note not found</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText} numberOfLines={1}>
            {note.displayName}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={scrollToTop}
        >
          <Text style={styles.topIcon}>↑</Text>
        </TouchableOpacity>
      </View>

      {/* WebView */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3b82f6" />
          <Text style={styles.loadingText}>Loading notes...</Text>
        </View>
      )}

      {htmlContent && (
        <WebView
          ref={webViewRef}
          source={{
            html: htmlContent,
            baseUrl: ''
          }}
          style={styles.webview}
          onLoadEnd={() => setLoading(false)}
          scrollEnabled={true}
          showsVerticalScrollIndicator={true}
          bounces={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={false}
          mixedContentMode="always"
          originWhitelist={['*']}
          automaticallyAdjustContentInsets={false}
          contentInsetAdjustmentBehavior="never"
          onScroll={(event) => {
            // Save scroll position for resuming later
            const scrollY = event.nativeEvent.contentOffset.y;
            saveProgress({
              noteId,
              scrollPosition: scrollY,
              lastRead: Date.now(),
            });
          }}
          scrollEventThrottle={1000}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  backIcon: {
    fontSize: 32,
    color: '#1f2937',
    fontWeight: '300',
  },
  topIcon: {
    fontSize: 24,
    color: '#1f2937',
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    marginHorizontal: 12,
  },
  headerTitleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
  webview: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6b7280',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 18,
    color: '#ef4444',
    marginBottom: 16,
  },
  backButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 8,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
