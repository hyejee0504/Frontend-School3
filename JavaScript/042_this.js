//this라니이.. 어렵다눙데에.. 우주로 가나여
function a(){ console.log(this);}
a(); //window가 나오고 window.a()와 같다.

function b(){ console.log('hello world');}
b(); // 'hello world'가 나오고 b() = window.b()와 같다.

let test = {
    one: 1,
    two: 2,
    three: function(){
        console.log(this);
    }
}

// test.three() // this가 test이다.

let test2 = test.three();
console.log(test2);  
test2//window

var name = 'hero';
// function sayName(){
//     console.log(this.name);
// }

function sayName(){
    console.log(this.name);
    function sayName1(){
        console.log(this.name);
    }
    sayName1();
}


sayName(); //this가 window니깐 window.name이라서 hero 나온다.

let peter = {
    name: 'peter',
    say: sayName
}

let bruce = {
    name: 'bruce',
    say: sayName
}

peter.say(); 
bruce.say(); //암기 해야됨



