import { Link } from 'react-router-dom';

const InfoPortion = () => {
    return (
        <div className="info-portion-container">
            <div>
                <h1 className="info-heading">Portion Sizing!</h1>
                <h2 className="info-portion-text">
                    We offer portion sizes ranging from 1/16 beef up to the entire beef. When portioned out in percentages, independent of what portion size our customers select, we provide
                    50% in hamburger, 25% in roast, and the remaining 25% in steaks. We accommodate special requests and customization of these percentages as well as the cuts of steak! Listed below
                    are the cuts of beef that we offer!
                </h2>
            </div>
            <h2 className="info-contact-text">
                Interested? Click the button below to contact us and claim your beef today!
            </h2>
            <button className="contact-btn">
                <Link to="/contact" className="contact-link">
                    Contact Us!
                </Link>
            </button>
        </div>
    );
};

export default InfoPortion;
