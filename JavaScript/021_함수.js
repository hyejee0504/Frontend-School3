function 안녕(파라미터){
    console.log(파라미터);
    console.log('hello wolrd');
    return 100;
}

let 아규먼트 = 1000;
안녕(아규먼트);
console.log(안녕(아규먼트) + 안녕(아규먼트)); //200

function 안녕(){
    console.log('hello');
}//return값 없음.

안녕()
console.log(String(안녕())+ String(안녕())); //undefinedunndefined

function 안녕(){
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return
    console.log('hello');
    console.log('hello');
    console.log('hello');
} //3번만 출력한다. return은 함수를 끝내는 것 undefined로 반환

////////////////////////////////////////
/* 함수를 하용하는 이유
1. 재사용성 -> 재사용하지 않을 코드는 함수로 정의하나요? -> 가능하면 함수로 만드는 것을 권한다.
2. 유지보수 
3. 구조파악이 용이하다.

땅파기() 기반다지기() 기둥세우기() 벽돌쌓기()
*/

//함수의 다양한 형태
function 함수1(a, b, c){
    return a+b+c;
}

함수1(10, 20, 30); // 찍지 않아도 나오는 것 

//기본 값 할당
function 함수3(a=10, b=20){
    return a+b;
}

console.log(함수3());
console.log(함수3(100));
console.log(함수3(100, 200));

console.log(함수3(b=200)); // 그냥 순서대로 들어가서 a로 들어간다!!

//함수에서 객체를 아규먼트로
function 함수3(회원등급, 글쓰기, 글읽기, 채널관리){
    console.log('함수가능');
    return;
}

함수4('gold', true, true, true); //true가 뭔지 확인할 수 없다. 그래서 아규먼트말고 객체로 한번에 들어가는 것이 좋다.

// function 함수3(
//     회원등급  : 'silver', 
//     글쓰기    : false, 
//     글읽기    : false, 
//     채널관리  : false){
//     console.log('함수가능');
//     return;
// }

//재귀함수(top-down) <-> 반복문(botton-up)
function factorial(n){
    if (n <= 1){ //종료 함수
        return 1;
    }
    return n * factorial(n-1);
}
factorial(5)

let result = 1;
for(let i =2; i<6; i++){
    result *=i;
}

/*
factorial(5)
5! = 5 * 4 * 3 * 2 * 1

                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

//시그마
function 누적합(n){
    if (n <= 1){ //종료 함수
        return 1;
    }
    return n + 누적합(n-1);
}
누적합(100);

let result1 = 0;
for(let i =1; i<=100; i++){
    result +=i;
}
console.log(result);
//순회를 돌 필요가 없다.
let n = 100;
console.log(n*(n+1)/2); 
//이게 더 좋은 코드이다. 합 식을 알고 있다면 더 좋다.

////// 동현님 글 //////
function 함수({
    a = 2, 
    b = 1, 
    c = 3
} = {}) {
console.log(a, b, c);
return a + b + c;
}
console.log(함수({a: 20, b: 30, c: 10}));
함수() // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a=10, b=20, c=30){
return a + b + c
}
함수()

// X
function 함수({a=10, b=20, c=30}){
return a + b + c
}
함수()

// O
function 함수({a=10, b=20, c=30}){
return a + b + c
}
함수({}) // 이 코드를 축소한 코드가 위의 코드입니다.
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

txt = 'hello world';
result


///화살표 함수
function 함수1(x, y){
    return x+y;
}

let 함수2 = (x, y) => x+y;

let 함수3 = (x, y) => {
    let z = x+y;
    return z;
}

//화살표 함수의 호이스팅 -> 35번파일로 이어집니다.


