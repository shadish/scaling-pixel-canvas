import { tick } from './tick';
import Demon from './sprites/Demon';
import Viewport from './Viewport';
import Hero from './sprites/Hero';
import {resize, getCanvas} from './canvasUtils';
import InputControl from './InputControl';

export const run = () => {
    let body = document.getElementsByTagName('body')[0];

    window.viewport = new Viewport(getCanvas());
    window.inputControl = new InputControl();

    window.sprites = {
        demon: new Demon(),
        hero: new Hero()
    };
    
    window.sprites.hero.position = window.inputPosition;
    
    body.onresize = resize;
    resize(true);
    tick();
    window.setInterval(tick, 1000 / 10);
}