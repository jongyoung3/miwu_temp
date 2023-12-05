
import React from 'react';
import Ulsandes from './Ulsan/Ulsandes';
import Ulsanres from './Ulsan/Ulsanres';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Seoul = () => {
    return (
        <div>
         <Areabtn />
           <Ulsandes />
           <Ulsanres />

           
        </div>
    );
}

export default Seoul;