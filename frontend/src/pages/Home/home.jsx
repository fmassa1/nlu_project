import './home.css';
import QuoteForm from '../../components/QuoteForm/quote';
import Slider from '../../components/Slider/slider';


function HomePage() {
    return (
        <>
            <Slider />
            <div className="main-content-wrapper" style={{ display: 'flex', gap: '2rem' }}>
                <div className="content-left">
                    <h1>Design. Manufacture. Deliver</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

                    </p>
                </div>
                <div className="quote-container-right">
                    <QuoteForm />
                </div>
            </div>
        </>
    );
}

export default HomePage;