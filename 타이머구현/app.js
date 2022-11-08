const timer_container = document.querySelector('.timer_container');
const hrs_input = timer_container.querySelector('.hrs_input');
const min_input = timer_container.querySelector('.min_input');
const sec_input = timer_container.querySelector('.sec_input');

const btn_start = timer_container.querySelector('.btn_start');

let sec_time;
let min_time;
let hrs_time;
let all_time;

let sectimerelay;
let mintimerelay;
let hrstimerelay;



btn_start.addEventListener('click', function(){
    sec_time = sec_input.value;
    min_time = min_input.value;
    hrs_time = hrs_input.value;
    all_time = parseInt(sec_time) + parseInt((60*min_time)) + parseInt((3600*hrs_time));
    console.log(all_time);
    timer();
    


});

function timer(){
    sectimerelay = setInterval(sectimer, 1000);
    mintimerelay = setInterval(mintimer, 60000);
    hrstimerelay = setInterval(hrstimer, 3600000);

}


function sectimer(){
    sec_time = sec_input.value;
    if(sec_time == 0){
        clearInterval(sectimerelay);
    }else{
        sec_input.value = sec_time -1;
    }   
}

function mintimer(){
    console.log(all_time);
    min_time = min_input.value;
    if(min_time == 0){
        clearInterval(mintimerelay);
    }else{
        min_input.value = min_time -1;
    }  
}

function hrstimer(){
   
    hrs_time = hrs_input.value;
    if(hrs_time == 0){
        clearInterval(hrstimerelay);
    }else{
        hrs_input.value = hrs_time -1;
    }  
}