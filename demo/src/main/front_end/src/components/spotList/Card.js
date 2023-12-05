import React, { useEffect, useState } from 'react';

const Card = (props) => {
    return (
        <div className="card"> 
            <p className="name">{props.name}</p>
            <p className="description">{props.description}</p>
        </div>
    );    
};

export default Card;