import NavBar from "../LandingPage/Navigation";
import SayHello from "../ContactPage/ShoutOut";
import FormComponent from "../ContactPage/FormComponent";

const firstSign = () => {
    return (
        <div>
            <NavBar />
            <SayHello />
            <FormComponent />
        </div>
    )
}

export default firstSign;