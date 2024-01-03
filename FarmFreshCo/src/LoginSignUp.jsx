import user_img from './Components/PhotoLibrary/user.png';
import email_img from './Components/PhotoLibrary/email.png';
import pass_img from './Components/PhotoLibrary/password.png';
import './LoginSignUp.css';
import React,{useState} from "react";

const LoginSignUp=()=>
{
  const [action,setAction]=useState("Login");
    return(
        <div className='container'>
        <div className="header">
        <div className="text">{action}</div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
            <img src={user_img} />
            <input type="text" placeholder="User Name" />
            </div>}
            {action==="Login"?<div></div>:<div className="input">
            <img src={user_img} />
            <input type="tel" placeholder="Mobile Number" />
            </div>}
        <div className="input">
        <img src={email_img} />
        <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
        <img src={pass_img} />
        <input type="password" placeholder="Password" />
        </div>
            {action==="Login"?<div></div>:<div className="input">
            <img src={pass_img} />
            <input type="password" placeholder="Confirm Password" />
        </div>}
        </div>
        <div className="reset-password">Reset Password?<span> Click Here?</span></div>
        {action==="Login"?<div></div>:<div className="CheckBox">
        <input type="checkbox"/>
        <label>Accept terms and Conditions</label>
        </div>}
        <br></br>

<div className="Newacc">
  {action === "Login" ? (
    <span onClick={() => setAction("Sign Up")}> Create an account?</span>):null}
</div>

        <div className="submit-container">
        <div className={action==="Login"?"submit green":"submit"} 
                onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit green":"submit"}
                 onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
    );
}

export default LoginSignUp;