
import React from 'react';
import Busandes from './Busan/Busandes';
import Busanres from './Busan/Busanres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';

const Busan = () => {
    return (
        <div>
         <Areabtn />
           <Busandes/>
           <Busanres/>

           
        </div>
    );
}

export default Busan;