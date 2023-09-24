function isPalindrome(str){
   function isPalindrome (a) {
    a = a.toLowerCase()
    let b = a.split('').reverse().join('')
    if (a === b) {
        return true
    } else return false
   }
}

console.log(isPalindrome('Анна'))
