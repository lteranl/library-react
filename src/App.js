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
        // + converts string to number (unary operator) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus
        const dupeItem = cart.find((item) => +item.id === +book.id);
        if (dupeItem) {
            // increment quantity
            dupeItem.quantity++;
            setCart(
                cart.map((item) => {
                    // if item is the dupeItem then return the dupeItem with the incremented quantity
                    if (item.id === dupeItem.id) {
                        return {
                            ...item,
                            quantity: item.quantity++,
                        };
                    } else {
                        // otherwise return the item
                        return item;
                    }
                })
            );
        } else {
            // if there is no dupeItem then add the book to the cart with a quantity of 1
            setCart([...cart, { ...book, quantity: 1 }]);
        }
    }

    console.log(cart);

    return (
        <Router>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/books" element={<Books books={books} />} />
                    <Route
                        path="/books/:id"
                        element={
                            <BookInfo books={books} addToCart={addToCart} />
                        }
                    />
                    <Route
                        path="/cart"
                        element={<Cart books={books} cart={cart} />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
