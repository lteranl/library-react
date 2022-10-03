import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

function Discounted() {
    return (
        <section className="" id="discounted">
            <div className="container">
                <div className="row">
                    <div className="section__title">
                        <h2 className="section__title">
                            Discounted <span className="purple">Books</span>
                        </h2>
                    </div>
                    <div className="books">
                        {books
                            .filter((book) => book.salePrice !== null)
                            .slice(0, 8)
                            .map((book) => (
                                <Book book={book} key={book.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;
