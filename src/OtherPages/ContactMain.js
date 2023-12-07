import NavBar from "../LandingPage/Navigation";
import SayHello from "../ContactPage/ShoutOut";
import Basic from "../ContactPage/FormComponent";

const firstSign = () => {
    return (
        <div>
            <NavBar />
            <SayHello />
            <Basic />
        </div>
    )
}

export default firstSign;