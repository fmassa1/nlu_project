import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./slider.css"

function Slider() {
    
    const navigate = useNavigate();

    const slides = [
        '/slider/adult-degree-hero2.jpg',
        '/slider/homepage-hero-resized.jpg',
        '/slider/NLU-Application-Photos-02.jpg',
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(timer);
      }, [slides.length])

      const handleSlideClick = (index) => {
        navigate(slides[index].link);
      };
    
      const handleDotClick = (index) => {
        setCurrentIndex(index);
      };

    return (
        <div className="slider">
            <img src={slides[currentIndex]} 
            alt={'Slide ${currentIndex + 1}'} 
            className="slider-image" 
            onClick={() =>handleSlideClick(currentIndex)}
            style={{ cursor: 'pointer' }}
            />
            <div className='dots-container'>
                {slides.map((_, index) => (
                    <span 
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
        
    );
}

export default Slider;