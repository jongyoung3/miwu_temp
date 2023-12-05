
import React from 'react';
import Gangwondes from './Gangwon/Gangwondes';
import Gangwonres from './Gangwon/Gangwonres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Gangwon = () => {
    return (
        <div>
      
      <Areabtn />
           <Gangwondes />
           <Gangwonres />

           
        </div>
    );
}

export default Gangwon;