
let result = 'abcde1abc12abb'.split('').filter(x=>!isNaN(x)).reduce((a, b) => (parseInt(a)+ parseInt(b)))
console.log(result);
