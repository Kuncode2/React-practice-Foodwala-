import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

const Login = () => {
  const [logininfo, setLogininfo] = useState({
    username: "",
    email: "",
    password: "",
    conformPassword: ""
  });

  const navigate = useNavigate(); 
  // this is also a hook use for navigation 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogininfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault(); 
    console.log(logininfo);

    navigate("/");
  };

  return (
    <div className="colorss">
      <div className="container">
        <div className="signup-box">
          <h1>Signup</h1>
          <div className="signup-components">
            <form>
              <div className="signup-component">
                <label htmlFor="New-username"><b>New-username:</b></label>
                <input type="text" name="username" value={logininfo.username} className="username" onChange={handleInputChange} />
              </div>
              <div className="signup-component">
                <label htmlFor="email"><b>Email-id:</b></label>
                <input type="email" name="email" value={logininfo.email} className="username" onChange={handleInputChange} />
              </div>
              <div className="signup-component">
                <label htmlFor="password"><b>New-Password:</b></label>
                <input type="password" name="password" value={logininfo.password} className="username" onChange={handleInputChange} />
              </div>
              <div className="signup-component">
                <label htmlFor="conform"><b>Conform-Password:</b></label>
                <input type="password" name="conformPassword" value={logininfo.conformPassword} className="username" onChange={handleInputChange} />
              </div>
              <button className="signup" onClick={handleSignup}>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
