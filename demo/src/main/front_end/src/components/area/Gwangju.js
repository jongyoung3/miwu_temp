
import React from 'react';
import Gwangjures from './Gwangju/Gwangjures';
import Gwangjudes from './Gwangju/Gwangjudes';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Daejon = () => {
    return (
        <div>
         <Areabtn />
           <Gwangjudes />
           <Gwangjures />

           
        </div>
    );
}

export default Daejon;