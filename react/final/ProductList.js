import ProductInfo from './ProductInfo.js';

export default function (){
    let result = [];
    productData.forEach(i => {
        result.push( <ProductInfo item={i}/>);
    })
    return (
        <ul>
            {result}
        </ul>
    );
}
