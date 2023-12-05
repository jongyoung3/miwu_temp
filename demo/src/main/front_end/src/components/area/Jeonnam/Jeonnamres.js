import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jeonnamres = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [visibleRestaurants, setVisibleRestaurants] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/restaurant/전라남도');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const loadMore = () => {
    setVisibleRestaurants((prevVisible) => prevVisible + 10);
  };

  const restaurantData = restaurants.slice(0, visibleRestaurants).map((restaurant, index) => (
    <div key={index} className="card">
      <div className="restaurant-card-content">
        <div className="restaurant-image-container">
          <img src={restaurant.r_imgUrl} alt={restaurant.restName} />
        </div>
        <div className="restaurant-details">
        <p className="name">{restaurant.restName}</p>
          <p className="address">{restaurant.restAdress}</p>
          <p className="category">{restaurant.restCategory}</p>
        </div>
      </div>
      <hr />
    </div>
  ));

  return (
     <div className="restaurant-list-header">
  <h2>지역별 맛집 정보</h2>
      <div className="restaurant-list">
        {restaurantData}
        <div className="load-more-container">
          {restaurants.length > visibleRestaurants && (
            <button className="load-more-button" onClick={loadMore}>
              더보기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jeonnamres;
