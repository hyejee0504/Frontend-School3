//집합, 합집합, 교집합, 차집합

let s = new Set('abcdeeeeeeee');

console.log(s);
console.log(s.size);

//재미있눈 문제
let 회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김준근', '김준근'];

//문제1 : 몇 명이 게시판에 게시물을 썼나요?
let person = new Set(회사게시판);
console.log(`${person.size}명`);
//문제2 : 각각 몇 개의 게시물을 작성했나요?

for(let i of person){
    console.log(i, 회사게시판.filter(e => e === i).length); 
}
//이거 암기, 공부, 분석하기!!


