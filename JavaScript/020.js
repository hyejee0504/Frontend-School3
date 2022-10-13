let value = [10, 1, 100, 200, 300, 10];
let value2 = {
    one:1,
    two:2,
    three:3,
    four:4,
}

Object.keys(value)
Object.keys(value2)

for (i in value2){ // for of로 순회를 돌 수가 없음
    console.log(i)
}

// for (i of value2){ // of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것입니다. -> error
//     console.log(i)
// }

Object.entries(value)
Object.entries(value2)

for (i of Object.entries(value2)){ 
    console.log(i[0], i[1])
}

for([i, j] of Object.entries(value2)){
    console.log(`key는 ${i}고 value는 ${j}입니다.`);
} //구조분해 할당

for([i, j] of [[10, 30], [20, 50]]){
    console.log(`key는 ${i}고 value는 ${j}입니다.`);
} //[10, 30], [20, 50]이렇게 두번 출력한다.

for([i, j] of [[10, 30, 50], [20, 50,20]]){
    console.log(`key는 ${i}고 value는 ${j}입니다.`);
} //뒤에 50, 20은 받지 못한다.

for([i, j, ...k] of [[10, 30, 50,  1, 3], [20, 50,20]]){
    console.log(i, j, k);
} //k가 뒤에 모든 것을 받는다. 

for([[i, j], k] of [[[10, 30], 50], [[20, 50],20]]){
    console.log(i, j, k);
}

for([i, j] of [[[10, 30], 50], [[20, 50],20]]){
    console.log(i, j, k);
} //가능하다.

//일반 변수 선언의 구조분해할당

let a, b, c;
[a, b] = [10, 20];
let one, two, three;
[one, two, three] = '010-3946-3457'.split('-');


data = [10, 20, 30, 40, 50];
[a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]];
console.log(a, b, c);

let data = {
    name : 'hyeji',
    age : 10,
    money : 100
}

let {name, age} = data;

let {name1, age1} = {name:'hyeji', age:10};

//순서를 뒤바꿔본다. -> 가능하다!

let data2 = {
    name : 'hyeji',
    money : 100,
    age : 10
}

let {name5, age5, ...rest} = data;

let a1 =[10, 20, 30];
a1.push(100);
a1.unshift(1000);
let a2 = [10, 20, 50];
a3 = [1000, ...a2, 100];

let str = 'hello world';
console.log([str]); //통째로 하나의 배열이 된다.
console.log([...str]); //한 문자씩 배열이 생긴다.

'!'.repeat(10) //!!!!!!!!!!!로 반복된다.
[...'!'.repeat(10)]; //'!'이 모양으로 10개 반복된다.