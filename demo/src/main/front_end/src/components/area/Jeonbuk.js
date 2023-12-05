import React from 'react';
import ImgTest from '../imgTest/ImgTest';

import Jeonbukdes from './Jeonbuk/Jeonbukdes';
import Jeonbukres from './Jeonbuk/Jeonbukres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Jeonbuk = () => {
    return (
        <div>
        <Areabtn />
           <Jeonbukdes/>
           <Jeonbukres/>

           
        </div>
    );
}

export default Jeonbuk;