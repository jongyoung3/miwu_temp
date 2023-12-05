import React from 'react';
import Sejongdes from './Sejong/Sejongdes';
import Sejongres from './Sejong/Sejongres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Incheon = () => {
    return (
        <div>
         <Areabtn />
           <Sejongdes />
           <Sejongres />

           
        </div>
    );
}

export default Incheon;