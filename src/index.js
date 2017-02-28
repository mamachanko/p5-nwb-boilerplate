require('./index.css');
const p5 = require('p5');

new p5((p5) => {
    let gray = 0;

    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
    };

    p5.draw = () => {
        p5.background(gray);
        p5.rect(p5.width/2 - 25, p5.height/2 - 25, 50, 50);
    };
});