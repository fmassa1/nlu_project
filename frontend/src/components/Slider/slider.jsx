import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./slider.css"

function Slider() {
    
    const navigate = useNavigate();

    const [isSliding, setIsSliding] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const slides = [
        {
            image: '/slider/adult-degree-hero2.jpg',
            link: '/design',
            label: 'Design'
        },
        {
            image: '/slider/homepage-hero-resized.jpg',
            link: '/production',
            label: 'Production'
        },
        {
            image: '/slider/NLU-Application-Photos-02.jpg',
            link: '/certification',
            label: 'Certification'

        }
    ];


    const nextSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        if (isSliding) {
            const timer = setTimeout(() => {
                setIsSliding(false);
            }, 500); 
            return () => clearTimeout(timer);
        }
    }, [isSliding]);

    const handleSlideClick = (index) => {
        navigate(slides[index].link);
    };
    
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };


    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;
        const swipeDistance = touchStartX - touchEndX;

        if (swipeDistance > 50) {
            nextSlide(); 
        } else if (swipeDistance < -50) {
            prevSlide(); 
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <div 
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div 
                className='slider-track'
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 0.8s ease-in-out'
                  }}
            >
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt={slide.label}
                        className="slider-image"
                        onClick={() => handleSlideClick(index)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
            </div>
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