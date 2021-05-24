// Helper functions
/**
 * Formats a number
 * @param {number} num - The number to beb formatted
 * @return {string | number}
 */
 export const formatNum = (num) => {
  if (num > 999999999) {
    return `${to2dp(num / 1000000000)}B`;
  } else if (num > 999999) {
    return `${to2dp(num / 1000000)}M`;
  } else if (num > 999) {
    return `${to2dp(num / 1000)}K`;
  } else return num;
};

/**
 * Add comma to a price
 * @param {number} price - Any price
 * @return {string} - Formatted price
 */
export const formatPrice = (price) =>
  to2dp(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * Calculates discounted price
 * @param {number | string} price - CardProduct price
 * @param {number | string} dP - CardProduct discount percentage
 * @return {number} - Discount price
 */
export const getDiscountedPrice = (price, dP) =>
  formatPrice((1 - Number(dP) / 100) * Number(price));

/**
 * Rounds a number to 2 d.p.
 * @param {number} num - Any number
 * @return {number} - Number to 2 d.p.
 */
export const to2dp = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

/**
 * Import multiple files
 * @param {array} r
 * @return {object}
 */
const importAll = (r) => {
  const images = {};
  r.map((i) => i.keys().map((it) => (images[it.replace('./', '')] = i(it))));
  return images;
};

/**
 * @type {object}
 */
let imag;
if (typeof require.context === 'undefined') {
  const fs = require('fs');
  const path = require('path');

  require.context = (
    base = '.',
    scanSubDirectories = false,
    regularExpression = /\.js$/
  ) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
} else {
  imag = importAll([
    require.context('assets', true, /.*\.svg$/),
    require.context('assets', true, /.*\.png$/),
    require.context('temp', true, /.*\.svg$/),
    require.context('temp', true, /.*\.png$/)
  ]);
}

export const images = imag;
