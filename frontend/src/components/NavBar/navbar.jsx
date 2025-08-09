import './navbar.css';

function NavBar() {
    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <a href='/' className='logo'>
                    <img src='/logo.png' alt="Logo" />
                </a>
            </div>

            <div className='navbar-container'>
                <ul className='nav-options'>
                    <li><a href='/capabilities'>Capabilities</a></li>
                    <li><a href='/flavors'>Flavors</a></li>
                    <li><a href='/about'>About Us</a></li>
                    <li><a href='/contact'>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;