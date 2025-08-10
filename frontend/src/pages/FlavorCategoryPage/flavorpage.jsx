import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFlavorsByCategory } from "../../utils/flavors";
import QuoteForm from '../../components/QuoteForm/quote';

import './flavorpage.css';


function FlavorCategoryPage() {
    const { categorySlug } = useParams();
    const [flavors, setFlavors] = useState([]);

    useEffect(() => {
        getFlavorsByCategory(categorySlug).then(setFlavors);
    }, [categorySlug]);

    if (flavors.length === 0) {
        return <p>No flavors found</p>;
    }

    return (
        <div className="main-content-wrapper" style={{ display: 'flex', gap: '2rem' }}>
            <div className="content-left">
                <Link to="/flavors" className="back-arrow-button">
                    <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>←</span>
                    Back to Categories
                </Link>
                <h1>{flavors[0].category}</h1>
                <div className="flavor-list">
                    {flavors.map(f => (
                        <div key={f.id} className="flavor-item">
                            <p className="flavor-name">{f.flavor}</p>
                        </div>
                    ))}
                </div>
                <button>
                    <Link to="/flavors">Back to Categories</Link>
                </button>
            </div>
            <div className="quote-container-right">
                <QuoteForm />
            </div>
        </div>
    );
}

export default FlavorCategoryPage;