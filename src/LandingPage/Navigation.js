import LLLogo from '../img/LLLogo.svg';

const NavBar = () => {
    return (
        <nav className='nav'>
            <a href='/'><Logo /></a>
            <ul className='nav-list'>
                <li>
                    <a href='/'>Beef</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
                <li>
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
                alt='Lost Loop Logo' />
        </div>
    );
    ;
}

export default NavBar;