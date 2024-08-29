import { useState } from "react";
import { Link } from "react-router-dom";
import useStatusOnline from "../utilis/useStatusOnline";
import { LOGO_URL } from "../utilis/constanants";
// const Header = () => {
//     const [reactBtn, setReactBtn] = useState("login");
//     const onlineStatus = useStatusOnline();
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img
//                     className="logo"
//                     src="https://png.pngtree.com/template/20200704/ourlarge/pngtree-restaurant-logo-design-vector-template-image_388753.jpg" />
//             </div>
//             <div className="navitems">
//                 <ul>
//                     <li> Online Status :{onlineStatus ? "✅":"🔴"}</li>
//                     <li><Link to ="/">Home</Link></li>
//                     <li><Link to ="/about">About Us </Link></li>
//                     <li><Link to ="/contact">Conatct Us </Link></li>
//                     <li><Link to ="/grocery">Grocery </Link></li>

//                     <li>Cart</li>
//                     <button
//                         className="login"
//                         onClick={() => {
//                             reactBtn === "login"
//                                 ? setReactBtn("logout")
//                                 : setReactBtn("login");
//                         }}>
//                         {reactBtn}
//                     </button>
//                 </ul>
//             </div>
//         </div>
//     )
// }

const Header = () => {
    const [reactBtn, setReactBtn] = useState("login");
    const onlineStatus = useStatusOnline();
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    />
            </div>
            <div className="navitems">
                <ul>
                    <li> Online Status :{onlineStatus ? "✅":"🔴"}</li>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About Us </Link></li>
                    <li><Link to ="/contact">Conatct Us </Link></li>
                    <li><Link to ="/grocery">Grocery </Link></li>

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