import { useContext, useState } from "react";
import Logo from "../assets/bitesy.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUserInfo} = useContext(UserContext);

    return (
      <div className="flex justify-between items-center border-b-2 border-gray-300 p-4">
        <div className="">
            <img className="w-24" src={Logo} />
        </div>
        <div className="">
          <ul className="flex justify-between items-center gap-4 p-4">
            <input className="border-2 border-neutral-300 rounded-md" value={loggedInUser} onChange={(e) => setUserInfo(e.target.value)}/>
            <li className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white hidden md:block">Online Status: {onlineStatus ? "✅": "⭕"}</li>
            <li className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white text-lg md:text-md border-2 md:border-none"><Link to="/">Home</Link></li>
            <li className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white hidden md:block" ><Link to="/about">About U</Link>s</li>
            <li className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white hidden md:block" ><Link to="/contact">Contact Us</Link></li>
            <li className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white hidden md:block" ><Link to="/grocery">Grocery</Link></li>
            <li className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white hidden md:block" ><Link to="/cart">Cart</Link></li>
            <li className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white hidden md:block" >{loggedInUser}</li>
            <button className="font-semibold text-gray-600 p-2 rounded-md hover:bg-neutral-400/90 hover:text-white hidden md:block" onClick={()=>{
              (btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"));
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
}

export default Header;