import NavBar from "../LandingPage/Navigation";
import BeefNeed from "../BeefPage/HowMuch";
import InfoPortion from "../BeefPage/InfoSection";


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
        </div>
    );
};

export default BeefPage;


// SEE INFORMATION REGARDING ROUTING FOR PAGES!!!

// https://www.youtube.com/watch?v=o05ZP6_JQqE