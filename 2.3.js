function getVowels(str) {
    const vowel = 'aeiouyAEIOUY'
    const consonants = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
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

console.log(getVowels('lKKololOO'))