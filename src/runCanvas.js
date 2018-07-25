import Demon from './sprites/Demon';
import Viewport from './Viewport';
import { getCanvas, resize } from './canvasUtils';
import Hero from './sprites/Hero';

export const setup = () => {
  console.log("running setup")
  let body = document.getElementsByTagName('body')[0];

  window.viewport = new Viewport(getCanvas());

  window.sprites = {
    demon: new Demon(),
    hero: new Hero()
  };

  window.demon = new Demon();
  window.hero = new Hero();

  body.onresize = resize;
  resize(true);
};

export const tick = () => {
  drawPixels();
};

function lerp(a, b, t) {
  let result = (1 - t) * a + t * b;
  return Math.round(result);
}

let green = 0;

function getPixels(pixelSize) {
  let c = getCanvas();

  let xArray = [];

  for (let x = 0; x <= c.width; x += pixelSize) {
    let yArray = [];
    for (let y = 0; y <= c.width; y += pixelSize) {
      green = green >= 50 ? 0 : green + 0.8;

      let gColor = Math.round(green);

      let xColor = lerp(0, 255, x / c.width) - gColor;
      let yColor = lerp(0, 255, y / c.width) - gColor;

      yArray.push(`rgba(${yColor},${gColor},${xColor},1)`);
    }
    xArray.push(yArray);
  }

  return xArray;
}

function drawPixels() {
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
