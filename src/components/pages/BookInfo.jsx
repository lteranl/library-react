import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Rating from "../ui/Rating";
import Price from "../ui/Price";

function BookInfo({ books }) {
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
                                    src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                                    alt=""
                                    className="book__selected--img"
                                />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    djfklas
                                </h2>
                                <Rating rating="4.5" />
                                <div className="book__selected--price">
                                    <Price original={20} sale={null} />
                                </div>
                                <div className="book__summary">
                                    <div className="book__summary--title">
                                        Summary
                                    </div>
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
                                    <button className="btn">Add to Cart</button>
                                </div>
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
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;
