"use strict";

let w, h;
let x = 0;
let y = 0;

let frameCount = 0;

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    background(200);
}

function draw() {
    background(200);

    ellipse(x, y, 50);

    frameCount++;
}