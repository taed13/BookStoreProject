import React from "react";
import './Nav.css';

const Nav = () => {
    return (
        <div className="main-navigation">
        <div className="navbar-link border-bottom">
            <div className="container px-0">
                <div className="nav-scroller">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 link-secondary" href="#">Advanced Search</a>
                        <a className="p-2 link-secondary" href="#">U.S.</a>
                        <a className="p-2 link-secondary" href="#">Technology</a>
                        <a className="p-2 link-secondary" href="#">Design</a>
                        <a className="p-2 link-secondary" href="#">Culture</a>
                        <a className="p-2 link-secondary" href="#">Business</a>
                        <a className="p-2 link-secondary" href="#">Politics</a>
                        <a className="p-2 link-secondary" href="#">Opinion</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    );
    }

export default Nav;