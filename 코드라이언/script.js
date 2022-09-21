 // var num = Math.random()*45+1; // 1-46 소수
    // var ball1 = parseInt(num);
    // document.write(ball1);
    var lotto = [];
    // for(var a=0;a<6;a++){
    //     var num = parseInt(Math.random()*45+1);
    //     if(lotto.indexOf(num)==-1){
    //         lotto.push(num);
    //     }
    // }
    //중복된 숫자가 나올 수 있음! 중복 처리
    //for문이 아닌 while을 사용하여 조건을 준다. 6개면 끝나도록 하기

    while(lotto.length<6){
        var num = parseInt(Math.random()*45+1);
        if(lotto.indexOf(num)==-1){
            lotto.push(num);
        }
    }
    lotto.sort((a,b)=>a-b);
    console.log(lotto);
    // 오름차순 정리