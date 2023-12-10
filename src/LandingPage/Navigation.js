import LLLogo from '../img/LLLogo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <Logo />
            </Link>
            <ul className='nav-list'>
                <li className='nav-link'>
                    <Link to='/beef'>
                        Beef
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to='/merchandise'>
                        Merchandise
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const Logo = () => {

    return (
        <div>
            <img src={LLLogo}
                alt='Lost Loop Logo'
                className='logo-img'
            />
        </div>
    );
};

export default NavBar;