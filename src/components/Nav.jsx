import React from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import LibraryLogo from "../assets/Library.svg";

function Nav() {
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Books
                        </a>
                    </li>

                    <button className="btn__menu">
                        <FaBars className="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className="nav__link">
                            <FaShoppingCart className="cart" />
                        </a>
                        <span className="cart__length">3</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FaTimes className="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link">
                                Home
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href="/books" className="menu__link">
                                Books
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href="cart" className="menu__link">
                                Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
