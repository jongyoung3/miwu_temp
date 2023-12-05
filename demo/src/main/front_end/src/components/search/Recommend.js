import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommend = () => {
  const [topDestinations, setTopDestinations] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, currentSlide]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/img/categorytop3');
      setTopDestinations(response.data);

      // 카테고리 정보 추출
      const categories = response.data.map((destination) => destination.category);
      setCategories(categories.filter((value, index, self) => self.indexOf(value) === index));
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
    if (currentSlide < topDestinations.length / 3 - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <div className="recommend-top3">
      <h2>카테고리별 추천 관광지</h2>
      {categories.map((category, categoryIndex) => (
        
        <div key={categoryIndex}>
        <p className="recommend-name">
                     {topDestinations[currentSlide * 3 ].mcategory}
                        </p>
          <div className="recommend-list">
            {topDestinations.length > 0 && (
              <>
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`recommend_card ${index === currentSlide ? 'active' : ''}`}
                  >
                    <div className="recommend-card-content">
                      <div className="recommend-image-container">
                        <img
                          src={topDestinations[currentSlide * 3 + index][`url${currentImageIndex + 1}`]}
                          alt={topDestinations[currentSlide * 3 + index].roadAdress}
                        />
                      </div>
                      <div className="recommend-details">
                        <p className="recommend-name">
                         {topDestinations[currentSlide * 3 + index].destName}
                        </p>
                     
        
                      
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommend;