console.log('hello')

console.log(true && false || true && true)

if (false || true){
    console.log('1')
}
else {console.log('2')}

let dog_show = true
let age = 18
let money = 2000
let dog = true

if (age >= 18 && money >= 1000 && dog) {
    console.log('get ticket')
} else{ if (age < 18) {
    console.log('early')
}
        if (money < 1000) {
    console.log('keep calm and work hard')
}
        if (!dog){
    console.log('get cat')
}}


switch (dog_show) {
    case age >= 18:
        console.log('time to win')
    case money >= 1000:
        console.log('rich')
        break;
}

count = 0
while (true) {
    console.log('win')
    count ++
}