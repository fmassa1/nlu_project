import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                
                <div className='footer-left'>
                    <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
                </div>

                <div className='footer-right'>
                    <div className='logo-container'>
                        <a href='/' className='logo'>
                            <img src='/logo.png' alt="Logo" />
                        </a>
                    </div>
                </div>  

            </div>
        </footer>
    );
}

export default Footer;