import orcSprite from './orcSprite';
import Viewport from './Viewport';
import { getCanvas, resize } from './canvasUtils';
import InputControl from './InputControl';

export const setup = () => {
  let body = document.getElementsByTagName('BODY')[0];

  window.inputControl = new InputControl();
  window.viewport = new Viewport(getCanvas());

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

function getPixels(pixelSize) {
  let c = getCanvas();

  let xArray = [];

  for (let x = 0; x <= c.width; x += pixelSize) {
    let yArray = [];
    for (let y = 0; y <= c.width; y += pixelSize) {
      let xColor = lerp(0, 255, x / c.width);
      let yColor = lerp(0, 255, y / c.width);
      yArray.push(`rgba(${yColor},0,${xColor},1)`);
    }
    xArray.push(yArray);
  }

  return xArray;
}

function drawSprite(pixels) {
  let sprite = orcSprite();
  let position = window.inputControl.position;

  for (let x = 0; x < sprite.length; x++) {
    for (let y = 0; y < sprite[x].length; y++) {
      let newValue = sprite[x][y];
      if (newValue) {
        pixels[y + position.x][x + position.y] = newValue;
      }
    }
  }

  return pixels;
}

function drawPixels() {
  window.viewport.pixels = getPixels(window.viewport.pixel);
  let { pixels, pixel, ctx } = window.viewport;

  pixels = drawSprite(pixels);

  for (let x = 0; x < pixels.length; x++) {
    for (let y = 0; y < pixels[x].length; y++) {
      ctx.fillStyle = pixels[x][y];
      ctx.fillRect(x * pixel, y * pixel, pixel, pixel);
    }
  }
}
