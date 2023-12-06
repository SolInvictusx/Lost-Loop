import NavBar from "../LandingPage/Navigation";
import ContactForm from "../ContactPage/FormComponent";
import SayHello from "../ContactPage/ShoutOut";

const firstSign = () => {
    return (
        <div>
            <NavBar />
            <SayHello />
            <ContactForm />
        </div>
    )
}

export default firstSign;