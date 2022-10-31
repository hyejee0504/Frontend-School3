// let count = 0;
// for(var i=0; i<10000; i++){
//     let num = i+'';
//     let a = num.split("");
//     if(a.includes('8')){
//         count++;
//     }
// }
// console.log(count);

let s = [1, 3, 4, 8, 13, 17, 20];
let num = 10000;
let result = [];
for(var i=0; i<s.length; i++){
    for(var j=1; j<s.length; j++){
        if(i === j){
            continue;
        }
        if(num > Math.abs(s[i] - s[j])){
            result = [];
            num = Math.abs(s[i] - s[j]);
            result.push(s[i], s[j]);
        } 
    }
}
console.log(result);