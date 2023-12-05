import React from 'react';
import ImgTest from '../imgTest/ImgTest';
import Jeonnamdes from './Jeonnam/Jeonnamdes';
import Jeonnamres from './Jeonnam/Jeonnamres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Jeonnam = () => {
    return (
        <div>
       <Areabtn />
           <Jeonnamdes/>
           <Jeonnamres/>

           
        </div>
    );
}

export default Jeonnam;