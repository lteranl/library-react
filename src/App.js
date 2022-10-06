import React, { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Books from "./components/pages/Books";
import { books } from "./data";
import BookInfo from "./components/pages/BookInfo";
import Cart from "./components/pages/Cart";

function App() {
    const [cart, setCart] = useState([]);

    function addToCart(book) {
        setCart([...cart, { ...book, quantity: 1 }]);
    }

    function changeQuantity(book, quantity) {
        setCart(
            // map() returns a new array with the same length as the original array and with the same elements in the same order
            cart.map((item) =>
                // if the id of the item in the cart matches the id of the book that was passed in
                item.id === book.id
                    ? // return a new object with the same properties as the item in the cart, but with the quantity property set to the quantity that was passed in
                      { ...item, quantity: +quantity }
                    : // otherwise, return the item in the cart
                      item
            )
        );
    }

    function removeItem(item) {
        // filter() returns a new array with the same elements in the same order as the original array, but with the elements that don't pass the test removed from the new array
        setCart(cart.filter((book) => book.id !== item.id));
    }

    function numberOfItemsInCart() {
        let count = 0;
        cart.forEach((item) => (count += item.quantity));
        return count;
    }
    console.log(cart);

    return (
        <Router>
            <div className="App">
                <Nav numberOfItemsInCart={numberOfItemsInCart()} />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/books" element={<Books books={books} />} />
                    <Route
                        path="/books/:id"
                        element={
                            <BookInfo
                                books={books}
                                addToCart={addToCart}
                                cart={cart}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                books={books}
                                cart={cart}
                                changeQuantity={changeQuantity}
                                removeItem={removeItem}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
