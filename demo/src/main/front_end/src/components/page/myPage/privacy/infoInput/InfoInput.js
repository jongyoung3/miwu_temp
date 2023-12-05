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
                {
                    props.isDisabled ? 
                    <input      
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange= {(event) => props.handler(event)}
                    disabled
                    /> : 
                    <input      
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange= {(event) => props.handler(event)}
                    />
                }
                {/* 비밀번호를 입력받는 곳이면, 비밀번호 숨김 버튼 생성 */}
                {/* hidePw 상태값에 따라 버튼 모양(눈)이 감겼다 떠짐 */}
                {/* 숨김 기능 연결 예정 */}
                {
                    (props.name == "password") ? 
                        <div>
                        <button id="change" className="btn btn-primary" onClick={() => props.change()}>변경하기</button> 
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