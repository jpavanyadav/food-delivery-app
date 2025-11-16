import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../util/constants";

const Header=()=>{
const [btnname, setbtnname] = useState("login");
 const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
            <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                     <li className="px-4">
                        <Link to="/about">about</Link>
                    </li>
                      <li className="px-4">
                        <Link to="/contact">contact</Link>
                    </li>
                       <li className="px-4"><Link to="/cart">cart({cartItems.length})</Link></li>
                       <button className="login" 
                       onClick={(()=>{
                        btnname==="login"?setbtnname("logout"):setbtnname("login");
                       })}
                       >{btnname}</button>
                </ul>
            </div>
        </div>
    )
 }

 export default Header;