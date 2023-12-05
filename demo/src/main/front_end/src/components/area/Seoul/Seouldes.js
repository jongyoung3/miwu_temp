import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Seouldes = () => {
  const [topDestinations, setTopDestinations] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, currentSlide]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/img/top10/서울특별시');
      setTopDestinations(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < 2) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentImageIndex(0);
      nextSlide();
    }
  };

  const nextSlide = () => {
    if (currentSlide < topDestinations.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <div className="area-top10">
      <h2>지역별 관광지 Top 10</h2>
 
    <div className="destination-list">
   
      {topDestinations.map((destination, index) => (
        <div key={index} className={`destination_card ${index === currentSlide ? 'active' : ''}`}>
          <div className="card-content">
            <div className="image-container">
              <img src={destination[`url${currentImageIndex + 1}`]} alt={destination.roadAdress} />
            </div>
            <div className="details">
              <p className="name"> {destination.destName}</p>
              <p className="tag">{destination.tag}</p>
            </div>
          </div>
      
        </div>
      ))}
    </div>
    </div>
  );
};

export default Seouldes;
