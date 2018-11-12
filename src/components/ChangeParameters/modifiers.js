export function truncate(value) {
  if(value < 0) return 0;
  if(value > 255) return 255;

  return value;
}

export function iteratePixels(value, arrayPixels, modifyFunction) {
  for (let i = 0; i < arrayPixels.length; i += 4) {
    let r = arrayPixels[i];
    let g = arrayPixels[i+1];
    let b  = arrayPixels[i+2];
    const result  = modifyFunction(r, g, b, value);
    arrayPixels[i] = result.r;
    arrayPixels[i+1] = result.g;
    arrayPixels[i+2] = result.b;
  }
}

export function modifyBrightness(r, g, b, value) {
    r = truncate(r+value);
    g= truncate(g+value);
    b = truncate(b+value);
    return {r, g, b}
}

export function modifyContrast(r, g, b, value) {
  r = truncate(r+value);
  g= truncate(g+value);
  b = truncate(b+value);
  return {r, g, b}
}

export function modifySaturation(r, g, b, value) {
  r = truncate(r+value);
  g= truncate(g+value);
  b = truncate(b+value);
  return {r, g, b}
}

export function modifySharpness(r, g, b, value) {
  r = truncate(r+value);
  g= truncate(g+value);
  b = truncate(b+value);
  return {r, g, b}
}

export function modifyGreyscale(r, g, b, value) {
  r = truncate(r+value);
  g= truncate(g+value);
  b = truncate(b+value);
  return {r, g, b}
}