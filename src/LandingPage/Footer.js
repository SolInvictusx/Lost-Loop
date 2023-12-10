import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <div className="footer-container">
            <div className="footer-head">
                <h1>
                    Links
                </h1>
                <div className="footer-column">
                    <div>
                        <Link to="/beef">Beef</Link>
                    </div>
                    <div>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div>
                        <Link to="/merchandise">Merchandise</Link>
                    </div>
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