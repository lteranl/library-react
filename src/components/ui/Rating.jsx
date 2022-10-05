import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Rating({ rating }) {
    return (
        <div className="book__ratings">
            {new Array(Math.floor(rating)).fill(0).map((_, index) => (
                <FaStar key={index} />
            ))}
            {!Number.isInteger(rating) && <FaStarHalfAlt />}
        </div>
    );
}

export default Rating;
