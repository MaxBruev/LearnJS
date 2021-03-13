//Задание 1
clickButtonOne = () => {
    let a = document.querySelector('#input-1').value

    document.querySelector('#p-task-1').innerHTML = `${Math.floor((a / 10) % 10)}, ${a % 10}`
    document.querySelector('#input-1').value = ''
}

//Задание 4
clickButtonFour = () => {
    let a = document.querySelector('#input-4').value
    let c = 0

    for (let i = 0; i < a.length; i++) {
        c += +a[i]
    }

    document.querySelector('#p-task-4').innerHTML = String(c)
    document.querySelector('#input-4').value = ''
}

//Задание 6
clickButtonSix = () => {
    let a = document.querySelector('#input-6').value
    let b = 0

    for (let i = 0; i < a.length; i++) {
        +a[i] % 2 === 0 ? b++ : b
    }
    document.querySelector('#p-task-6').innerHTML = String(b)
    document.querySelector('#input-6').value = ''
}