import logo from "./images/airbnb-logo.png"

function Header() {
    return (
        <div className="header-div">
            <img className="logo-img" src={logo} alt="airbnb logo"></img>
        </div>
    )
}

export default Header