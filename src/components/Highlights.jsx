import React from "react";
import { FaBolt, FaBookOpen, FaTags } from "react-icons/fa";
import Highlight from "./ui/Highlight";

function Highlights() {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            icon={<FaBolt />}
                            title={"Easy and Quick"}
                            para={
                                "Get access to your favorite books in a few clicks."
                            }
                        />
                        <Highlight
                            icon={<FaBookOpen />}
                            title={"10,000+ Books"}
                            para={
                                "Library has a wide range of categories to choose from."
                            }
                        />
                        <Highlight
                            icon={<FaTags />}
                            title={"Affordable"}
                            para={
                                "Get your hands on popular books for as low as $10."
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
