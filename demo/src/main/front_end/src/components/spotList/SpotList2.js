

import { FaSearch,FaHeart,FaShareAlt,FaBookmark} from "react-icons/fa" ;
import CardSlider from "./CardSlider";


function SpotList2() {
  const sliderClick = (slider)=>{
    alert("hello world");
  }

  return (
    <div className="spotlist">
      <div className="spotlist-header">
        <p># 서울</p>
          <div className='btn-list'>
              <FaHeart size="24" color="#FFFFFF"/> 
              <FaShareAlt size="24" color="#FFFFFF" /> 
              <FaBookmark size="24" color="#FFFFFF" /> 
              </div>
          </div>
      <div className="slider">
        <CardSlider />   
      </div>
    </div>
  );
}

export default SpotList2;
