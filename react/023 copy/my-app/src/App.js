import React, { useState } from 'react';
const Login = () => {
  // const [id, setId] = userState('')
  // const [id, setPW] = userState('')

  const handleLoginSubmit = (e)=>{
    console.log('로그인버튼을 클릭, 로그인 정보가 들어왔습니다');
    e.preventDefault();
  }
  const handleIdInput = (e)=>{
    console.log('아이디가 수정되었습니다.');
    setId(e.target.value);
  }
  const handlePWInput = (e)=>{
    console.log('패스워드가 수정되었습니다.');
    setPW(e.target.value);
  }
  return(
    <form action='' onSubmit={handleLoginSubmit}>
      <label htmlFor=''>
        아이디 :
        <input type='text' onChange={handleIdInput}/>
      </label>
      <label htmlFor=''>
        패스워드 :
        <input type='password' onChange={handlePWInput}/>
      </label>
      <button type='submit'>로그인</button>
    </form>
  )
}

function App() {
  return (
    <div>
      
    </div>
  );
}

export default App;