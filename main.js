function add(n1, n2) {
    return n1 + n2
}

function subtract(n1,n2) {
    return n1-n2
}

function multiply(n1,n2) {
    return n1*n2
}

function divide(n1,n2) {
    if(n2 === 0) {
        alert(`Don't divide by 0 ya dingbat!`)
        return null
    }
    return n1/n2
}


document.querySelector('.equals').addEventListener('click', () => {
    if(operator === '/' && secondNumber === '0') {
        alert(`Don't divide by 0 ya dingbat!`)
        return
    }

    let result = operate(operator, +firstNumber, +secondNumber)
    document.querySelector('.screen').innerText = result
}) 
    


function operate(operator, n1, n2) {
    switch (operator) {
        case '+':
            return add(n1,n2)
        case '-':
            return subtract(n1,n2)
        case '*':
            return multiply(n1,n2)
        case '/':
            return divide(n1,n2)
        default:
            return null;
    }
}


document.querySelector('.clear').addEventListener('click', clear)

function clear() {
    displayValue = ''
    firstNumber = ''
    secondNumber = ''
    operator = ''
    document.querySelector('.screen').innerText = ''
}

let displayValue = ''
let firstNumber = ''
let secondNumber = ''
let operator = ''


document.querySelectorAll('.btn').forEach(button => 
    button.addEventListener('click', numbers))

function numbers(event) {
    let value = event.target.textContent
    document.querySelector('.screen').innerText += value
    
    if(!isNaN(value) || value === '.') {
        if(operator) {
            secondNumber += value
        }else{
            firstNumber += value
        }
        displayValue += value
    }else if(['+', '-', '/', '*'].includes(value)){
        if(operator) {
            firstNumber = operate(operator, +firstNumber, +secondNumber).toString()
            secondNumber = ''
        }
        operator = value
        displayValue = firstNumber + operator
    }
    document.querySelector('.screen').innerText = displayValue
}

