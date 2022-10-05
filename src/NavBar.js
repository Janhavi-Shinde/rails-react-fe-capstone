import React from "react";
// import { Link } from "react-router-dom";

function NavBar () { 

    return (
        <nav className="NavBar">
            <h1> Navigation:</h1>
            <div className="links">
                <br></br>
                <a href="/"> Login/SignUp</a>
                <br/>
                <a href="/Spheres"> Spheres section</a>
                <br/>
                <a href="/Goals"> Goals section</a>
                <br/>
                <a href="/Profile"> Profile section</a>

            </div>
        </nav>
    )
}

export default NavBar;