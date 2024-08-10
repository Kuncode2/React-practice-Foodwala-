import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/FLdtNSnIpSLbl8Hi8fEP5CiZ3gDMKCxEVu8lFBl1pE3a0qeDSQR_u8rGK3mjHQSMV3HSRBkMGg=s160-c-k-c0x00ffffff-no-rj"
    />
  </a>
);


const Headercomponents = () => {

  const [authenticated, setAuthenticated] = useState(false)


  return (
    <div className="header">

      <Title />     {
        // while we calling the component inside another components that is called component compitation
      }
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          {/* javasccript exp and js statement*/}
          {authenticated 
          ? <button onClick={() => { setAuthenticated(false) }}>Logout</button> 
          : <button onClick={() => { setAuthenticated(true) }}>Login </button>}
        </ul>
      </div>
    </div>
  )
}
export default Headercomponents  