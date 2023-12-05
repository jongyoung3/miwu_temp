
import React from 'react';
import Chungnamres from './Chungnam/Chungnamres';
import Chungnamdes from './Chungnam/Chungnamdes';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Chungnam = () => {
    return (
        <div>
      <Areabtn />
           <Chungnamdes/>
           <Chungnamres/>

           
        </div>
    );
}

export default Chungnam;