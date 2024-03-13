import React from 'react';
import { Link } from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function NavigationMenu() {
    const {currentUser,ioLoggedIn,logOut,loading} = useAuth()
    console.log(loading)
    const navigate = useNavigate(); // Get the navigate function

    return (
<>
        {loading?<p>Loading</p>:<nav className="navbar">
        <div className="container">
                <Link to="/">
                    <img src="/ourlogo.png" alt="Logo" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                   {ioLoggedIn?currentUser.role==="admin"?<li><Link to="/adminDashboard">AdminDashBoard</Link></li>:"":""}
                </ul>
                <Link to="/user"><img src={currentUser?currentUser.imageUrl:null} alt="User" className={currentUser?"profile-image":"hide"} /></Link>
                
                <button className='logout-button' style={currentUser?{}:{top: "0%"}} onClick={()=>{
                   if(currentUser){
                    logOut()
                   }else{
                    navigate("/login")
                   }
                }}>{currentUser?"Logud":"Login"}</button>
            
            </div>
        </nav>}
        </>
    );

}

export default NavigationMenu;
