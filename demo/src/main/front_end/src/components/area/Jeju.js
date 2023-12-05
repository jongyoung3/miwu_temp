import React from 'react';
import Jejudes from './Jeju/Jejudes';
import Jejures from './Jeju/Jejures';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Jeju = () => {
    return (
        <div>
         < Areabtn/>
           <Jejudes />
           <Jejures />

           
        </div>
    );
}

export default Jeju;