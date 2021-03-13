//Задание 1
clickButtonOne = () => {
    let scores = +document.querySelector('#input-task-1').value
    let outputData = document.querySelector('#p-task-1')

    switch (scores) {
        case 1 || 2:
            outputData.innerHTML = 'неудовлетворительно'
            break
        case 3:
            outputData.innerHTML = 'удовлетворительно'
            break
        case 4:
            outputData.innerHTML = 'хорошо'
            break
        case 5:
            outputData.innerHTML = 'отлично'
            break
        default:
            outputData.innerHTML = 'это не оценка'
    }


    document.querySelector('#input-task-1').value = ''
}

//Задание 4
clickButtonFour = () => {
    let arrInputs = document.getElementsByName('input-4')
    let outputData = document.querySelector('#p-task-4')
    let sum = 0

    arrInputs.forEach((item) => {
        sum += +item.value
    })
    sum === 180 ? outputData.innerHTML = 'это треугольник' : outputData.innerHTML = 'это не треугольник'
}
//Задание 7
clickButtonSeven = () => {
    let a = +document.querySelector('#input-7_1').value
    let b = +document.querySelector('#input-7_2').value
    let outputData = document.querySelector('#p-task-7')

    let x = -(b/a)

    x === (-0 || 0) ? outputData.innerHTML = 'корень уравнения 0'
        : !isFinite(x) ? outputData.innerHTML = 'корней уравнения нет'
        : isNaN(x) ? outputData.innerHTML = 'бесконечное число корней уравнения'
            : outputData.innerHTML = `корень уравнения ${x}`

   document.querySelector('#input-7_1').value = ''
   document.querySelector('#input-7_2').value = ''
}