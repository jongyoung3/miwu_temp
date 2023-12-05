import React from 'react';
import Gyeongnamdes from './Gyeongnam/Gyeongnamdes';
import Gyeongnamres from './Gyeongnam/Gyeongnamres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Gyeonggi = () => {
    return (
        <div>
         <Areabtn />
           <Gyeongnamdes />
           <Gyeongnamres />

           
        </div>
    );
}

export default Gyeonggi;