"use strict";

let w, h;


function setup() {
    createCanvas(windowWidth, windowHeight);
    w = windowWidth;
    h = windowHeight;
}

function draw() {
    background(255);
    fill(0);

    for (let i = 0; i < width; i++) {
        ellipse(i, h / 2, 1);
    }
}