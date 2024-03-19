import { useState } from "react";
import Logo from "../assets/bitesy.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
    return (
      <div className="header">
        <div className="logo-container">
            <img className="logo" src={Logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="header-btn" onClick={()=>{
              (btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"));
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
}

export default Header;