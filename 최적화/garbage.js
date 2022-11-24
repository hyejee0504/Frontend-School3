let me = {age: 30}; //참조를 몇번하는가?
let you = me; 
//me가 object를 참조, you도 object를 참조 -> 참조카운트: 2

me = null; //참조카운트: 1
you = null; //참조카운트: 0 -> 가비지컬렉터의 대상이 된다.

let x = {
    y: {
        z: 1
    }//2
}//1
//x가 참조하는 객체를 object1, y가 참조하는 객체를 object2라고 하겠습니다.

let a = x; //object1의 참조카운트: 2 (x, a)
x = 1; //object1의 참조카운트: 1 (a)

let b = a.y //object2의 참조카운트: 2 (a.y, b)

a = 2; //object1의 참조카운트: 0
//이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리누수가 발생했다고 표현

function outer(){
    let privateVal = ['test'];

    function getPrivate(){
        return privateVal
    }
    return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();
console.log(secretVal);


let aespa = ['카리나', '윈터', '지젤', '닝닝'];

aespa.forEach((item, index)=>{
    aespa[index] = item+'💖'
}) //원본을 변경된다.


const aespa2 = aespa.map((item)=>{
    return item+'💖';
})




