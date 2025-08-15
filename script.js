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
    let result
    if (op == "+") {
        result = add(fir,sec)
    } else if (op == "-") {
        result = subtract(fir,sec)
    } else if (op == "*") {
        result = multiply(fir,sec)
    } else if (op == "/") {
        result = divide(fir,sec)
    }
    return Math.round(result * 100) / 100
}

function clearVar() {
    fir = undefined
    op = undefined
    sec = undefined
    decimal.classList.remove("disable")
}

const display = document.querySelector(".display")
const numButtons = document.querySelectorAll(".number")
const opButtons = document.querySelectorAll(".operator")
const equals = document.querySelector("#operate")
const decimal = document.querySelector("#decimal")
const clear = document.querySelector("#clear")

let fir
let op
let sec
let keep = false

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (fir == undefined && op == undefined) {
            display.textContent = button.textContent
            fir = Number(display.textContent)
        } else if (fir && op == undefined && keep == false) {
            display.textContent += button.textContent
            fir = Number(display.textContent)
        } else if (fir && op == undefined && keep == true) {
            keep = false
            display.textContent = button.textContent
            fir = Number(display.textContent)
        } else if (op && sec == undefined) {
            display.textContent = button.textContent
            sec = Number(display.textContent)
        } else if (op && sec) {
            display.textContent += button.textContent
            sec = Number(display.textContent)
        }
        console.log(fir,op,sec)
    })
})

opButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = button.textContent
        if (op == undefined) {
            op = button.textContent
            decimal.classList.remove("disable")
        } else {
            if (fir && op && sec) {
                let result = operate(fir,op,sec)
                display.textContent = result
                fir = result
                sec = undefined
            }
        }
        console.log(fir,op,sec)
    })
})

decimal.addEventListener("click", () => {
    display.textContent += "."
    decimal.classList.add("disable")
})

equals.addEventListener("click", () => {
    if (fir && op && sec) {
        let result = operate(fir,op,sec)
        display.textContent = result
        decimal.classList.remove("disable")
        clearVar()
        fir = result
        keep = true
    } else {
        display.textContent = "error"
        clearVar()    
    }
})

clear.addEventListener("click", () => {
    clearVar()
    display.textContent = ""
})