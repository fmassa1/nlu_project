import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils/flavors";
import './navbar.css';

function NavBar() {

    const [flavorCategories, setFlavorCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setFlavorCategories);
    }, []);

    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <a href='/' className='logo'>
                    <img src='/logo.png' alt="Logo" />
                </a>
            </div>

            <div className='navbar-container'>
                <ul className='nav-options'>
                    <li className="dropdown">
                        <span className="dropdown-label">
                            Capabilities <span className="dropdown-arrow">▼</span> 
                        </span>
                        <ul className="dropdown-menu">
                            <li><Link to="/design">Design</Link></li>
                            <li><Link to="/production">Production</Link></li>
                            <li><Link to="/certification">Certification</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="/flavors" className="dropdown-label">Flavors
                            <span className="dropdown-arrow">▼</span> 
                        </Link>
                        <ul className="dropdown-menu">
                            {flavorCategories.map(cat => (
                                <li key={cat.slug}>
                                    <Link to={`/flavors/${cat.slug}`}>{cat.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li><a href='/about'>About Us</a></li>
                    <li><a href='/contact'>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;