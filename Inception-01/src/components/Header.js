import { useState } from "react";
import Logo from "../assets/bitesy.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
    return (
      <div className="header">
        <div className="logo-container">
            <img className="logo" src={Logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About U</Link>s</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <button className="header-btn" onClick={()=>{
              (btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"));
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
}

export default Header;