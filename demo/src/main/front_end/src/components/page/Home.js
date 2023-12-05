import React from 'react';
import ImgTest from '../imgTest/ImgTest';
import SpotList2 from '../spotList/SpotList2';
import Arealist from '../page/arealist';
import RestaurantList from './detail/RestaurantList';
import Search from '../search/Search1';
import Recommend from '../search/Recommend';
const Home = () => {
    return (
        <div>
         
            <ImgTest />
           
             <Search />
             <Recommend />
            <Arealist />
           
        </div>
    );
}

export default Home;