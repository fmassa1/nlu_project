import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import QuoteForm from '../../components/QuoteForm/quote';
import { getCategories } from "../../utils/flavors";
import './flavors.css';

function Flavors() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);


    return (
        <div className="main-content-wrapper" style={{ display: 'flex', gap: '2rem' }}>
            <div className="content-left">
                <h1>Flavor Categories</h1>
                <div className="flavor-grid">
                    {categories.map(category => (
                        <div className='flavor-card' key={category.slug}>
                            <img src={`https://placehold.co/400`} alt={category.name} />
                            <h2>{category.name}</h2>
                            <button>
                                <Link to={`/flavors/${category.slug}`}>View Flavors</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="quote-container-right">
                <QuoteForm />
            </div>
        </div>

      );
}

export default Flavors;