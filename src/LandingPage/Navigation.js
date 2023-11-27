import LLLogo from '../img/LLLogo.svg';

const NavBar = () => {
    return (
        <nav className='nav'>
            <a href='/'><Logo /></a>
            <ul className='nav-list'>
                <li className='nav-link'>
                    <a href='/'>Beef</a>
                </li>
                <li className='nav-link'>
                    <a href='/'>Contact</a>
                </li>
                <li className='nav-link'>
                    <a href='/'>Merchandise</a>
                </li>
            </ul>
        </nav>
    );
};

const Logo = () => {

    return (
        <div>
            <img src={LLLogo}
                style={{ height: 50, width: 50 }}
                alt='Lost Loop Logo'
                className='logo-img'
            />

        </div>
    );
    ;
}

export default NavBar;