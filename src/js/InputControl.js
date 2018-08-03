import { getCanvas } from './canvasUtils';
import canvasConfig from './canvasConfig';
import { windowWhen } from 'rxjs/operator/windowWhen';

export default class InputControl {
  constructor() {
    document.onkeypress = this.handle;
    let c = getCanvas();

    // not actually the middle, but approximately.
    let start = Math.round(c.width / canvasConfig.pixelSize / 2);
    window.inputPosition = { x: start, y: start };
  }

  handle(evt) {
    switch (evt.key) {
      case 'ArrowRight':
        window.inputPosition.x += 1;
        break;
      case 'ArrowLeft':
        window.inputPosition.x -= 1;
        break;
      case 'ArrowDown':
        window.inputPosition.y += 1;
        break;
      case 'ArrowUp':
        window.inputPosition.y -= 1;
        break;
      default:
        break;
    }

    window.sprites.hero.position = window.inputPosition;
  }
}
