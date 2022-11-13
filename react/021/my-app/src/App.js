import React, { Fragment } from 'react';

function One(props){
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  )
}

function Two({name, age}){
  return(
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <One name="hyeji" age={20} />
      <Two name="hyeji" age={20} />
    </>
  );
}

export default App;