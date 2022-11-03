class Colagenerator {
    constructor(){
        this.itemList = document.querySelector('.list-item')
    }

    setup(){
        this.loadData((json)=>{
            this.colaFactory(json);
        })
    }
    
    async loadData(callback){
        // const requestObj = new XMLHttpRequest();
        // //서버와 통신하기 위해 객체를 생성합니다.
        // requestObj.open('GET', 'src/js/item.json');// 요청시작
        // requestObj.onreadystatechange = () => {
        //     //readyState가 변화하면 트리거
        //     if(requestObj.readyState === 4 && requestObj.status === '200'){
        //         //서버에 통신이 잘 되었으면 들어옴
        //         callback(JSON.parse(requestObj.responseText));

        //     }
        // }
        // requestObj.send(null);
        const response = await fetch('src/js/item.json');
        if(response.ok){
            //http 상태코드가 200-299일경우 의미
            callback(await response.json()); //응답 본문을 읽으면서 객체형태로 파싱한다.
        }else{
            alert('통신에러!' + response.status);
        }
    }

    colaFactory(data){
        data.forEach(el => {
            const item = document.createElement('li');
            const itemTemplate = ` 
            <button class="btn-item" data-item="${el.name}"data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="img/${el.img}" alt="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>`;
            item.innerHTML = itemTemplate;
            this.itemList.appendChild(item)

        })
    }
}

export default Colagenerator;