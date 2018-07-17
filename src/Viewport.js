// A model object to retain the stateful information of the canvas.
import canvasConfig from './canvasConfig';

export default class Viewport {
  constructor(canvas) {
    this.c = canvas;
    this.ctx = this.c.getContext('2d');
    this.pixel = canvasConfig.pixelSize;
  }
}
