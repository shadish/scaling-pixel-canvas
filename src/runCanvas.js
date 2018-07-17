import orcSprite from './orcSprite';
import Viewport from './Viewport';

const DEFAULT_CANVAS_SIZE = 512;
let viewport;

export const setup = () => {
  let body = document.getElementsByTagName('BODY')[0];
  viewport = new Viewport(getCanvas());
  body.onresize = resize;
  resize(false);
};

export const tick = () => {
  drawPixels();
};

function getCanvas() {
  return document.getElementById('sprite-canvas');
}

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

function drawSprite(pixels, position) {
  let sprite = orcSprite();

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

let time = 0;

function drawPixels() {
  viewport.pixels = getPixels(viewport.pixel);
  time += 0.05;
  let middle = viewport.pixels.length / 2 - 4;
  let sin = Math.sin(time);
  let animX = Math.round(middle + sin * 25);

  let position = { x: animX, y: 20 };
  viewport.pixels = drawSprite(viewport.pixels, position);

  for (let x = 0; x < viewport.pixels.length; x++) {
    for (let y = 0; y < viewport.pixels[x].length; y++) {
      viewport.ctx.fillStyle = viewport.pixels[x][y];
      viewport.ctx.fillRect(
        x * viewport.pixel,
        y * viewport.pixel,
        viewport.pixel,
        viewport.pixel
      );
    }
  }
}

function resize(sampleWindow) {
  let app = document.getElementById('app');
  let canvas = getCanvas();

  if (sampleWindow) {
    app.style.height = `${window.innerHeight - 2}px`;
    canvas.width = `${window.innerHeight - 4}`;
    canvas.height = `${window.innerHeight - 4}`;
  } else {
    canvas.width = DEFAULT_CANVAS_SIZE;
    canvas.height = canvas.width;
  }
}
