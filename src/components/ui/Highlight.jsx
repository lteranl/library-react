import React from "react";

function Highlight({ icon, title, para }) {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {/* <FaBolt className="highlight__icon" /> */}
                {icon}
            </div>
            <h3 className="highlight__subtitle">{title}</h3>
            <p className="hightlight__para">{para}</p>
        </div>
    );
}

export default Highlight;
