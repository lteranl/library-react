import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Books from "./components/pages/Books";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/books" element={<Books />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
