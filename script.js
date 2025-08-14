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
    if (op == "+") {
        return add(fir,sec)
    } else if (op == "-") {
        return subtract(fir,sec)
    } else if (op == "*") {
        return multiply(fir,sec)
    } else if (op == "/") {
        return divide(fir,sec)
    }
}

function clear() {
    fir = undefined
    op = undefined
    sec = undefined
}

const display = document.querySelector(".display")
const numButtons = document.querySelectorAll(".number")
const opButtons = document.querySelectorAll(".operator")
const equals = document.querySelector("#operate")

let fir
let op
let sec

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = button.textContent
        if (fir == undefined) {
            fir = Number(button.textContent)
        } else if (fir && op == undefined) {
            display.textContent = "error"
            clear()
        } else if (fir && op) {
            sec = Number(button.textContent)
        }
        console.log(fir,op,sec)
    })
})

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = button.textContent
        if (op == undefined) {
            op = button.textContent
        } else {
            display.textContent = "error"
            clear()
        }
        console.log(fir,op,sec)
    })
})

equals.addEventListener("click", () => {
    if (fir && op && sec) {
        let result = operate(fir,op,sec)
        display.textContent = result
        console.log(result)
        clear()
    } else {
        display.textContent = "error"
        clear()    
    }
})