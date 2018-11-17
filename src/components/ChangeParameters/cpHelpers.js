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