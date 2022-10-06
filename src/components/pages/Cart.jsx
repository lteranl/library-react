import React, { useState, useEffect } from "react";

function Cart({ cart, changeQuantity }) {
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let price = 0;
        cart.forEach((item) => {
            price +=
                (item.salePrice || item.originalPrice).toFixed(2) *
                item.quantity;
        });
        setSubtotal(price.toFixed(2));
    }, [cart]);

    useEffect(() => {
        setTax((subtotal * 0.0725).toFixed(2));
    }, [subtotal]);

    useEffect(() => {
        setTotal((+subtotal + +tax).toFixed(2));
    }, [subtotal, tax]);

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {cart.map((book) => (
                                    <div className="cart__item">
                                        <div className="cart__book">
                                            <img
                                                src={book.url}
                                                alt=""
                                                className="cart__book--img"
                                            />
                                            <div className="cart__book--info">
                                                <span className="cart__book--title">
                                                    {book.title}
                                                </span>
                                                <span className="cart__book--price">
                                                    {(
                                                        book.salePrice ||
                                                        book.originalPrice
                                                    ).toFixed(2)}
                                                </span>
                                                <button className="cart__book--remove">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart__quantity">
                                            <input
                                                type="number"
                                                min={0}
                                                max={99}
                                                className="cart__input"
                                                value={book.quantity}
                                                onChange={(e) => {
                                                    changeQuantity(
                                                        book,
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="cart__total">
                                            $
                                            {(
                                                (book.salePrice ||
                                                    book.originalPrice) *
                                                book.quantity
                                            ).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${tax}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${total}</span>
                            </div>
                            <button
                                className="btn btn__checkout no-cursor"
                                onClick={() => alert("future update")}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
