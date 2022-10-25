const input_txt = document.querySelector('#inp_todo');
const btn_input = document.querySelector('button');
const ul_list = document.querySelector('.list_todo');
const btn_download = document.querySelector('.btn');
let btn_delete = [];
let list_counter = 0;



btn_input.addEventListener('click', () => {
    console.log(input_txt.value);
    if(input_txt.value== ''){
        alert('메세지를 입력해주세요');
    }
    else{
        list_counter++;
        const list_input = document.createElement('li');
        list_input.innerHTML = `${input_txt.value}<button class="btn_delete ${list_counter}"><i class="fa-solid fa-trash "></i></button>`;
        list_input.getAttribute('id',list_counter);
        ul_list.appendChild(list_input);
        input_txt.value = null;




        let btn_delete = document.querySelectorAll('.btn_delete');
        console.log(btn_delete);
        btn_delete.forEach((element) => {
            
            element.onclick = () => {
                element.parentElement.remove();
                list_counter--;
                if(list_counter ==0){
                    btn_download.style.display = 'none';
                }
            }
        });

        list_input.addEventListener('click', ()=>{
           list_input.classList.toggle('line-deco');
        })

        
        if(list_counter != 0){
            btn_download.style.display = 'block';
        }

        
    }
})

btn_download.addEventListener('click', ()=>{
    let temp = '<나의 할일 목록>\n\n';

    const curList = ul_list.querySelectorAll('li');

    curList.forEach((el) => {
        if (el.classList.contains('line-deco')) {
            temp += '완료 - ';
        }
        temp += `${el.textContent}\n`;
    })

    let element = document.createElement('a');

    element.setAttribute('href', `data:text/plain;charset=utf-8,${temp}`);

    element.setAttribute('download', 'todoList.hwp');

    // 클릭 가능한 요소라면 클릭을 시뮬레이션합니다.
    element.click();

    // 메모리상에서 a 태그를 제거합니다.
    element = null;
})







