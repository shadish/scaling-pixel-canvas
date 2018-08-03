import { getPixels } from './getPixels';

export const tick = () => {
  window.viewport.pixels = getPixels(window.viewport.pixel);
  let { pixels, pixel, ctx } = window.viewport;

  Object.keys(window.sprites).forEach(key => {
    pixels = window.sprites[key].render(pixels);
  });

  for (let x = 0; x < pixels.length; x++) {
    for (let y = 0; y < pixels[x].length; y++) {
      ctx.fillStyle = pixels[x][y];
      ctx.fillRect(x * pixel, y * pixel, pixel, pixel);
    }
  }
}
