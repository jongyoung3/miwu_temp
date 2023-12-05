
import React from 'react';
import Daejonres from './Daejon/Daejonres'
import Daejondes from './Daejon/Daejondes';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Daejon = () => {
    return (
        <div>
         <Areabtn />
           <Daejondes />
           <Daejonres />

           
        </div>
    );
}

export default Daejon;