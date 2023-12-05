import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("hello");
    try {
      const response = await axios.get('/api/restaurant/부산광역시');
      console.log(response);
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const restaurantData = restaurants.map((restaurant, index) => (
    <div key={index}>
      <p>Name: {restaurant.name}</p>
      <p>Address: {restaurant.adress_last}</p>
      <p>Category: {restaurant.category}</p>
      <p>Image URL: {restaurant.imgUrl}</p>
      <hr />
    </div>
  ))

  return (
    <div className="restaurant">
      {restaurantData}
    </div>
  );
};

export default RestaurantList;