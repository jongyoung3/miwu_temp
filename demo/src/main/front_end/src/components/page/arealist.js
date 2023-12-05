import React from 'react';
import { Link } from 'react-router-dom';



const arealist = () => {
    return (
        <div className="spotlist">
           
           <div className="area-header"> 
           <p>어디로 여행을 떠나고 싶으신가요?</p>
           </div>
           

       <div className='area-list'>
        <p>#수도권</p>
       </div>
          <div className="slider">
    
  
        <div className='capital-area'>
        <Link to="/seoul" className="area-item">
            <img src={process.env.PUBLIC_URL + '/img/seoul.jpg'} />
           <span>서울</span>
           </Link>
           </div>
    

           <div className='capital-area'>
           <Link to="/gyeonggi-do" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/gyeonggi.jpg'} />
           <span>경기</span>
           </Link>
           </div>
           
           <div className='capital-area'>
           <Link to="/incheon" className="area-item">
           <img src={process.env.PUBLIC_URL + '/img/incheon.jpg'} />
           <span>인천</span>
           </Link>
           </div>
  
          </div>
          

           <div className='area-list'>
        <p>#충청권</p>
       </div>
       <div className="slider">
    
    <div className='chungcheong'>
    <Link to="/daejon" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/daejon.jpg'} />
           <span>대전</span>
           </Link>
    </div>
    <div className='chungcheong'>
    <Link to="/chungnam" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/chungnam.jpg'} />
           <span>충남</span>
           </Link>
    </div>
    <div className='chungcheong'>
     <Link to="/chungbuk" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/chungbuk.jpg'} />
           <span>충북</span>
           </Link>
    </div>
  
    <div className='chungcheong'>
    <Link to="/sejong" className="area-item">
           <img src={process.env.PUBLIC_URL + '/img/sejong.jpg'} />
           <span>세종</span>
           </Link>
           </div>
          </div>
        
          <div className='area-list'>
        <p>#경상권</p>
       </div>
       <div className="slider">
    
    <div className='gyeongsang'>
    <Link to="/busan" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/busan.jpg'} />
           <span>부산</span>
           </Link>
    </div>

    
    <div className='gyeongsang'>
    <Link to="/ulsan" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/ulsan.jpg'} />
           <span>울산</span>
           </Link>
           </div>
           
           <div className='gyeongsang '>
           <Link to="/daegu" className="area-item">
           <img src={process.env.PUBLIC_URL + '/img/daegu.jpg'} />
           <span>대구</span>
           </Link>
           </div>
        
           <div className='gyeongsang '>
           <Link to="/gyeongnam" className="area-item">
           <img src={process.env.PUBLIC_URL + '/img/gyeongnam.jpg'} />
           <span>경남</span>
           </Link>
           </div>

           <div className='gyeongsang'>
           <Link to="/gyeongbuk" className="area-item">
           <img src={process.env.PUBLIC_URL + '/img/gyeongbuk.jpg'} />
           <span>경북</span>
           </Link>
           </div>
          
          </div>
          <div className='area-list'>
        <p>#호남권</p>
       </div>
       <div className="slider">
    
    <div className='honam'>
    <Link to="/gwangju" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/gwangju.jpg'} />
           <span>광주</span>
           </Link>
    </div>
    <div className='honam'>
    <Link to="/jeonnam" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/jeonnam.jpg'} />
           <span>전남</span>
           </Link>
    </div>
    <div className='honam'>
    <Link to="/jeonbuk" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/jeonbuk.jpg'} />
           <span>전북</span>
           </Link>
    </div>
    </div>

    <div className='area-list'>
        <p>#강원권</p>
       </div>
       <div className="slider">
    
    <div className='gangwon'>
    <Link to="/gangwon" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/gangwon.jpg'} />
           <span>강원</span>
           </Link>
    </div>
    </div>
    <div className='area-list'>
        <p>#제주</p>
       </div>
       <div className="slider">
    
    <div className='jeju'>
    <Link to="/jeju" className="area-item">
    <img src={process.env.PUBLIC_URL + '/img/jeju.jpg'} />
           <span>제주</span>
           </Link>
    </div>
    </div>
           </div>
         
            
    );
}

export default arealist;

