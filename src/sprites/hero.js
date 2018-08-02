import Sprite from './Sprite';
import InputControl from '../InputControl';

export default class Hero extends Sprite {
  constructor() {
    super();
    this.pixels = [
      [null, '#00F', '#00F', '#00F', null],
      ['#00F', '#00F', '#00F', '#00F', '#00F'],
      ['#00F', '#0F0', '#00F', '#0F0', '#00F'],
      ['#00F', '#00F', '#00F', '#00F', '#00F'],
      ['#00F', null, null, null, '#00F'],
      [null, '#00F', '#00F', '#00F', null]
    ];

    this.inputControl = new InputControl();
  }

  getPosition() {
    return this.inputControl.position;
  }
}
