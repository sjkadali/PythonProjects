import {Route, Routes }  from "react-router";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Activation from './pages/Activation'
import PasswordReset from './pages/PasswordReset'
import PasswordResetConfirm from './pages/PasswordResetConfirm'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>     
        <Routes>
          <Route path="/" element={<Home/>}/>       
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/activation" element={<Activation/>}/>
          <Route path="/password-reset" element={<PasswordReset/>}/>
          <Route path="/password-reset-confirm" element={<PasswordResetConfirm/>}/>
        </Routes>
    </div>
  );
}

export default App;
