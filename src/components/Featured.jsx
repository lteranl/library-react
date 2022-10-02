import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Featured() {
    return (
        <section id="featured">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        <div className="book">
                            <a href="">
                                <figure className="book__img--wrapper">
                                    <img
                                        src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
                                        alt=""
                                    />
                                </figure>
                            </a>
                            <div className="book__title">
                                <a href="" className="book__title--link">
                                    Atomic Habits
                                </a>
                            </div>
                            <div className="book__ratings">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <div className="book__price">
                                <span className="book__price--normal">
                                    $15.00
                                </span>
                                $10.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
