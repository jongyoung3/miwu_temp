
import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardSlide = (props) => {
    return (
        <div className="card-slide">
            <ul>
                {props.cardData.map((card, index) => {
                    return <li key={index}><Card name={card.name} description={card.description}/></li>
                })}
            </ul>
        </div>
    );    
};

export default CardSlide; 