import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar(){
    const {user, dispatch} = useContext(Context);

    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"})
    }

    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' className="link">HOME</Link>
                    </li>
                    <li className="topListItem"><Link to='/about' className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to='/contact' className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to='/write' className="link">WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user?(
                        <img 
                        src={user.profilePic || "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1600"} 
                        alt="" className="topImg" />

                    ):(
                        <>
                            <ul className="topList">
                                <li className="topListItem"><Link to='/login' className="link">LOGIN</Link></li>
                                <li className="topListItem"><Link to='/register' className="link">REGISTER</Link></li>
                            </ul>
                        </>
                    )
                }
            </div>
            
        </div>
    )
}