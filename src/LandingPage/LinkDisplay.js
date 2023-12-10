import { Link } from "react-router-dom";

const BeefLink = () => {
    return (
        <div className="display-container">
            <div>
                <h1 className="table-talk">
                    From our farm to your table
                </h1>
            </div>
            <Link to='/beef' className="link-btn">
                Beef Pricing
            </Link>
            <Link to='/merchandise' className="link-btn">
                Shirts, Hats & More
            </Link>
        </div>
    );
};

export default BeefLink;
