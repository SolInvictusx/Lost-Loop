import BeefNeed from '../src/BeefPage/InfoSection';
import NavBar from './LandingPage/Navigation';
import AmountBeef from '../src/BeefPage/Quantity';

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