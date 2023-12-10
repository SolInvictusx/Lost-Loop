import NavBar from "../LandingPage/Navigation"
import FooterSection from "../LandingPage/Footer"
import MerchAray from "../MerchandisePage/ProductsArray";
import ProductsHeadline from "../MerchandisePage/ProductDisplay";


const Merchandise = () => {
    return (
        <div>
            <NavBar />
            <ProductsHeadline />
            <MerchAray />
            <FooterSection />

        </div>
    );
};

export default Merchandise;