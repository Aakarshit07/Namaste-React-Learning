import { useState } from "react";
import Logo from "../assets/bitesy.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
            <img className="logo" src={Logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "✅": "⭕"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About U</Link>s</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
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