/*Task 2*

Откройте в VSCode task2.json файл. Скопируйте из него JSONку, 
вставьте в свой код (присвоив в переменную).

Дан массив объектов. Каждый объект является идентификационной 
карточкой человека. Нам нужно хранить только уникальные 
значения в этом массиве. Реализуйте функцию, которая 
будет выполнять эту работу.*/

const fs = require('fs')
let users = JSON.parse(fs.readFileSync('C:\\Users\\Olich\\Desktop\\task2.json'))
/*console.log(users)

/*function uniqueFunc () {
    let unique1 = []
    users.forEach(el => {
        if(!unique1.includes(JSON.stringify(el))) unique1.push(JSON.stringify(el))
    })
    return unique1.length
}
console.log(uniqueFunc())*/

let uniqueusers = Array.from(new Set(users.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item))
console.log(uniqueusers)
