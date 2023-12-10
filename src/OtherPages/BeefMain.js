import NavBar from "../LandingPage/Navigation";
import BeefNeed from "../BeefPage/HowMuch";
import InfoPortion from "../BeefPage/InfoSection";
import BeefArray from "../BeefPage/CutsArray";
import Headliner from "../BeefPage/Headline";
import SectionBeef from "../BeefPage/Section";
import FooterSection from "../LandingPage/Footer";
import Amount from "../BeefPage/AmountArray";


const BeefPage = () => {
    return (
        <div>
            <NavBar />
            <div className="column-container">
                <div className="column">
                    <InfoPortion />
                </div>
                <div className="column">
                    <BeefNeed />
                </div>
            </div>
            <Headliner />
            <BeefArray />
            <SectionBeef />
            <Amount />
            <FooterSection />
        </div>
    );
};

export default BeefPage;


// SEE INFORMATION REGARDING ROUTING FOR PAGES!!!

// https://www.youtube.com/watch?v=o05ZP6_JQqE