function length(str){
    str = str.toLowerCase()
    let n = Math.floor(str.length/2)
    let N = str.length - 1  
  for (let i = 0; i < n; ++i) {
    if (str[i] !== str[N - i]) {
     	return false; 
    }
  }
  return true;
}  
console.log(length('Abba'))
console.log(length('abba'))
console.log(length('abvbba'))