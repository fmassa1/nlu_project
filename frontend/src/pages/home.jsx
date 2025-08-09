import '../css/home.css';
import QuoteForm from '../components/quote';

function HomePage() {
    return (
        <div className="main-content-wrapper" style={{ display: 'flex', gap: '2rem' }}>
            <div className="content-left">
                <h1>HomePage</h1>
            </div>
            <div className="quote-container-right">
                <QuoteForm />
            </div>
        </div>
    );
}

export default HomePage;