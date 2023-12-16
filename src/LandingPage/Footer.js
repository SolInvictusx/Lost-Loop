import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const FooterSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the "Back to Top" button when the user scrolls down 100 pixels or more
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="footer-container">
            <div className="footer-head">
                <h1>Links</h1>
                {isVisible && (
                    <button className="back-btn" onClick={scrollToTop}>
                        Back to Top
                    </button>
                )}
                <div className="footer-column">
                    <div onClick={scrollToTop}><Link to="/">Home</Link></div>
                    <div onClick={scrollToTop}><Link to="/beef">Beef</Link></div>
                    <div onClick={scrollToTop}><Link to="/contact">Contact</Link></div>
                    <div onClick={scrollToTop}><Link to="/merchandise">Merchandise</Link></div>
                </div>
                <hr />
                <p className="col-sm">&copy;{new Date().getFullYear()} Lost Loop Farms | All Rights Reserved</p>

            </div>
        </div>
    );
};

export default FooterSection;
