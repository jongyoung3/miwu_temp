
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardSlide from './CardSlide';


const SpotList = (props) => {
    const [loading, setLoading] = useState(false); // loading 상태 변수
    const [spotData, setSpotData] = useState([]); // 여행지 정보 리스트 상태 변수
    
    useEffect(() => {
        setLoading(true);
        axios.get('/destination')
        .then(response => {
            setSpotData(response.data);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
        });
    }
    , []);
    console.log()
    return (
        <div className="spot-list"> 
            <h2 className="theme-name">{props.themeName}</h2>
            {(loading === true) ? <p>로딩중</p> : null}
            {
                (loading === false && spotData.length !== 0) ?
                <CardSlide cardData={spotData} />
                : null
            }

        </div>
    );    
};

export default SpotList; 