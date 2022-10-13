//callback function

function sum(x, y, 콜백함수){
    //1000줄
    콜백함수(x+y);
    //10000줄
    return x+y;
}

sum(10, 20, console.log);


//map 
function 제곱(x){
    return x**2;
}
// x => x**2;

let arr = [1,2,3,4,5];

arr.map(제곱);
arr.map(x => x**2);
console.log(arr.map(x => x**2));

//forEach는 array 제외하고 IE에서 작동안된다.

let arr1 = [10,20,30,40,50];

function 두배(x){
    // console.log(x**2);
    return x**2;
}

arr1.forEach(두배);
console.log(arr1.forEach(두배)); //undefined가 된다
//forEach는 새로운 배열을 만들지 않는다.
//why?!찾아보기


//////////////
let arr2 = [1,2,3,4,5];

arr2.map(x=>x**2);
console.log(arr2); //안됨..! 원본수정안됨
console.log(arr2.map(x=>x**2));

let arr3 = [];
arr2.forEach(x=>
    arr3.push(x**2));
console.log(arr3);