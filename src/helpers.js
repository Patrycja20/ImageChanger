
/**
 * Tworzy plik jpg z canvasa i wyświetla okienko do jego pobrania jako jpg
 *
 * @param canvas
 */
export function canvasDownloadPopup(canvas) {
  if (canvas === null) return;

  const data = canvas.toDataURL('image/jpeg');
  const image = data.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');

  const downloadLink = document.createElement('a');
  downloadLink.href = image;
  downloadLink.download = 'image.jpg';

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
