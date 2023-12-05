
import React from 'react';
import ImgTest from '../imgTest/ImgTest';
import { Link } from 'react-router-dom';

import Seouldes from './Seoul/Seouldes';
import Seoulres from './Seoul/Seoulres';
import Areabtn from './Areabtn/areabtn';
const Seoul = () => {
    return (
        <div>
           <Areabtn />
           <Seouldes />
           <Seoulres />
           
           
        </div>
    );
}

export default Seoul;