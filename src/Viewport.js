// A model object to retain the stateful information of the canvas.

export default class Viewport {
    constructor(canvas) {
        this.c = canvas
        this.ctx = this.c.getContext("2d");
        this.pixel = 8;
    }
}