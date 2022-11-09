export default function (){
    return (
        <li>
            <img
                src={
                    "http://test.api.weniv.co.kr/" +
                    props.item["thumbnailImg"]
                }
                alt=""
            />
            <p>{props.item["productName"]}</p>
            <p>하트</p>
            <p>{parseInt((props.item["price"] + 10000) * 0.2)}</p>
            
        </li>
    );
}
