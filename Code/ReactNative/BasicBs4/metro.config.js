// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = {
  ...getDefaultConfig(),
  resolver: {
    // Enable support for absolute imports (if needed)
    extraNodeModules: {
      'react-native': require('path').resolve(__dirname, 'node_modules/react-native'),
    },
  },
};
