import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

interface ShapeProps {
  size?: number;
  color?: string;
  gradient?: string[];
  children?: React.ReactNode;
}

// Home/House shape for "Answered" (like in screenshot - flat bottom with pointed top)
export function HomeShape({ size = 56, color = '#22c55e', gradient, children }: ShapeProps) {
  const width = size;
  const height = size;

  // Create a house/home shape: pointed top, flat bottom
  // Using consistent proportions: 90% width, 100% height
  // Start from bottom-left, go counterclockwise
  const path = `
    M ${width * 0.05} ${height * 1.0}
    L ${width * 0.05} ${height * 0.35}
    L ${width * 0.5} ${height * 0.0}
    L ${width * 0.95} ${height * 0.35}
    L ${width * 0.95} ${height * 1.0}
    Z
  `;

  const fillColor = gradient ? 'url(#homeGradient)' : color;

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size} viewBox={`0 0 ${width} ${height}`} style={{ position: 'absolute' }}>
        {gradient && (
          <Defs>
            <SvgLinearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
              <Stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
            </SvgLinearGradient>
          </Defs>
        )}
        <Path d={path} fill={fillColor} />
      </Svg>
      {children}
    </View>
  );
}

// Shield/Badge shape for "Not Answered" (like in screenshot - flat top, straight sides, curved bottom)
export function ShieldShape({ size = 56, color = '#ef4444', children }: ShapeProps) {
  const width = size;
  const height = size;

  // Create a shield/badge shape: flat top (3 corners), straight sides, curved bottom pointing down
  const path = `
    M ${width * 0.15} ${height * 0.1}
    L ${width * 0.85} ${height * 0.1}
    L ${width * 0.85} ${height * 0.65}
    L ${width * 0.65} ${height * 0.9}
    L ${width * 0.5} ${height * 0.96}
    L ${width * 0.35} ${height * 0.9}
    L ${width * 0.15} ${height * 0.65}
    Z
  `;

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size} viewBox={`0 0 ${width} ${height}`} style={{ position: 'absolute' }}>
        <Path d={path} fill={color} />
      </Svg>
      {children}
    </View>
  );
}

// Inverted Home shape for "Not Answered" (inverted house shape - flat top, pointed bottom)
export function InvertedHomeShape({ size = 56, color = '#ef4444', gradient, children }: ShapeProps) {
  const width = size;
  const height = size;

  // Create an inverted house shape: flat top, pointed bottom
  // Using consistent proportions: 90% width, 100% height (matching HomeShape)
  // Start from top-left, go counterclockwise
  const path = `
    M ${width * 0.05} ${height * 0.0}
    L ${width * 0.95} ${height * 0.0}
    L ${width * 0.95} ${height * 0.65}
    L ${width * 0.5} ${height * 1.0}
    L ${width * 0.05} ${height * 0.65}
    Z
  `;

  const fillColor = gradient ? 'url(#invertedHomeGradient)' : color;

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size} viewBox={`0 0 ${width} ${height}`} style={{ position: 'absolute' }}>
        {gradient && (
          <Defs>
            <SvgLinearGradient id="invertedHomeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
              <Stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
            </SvgLinearGradient>
          </Defs>
        )}
        <Path d={path} fill={fillColor} />
      </Svg>
      {children}
    </View>
  );
}

// Legacy exports for compatibility
export const Pentagon = HomeShape;
export const InvertedPentagon = ShieldShape;
