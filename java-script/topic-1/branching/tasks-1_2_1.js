//Задание 1
function clickButtonOne() {
    let variable = +document.querySelector('#input-task-1').value

    let outputData = document.querySelector('#p-task-1')

    variable > 0 ? outputData.innerText = variable * 2 : outputData.innerText = "Введи пложительное число"
    document.querySelector('#input-task-1').value = ''
}

//Задание 2
function clickButtonTwo() {
    let variable = +document.querySelector('#input-task-2').value

    let outputData = document.querySelector('#p-task-2')

    variable === 0 ? outputData.innerText = "ноль" : outputData.innerText = variableTwo
    document.querySelector('#input-task-2').value = ''
}

//Задание 3
function clickButtonThree() {
    let variable = +document.querySelector('#input-task-3').value

    let outputData = document.querySelector('#p-task-3')

    variable < 0 ? outputData.innerText = 'отрицательное'
        : variable > 0 ? outputData.innerText = 'положительное'
        : variable === 0 ? outputData.innerText = 'ноль' : null

    document.querySelector('#input-task-3').value = ''
}

//Задание 4
function clickButtonFour() {
    let variableOne = +document.querySelector('#input-task-4_1').value
    let variableTwo = +document.querySelector('#input-task-4_2').value

    let outputData = document.querySelector('#p-task-4')

    variableOne > variableTwo ? outputData.innerText = variableOne + variableTwo
        : variableOne < variableTwo ? outputData.innerText = variableOne * variableTwo
        : variableOne === variableTwo ? outputData.innerText = "числа одинаковые" : null

    document.querySelector('#input-task-4_1').value = ''
    document.querySelector('#input-task-4_2').value = ''
}

//Задание 5
function clickButtonFive() {
    let variableOne = Math.sign(+(document.querySelector('#input-task-5_1').value))
    let variableTwo = Math.sign(+(document.querySelector('#input-task-5_2').value))

    let outputData = document.querySelector('#p-task-5')

    variableOne === 0 && variableTwo === 0 ? outputData.innerText = 'некоректно'
        : variableOne !== variableTwo ? outputData.innerText = "разные знаки"
        : variableOne === variableTwo ? outputData.innerText = "один и тот же знак" : null

    document.querySelector('#input-task-5_1').value = ''
    document.querySelector('#input-task-5_2').value = ''
}

//Задание 6
function clickButtonSix() {
    let variableOne = +document.querySelector('#input-task-6_1').value
    let variableTwo = +document.querySelector('#input-task-6_2').value

    let outputData = document.querySelector('#p-task-6')

    let c = variableOne / variableTwo

    variableTwo === 0 ? outputData.innerText = 'Ай-ай, так нельзя(можно, но не тут)'
        : c > 0 ? outputData.innerText = 'дробь положительная' : outputData.innerText = 'дробь отрицательная'

    document.querySelector('#input-task-6_1').value = ''
    document.querySelector('#input-task-6_2').value = ''
}

//Задание 7
function clickButtonSeven() {
    let a = +document.querySelector('#input-task-7_1').value
    let b = +document.querySelector('#input-task-7_2').value
    let c = +document.querySelector('#input-task-7_3').value

    let outputData = document.querySelector('#p-task-7')

    let D = Math.pow(b, 2) - 4 * a * c

    D > 0 || D === 0 ? outputData.innerText = 'уравнение имеет решение' : outputData.innerText = 'уравнение не имеет решение'

    document.querySelector('#input-task-7_1').value = ''
    document.querySelector('#input-task-7_2').value = ''
    document.querySelector('#input-task-7_3').value = ''
}