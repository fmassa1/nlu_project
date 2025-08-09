import './home.css';
import QuoteForm from '../../components/QuoteForm/quote';
import Slider from '../../components/Slider/slider';


function HomePage() {
    return (
        <>
            <Slider />
            <div className="main-content-wrapper" style={{ display: 'flex', gap: '2rem' }}>
                <div className="content-left">
                    <h1>HomePage</h1>
                </div>
                <div className="quote-container-right">
                    <QuoteForm />
                </div>
            </div>
        </>
    );
}

export default HomePage;