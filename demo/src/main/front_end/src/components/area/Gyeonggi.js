import React from 'react';
import ImgTest from '../imgTest/ImgTest';

import { Link } from 'react-router-dom';
import Gyeonggides from './Gyeonggi/Gyeonggides';
import Gyeonggires from './Gyeonggi/Gyeonggires';
import Areabtn from './Areabtn/areabtn';
const Gyeonggi = () => {
    return (
        <div>
         <Areabtn />
           <Gyeonggides />
           <Gyeonggires />

           
        </div>
    );
}

export default Gyeonggi;