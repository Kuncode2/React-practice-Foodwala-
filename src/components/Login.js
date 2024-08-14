import React, { useState } from "react";
import "./css/login.css"
const Login = () => {
 
  const[logininfo,setLogininfo]=useState({
    username: "",
    email: "",
    password: "",
    conformPassword: ""
  })

  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    setLogininfo((information)=>({
        ...information,
        [name]:value
    }));
  }

  

  const handleSignup = () =>{
    console.log(logininfo);
  }


  return (
    <div className="colorss">
    <div className="container">
    <div className="signup-box">        
      <h1>Signup</h1>
      <div className="signup-components">
        <form>
          <div className="signup-component">
            <label htmlFor="New-username"> <b>New-username:</b> </label>
            <input type="text" name="username"  value={logininfo.username}className="username" onChange={handleInputChange}/>
          </div>
          <div className="signup-component">
            <label htmlFor="email"><b>Email-id:</b></label>
            <input type="email" name="email" value={logininfo.email} className="username" onChange={handleInputChange}/>
          </div>
          <div className="signup-component">
            <label htmlFor="password"><b>New-Password:</b></label>
            <input type="password" name="password" value={logininfo.password} className="username" onChange={handleInputChange}/>
          </div>
          <div className="signup-component">
            <label htmlFor="conform"><b>Conform-Password: </b></label>
            <input type="password" name="conformPassword" value={logininfo.conformPassword}  className="username" onChange={handleInputChange}></input>
          </div>
          <button className="signup" onClick={handleSignup}>signup</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;
