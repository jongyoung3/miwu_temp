import React from 'react';
import ImgTest from '../imgTest/ImgTest';

import { Link } from 'react-router-dom';
import Incheondes from './Incheon/Incheondes';
import Incheonres from './Incheon/Incheonres';
import Areabtn from './Areabtn/areabtn';
const Incheon = () => {
    return (
        <div>
         <Areabtn />
           <Incheondes />
           <Incheonres />

           
        </div>
    );
}

export default Incheon;