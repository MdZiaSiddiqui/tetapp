const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Add HTML files to asset extensions
config.resolver.assetExts.push('html', 'htm');

module.exports = withNativeWind(config, { input: './global.css' });
