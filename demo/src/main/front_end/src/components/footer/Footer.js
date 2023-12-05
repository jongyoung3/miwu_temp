import React from 'react';

export function Footer() {

    return (
       
        <div className="footer">
            <div className="frame14">
            <div className="divider2" >
            <p className="copyright" >© 오픈소스 개발프로젝트 1조 </p>
            </div>  
             <div className="divider2" >
            <p className="srccode-link" >https://github.com/opensource-develop-project-2023/miwu </p>
            </div>
            </div>
        
        
         <div className='part-and-references'>
            <div className='parts'>
                <div className='part'>
                   <p className='part-name'>풀스텍</p>
                 <div className='member-infos'>
                    <p className='member-name'>소프트웨어학부 2020039044 김창현  </p>
                 </div>
                </div>
                <div className='part'>
                   <p className='part-name'>프론트엔드</p>
                 <div className='member-infos'>
                    <p className='member-name'>지구환경과학과 2020021007 구경선  </p>
                 </div>
                </div>
                <div className='part'>
                   <p className='part-name'>백엔드</p>
                 <div className='member-infos2'>
                    <p className='member-name'>소프트웨어학부 2020039070 전종영    </p>
                    <p className='member-name'>소프트웨어학부 2021041091 윤별    </p>
                 </div>
                 </div>
                 </div>
         
                <div className='references'>
         
      
        <div className='logo-with-label'>
                    <div className='footer-log'> 
            <img src={`${process.env.PUBLIC_URL}/img/logo4.png`} alt="불러오기 실패" />
        <p className='label'>bootstrap</p>
         </div>
        </div>
        <div className='logo-with-label'>
                    <div className='footer-log'> 
            <img src={`${process.env.PUBLIC_URL}/img/mysql.png`} alt="불러오기 실패" />
        <p className='label'>Mysql</p>
         </div>
        </div>
        <div className='logo-with-label'>
                    <div className='footer-log'> 
            <img src={`${process.env.PUBLIC_URL}/img/logo1.png`} alt="불러오기 실패" />
        <p className='label'>한국관광데이터랩</p>
         </div>
        </div>
        </div>


            
        </div>
                
         </div>

               

    );
    
};
export default Footer;