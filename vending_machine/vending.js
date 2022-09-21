const btnred = document.querySelector('.red');
const btnviolet = document.querySelector('.violet');
const btnyellow = document.querySelector('.yellow');
const btnskyblue = document.querySelector('.skyblue');
const btngreen = document.querySelector('.green');
const btnorange = document.querySelector('.orange');
const btnremain = document.querySelector('.return_button');
const btndeposit = document.querySelector('.deposit_button');
const btngain = document.querySelector('.gain_button');
const deposit_money = document.querySelector('.input_money');
const can_ul = document.getElementById('can_wishlist');

var color;
var checked;

var now_money = 0;
var red_count = 0;
var violet_count = 0; 
var yellow_count = 0;
var skyblue_count = 0;
var green_count = 0;
var orange_count = 0;
var total_money = 0;

var my_money = 25000; //소지금 입력해야한다.
var red_amount = 5;
var violet_amount = 5;
var yellow_amount = 0;
var skyblue_amount = 3;
var green_amount = 2;
var orange_amount = 1;




btndeposit.addEventListener('click',() => {
    // my_money = caculate_mymoney(deposit_money, my_money);
    now_money = parseInt(deposit_money.value);
    if(now_money>my_money){
        alert("소지금보다 작은 금액을 입력하세요");
    }
    else{
        my_money = my_money - now_money;
        document.getElementById('balance_money').innerHTML = priceToString(now_money);
        // 입금액 리셋하는 법 해야함.
    }
});


btnremain.addEventListener('click',() => {

    my_money = my_money + now_money;
    document.getElementById('all_money').innerHTML = priceToString(my_money);
    now_money = 0;
    document.getElementById('balance_money').innerHTML = priceToString(now_money);
    
});

btngain.addEventListener('click',() => {
    document.getElementById('total_money').innerHTML = priceToString(total_money);
    document.getElementById('can_wishlist').innerHTML = '';
    reset_count();
});


//컬러 버튼 마다//////////////////////////////////////////////////////////

btnred.addEventListener('click',() => {
    if(now_money==0){
        alert("더 이상 구매할 수 없습니다.");
    }
    else{
        color = 'red';
        checked = check_can_amount(color);
        if(checked==0){
            all_out(color);
        }
        else{
            now_money = sell_can();
            red_amount--;
            red_count++;
            document.getElementById('balance_money').innerHTML = priceToString(now_money);
            if(red_count==1){
                addcan();
            }
            else{
                addcount(red_count);
            }
        }
    }

});

btnviolet.addEventListener('click',() => {
    if(now_money==0){
        alert("더 이상 구매할 수 없습니다.");
    }
    else{
        color = 'violet';
        checked = check_can_amount(color);
        if(checked==0){
            all_out(color);
        }
        else{
            now_money = sell_can();
            violet_amount--;
            violet_count++;
            document.getElementById('balance_money').innerHTML = priceToString(now_money);
            if(violet_count==1){
                addcan();
            }
            else{
                addcount(violet_count);
            }
        }
    }
});

btnyellow.addEventListener('click',() => {
    if(now_money==0){
        alert("더 이상 구매할 수 없습니다.");
    }
    else{
        color = 'yellow';
        checked = check_can_amount(color);
        if(checked==0){
            all_out(color);
        }
        else{
            now_money = sell_can();
            yellow_amount--;
            yellow_count++;
            document.getElementById('balance_money').innerHTML = priceToString(now_money);
            if(yellow_count==1){
                addcan();
            }
            else{
                addcount(yellow_count);
            }
        }
    }
});

btnskyblue.addEventListener('click',() => {
    if(now_money==0){
        alert("더 이상 구매할 수 없습니다.");
    }
    else{
        color = 'skyblue';
        checked = check_can_amount(color);
        if(checked == 0){
            all_out(color);
        }
        else{
            now_money = sell_can();
            skyblue_amount--;
            skyblue_count++;
            document.getElementById('balance_money').innerHTML = priceToString(now_money);
            if(skyblue_count==1){
                addcan();
            }
            else{
                addcount(skyblue_count);
            }
        }  
    }
});

btngreen.addEventListener('click',() => {
    if(now_money==0){
        alert("더 이상 구매할 수 없습니다.");
    }
    else{
        color = 'green';
        checked = check_can_amount(color);
            if(checked == 0){
                all_out('green');
            }
            else{
                now_money = sell_can();
                color = 'green';
                green_amount--;
                green_count++;
                document.getElementById('balance_money').innerHTML = priceToString(now_money);
                if(green_count==1){
                    addcan();
                }
                else{
                    addcount(green_count);
                }
            }
        
    }
});

btnorange.addEventListener('click',() => {
    if(now_money==0){
        alert("더 이상 구매할 수 없습니다.");
    }
    else{
        color = 'orange';
        checked = check_can_amount(color);
        if(checked==0){
            all_out(color);
        }
        else{
            now_money = sell_can();
            orange_amount--;
            orange_count++;
            document.getElementById('balance_money').innerHTML = priceToString(now_money);
            if(orange_count==1){
                addcan();
            }
            else{
                addcount(orange_count);
            }
        }
    
}
});
///////////////////////





// 함수 모음

function caculate_mymoney(){
    console.log(now_money);
    my_money = my_money + now_money;
}

function sell_can(){
        var a = parseInt(now_money)-1000;
        total_money += 1000;
        return a;
}


function addcan() {
    var value = color;
    let ul = document.getElementById('can_wishlist');
    let li = document.createElement("li");
    
    li.innerHTML = `<div class="wishlist_section"><img src="images/${value}.png"><p>Original_Cola</p><span id="${value}_count_value">1</span></div>`;
    ul.appendChild(li); 
    //document.querySelector(".todolist").getElementsByClassName.disply = "block"
}

function addcount(a){
    var now_can_color = color;
    if(color=='red'){
        document.getElementById('red_count_value').innerHTML = a;
    }
    else if(color=='violet'){
        document.getElementById('violet_count_value').innerHTML = a;
    }
    else if(color=='skyblue'){
        document.getElementById('skyblue_count_value').innerHTML = a;
    }
    else if(color=='green'){
        document.getElementById('green_count_value').innerHTML = a;
    }
    else if(color=='orange'){
        document.getElementById('orange_count_value').innerHTML = a;
    }
    else if(color=='yellow'){
        document.getElementById('yellow_count_value').innerHTML = a;
    }
}

function addlist(){

}

function reset_count(){
    red_count = 0;
    violet_count = 0; 
    yellow_count = 0;
    skyblue_count = 0;
    green_count = 0;
    orange_count = 0;
    total_money = 0;
}


//캔의 수가 남아 있는 체크하는 함수
function check_can_amount(color){
    if(color=='red'){
        if(red_amount==0){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if(color=='violet'){
        if(violet_amount==0){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if(color=='yellow'){
        if(yellow_amount==0){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if(color=='skyblue'){
        if(skyblue_amount==0){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if(color=='green'){
        if(green_amount==0){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if(color=='orange'){
        if(orange_amount==0){
            return 0;
        }
        else{
            return 1;
        }
    }
}

//색에 따라서 품절 띄우기, 호버 없애기
function all_out(color){
    if(color=='red'){
        document.getElementById("red_black_out").style.display = "flex"
        document.getElementById("red_can_box").style.pointerEvents = "none"
    }
    else if(color=='violet'){
        document.getElementById("violet_black_out").style.display = "flex"
        document.getElementById("violet_can_box").style.pointerEvents = "none"
    }
    else 
    if(color=='yellow'){
        document.getElementById("yellow_black_out").style.display = "flex"
        document.getElementById("yellow_can_box").style.pointerEvents = "none"
    }
    else if(color=='skyblue'){
        document.getElementById("skyblue_black_out").style.display = "flex"
        document.getElementById("skyblue_can_box").style.pointerEvents = "none"
    }
    else if(color=='green'){
        document.getElementById("green_black_out").style.display = "flex"
        document.getElementById("green_can_box").style.pointerEvents = "none"
    }
    else if(color=='orange'){
        document.getElementById("orange_black_out").style.display = "flex"
        document.getElementById("orange_can_box").style.pointerEvents = "none"
    }
}

//숫자가 콤마 찍히도록하는 함수

function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
