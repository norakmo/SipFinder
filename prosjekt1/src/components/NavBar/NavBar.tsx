import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/search">
                    Search
                </Link>
            </div>
        </nav>
    )
}