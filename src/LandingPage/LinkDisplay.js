import { Link } from "react-router-dom";

const BeefLink = () => {
    return (
        <div className="display-container">
            <div>
                <h1 className="table-talk">
                    From our farm to your table
                </h1>
            </div>
            <button className="link-btn">
                <Link to='/beef'>
                    Beef Pricing
                </Link>
            </button>
            <button className="link-btn">
                <Link to='/merchandise'>
                    Shirts, Hats & More
                </Link>
            </button>

        </div>
    );
};

export default BeefLink;