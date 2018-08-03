import { tick } from './tick';
import Demon from './sprites/Demon';
import Viewport from './Viewport';
import Hero from './sprites/Hero';
import {resize, getCanvas} from './canvasUtils';

export const run = () => {
    let body = document.getElementsByTagName('body')[0];

    window.viewport = new Viewport(getCanvas());

    window.sprites = {
        demon: new Demon(),
        hero: new Hero()
    };

    window.demon = new Demon();
    window.hero = new Hero();

    body.onresize = resize;
    resize(true);
    tick();
    window.setInterval(tick, 1000 / 10);
}