import React, { useEffect, useState } from 'react';

import "./HintSelect.scss"

const HintSelect = (props) => {       

    return (
        <div className="hint-select">
            {/* 입력해야 되는 종류와, 입력 조건 만족하였는지 안내 */}
            <div className="lab">
                <label>비밀번호 찾기 힌트</label>
                {
                    props.validity ? 
                    <p className="valid">* 만족합니다</p> :
                    <p className="invalid">* 조건을 만족하지 않습니다</p> 
                }
            </div>
            <div className="query">
                <label>질문</label>
                <select name="hint" className="hint" onChange={(event) => props.queryIdHandler(event)} value={props.queryId}>
                    {props.options}
                </select>
            </div>
            <div className="answer">
                <label>답변</label>
                <input      
                    type="text"
                    name="answer"
                    placeholder="답변을 입력해주세요"
                    onChange={(event) => props.answerHandler(event)}
                />
            </div>
        </div>
    );
}

export default HintSelect;