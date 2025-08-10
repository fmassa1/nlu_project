import { Link } from 'react-router-dom';

import './404.css';

function NotFound() {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-title">404</h1>
                <p className="notfound-text">
                    Uh-oh! Looks like you took a wrong turn.
                </p>
                <Link className='notfound-button' to="/"> 
                    Take me home 
                </Link>
            </div>
        </div>
    );
}

export default NotFound;