function One(){
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };

  
  // eslint-disable-next-line array-callback-return
  const out = productList.products.map((v, i) => {
  return(
   <div key={v.id}>
      <h1>{i+1} {v.title}</h1>
      <p>{v.title}원</p>
   </div>
  )
  });

  return( {out});
}

function Solution(productList){
  let result = [];
  for(const item of productList){
    
  }
}

export default function App() {
  return (
    <div>
      <One/>
    </div>
  )
}