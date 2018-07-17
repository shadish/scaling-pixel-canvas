import { getCanvas } from './canvasUtils';
import canvasConfig from './canvasConfig';
import { tick } from './runCanvas';

export default class InputControl {
  constructor() {
    document.onkeypress = this.handle;
    let c = getCanvas();
    // not actually the middle, but approximately.
    let start = Math.round(c.width / canvasConfig.pixelSize / 2);
    this.position = { x: start, y: start };
  }

  handle = evt => {
    switch (evt.key) {
      case 'ArrowRight':
        this.position.x += 1;
        break;
      case 'ArrowLeft':
        this.position.x -= 1;
        break;
      case 'ArrowDown':
        this.position.y += 1;
        break;
      case 'ArrowUp':
        this.position.y -= 1;
        break;
      default:
        break;
    }
    tick();
  };
}
