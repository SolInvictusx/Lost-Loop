import NavBar from "../LandingPage/Navigation"
import FooterSection from "../LandingPage/Footer"
import MerchAray from "../MerchandisePage/ProductsArray";
import ProductsHeadline from "../MerchandisePage/ProductDisplay";
import Information from "../MerchandisePage/MoreInfo";


const Merchandise = () => {
    return (
        <div>
            <NavBar />
            <ProductsHeadline />
            <MerchAray />
            <Information />
            <FooterSection />
        </div>
    );
};

export default Merchandise;