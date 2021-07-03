const path = require('path');

module.exports = {
  resolve: {
    extensions: ['js', 'ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@tests': path.resolve(__dirname, 'src/__tests__'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@temp': path.resolve(__dirname, 'src/temp'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
