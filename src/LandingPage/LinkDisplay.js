import { Link } from "react-router-dom";

const BeefLink = () => {
    return (
        <div className="display-container">
            <div className="display-box">
                <p>
                    <h1 className="table-talk">
                        From our farm to your table
                    </h1>
                </p>
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
        </div>
    );
};

export default BeefLink;