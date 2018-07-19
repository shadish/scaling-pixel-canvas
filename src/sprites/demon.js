import Sprite from './Sprite';

export default class Demon extends Sprite {
  constructor() {
    super();
    this.position = {x:20, y:20}
    this.pixels = [
      ['#F00', null, null, null, '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#FF0', '#F00', '#FF0', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', null, '#F00', '#F00'],
      [null, '#F00', null, '#F00', null]
    ];
  }
}
