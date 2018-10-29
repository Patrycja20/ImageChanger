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
function getRealCoords(canvas, event) {
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

export default {
  getRealCoords,
}