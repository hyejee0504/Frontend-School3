import './app.css'
import One from './Components/One'
import Two from './Components/Two'

function App() {


  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const 변수 = 100;
  const 함수 = () => {
    return 10;
  }
  const 값 = 10;
  return (
    <div>
    <div>
        <h1 style={someStyle}>안녕, {name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
      <div style={{backgroundColor:"black", color:"white"}}>
        <h1 style={{color:'red'}}>년 : {year}</h1>
        <h1>월/일 : {month}/{date}</h1>
        <h1>시간 : {hour}시 {min}분 {sec}초</h1>
      <One />
      <Two />
      <div style={{backgroundColor:'black', color:'white'}}>와우</div>
      <p>
        {100 + 1}
        {'hello' + 'world'}
        {[1, 2, 3].map(x => x**2)}
        {함수()}
        {변수}
        {값?'one':'two'}
      </p>
      <h1>test2</h1>
      {/* <h2>hello</h2> */}
      <h2 className="hi">hello</h2>
      <h2 className='hello'>hello</h2>
    </div>
    </div>
  );
}

export default App;