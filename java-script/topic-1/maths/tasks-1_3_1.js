//Задание 1
clickButtonOne = () => {
    let min = 10
    let max = 99
    let random = Math.floor(Math.random()*(max - min + 1)) + min

    document.querySelector('#p-task-1').innerHTML = String(random)
}

//Задание 2
clickButtonTwo = () => {
    let min = -9
    let max = 9
    let randomOne = Math.floor(Math.random()*(max - min + 1)) + min
    let randomTwo = Math.floor(Math.random()*(max - min + 1)) + min
    let outputData = document.querySelector('#p-task-2')

    document.querySelector('#p-task-2_1').innerHTML = `Первое: ${randomOne} Второе: ${randomTwo}`

    randomOne > randomTwo ? outputData.innerHTML = `Большее: ${randomOne} \r\n Меньшее: ${randomTwo}`
       : outputData.innerHTML = `Большее: ${randomTwo} \r\n Меньшее: ${randomOne}`
}

//Задание 3
clickButtonThree = () => {
    let max = document.querySelector('#input-3').value
    let min = 10
    let randomOne = Math.floor(Math.random()*(max - min + 1)) + min
    let randomTwo = Math.floor(Math.random()*(max - min + 1)) + min
    let randomThree = Math.floor(Math.random()*(max - min + 1)) + min

    document.querySelector('#p-task-3').innerHTML = `Первое: ${max} Рандомные: ${randomOne}, ${randomTwo}, ${randomThree}`
    document.querySelector('#input-3').value = ''
}

//Задание 6
clickButtonSix = () => {
    let min = 1
    let max = 10

    //Катеты
    let a = +(Math.random()*(max - min + 1) + min).toFixed(2)
    let b = +(Math.random()*(max - min + 1) + min).toFixed(2)

    //Гипотенуза
    let c = Math.pow(a, 2) + Math.pow(b, 2)
    c = Math.sqrt(c)
    let c2 = Math.floor(c)

    //Площадь
    let s = (a*b)/2
    let s2 = Math.floor(s)

    //Периметр
    let p = a + b + c
    let p2 = Math.floor(p)

    document.querySelector('#p-task-6_1').innerHTML = `Катеты: ${a}, ${b} Гипотенуза: ${c} Площадь: ${s}, Периметр: ${p}`
    document.querySelector('#p-task-6_2').innerHTML = `Гипотенуза: ${c2} Площадь: ${s2}, Периметр: ${p2}`
}

//Задание 7
clickButtonSeven = () => {
    let max = 10
    let min = -10
    let arrRandom = []

    for (let i = 0; i < 5; i++) {
        arrRandom.push(Math.floor(Math.random()*(max - min + 1)) + min)
    }

    new Promise( (resolve) => {
       let arrSign = []
       arrRandom.forEach((item) => {
          arrSign.push(Math.sign(item))
       })
       resolve(arrSign)
   }).then((result) => {
       let data = 0
       result.reduce((first, current) => {
           first === 0 ? first++ : first
           current === 0 ? current++ : current

           first !== current  ? data++ : data
           return current
       })
        document.querySelector('#p-task-7_2').innerHTML = String(data)
   })
    document.querySelector('#p-task-7_1').innerHTML = String(arrRandom)
}
