import React, { useEffect, useState } from "react";
import Aboutprofile from "./Aboutprofile";
import Profile from "./Profileclass";

const About = () => {
  const [datas,setDatas] = useState("")

  const testfunction = (data) =>{
      setDatas(data)
  }
  useEffect(()=>{
    console.log("This is the test")
  },[datas])
  console.log("render");
  

  return (
    <div>
      <h1>
        <Aboutprofile  test={testfunction}/>
        <p>data from child:{datas}</p>
        <Profile />
      </h1>
    </div>
  );
};

export default About;
