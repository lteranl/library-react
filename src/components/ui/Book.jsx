import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

function Book({ book }) {
    return (
        <div className="book">
            <Link to="">
                <figure className="book__img--wrapper">
                    <img src={book.url} alt="" className="book__img" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to="" className="book__title--link">
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating} />
            <Price original={book.originalPrice} sale={book.salePrice} />
        </div>
    );
}

export default Book;
