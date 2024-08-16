import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/FLdtNSnIpSLbl8Hi8fEP5CiZ3gDMKCxEVu8lFBl1pE3a0qeDSQR_u8rGK3mjHQSMV3HSRBkMGg=s160-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

// Routing
// spa - single page routing  
//  client-side-routing (new routing) we don't want to make any call from  => and     server sider routing(all the pages come from server) example:- old http request

const Headercomponents = () => {

  const [authenticated, setAuthenticated] = useState(false)


  return (
    <div className="header">

      <Title />     {
        // while we calling the component inside another components that is called component compitation
      }
      <div className='nav-items'>
        <ul>
          <Link to="/"><li>Home</li></Link>

          <Link to="/about"><li>About</li></Link>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/instaMart">InstaMart</Link></li>

          {/* javasccript exp and js statement*/}
          <Link to="/login">
          {authenticated 
          ? <button onClick={() => { setAuthenticated(false) }}>Logout</button> 
          : <button onClick={() => { setAuthenticated(true) }}>Login </button>}
          </Link>
        </ul>
      </div>
    </div>
  )
}
export default Headercomponents  