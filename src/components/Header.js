import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [reactBtn, setReactBtn] = useState("login");

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://png.pngtree.com/template/20200704/ourlarge/pngtree-restaurant-logo-design-vector-template-image_388753.jpg" />
            </div>
            <div className="navitems">
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About Us </Link></li>
                    <li><Link to ="/contact">Conatct Us </Link></li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() => {
                            reactBtn === "login"
                                ? setReactBtn("logout")
                                : setReactBtn("login");
                        }}>
                        {reactBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header 