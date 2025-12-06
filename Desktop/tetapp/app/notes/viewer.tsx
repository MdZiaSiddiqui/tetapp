import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Animated,
  Pressable,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';
import { getNoteById } from '@/lib/notes-data';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { addRecentNote, saveProgress } from '@/lib/notes-storage';
import { useProAccess } from '@/hooks/useProAccess';
import UpgradePrompt from '@/components/premium/UpgradePrompt';
import LoadingBar from '@/components/LoadingBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function NotesViewer() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const webViewRef = useRef<WebView>(null);
  const [loading, setLoading] = useState(true);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [fontScale, setFontScale] = useState(1.0);
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [showSizeButton, setShowSizeButton] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { hasPaper1Access, hasPaper2Access, loading: proLoading } = useProAccess();

  const noteId = typeof params.noteId === 'string' ? params.noteId : '';
  const note = getNoteById(noteId);

  React.useEffect(() => {
    loadHTMLContent();
    // Track this note as recently accessed
    if (noteId) {
      addRecentNote(noteId);
    }
  }, [noteId]);

  // Load saved font scale preference
  useEffect(() => {
    AsyncStorage.getItem('notes-font-scale').then(val => {
      if (val) {
        const savedScale = parseFloat(val);
        setFontScale(savedScale);
      }
    });
  }, []);

  // Update font scale and persist preference
  const updateFontScale = (newScale: number) => {
    const clampedScale = Math.max(0.8, Math.min(1.6, newScale));
    setFontScale(clampedScale);
    AsyncStorage.setItem('notes-font-scale', clampedScale.toString());
    // Inject JS to update font size dynamically
    webViewRef.current?.injectJavaScript(`
      document.documentElement.style.fontSize = '${16 * clampedScale}px';
      true;
    `);
  };

  // Apply font scale when content is loaded and fontScale is set
  useEffect(() => {
    if (!loading && htmlContent && fontScale !== 1.0) {
      webViewRef.current?.injectJavaScript(`
        document.documentElement.style.fontSize = '${16 * fontScale}px';
        true;
      `);
    }
  }, [loading, fontScale, htmlContent]);

  // Toggle font menu with animation
  const toggleFontMenu = () => {
    if (showFontMenu) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => setShowFontMenu(false));
    } else {
      setShowFontMenu(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  };

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
          padding: 24px 16px 16px 16px !important;
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
          background: #f9fafb;
          border-radius: 12px;
          padding: 16px;
          margin: 0 0 32px 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
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
            padding: 20px 12px 12px 12px !important;
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

  // Free notes that don't require pro access
  const FREE_NOTES = ['english-eng'];
  const isFreeNote = FREE_NOTES.includes(noteId);

  // Pro access check - Loading state (skip for free notes)
  if (proLoading && !isFreeNote) {
    return <LoadingBar message="Loading..." />;
  }

  // Pro access check - No access (require either paper1 or paper2, but skip for free notes)
  if (!hasPaper1Access && !hasPaper2Access && !isFreeNote) {
    return <UpgradePrompt tier="paper1" feature="Notes" />;
  }

  if (!note) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Note not found</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={1}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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

      {/* Floating Font Size Button */}
      {showSizeButton && (
        <View style={styles.floatingFontBtn}>
          <TouchableOpacity
            style={styles.closeBtnArea}
            onPress={() => setShowSizeButton(false)}
            activeOpacity={0.7}
          >
            <Ionicons name="close" size={14} color="#6b7280" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeBtnArea}
            onPress={toggleFontMenu}
            activeOpacity={0.8}
          >
            <Text style={styles.floatingFontBtnText}>size</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Font Size Menu */}
      {showFontMenu && showSizeButton && (
        <>
          <Pressable style={styles.menuOverlay} onPress={toggleFontMenu} />
          <Animated.View style={[styles.fontMenu, { opacity: fadeAnim }]}>
            <TouchableOpacity
              style={[styles.fontMenuItem, fontScale <= 0.8 && styles.fontMenuItemDisabled]}
              onPress={() => updateFontScale(fontScale - 0.1)}
              disabled={fontScale <= 0.8}
              activeOpacity={0.7}
            >
              <Ionicons name="remove" size={20} color={fontScale <= 0.8 ? '#9ca3af' : '#ffffff'} />
            </TouchableOpacity>

            <View style={styles.fontMenuDivider} />

            <TouchableOpacity
              style={[styles.fontMenuItem, fontScale >= 1.6 && styles.fontMenuItemDisabled]}
              onPress={() => updateFontScale(fontScale + 0.1)}
              disabled={fontScale >= 1.6}
              activeOpacity={0.7}
            >
              <Ionicons name="add" size={20} color={fontScale >= 1.6 ? '#9ca3af' : '#ffffff'} />
            </TouchableOpacity>
          </Animated.View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  // Floating button
  floatingFontBtn: {
    position: 'absolute',
    top: 50,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(229, 231, 235, 0.6)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  closeBtnArea: {
    paddingLeft: 10,
    paddingRight: 6,
    paddingVertical: 8,
  },
  sizeBtnArea: {
    paddingRight: 14,
    paddingLeft: 4,
    paddingVertical: 8,
  },
  floatingFontBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
  },
  // Font menu
  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  fontMenu: {
    position: 'absolute',
    top: 100,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(31, 41, 55, 0.95)',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  fontMenuItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  fontMenuItemDisabled: {
    opacity: 0.4,
  },
  fontMenuDivider: {
    width: 1,
    height: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});
