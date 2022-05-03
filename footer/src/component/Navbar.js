import React from "react";
import "../App.css";

 function Navbar() {
     return(
         <div className="Navbar">
             <div  className="leftSide">
                 <div className="links">
                 <a href="/home">Home</a>
                 <a href="favourite">Favourite</a>
                 <a href="list">List</a>
                 <a href="contactUs">ContactUs</a>
             </div>
             </div>
             <div  className="rightSide">
                 <input type ="text" placeholder="Search..."/>
                 <button>Search</button>
             </div>


         </div>
     )
 }

 export default Navbar;