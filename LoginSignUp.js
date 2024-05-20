import React, {userState} from 'react';
import './LoginSignUp.css';
import user_icon from './Assests/person.png';
import email_icon from './Assests/email.png';
import password_icon from './Assests/password.png';


const LoginSignUp = () => {

  const [action, setAction] = userState("/login");

  return (
    <div>
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? <div></div> : <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Enter Name" />
          </div>}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Enter Password" />
          </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forget-password">Forget Password? <span>Click here</span></div>}
        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;