export function truncate(value) {
  if (value < 0) return 0;
  if (value > 255) return 255;

  return value;
}

export function iteratePixels(values, arrayPixels) {
  for (let i = 0; i < arrayPixels.length; i += 4) {
    let r = arrayPixels[i];
    let g = arrayPixels[i + 1];
    let b = arrayPixels[i + 2];

    let result = modifyInvertedColor(r, g, b, values.invertedColor);
    result = modifyBlackAndWhite(result.r, result.g, result.b, values.blackAndWhite);
    result = modifyBrightness(result.r, result.g, result.b, values.brightness);
    result = modifyContrast(result.r, result.g, result.b, values.contrast);
    result = modifySaturation(result.r, result.g, result.b, values.saturation);
    result = modifyNumberOfShades(result.r, result.g, result.b, values.numberOfShades);

    if (values.red === false) result.r = 0;
    if (values.green === false) result.g = 0;
    if (values.blue === false) result.b = 0;

    arrayPixels[i] = result.r;
    arrayPixels[i + 1] = result.g;
    arrayPixels[i + 2] = result.b;
  }
}

export function modifyBrightness(r, g, b, value) {
  r = truncate(r + value);
  g = truncate(g + value);
  b = truncate(b + value);
  return {r, g, b};
}

export function modifyContrast(r, g, b, value) {
  const factor = (259 * (value + 255)) / (255 * (259 - value));
  r = truncate(factor * (r - 128) + 128);
  g = truncate(factor * (g - 128) + 128);
  b = truncate(factor * (b - 128) + 128);
  return {r, g, b};
}

export function modifySaturation(r, g, b, value) {
  const Pr = 0.299;
  const Pg = 0.587;
  const Pb = 0.114;
  const P = Math.sqrt((r) * (r) * Pr + (g) * (g) * Pg + (b) * (b) * Pb);
  r = truncate(P + ((r) - P) * value);
  g = truncate(P + ((g) - P) * value);
  b = truncate(P + ((b) - P) * value);
  return {r, g, b}
}

export function modifyNumberOfShades(r, g, b, value) {
  if (value === 0) return {r, g, b};

  const conversionFactor = 255 / value;
  const averageValue = (r + g + b) / 3;
  const gray = parseInt((averageValue / conversionFactor) + 0.5) * conversionFactor;
  r = truncate(gray);
  g = truncate(gray);
  b = truncate(gray);
  return {r, g, b};
}

export function modifyBlackAndWhite(r, g, b, value) {
  if (value === false) return {r, g, b};

  const gray = (r * 0.2126 + g * 0.7152 + b * 0.0722);
  r = truncate(gray);
  g = truncate(gray);
  b = truncate(gray);
  return {r, g, b};
}

export function modifyInvertedColor(r, g, b, value) {
  if (value === false) return {r, g, b};
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  return {r, g, b};
}

export function modifyVignetting(width, height, ctx, value) {
  if (value === 0) return;
  const gradient = ctx.createRadialGradient(width / 2, height / 2, width / 8, width / 2, height / 2, (1 / value) * width / 4);

  gradient.addColorStop(0, 'rgba(0,0,0,0)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.8)');

  return gradient;
}