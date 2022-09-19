const btndeposit = document.querySelector('.deposit_button');
const deposit_money = document.querySelector('.deposit_amount');
const my_money = document.getElementById('all_money');

btndeposit.addEventListener('click',() => {
    const result_money = caculate_mymoney(deposit_money, my_money);
    document.getElementById('all_money').innerHTML = '' + result_money;
});

function caculate_mymoney(a,b){

    const x = b.value; //원래 갖고 있던 돈
    const y = parseInt(a.value); //입금한 돈

    console.log(x + y);

    x += y;
    return x;
}


// btnCaculation.addEventListener('click',() 
//     if(button_page.style.display=='none'){ 		
//         button_page.style.display = 'block'; 	
//     }else{ 		
//         button_page.style.display = 'none'; 	
//     }
//     clock_animation()
//     document.getElementById('expert_output').innerHTML = expert.value;
//     document.getElementById('time_output').innerHTML = caculate_time(caculation_time.value);
// });