import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar(){
    return(
        <nav className="NavBar">
            <div className="LogoNavBar">
                {/* Legg inn bilde */}
                <Link to="/" className="HomeLinkLogo">
                    <h1>
                        SipFinder
                    </h1>
                </Link>
            </div>
            <div className="NavBarLinks">
                <Link to="/" className="HomeLink">
                    Home
                </Link>
                <Link to="/search" className="SearchLink">
                    Search
                </Link>
            </div>
        </nav>
    )
}