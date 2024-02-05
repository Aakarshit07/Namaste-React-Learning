import Logo from "../assets/bitesy.png";
const Header = () => {
  console.log(process);
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
          </ul>
        </div>
      </div>
    )
}

export default Header;