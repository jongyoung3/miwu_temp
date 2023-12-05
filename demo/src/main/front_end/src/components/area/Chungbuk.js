
import React from 'react';
import Chungbukdes from './Chungbuk/Chungbukdes';
import Chungbukres from './Chungbuk/Chungbukres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Chungbuk = () => {
    return (
        <div>
        <Areabtn />
           <Chungbukdes/>
           <Chungbukres/>

           
        </div>
    );
}

export default Chungbuk;