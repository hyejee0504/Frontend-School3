import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'

function App() {

  const user = {
    login: true,
    id: 'licat',
    email: 'paul-lab@naver.com'

  }
  return (
    <main>
      {
        user.login ? 
        <Homepage
          id={user.id}
          email={user.email}
          img={user.img}
        /> : 
        <Login />
      }
    </main>
  );
}

export default App;