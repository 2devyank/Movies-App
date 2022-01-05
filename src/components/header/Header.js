import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.scss"
function Header() {
    return (
       <div className="header">
           <Link to="/">
           <div className="logo">Movie app</div>
           </Link>
           <div className="user-image">
               <img src="https://github.com/dmalvia/React_Redux_ToolKit_Movie_App/blob/master/src/images/user.png?raw=true" alt="" />
           </div>
       </div>
    )
}

export default Header
