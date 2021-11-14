import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {signin,signout,signup,is_auth} from './auth/auth';
import SignIn from './components/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import SignUp from './components/SignUp/SignUp';
function App() {
  const [islogedin,setLogedIn] = useState(false);
  return (
    <div className="App">
      {islogedin ? <SignOut  setLogedIn={setLogedIn} /> : 
      (<> <div> <SignIn setLogedIn={setLogedIn} /> </div>
            <br />
            <br />
            <br />
          <div> <SignUp setLogedIn={setLogedIn} /> </div>
      </>) }
      

    </div>
  );
}

export default App;
