import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {

  const [menu,setMenu]=useState(false);

  return(

<nav className="navbar">

<div className="logo">
🎬 MovieFlix
</div>

<div className={menu?"nav-links active":"nav-links"}>

<a href="#">Home</a>

<a href="#">Movies</a>

<a href="#">Latest</a>

<a href="#">Categories</a>

</div>

<div className="right">

<div className="search">

<FaSearch/>

<input
placeholder="Search Movie..."
type="text"
/>

</div>

<div
className="menu"
onClick={()=>setMenu(!menu)}
>

{menu?<FaTimes/>:<FaBars/>}

</div>

</div>

</nav>

  )

}
