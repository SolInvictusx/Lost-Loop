import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <div className="footer-container">
            <div className="footer-head">
                <h1>
                    Links & About Us
                </h1>
                <Link to="/beef">Beef</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/merchandise">Merchandise</Link>
            </div>
        </div>
    );
};

export default FooterSection;