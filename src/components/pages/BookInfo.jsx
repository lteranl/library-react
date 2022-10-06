import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Rating from "../ui/Rating";
import Price from "../ui/Price";
import Book from "../ui/Book";

function BookInfo({ books, addToCart, cart }) {
    const { id } = useParams();
    const book = books.find((book) => +book.id === +id);

    function addBookToCart(book) {
        addToCart(book);
    }

    function bookOnCart() {
        return cart.find((book) => +book.id === +id);
    }
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FaArrowLeft />
                                <span className="book__selected--title--top">
                                    Books
                                </span>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img
                                    src={book.url}
                                    alt=""
                                    className="book__selected--img"
                                />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price
                                        original={book.originalPrice}
                                        sale={book.salePrice}
                                    />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Sint fugiat velit fuga
                                        corrupti quam architecto quia recusandae
                                        rem similique repellendus voluptas,
                                        dolores ea, deserunt consequatur a,
                                        itaque eaque cumque consequuntur. Iste
                                        harum excepturi et tempore voluptates
                                        laboriosam consectetur sed ipsa omnis
                                        similique officiis eligendi
                                        reprehenderit expedita quam cumque
                                        provident corrupti quo, voluptatibus
                                        aperiam laudantium! Cumque, ut sint.
                                        Qui, voluptate culpa.
                                    </p>
                                </div>
                                {bookOnCart() ? (
                                    <Link to={"/cart"}>
                                        <button className="btn">
                                            Checkout
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        className="btn"
                                        onClick={() => addBookToCart(book)}
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title-top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {books
                                .filter(
                                    (book) =>
                                        book.rating === 5 && +book.id !== +id
                                )
                                .slice(0, 4)
                                .map((book) => (
                                    <Book book={book} key={book.id} />
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
