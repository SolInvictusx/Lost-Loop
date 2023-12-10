import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <div className="footer-container">
            <div className="footer-head">
                <h1>
                    Links & About Us
                </h1>
                <div className="col">
                    <Link to="/beef">Beef</Link>
                </div>
                <div className="col">
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="col">
                    <Link to="/merchandise">Merchandise</Link>
                </div>
                <hr />
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Lost Loop Farms | All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default FooterSection;