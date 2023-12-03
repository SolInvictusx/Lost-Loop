import BeefNeed from './InfoSection';
import NavBar from './LandingPage/Navigation';
import AmountBeef from './Quantity';

const BeefPage = () => {
    return (
        <div>
            <NavBar />
            <BeefNeed />
            <AmountBeef />
        </div>
    );
};

export default BeefPage;