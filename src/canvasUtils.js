import canvasConfig from './canvasConfig';

export const getCanvas = () => {
  return document.getElementById('sprite-canvas');
};

export const resize = sampleWindow => {
  let app = document.getElementById('app');
  let canvas = getCanvas();

  if (sampleWindow) {
    app.style.height = `${window.innerHeight - 2}px`;
    canvas.width = `${window.innerHeight - 4}`;
    canvas.height = `${window.innerHeight - 4}`;
  } else {
    canvas.width = canvasConfig.canvasSize;
    canvas.height = canvas.width;
  }
};
