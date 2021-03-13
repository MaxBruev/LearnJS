//Задание 1
function clickButtonOne() {
    let variable = +document.querySelector('#input-task-1').value
    let outputData = document.querySelector('#p-task-1')

    Math.sign(variable) >= 0 ? outputData.innerHTML = 'положительное число'
        : outputData.innerText = "отрицательное число"
}

//Задание 2
function clickButtonTwo() {
    let variableOne = +document.querySelector('#input-task-2_1').value
    let variableTwo = +document.querySelector('#input-task-2_2').value
    let outputData

    variableOne === variableTwo ? outputData = 'числа одинаковые'
        : outputData = 'числа разные'

    document.querySelector('#p-task-2').innerHTML = outputData
}

//Задание 3
function clickButtonThree() {
    let variableOne = +document.querySelector('#input-task-3_1').value
    let variableTwo = +document.querySelector('#input-task-3_2').value
    let outputData

    variableOne < variableTwo ? outputData = 'стульев хватате'
        : outputData = 'стульев не хватает'

    document.querySelector('#p-task-3').innerHTML = outputData
}

//Задание 4
function clickButtonFour() {
    let variableOne = +(document.querySelector('#input-task-4_1').value) / 2
    let variableTwo = +document.querySelector('#input-task-4_2').value
    let outputData

    variableOne < variableTwo ? outputData = 'парт хватает'
        : outputData = 'парт не хватает'

    document.querySelector('#p-task-4').innerHTML = outputData
}

//Задание 5
function clickButtonFive() {
    let variableOne = +document.querySelector('#input-task-5_1').value
    let variableTwo = +document.querySelector('#input-task-5_2').value
    let variableThree = +document.querySelector('#input-task-5_3').value
    let outputData
    let data = Math.sqrt(Math.pow(variableOne, 2) + Math.pow(variableTwo, 2))

    data === variableThree ? outputData = 'длина гипотенузы соответсвует длине катетов'
        : outputData = 'длина гипотенузы НЕ соответсвует длине катетов'

    document.querySelector('#p-task-5').innerHTML = outputData
}

//Задание 6
function clickButtonSix() {
    let variableOne = +document.querySelector('#input-task-6_1').value
    let outputData

    if (variableOne < 0) {
        outputData = Math.abs(variableOne)
    } else {
        variableOne = 0
        outputData = variableOne
    }

    document.querySelector('#p-task-6').innerHTML = outputData
}

//Задание 7
function clickButtonSeven() {
    let variableOne = +document.querySelector('#input-task-7_1').value
    let variableTwo = +document.querySelector('#input-task-7_2').value
    let arr = [variableOne, variableTwo]

    document.querySelector('#p-task-7_1').innerHTML = arr.sort((a, b) => a - b)
    document.querySelector('#p-task-7_2').innerHTML = arr.sort((a, b) => b - a)
}