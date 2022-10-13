/*
map 객체는 키-값 쌍을 가지는 객제츼 한 종류입니다.
object와 다른점이 있다! - 찾아보기
*/

let m = new Map();

m
    .set('하나', 1) //메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 3], '리얼리')

console.log(m);

console.log(m.get('하나'))
console.log(m.get(true)); //object에서는 불가능
console.log(m.get([1, 3])); //이렇게는 호출되지 않습니다.

//map에 키값이 있는지 확인하기
m.has('하나') //true, key값으로 확인

//map에 키 값을 제거하기
m.delete('하나')

//크기 구하기
m.size

let data = new Map([['one', 1], ['two', 2]])

//가장 큰 장점 : 직접 순회가 가능하다!

let data5 = {'one':1, 'two':2};

for(const i of data5){
    console.log(i);
} //x 작동되지 않음!

for(const i of Object.entries(data5)){
    console.log(i);
} //가능

let m1 = new Map();

m1
    .set('하나', 1) //메서드 체이닝
    .set('둘', 2)
    .set('셋', 3);


for(const i of m1){
    console.log(i);
}

for(const [i, j] of mul1){
    console.log([i, j]);
}

m.keys()
m.values()
m.entries()

//Map - object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2}));
let 오브젝트 = Object.fromEntries(m1);

