import React, { useEffect, useState } from 'react';

const ImgTest = (props) => {
    const url = "https://i.namu.wiki/i/vzQIsovYmymvt84FWS9hhAS3Qva_O31fczg3ErMrSQrSgnJ9h3oQDf3kVo5M6aD1Q05-etvQRlqc3dnurUczXw.webp";
    return (
        <div className="ImgTest"> 
           <div className='main-banner' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/banner.png'})`}}>

          <div className="main-banner-title">
          <span>가득 내려앉은 함박눈이 아름다운</span>
      
          <span>설산 힐링 여행</span>
      
          
     
          </div>
        </div>
        </div>
    );    
};

export default ImgTest;



