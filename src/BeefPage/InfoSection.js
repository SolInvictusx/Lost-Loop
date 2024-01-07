import { Link } from 'react-router-dom';

const InfoPortion = () => {
    return (
        <div className="info-portion-container">
            <div>
                <h1 className="info-heading">Portion Sizing!</h1>
                <h2 className="info-portion-text">
                    We offer individual beef packages ranging from 1/16 all the way up to a whole beef. When broken down to percentages, each package will provide approximately 45% of the allotted weight in hamburger, 30% in roasts, and the remaining 25% in steaks. These percentages may vary slightly as each animal is subtly different. Our 1/16, 1/8, and 1/4 beef packages are cut to our standard specifications by our processer. 1/2 and whole beef are fully customizable and can be cut and packaged to your exact specifications by the processor.
                </h2>
            </div>
            <h2 className="info-contact-text">
                Interested? Click the button below to contact us and get on our list today!
            </h2>
            <Link to="/contact" className="contact-link">
                Contact Us!
            </Link>
        </div>
    );
};

export default InfoPortion;
