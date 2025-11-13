import { useRef, useMemo, useEffect } from 'react';
import { PanResponder, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface UseSwipeNavigationProps {
  currentIndex: number;
  totalItems: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  enabled?: boolean;
}

export function useSwipeNavigation({
  currentIndex,
  totalItems,
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
}: UseSwipeNavigationProps) {
  const pan = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => {
          if (!enabled || isAnimating.current) return false;
          // Higher threshold to avoid interfering with taps
          return (
            Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
            Math.abs(gestureState.dx) > 15
          );
        },
        onPanResponderGrant: () => {
          // Stop any ongoing animation
          pan.stopAnimation();
        },
        onPanResponderMove: (_, gestureState) => {
          let dx = gestureState.dx;

          // Add resistance at boundaries
          if (currentIndex === 0 && dx > 0) {
            // First question - add resistance to right swipe
            dx = dx * 0.25;
          } else if (currentIndex === totalItems - 1 && dx < 0) {
            // Last question - add resistance to left swipe
            dx = dx * 0.25;
          }

          pan.setValue(dx);
        },
        onPanResponderRelease: (_, gestureState) => {
          const swipeThreshold = SCREEN_WIDTH * 0.25; // 25% of screen width
          const swipeVelocity = 0.5;

          // Check if swipe was fast enough or long enough
          const shouldNavigate =
            Math.abs(gestureState.dx) > swipeThreshold ||
            Math.abs(gestureState.vx) > swipeVelocity;

          if (gestureState.dx > 0 && shouldNavigate && currentIndex > 0) {
            // Swipe right - go to previous
            isAnimating.current = true;
            Animated.timing(pan, {
              toValue: SCREEN_WIDTH,
              duration: 200,
              useNativeDriver: true,
            }).start(() => {
              pan.setValue(-SCREEN_WIDTH);
              onSwipeRight();
              Animated.timing(pan, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                isAnimating.current = false;
              });
            });
          } else if (gestureState.dx < 0 && shouldNavigate) {
            // Swipe left - go to next
            if (currentIndex < totalItems - 1) {
              isAnimating.current = true;
              Animated.timing(pan, {
                toValue: -SCREEN_WIDTH,
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                pan.setValue(SCREEN_WIDTH);
                onSwipeLeft();
                Animated.timing(pan, {
                  toValue: 0,
                  duration: 200,
                  useNativeDriver: true,
                }).start(() => {
                  isAnimating.current = false;
                });
              });
            } else {
              // Last item - just reset
              Animated.spring(pan, {
                toValue: 0,
                tension: 65,
                friction: 10,
                useNativeDriver: true,
              }).start();
            }
          } else {
            // Return to center if swipe wasn't long enough
            Animated.spring(pan, {
              toValue: 0,
              tension: 65,
              friction: 10,
              useNativeDriver: true,
            }).start();
          }
        },
        onPanResponderTerminate: () => {
          // Return to center if gesture is cancelled
          Animated.spring(pan, {
            toValue: 0,
            tension: 65,
            friction: 10,
            useNativeDriver: true,
          }).start();
        },
      }),
    [enabled, currentIndex, totalItems, onSwipeLeft, onSwipeRight, pan]
  );

  return {
    pan,
    panResponder,
  };
}
