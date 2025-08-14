function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(fir,op,sec) {
    if (op == "add") {
        add(fir,sec)
    } else if (op == "subtract") {
        subtract(fir,sec)
    } else if (op == "multiply") {
        multiply(fir,sec)
    } else if (op == "divide") {
        divide(fir,sec)
    }
}

let fir
let op
let sec