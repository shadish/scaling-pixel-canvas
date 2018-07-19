export default class Sprite {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.pixels = [];
  }

  getPosition() {
    return this.position;
  }

  render(pixels) {
    let sprite = this.pixels;
    let position = this.getPosition();

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
}
