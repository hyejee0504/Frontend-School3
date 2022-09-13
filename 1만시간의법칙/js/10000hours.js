        const modal = document.querySelector('.cont-modal');
        const btnOpenPopup = document.querySelector('.url-go-button');
  
        btnOpenPopup.addEventListener('click', () => {
          modal.style.display = 'block';
        });
        //모달 창 띄우기

        const modaldelete = document.querySelector('.cont-modal');
        const btnClosePopup = document.querySelector('.delete-licat');
  
        btnClosePopup.addEventListener('click', () => {
          modal.style.display = 'none';
        });
        //모달 창 지우기

        const expert = document.querySelector('.expert_input');
        const caculation_time = document.querySelector('.time_input');
        const btnCaculation = document.querySelector('.time-button');
        const button_page = document.getElementById('section3');
        const hidden_page = document.getElementById('section3-hidden')

        btnCaculation.addEventListener('click',() => {

            if(button_page.style.display=='none'){ 		
                button_page.style.display = 'block'; 	
            }else{ 		
                button_page.style.display = 'none'; 	
            } 

            clock_animation();

            document.getElementById('expert_output').innerHTML = expert.value;
            document.getElementById('time_output').innerHTML = caculate_time(caculation_time.value);
        });
        //버튼 누르면 계산됨.

        function caculate_time(a){
            time = 10000 / parseInt(a);
            return parseInt(time);
        } //계산하는 함수

        function clock_animation(){
            hidden_page.style.display = 'block';
            setTimeout(function(){page_reset()}, 2500);
            return;
        }

        function page_reset(){
        
            hidden_page.style.display = 'none';
            button_page.style.display = 'block';
            return;
        }