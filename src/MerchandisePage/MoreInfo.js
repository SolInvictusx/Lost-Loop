import { Link } from "react-router-dom";

const Information = () => {
    return (
        <div className="info-container">
            <h2 className="info-portion-text">
                See something you like? Click here to contact us about purchasing!
            </h2>
            <Link to="/contact" className="contact-link">
                Contact Us!
            </Link>
        </div>
    );
};

export default Information;