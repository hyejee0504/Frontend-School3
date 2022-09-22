var color;
var color_check = [];

var now_money = 0;
var total_money = 0;
var can_name = {'red': 'Original_Cola','violet':'Violet_Cola','yellow':'Yellow_Cola','skyblue':'Cool_Cola','green':'Green_Cola','orange':'Orange_Cola'}
var colorline = ['red','violet','yellow','skyblue','green','orange'];
var can_count = {"red_count": 0, "violet_count": 0, "yellow_count": 0, "skyblue_count": 0, "green_count": 0, "orange_count": 0};
var result_count = {"red_result": 0, "violet_result": 0, "yellow_result": 0, "skyblue_result": 0, "green_result": 0, "orange_result": 0};
var result_checked = {"red_check": 0, "violet_check": 0, "yellow_check": 0, "skyblue_check": 0, "green_check": 0, "orange_check": 0};

var my_money = 25000; //소지금 입력해야한다.
var can_num = {"red":3, "violet":3, "yellow":0, "skyblue":3, "green":3, "orange":3}; //캔마다 갯수 입력해야한다.


//처음 웹페이지에서 초기화해줌 - 갯수가 없을 때 애초에 품절표시
for(var i=0;i<6;i++){
    color = colorline[i];
    var a = check_can_amount(color);
    if(a==0){
        all_out(color);
    }
}

//입금 버튼
$('.deposit_button').click(function(){
    now_money = parseInt($('.input_money').val()); //입력한 입금액을 잔액으로 이동
    if(now_money>my_money){
        alert("소지금보다 작은 금액을 입력하세요");
    }
    else{
            if($('#balance_money').text()==0 || $('#balance_money').text()==""){
                my_money = my_money - now_money; //소지금을 미리 계산해놓음
                document.getElementById('balance_money').innerHTML = priceToString(now_money);
                document.getElementById('all_money').innerHTML = priceToString(my_money);
                $('.input_money').val(null) ; //입금액 초기화 
            }
            else{
                alert("거스름돈 반환 버튼을 먼저 눌러주세요.");
            }
        }
})

//거스름돈 반환 버튼
$('.return_button').click(function(){
    my_money = my_money + now_money; //소지금 계산하기
    document.getElementById('all_money').innerHTML = priceToString(my_money); //소지금에 입력
    now_money = 0;
    document.getElementById('balance_money').innerHTML = priceToString(now_money); //잔액 0으로 초기화
})
 
//획득 버튼
$('.gain_button').click(function(){
    $('#total_money').text(priceToString(total_money));
    $('#can_wishlist').text('');
    reset_count();
    result_list();
})


//색 버튼마다 실행
$('.red').click(function(){
    color = 'red';
    button_click(color);
});

$('.violet').click(function(){
    color = 'violet';
    button_click(color);
});

$('.yellow').click(function(){
    color = 'yellow';
    button_click(color);
});

$('.skyblue').click(function(){
    color = 'skyblue';
    button_click(color);
});

$('.green').click(function(){
    color = 'green';
    button_click(color);
});

$('.orange').click(function(){
    color = 'orange';
    button_click(color);
});

// 함수 모음
//색 버튼 누르면 실행되는 함수
function button_click(color){
    if(now_money==0){
        alert("더 이상 구매할 수 없습니다.");
    }
    else{
        now_money = sell_can();
        can_num[color+'']--;
        can_count[color+'_count']++;
        list_color_check(color);
        document.getElementById('balance_money').innerHTML = priceToString(now_money);
        if(can_count[color+'_count']==1){
            addcan(color);
            var checked = check_can_amount(color);
            if(checked==0){
                all_out(color);
            }
        }
        else{
            addcount(color,can_count[color+'_count']);
            checked = check_can_amount(color);
            if(checked==0){
                all_out(color);
            }
                
        }
    }
}
//획득되는 리스트에 들어가는 캔의 종류를 체크하고 갯수 카운트
function list_color_check(color){
    result_count[color+'_result']++;
    if(color_check.indexOf(color)==-1){
        color_check.push(color);
    }
}
//획득되는 리스트에 담긴 리스트를 옆으로 옮기도록 하고 숫자 증가하는 부분
function result_list(){
    for(var i=0; i< color_check.length; i++){
        color = color_check[i];
        if(result_checked[color+"_check"]==0){
            addcan_list(color);
            result_checked[color+"_check"]++;
        }
        else{
            $('.'+color+'_value').text(result_count[color+'_result']);
        }
    }
}
//오른쪽 리스트에 처음 담을 때 html에 li태그를 넣어주는 함수
function addcan_list(color) {
    let ul = document.getElementById('can_basketlist');
    let li = document.createElement("li");
    li.innerHTML = `<div class="basketlist_section"><img src="images/${color}.png"><p>${can_name[color]}</p><span class="${color}_value">${result_count[color+'_result']}</span></div>`;
    ul.appendChild(li); 
}

//캔 살 때 돈 계산되는 함수
function sell_can(){
        var a = parseInt(now_money)-1000;
        total_money += 1000;
        return a;
}

// 처음에 리스트에 추가하는 함수
function addcan(color) {
    let ul = document.getElementById('can_wishlist');
    let li = document.createElement("li");
    li.innerHTML = `<div class="wishlist_section"><img src="images/${color}.png"><p>${can_name[color]}</p><span id="${color}_count_value">1</span></div>`;
    ul.appendChild(li); 
}

//리스트 안에 숫자 늘어나는 함수
function addcount(color, a){
    $('#'+color+'_count_value').text(a);
}

//캔의 수가 남아 있는 체크하는 함수
function check_can_amount(color){
    if(can_num[color] == 0){
        return 0;
    } 
}

//색에 따라서 품절 띄우기, 호버 없애기
function all_out(color){
    $("#"+color+"_black_out").attr("style", "display: flex");
    $("#"+color+"_can_box").attr("style", "pointer-events: none");
}

//리스트에 담았던 캔들을 숫자 다시 리셋하는 함수
function reset_count(){
    for(var i=0; i<6; i++){
        can_count[colorline[i]+'_count'] = 0;
    }
}

//숫자가 콤마 찍히도록하는 함수
function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


