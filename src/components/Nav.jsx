import React from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

function Nav({ numberOfItemsInCart }) {
    function openMenu() {
        document.body.classList += "menu--open";
    }
    function closeMenu() {
        document.body.classList.remove("menu--open");
    }

    //cart is more than 10 items
    const cartLength = numberOfItemsInCart > 10 ? "10+" : numberOfItemsInCart;
    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/books" className="nav__link">
                            Books
                        </Link>
                    </li>

                    <button className="btn__menu" onClick={openMenu}>
                        <FaBars className="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FaShoppingCart className="cart" />
                        </Link>
                        {numberOfItemsInCart > 0 && (
                            <span className="cart__length">
                                {/* {numberOfItemsInCart} */}
                                {cartLength}
                            </span>
                        )}
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button
                        className="btn__menu btn__menu--close"
                        onClick={closeMenu}
                    >
                        <FaTimes className="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link
                                to="/"
                                className="menu__link"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link
                                to="/books"
                                className="menu__link"
                                onClick={closeMenu}
                            >
                                Books
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link
                                to="cart"
                                className="menu__link"
                                onClick={closeMenu}
                            >
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
