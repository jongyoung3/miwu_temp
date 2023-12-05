import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa" ;

import "./InfoInput.scss"

const InfoInput = (props) => {    
    const [hide, setHide] = useState(false); // 숨김 상태
    
    useEffect(() => {
        if (props.name === "password")
        setHide(!hide);
    }, [props.name]);

    const toggleHide = (boolean) => { // 비밀번호 숨김 버튼 토글
        setHide(boolean);
    }

    return (
        <div key={props.id} className="info-input">
            {/* 입력해야 되는 종류와, 입력 조건 만족하였는지 안내 */}
            <div className="lab">
                <label>{props.label}</label>
                {
                    (props.name === "user_id") ?
                    <div className="notice">
                    {
                        !props.checkedIdDuplicated ?
                        <div>
                        {
                            props.validity ?
                            <p className="valid">* 입력 조건을 만족합니다</p> :
                            <p className="invalid">* 입력 조건을 만족하지 않습니다</p>
                        }                                    
                        </div> :
                        <div>
                        {
                            (!props.isIdDuplicated) ?
                            <p className="valid">* 사용가능한 아이디입니다</p> :
                            <p className="invalid">* 이미 존재하는 아이디입니다</p>
                        }
                        </div>
                    }
                    </div> :
                    <div className="validity">
                    {
                        props.validity ?
                        <p className="valid">* 입력 조건을 만족합니다</p> :
                        <p className="invalid">* 입력 조건을 만족하지 않습니다</p>
                    }
                    </div>
                }
            </div>
            <div className="input-div">
                {/* 입력받는 곳 */}
                <input      
                    type={!hide ? "text" : "password"} 
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange= {(event) => props.handler(event)}
                />
                {/* 아이디를 입력받는 곳이면, 중복 체크 버튼 생성 */}
                {/* 중복체크 기능 연결 예정 */}
                {
                    (props.name == "user_id") ? (
                        <button id="check-repetition" className="btn btn-primary" onClick={() => props.checkDuplicate()}>중복확인</button> 
                    ) : (<></>)
                }

                {/* 비밀번호를 입력받는 곳이면, 비밀번호 숨김 버튼 생성 */}
                {/* hidePw 상태값에 따라 버튼 모양(눈)이 감겼다 떠짐 */}
                {/* 숨김 기능 연결 예정 */}
                {
                    (props.name == "password") ? 
                        <div className="hide-eye" onClick={() => toggleHide(!hide)}> 
                            {
                                (hide) ? <FaEyeSlash size="24" color="#212121"/> 
                                : <FaEye size="24" color="#212121"/>
                            } 
                        </div>
                        
                    : <></>
                }
            </div>
            {/* 입력 조건 안내 */}
            <p className="condition">{props.condition}</p> 
        </div>
    );
}

export default InfoInput;