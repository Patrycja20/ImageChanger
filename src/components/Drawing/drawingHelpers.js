/**
 * Funkcje pomocnicze (helpers) do rysowania po canvasie.
 * ! Aby wyeksportować funkcję, trzeba dodać ją do obiektu `export default`, który jest na końcu tego pliku.
 */

/**
 * Zwraca prawdziwe koordynaty kliknięcia na canvas
 *
 * @param canvas
 * @param event
 * @returns {{x: number, y: number}}
 */
export function getRealCoords(canvas, event) {
  const { top, left } = getPositionOf(canvas);
  const x = event.pageX - left;
  const y = event.pageY - top;
  return { x, y };
}

/**
 * @param element (html element)
 * @returns {{top: number, left: number}}
 */
function getPositionOf(element) {
  let top = 0;
  let left = 0;
  let obj = element;

  while (obj && obj.tagName !== 'BODY') {
    top += obj.offsetTop - obj.scrollTop;
    left += obj.offsetLeft - obj.scrollLeft;
    obj = obj.offsetParent;
  }

  return { top, left };
}

/**
 * Ustawia domyślne wartości początkowe na canvasie (context)
 *
 * @param context
 * @param {number} paintSize
 * @param {string} color
 */
export function setDefaultContextValues(context, paintSize, color) {
  context.strokeStyle = color;
  context.lineWidth = paintSize;
  context.lineJoin = 'round';
  context.lineCap = 'round';
}

/**
 * Tworzy plik jpg z canvasa i wyświetla okienko do jego pobrania jako jpg
 *
 * @param canvas
 */
export function canvasDownloadPopup(canvas) {
  if (canvas === null) return;

  const data = canvas.toDataURL('image/jpeg');
  const image = data.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');

  const downloadLink = document.createElement("a");
  downloadLink.href = image;
  downloadLink.download = "image.jpg";

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

/**
 * Rysuje (mazakiem)
 *
 * @param context (2d context from canvas)
 * @param {{x: number, y: number}} mousePosition
 */
export function draw(context, mousePosition) {
  context.lineTo(mousePosition.x, mousePosition.y);
  context.stroke();
}

/**
 * @param context (2d context from canvas)
 * @param {{x: number, y: number}} startPosition
 * @param {{x: number, y: number}} mousePosition
 */
export function drawLine(context, startPosition, mousePosition) {
  context.beginPath();
  context.moveTo(startPosition.x, startPosition.y);
  context.lineTo(mousePosition.x, mousePosition.y);
  context.closePath();
  context.stroke();
}

function strokeOrFill(context, isFill = false) {
  isFill ? context.fill() : context.stroke();
}

/**
 * @param context (2d context from canvas)
 * @param {{x: number, y: number}} startPosition
 * @param {{x: number, y: number}} mousePosition
 * @param {boolean} isFill
 */
export function drawRectangle(context, startPosition, mousePosition, isFill = false) {
  context.beginPath();
  context.rect(startPosition.x, startPosition.y, mousePosition.x - startPosition.x, mousePosition.y - startPosition.y);
  context.closePath();
  strokeOrFill(context, isFill);
}

/**
 * @param context (2d context from canvas)
 * @param {{x: number, y: number}} startPosition
 * @param {{x: number, y: number}} mousePosition
 * @param {boolean} isFill
 */
export function drawCircle(context, startPosition, mousePosition, isFill = false) {
  const r = Math.sqrt(Math.pow((mousePosition.x - startPosition.x), 2) + Math.pow((mousePosition.y - startPosition.y), 2));
  context.beginPath();
  context.arc(startPosition.x, startPosition.y, r, 0, 2 * Math.PI);
  context.closePath();
  strokeOrFill(context, isFill);
}

/**
 * @param context (2d context from canvas)
 * @param {{x: number, y: number}} startPosition
 * @param {{x: number, y: number}} mousePosition
 * @param {boolean} isFill
 */
export function drawTriangle(context, startPosition, mousePosition, isFill = false) {
  context.beginPath();
  context.moveTo(startPosition.x, startPosition.y);
  context.lineTo(mousePosition.x, mousePosition.y);
  context.lineTo(startPosition.x, mousePosition.y);
  context.closePath();
  strokeOrFill(context, isFill);
}

/**
 * @param {{innerWidth: number, innerHeight: number}} window:
 * @param {{width: number, height: number}} paddings
 * @return {{width: number, height: number}}
 */
export function calcCanvasSize(window, paddings) {
  return {
    width: (window.innerWidth < 400 + paddings.width) ? (400) : (window.innerWidth - paddings.width),
    height: (window.innerHeight < 300 + paddings.height) ? (300) : (window.innerHeight - paddings.height),
  };
}

export default {
  getRealCoords,
  canvasDownloadPopup,
  draw,
  drawLine,
  drawRectangle,
  drawCircle,
  drawTriangle,
  calcCanvasSize,
  setDefaultContextValues,
}
