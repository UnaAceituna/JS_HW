Взяла из криптографии метод шифрования пар (без матриц и прочих усложнений, на хабре нашла) - здесь нахожу соответствие по символам в keys1, и затем по индексу приравниваю к keys2. Дешифратор такой же, просто цифры меняются местами. 
Скорее всего это можно сделать короче, но я потом это узнаю)

const keys1 = 'ячсмитьбюйцфыукваенпргшолщзджхъэ (*)&:^'
const keys2 = 'ъхжэюбщшдльзгнортиекпамсуцвычйфя &%#{}*'

const doCrypto = function doCrypto(word){
word = word.toLowerCase()
let phrase1 = ''

for(let i = 0; i < word.length; i++){
if(word[i] = keys1) {
    for (let x = 0; x < keys2.length; x++) {
        if (keys1.indexOf(word[i]) === keys2.indexOf(keys2[x])) {
                phrase1 += keys2[x]                  
            }
        }
    } 
        } console.log(phrase1) 
}
