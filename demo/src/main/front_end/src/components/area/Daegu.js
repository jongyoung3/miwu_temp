
import React from 'react';
import Daegudes from './Daegu/Daegudes';
import Daegures from './Daegu/Daegures';
import { Link } from 'react-router-dom';
import Areabtn from './Areabtn/areabtn';
const Daegu = () => {
    return (
        <div>
        <Areabtn />
           <Daegudes />
           <Daegures />

           
        </div>
    );
}

export default Daegu;