import React, { useState } from 'react';
import './quote.css';

function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        capability: '',
        comments: '',
        newsletter: false
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingSubmissions = JSON.parse(localStorage.getItem('quoteSubmissions')) || [];
        existingSubmissions.push(formData);
        localStorage.setItem('quoteSubmissions', JSON.stringify(existingSubmissions));

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className='quote-form-container'>
                <h2 className='form-title'>Get a Quote</h2>
                <p className='confirmation-message'>Your quote request has been submitted!</p>
            </div>
        );
    }

    return (
        <div className='quote-form-container'>
            <h2 className='form-title'>Get a Quote</h2>
            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} required />

                <label>Capability:</label>
                <select name='capability' value={formData.capability} onChange={handleChange} required>
                    <option value=''>-- Select a capability --</option>
                    <option value='Design'>Design</option>
                    <option value='Marketing'>Marketing</option>
                    <option value='Consulting'>Consulting</option>
                </select>

                <label>Comments:</label>
                <textarea name='comments' value={formData.comments} onChange={handleChange} ></textarea>

                <label className='checkbox-label'>
                    <input type='checkbox' name='newsletter' checked={formData.newsletter} onChange={handleChange} />
                    I'd like to receive the newsletter
                </label>

                <button type='submit' className='submit-btn'>Submit Quote</button>
            </form>
        </div>
    );
}

export default QuoteForm;
