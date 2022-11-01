// let count = 0;
// for(var i=0; i<10000; i++){
//     let num = i+'';
//     let a = num.split("");
//     if(a.includes('8')){
//         count++;
//     }
// }
// console.log(count);

// let s = [1, 3, 4, 8, 13, 17, 20];
// let num = 10000;
// let result = [];
// for(var i=0; i<s.length; i++){
//     for(var j=1; j<s.length; j++){
//         if(i === j){
//             continue;
//         }
//         if(num > Math.abs(s[i] - s[j])){
//             result = [];
//             num = Math.abs(s[i] - s[j]);
//             result.push(s[i], s[j]);
//         } 
//     }
// }
// console.log(result);
let survey = ["AN", "NA", "CF", "JM", "NA", "MJ", "FC", "TR", "RT"];
let choices = [5, 4, 4, 3, 2, 1, 6, 7];
solution(survey, choices);
function solution(survey, choices) {
    var answer = '';
    let type = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0
    }
    let value = [0, 0];
    let first_value = [];
    
    for(i in survey){
        value = [0, 0];
        let now_type = survey[i].split("");
        
        if(first_value.includes(now_type[0]) === false && first_value.includes(now_type[1]) === false){
            first_value.push(now_type[0]);
        }
        if(choices[i] === 4){
            continue;
        }else if(choices[i] < 4){
            if(choices[i] === 1){
                value[0] += 3;
            }else if(choices[i] === 3){
                value[0] += 1;
            }else{
                value[0] += 2;
            }
        }else{
            value[1] += (choices[i]-4);
        }
       
        for(var j in type){
            if(now_type[0] == j){
                type[j] += value[0];
                
            }
            if(now_type[1] == j){
                type[j] += value[1];
                
            }
        }
    } 
    let arr = [];
    let arr1 = [];
        arr = Object.values(type);
        arr1 = Object.keys(type);
       
       
        for(var k=0; k<7; k+=2){
            if(arr[k]>arr[k+1]){
                if(k === 0){
                    answer += 'R'
                }else if(k === 2){
                    answer += 'C'
                }
                else if(k === 4){
                    answer += 'J'
                }
                else if(k === 6){
                    answer += 'A'
                }
            }else if(arr[k] < arr[k+1]){
                if(k === 0){
                    answer += 'T'
                }else if(k === 2){
                    answer += 'F'
                }
                else if(k === 4){
                    answer += 'M'
                }
                else if(k === 6){
                    answer += 'N'
                }
            }else if(arr[k] === arr[k+1] && arr[k] !== 0){
                if(first_value.includes(arr1[k])){
                    answer += arr1[k];
                }else{
                    answer += arr1[k+1];
                }
            }else if(arr[k] === 0 && arr[k+1] === 0){
                
                if(k === 0){
                    answer += 'R'
                }else if(k === 2){
                    answer += 'C'
                }
                else if(k === 4){
                    answer += 'J'
                }
                else if(k === 6){
                    answer += 'A'
                }
            }
        }
    console.log(answer);
    return answer;
     
}
// 0 1, 2 3, 4 5, 6 7
//아 공부하기시러..