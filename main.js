'use strict';

/*** Event Listeners ***/
document.getElementById("rpv").addEventListener("click", rect_prism_volume);
document.getElementById("rpa").addEventListener("click", rect_prism_area);
document.getElementById("sv").addEventListener("click", sphere_volume);
document.getElementById("sa").addEventListener("click", sphere_area);
document.getElementById("slope").addEventListener("click", slope);
document.getElementById("line_length").addEventListener("click", line_length);
document.getElementById("midpoint").addEventListener("click", midpoint);
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Rounds to user-specified decimal places
function round_user(value) {
    let decimals = Number(document.getElementById("rounding").value);
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function y_quad(a, b, c, x) {
    return a * x * x + b * x + c;
}

function delta (a, b) {
    return b-a;
}
function zeros() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    
    let discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0) {
        alert("No real roots.");
        return;
    }

    let zero1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let zero2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    alert(`The zeros are: ${round_user(zero1)} and ${round_user(zero2)}`);
}

function vertex() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    
    let vertexX = -b / (2 * a);
    let vertexY = y_quad(a, b, c, vertexX);

    alert(`The vertex is: (${round_user(vertexX)}, ${round_user(vertexY)})`);
}

function slope() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let slopeValue = (delta(y1, y2)) / (delta(x1,x2));
    alert(`The slope is: ${round_user(slopeValue)}`);
}

function midpoint() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    alert(`The midpoint is: (${round_user((x1 + x2) / 2)}, ${round_user((y1 + y2) / 2)})`);
}

function line_length() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let length = Math.sqrt((delta(x1,x2)) ** 2 + (delta(y1,y2)) ** 2);
    alert(`The line length is: ${round_user(length)}`);
}
