function truthy(value){
    return !!value;
}

console.log('0' == 0); //true
console.log('0' === 0); //false

console.log(1 == true); //true
console.log(1 === true); //false

console.log(0 == false); //true
console.log(0 === false); //false

console.log('true' == true); //false
//1. json에서 값을 가져올 때 true 문자열로 가져와서 error가 날 수 있음.
//2. true가 True로 되어 있음.
console.log('true' === true); //false

//주의
console.log(0 == ''); //true
console.log(0 === ''); //false

console.log(false == ''); //true
console.log(false === ''); //false


