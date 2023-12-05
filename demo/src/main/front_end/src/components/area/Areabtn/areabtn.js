import React from 'react';
import { Link } from 'react-router-dom';
const Areabtn = () => {
    return (
        <div>
         <div className="centered-page">
       <div className="region-buttons">
        <Link to="/gangwon"><button>강원</button></Link>
        <Link to="/gyeonggi-do"><button>경기</button></Link>
        <Link to="/gyeongnam"><button>경남</button></Link>
        <Link to="/gyeongbuk"><button>경북</button></Link>
        <Link to="/gwangju"><button>광주</button></Link>
        <Link to="/daegu"><button>대구</button></Link>
        <Link to="/daejon"><button>대전</button></Link>
        <Link to="/busan"><button>부산</button></Link>
        <Link to="/seoul"><button>서울</button></Link>
        <Link to="/sejong"><button>세종</button></Link>
        <Link to="/ulsan"><button>울산</button></Link>
        <Link to="/incheon"><button>인천</button></Link>
        <Link to="/jeonnam"><button>전남</button></Link>
        <Link to="/jeonbuk"><button>전북</button></Link>
        <Link to="/jeju"><button>제주</button></Link>
        <Link to="/chungnam"><button>충남</button></Link>
        <Link to="/chungbuk"><button>충북</button></Link>
      </div>
      </div>
         

           
        </div>
    );
}

export default Areabtn;