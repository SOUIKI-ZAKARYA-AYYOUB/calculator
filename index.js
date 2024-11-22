let screen = document.getElementById('screen')
let n0 = document.getElementById('n0')
let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let n5 = document.getElementById('n5')
let n6 = document.getElementById('n6')
let n7 = document.getElementById('n7')
let n8 = document.getElementById('n8')
let n9 = document.getElementById('n9')
//-------------------------------------
n0.onclick = () => {
    if(screen.value != '0'){
        screen.value += '0'
    } else {
        screen.value = '0'
    }
}
n1.onclick = () => {
    if(screen.value != '0'){
        screen.value += '1'
    } else {
        screen.value = '1'
    }
}
n2.onclick = () => {
    if(screen.value != '0'){
        screen.value += '2'
    } else {
        screen.value = '2'
    }
}
n3.onclick = () => {
    if(screen.value != '0'){
        screen.value += '3'
    } else {
        screen.value = '3'
    }
}
n4.onclick = () => {
    if(screen.value != '0'){
        screen.value += '4'
    } else {
        screen.value = '4'
    }
}
n5.onclick = () => {
    if(screen.value != '0'){
        screen.value += '5'
    } else {
        screen.value = '5'
    }
}
n6.onclick = () => {
    if(screen.value != '0'){
        screen.value += '6'
    } else {
        screen.value = '6'
    }
}
n7.onclick = () => {
    if(screen.value != '0'){
        screen.value += '7'
    } else {
        screen.value = '7'
    }
}
n8.onclick = () => {
    if(screen.value != '0'){
        screen.value += '8'
    } else {
        screen.value = '8'
    }
}
n9.onclick = () => {
    if(screen.value != '0'){
        screen.value += '9'
    } else {
        screen.value = '9'
    }
}
//!-----------------------------------
let clear = document.getElementById('clear')
let eq = document.getElementById('eq')
let div = document.getElementById('div')
let mul = document.getElementById('mul')
let add = document.getElementById('add')
let sub = document.getElementById('sub')
let operand1 = 0
let operand2 = 0
let opearion = ''
//-----------------------------------
screen.value = '0'
clear.onclick = () => {
    screen.value = 0
    operand1 = operand2 = 0
}
eq.onclick = () => {
    operand2 = parseFloat(screen.value)
    calc(opearion);
}
dot.onclick = () => {
    screen.value += '.'
}
add.onclick = () => {
    operand1 = parseFloat(screen.value)
    opearion = 'add'
    screen.value = ''
}
sub.onclick = () => {
    operand1 = parseFloat(screen.value)
    opearion = 'sub'
    screen.value = ''
}
mul.onclick = () => {
    operand1 = parseFloat(screen.value)
    opearion = 'mul'
    screen.value = ''
}
div.onclick = () => {
    operand1 = parseFloat(screen.value)
    opearion = 'div'
    screen.value = ''
}
function calc(operation) {
    switch(operation) {
        case 'add':
            screen.value = operand1 + operand2
            operand1 = operand2 = 0
            break;
        case 'sub':
            screen.value = operand1 - operand2
            operand1 = operand2 = 0
            break;
        case 'mul':
            screen.value = operand1 * operand2
            operand1 = operand2 = 0;
            break;
        case 'div':
            screen.value = operand1 / operand2
            operand1 = operand2 = 0
            break;
        default:
            operand1 = 0
    }
}