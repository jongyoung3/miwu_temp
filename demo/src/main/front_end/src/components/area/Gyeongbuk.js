import React from 'react';
import Gyeongbukdes from './Gyeongbuk/Gyeongbukdes';
import Gyeongbukres from './Gyeongbuk/Gyeongbukres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Gyeonggi = () => {
    return (
        <div>
         <Areabtn />
           <Gyeongbukdes />
           <Gyeongbukres />

           
        </div>
    );
}

export default Gyeonggi;