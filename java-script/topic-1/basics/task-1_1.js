//Задание 1
let variableOne = 7

let outputDataOne = document.querySelector('#p-task-1')

outputDataOne.innerText = `${variableOne}, ${Math.pow(variableOne, 2)}, ${Math.pow(variableOne, 3)}`

//Задание 2 (модифицированое)
function clickButtonOne () {
    let height = +document.querySelector('#input-task-2').value
    let outputData =  document.querySelector('#p-task-2')

    outputData.innerText = `h = ${height} \r\n h в квадрате = ${Math.pow(height, 2)}`
    document.querySelector('#input-task-2').value = ''
}

//Задание 3

let variableTwo = 3
let variableThree = 5

let com = variableTwo * variableThree
let sum = variableTwo + variableThree

let outputDataTwo =  document.querySelector('#p-task-3')

outputDataTwo.innerText = `a * b =  ${com} \r\n a + b = ${sum}`

//Задание 4
function clickButtonTwo () {
    let variable = +document.querySelector('#input-task-4').value
    let outputData =  document.querySelector('#p-task-4')

    let sevenMore = variable + 7
    let nineLess = variable - 9

    outputData.innerText = `${sevenMore} \r\n ${nineLess}`
    document.querySelector('#input-task-4').value = ''
}

//Задание 5
function clickButtonThree () {
    let variableOne = +document.querySelector('#input-task-5_1').value
    let variableTwo = +document.querySelector('#input-task-5_2').value
    let outputData =  document.querySelector('#p-task-5')

    let sum = variableOne + variableTwo
    let difFromFirst = variableOne - variableTwo
    let com = variableOne * variableTwo
    let difFromTwo = variableTwo - variableOne

    outputData.innerText = `${sum} \r\n ${com} \r\n  ${difFromFirst} \r\n ${difFromTwo}`
    document.querySelector('#input-task-5_1').value = ''
    document.querySelector('#input-task-5_2').value = ''
}

//Задание 6
function clickButtonFour () {
    let variableOne = +document.querySelector('#input-task-6_1').value
    let variableTwo = +document.querySelector('#input-task-6_2').value
    let outputData =  document.querySelector('#p-task-6')

    let sum = Math.pow(variableOne, 2) + Math.pow(variableTwo, 2)

    outputData.innerText = `${Math.pow(variableOne, 2)} \r\n ${Math.pow(variableTwo, 2)} \r\n ${sum}`
    document.querySelector('#input-task-6_1').value = ''
    document.querySelector('#input-task-6_2').value = ''
}

//Задание 7
function clickButtonFive () {
    let yearOfBirth = +document.querySelector('#input-task-7_1').value
    let currencyYear = +document.querySelector('#input-task-7_2').value
    let outputData =  document.querySelector('#p-task-7')

    let age = currencyYear - yearOfBirth

    outputData.innerText = `Вам ${age}`
    document.querySelector('#input-task-7_1').value = ''
    document.querySelector('#input-task-7_2').value = ''
}