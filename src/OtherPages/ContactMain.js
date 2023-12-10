import NavBar from "../LandingPage/Navigation";
import SayHello from "../ContactPage/ShoutOut";
import FormComponent from "../ContactPage/FormComponent";
import FooterSection from "../LandingPage/Footer";

const firstSign = () => {
    return (
        <div>
            <NavBar />
            <SayHello />
            <FormComponent />
            <FooterSection />
        </div>
    )
}

export default firstSign;