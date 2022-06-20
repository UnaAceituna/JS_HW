function getVowels(str) {
    const vowel = 'aeiouy'
    const consonants = 'bcdfghjklmnpqrstvwxz'
    var v = 0
    var c = 0

    for (var x = 0; x < str.length; x++)
    {
        if (vowel.indexOf(str[x]) !== -1){
            v +=1}
        {if (consonants.indexOf(str[x]) !== -1){
            c +=1}
    }

}
return 'Гласных у тебя '+ v + ' штуки, а согласных ' + c
}
console.log(getVowels('something in my heart makes me feeling better - i think it is JS_homework'))