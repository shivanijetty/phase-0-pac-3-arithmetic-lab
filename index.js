function add() {
}
function subtract() {    
}
function multiply() { 
}
function divide() {   
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}

function increment(n) {
    return ++n;
}
function decrement(n) {
    return --n;
}

function makeInt(n) {
    console.log("this in our argument n", n)
    console.log("this in the result of out parseInt", parseInt(n, 10))
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n);
}