import { getCanvas } from './canvasUtils';

function lerp(a, b, t) {
  let result = (1 - t) * a + t * b;
  return Math.round(result);
}

export const getPixels = (pixelSize) => {
  if(!window.green) {
    window.green = 0
  }
  let c = getCanvas();

  let xArray = [];

  for (let x = 0; x <= c.width; x += pixelSize) {
    let yArray = [];
    for (let y = 0; y <= c.width; y += pixelSize) {
      window.green = window.green >= 50 ? 0 : window.green + 0.8;

      let gColor = Math.round(window.green);

      let xColor = lerp(0, 255, x / c.width) - gColor;
      let yColor = lerp(0, 255, y / c.width) - gColor;

      yArray.push(`rgba(${yColor},${gColor},${xColor},1)`);
    }
    xArray.push(yArray);
  }

  return xArray;
}