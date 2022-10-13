// 연습문제
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.

// 동현, 준근님 코드
function 평균값구하기(data){
    let sum = 0;
    for(student of data){
        sum += student["중간고사점수"]
    }
    return sum / data.length
}

function 평균값구하기(data) {
    중간고사점수 = data.map((x) => x.중간고사점수)
    중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
    return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));


//call by value, reference, sharing

let test = [1, 20, 30];

function 함수1(a){
    a[0] = 1000;
}
함수1(test);
//참조값이기에 변경 가능

test = 100;

function 함수2(a){
    a=100;
}
함수2(test);

//array와 같은 convension 자료형을 넘길때에는 함수 안에서 값의 수정이 됩니다.
//call by value(값의 전달), reference(참조-주소값의 전달), sharing