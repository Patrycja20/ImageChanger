/**
 * @param {int} width
 * @param {int} height
 * @returns {string}
 */
export function getImageSurface(width, height) {
  const mega = 1000 * 1000;
  return (width * height / mega).toFixed(2);
}

/**
 * @param {int} width
 * @param {int} height
 * @returns {boolean}
 */
export function isPhotoTooBig(width, height) {
  const warningMpix = 5.5;
  const mega = 1000 * 1000;
  return (width * height / mega) > warningMpix;
}

/**
 * Calcs canvas container dimensions
 *
 * @param {{width: number, height: number}} imageSize
 * @param {{width: number, height: number}} containerSize
 * @returns {{divWidth: number, divHeight: number}}
 */
export function getDivDimensions(imageSize, containerSize) {
  const topMargin = 140;
  const bottomMargin = 40;
  const scrollWidth = 22;

  const newHeight = containerSize.height - topMargin - bottomMargin;

  const divWidth = (imageSize.width <= containerSize.width)
    ? imageSize.width + scrollWidth
    : containerSize.width;
  const divHeight = (imageSize.height <= newHeight)
    ? imageSize.height + scrollWidth
    : newHeight;

  return { divWidth, divHeight };
}

/**
 * @param {{innerWidth: number, innerHeight: number}} window:
 * @return {{width: number, height: number}}
 */
export function calcWindowSize(window) {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
