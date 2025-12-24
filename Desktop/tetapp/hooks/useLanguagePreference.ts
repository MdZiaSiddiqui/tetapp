import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_PREFERENCE_KEY = '@language_preference';

export type LanguagePreference = 'English' | 'Telugu' | 'Urdu';

/**
 * Hook to manage user's preferred language for questions
 * This preference is used for non-language subjects (like Math, Science, etc.)
 */
export function useLanguagePreference() {
  const [language, setLanguageState] = useState<LanguagePreference>('English');
  const [loading, setLoading] = useState(true);

  // Load preference from storage on mount
  useEffect(() => {
    loadPreference();
  }, []);

  const loadPreference = async () => {
    try {
      const stored = await AsyncStorage.getItem(LANGUAGE_PREFERENCE_KEY);
      if (stored && ['English', 'Telugu', 'Urdu'].includes(stored)) {
        setLanguageState(stored as LanguagePreference);
      }
    } catch (error) {
      console.error('[useLanguagePreference] Error loading preference:', error);
    } finally {
      setLoading(false);
    }
  };

  const setLanguage = useCallback(async (newLanguage: LanguagePreference) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_PREFERENCE_KEY, newLanguage);
      setLanguageState(newLanguage);
    } catch (error) {
      console.error('[useLanguagePreference] Error saving preference:', error);
    }
  }, []);

  return {
    language,
    setLanguage,
    loading,
  };
}
