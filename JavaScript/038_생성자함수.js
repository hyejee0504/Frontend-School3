let book = {
    책이름:'a',
    책가격:1000,
    저자:'홍길동',
    출판일:'22.10.20'
}

let newBook = {};

newBook['책이름'] = "자바스크립트"; //form에서 입력을 받은 값
newBook['책가격'] = 100000;
newBook['저자'] = '혜지, 민지';
newBook['출판일'] = "22.10.21";

function Book(책이름, 책가격, 저자, 출판일){
    // this = {};
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
    // return this;
}

let data = Book('css', 10, '유진', '22.12');
console.log(data); //undefined

let data1 = new Book('css', 10, '유진', '22.12');
console.log(data1); //붕어빵 틀이다. 새로운 객체를 만들어낸다.

//객체를 쉽게 만들기위해서 생성자함수를 사용한다. (붕어빵틀)

