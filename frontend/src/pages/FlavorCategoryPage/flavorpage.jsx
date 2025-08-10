import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFlavorsByCategory } from "../../utils/flavors";
import QuoteForm from '../../components/QuoteForm/quote';


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
                <h1>{flavors[0].category}</h1>
                {flavors.map(f => (
                    <div key={f.id}>
                        <p>{f.flavor}</p>
                    </div>
                ))}
                <Link to="/flavors">Back to Categories</Link>
            </div>
            <div className="quote-container-right">
                <QuoteForm />
            </div>
        </div>
    );
}

export default FlavorCategoryPage;