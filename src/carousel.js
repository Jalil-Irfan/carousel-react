import React, { useState, useEffect } from 'react';
import './carousel.css';

function Carousel({ images = [], width = '600px', height = '100vh', auto = true, duration = 5000 }) {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let intervalId;
    if (auto) {
      intervalId = setInterval(() => {
        console.log('images length is ', images.length);
        setCurrentSlide((Number(currentSlide) + 1) % images.length);
      }, duration);
    }
    return () => clearInterval(intervalId);
  }, [currentSlide, auto, duration, images.length]);

  const handlePrevClick = () => {
    setCurrentSlide(((Number(currentSlide) - 1) + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((Number(currentSlide) + 1) % images.length);
  };

  if (images.length === 0) {
    return <div className="default-div">No images to display</div>;
  }
  
  return (
    
    <div className="carousel-wrapper" style={{ width: `${width}`, height: `${height}`, margin: '0 auto' }}>
      <div className="carousel">
        {images?.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === Number(currentSlide) ? 'active' : ''}`}>
              {/* style={{ backgroundImage: `url('${image}')` }} */}
              <img src={image} alt="carousel" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px', borderRadius: '3px', color: 'white', fontSize: '45px'}}>
                <span>{/* for text -->*/}</span>
              </p>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button className="carousel-nav__button--prev carousel-nav__button" disabled={Number(currentSlide) === 0} onClick={handlePrevClick}>
          &lt;
        </button>
      
        <button className="carousel-nav__button--next carousel-nav__button" disabled={Number(currentSlide) === (images.length-1)} onClick={handleNextClick}>
          &gt;
        </button>
      
      </div>
      <div className="carousel-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`carousel-indicator ${index === Number(currentSlide) ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
    </div>
  );
}

export default Carousel;