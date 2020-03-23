import React from "react";
import { Link } from "react-router-dom";
import fire from "../firebase/fire"

function Header() {

    function logout() {
        fire.auth().signOut();
    }

    return (
        <header className="header">
            <nav className="main-nav">
                <Link to="/">
                    <span className="main-nav_item">People list</span>
                </Link>

                <Link to="/favorites">
                    <span className="main-nav_item">Favorites list</span>
                </Link>
            </nav>
            <button onClick={logout} type="button" className="button">Log out
                <i className="fas fa-sign-out-alt logout-button"></i>
            </button>
        </header>
    );
}

export default Header;
