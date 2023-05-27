import React, { useContext } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const Header = () => {
    const context = useContext(AppContext);
    return (
        <div className="header">
            <header className="p-3 border-bottom" id="top-header">
                <div className="container px-0">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-book text-danger" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                        <span className="fs-4 fw-bold ml-2">Sách Việt</span>
                    </Link>

                        <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <form className="d-flex ml-5">
                                <input className="form-control" type="search"
                                    placeholder="Nhập từ khóa, tiêu đề, tác giả hoặc ISBN" aria-label="Search"
                                    style={ { width: '30rem' } } />
                                <button className="btn btn-outline-danger" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-search mx-auto" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </form>
                        </div>


                        <ul className="nav nav-pills">

                            <li className="nav-item">
                                {
                                    context?.user ?
                                        <Link to='/login' className="nav-link btn-outline-danger link-danger">
                                            Sign Out
                                        </Link>
                                        :
                                        <Link to='/login' className="nav-link btn-outline-danger link-danger">
                                            Sign in
                                        </Link>
                                }

                            </li>
                            <li className="nav-item">
                                <Link to='' className="nav-link btn-outline-danger link-danger">
                                    My Account
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/basket/detail" className="nav-link btn-outline-danger link-danger">
                                    Basket 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 ml-2 text-center" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="nav-item"><a href="#" className="nav-link btn-outline-danger link-danger">Help</a></li>
                        </ul>
                    </div>

                </div>
            </header>
        </div>
    );
}

export default Header;