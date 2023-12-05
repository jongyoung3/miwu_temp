import React, { useState, useEffect } from 'react';
import "./FindId.scss";

import axios from 'axios';

const FindId = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [nameValidity, setNameValidity] = useState(false);

    const [foundId, setFoundId] = useState(false);
    const [loading, setLoading] = useState(false);
    const [idData, setIdData] = useState([]);
    const [idList, setIdList] = useState([]);

    const updateName = (event) => {
        setName(event.currentTarget.value);
        setFoundId(false);
        setIdData([]);
    } // 이름 값이 변경되면, 상태값도 업데이트함
    
    const onSubmit = (event) => { // 회원가입 버튼 눌렀을 때 실행되는 함수
        event.preventDefault();
        if (!foundId) {
            setFoundId(true);
        }
        setLoading(true);
        axios.post('/api/find_id', 
            {
                user_name: name
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then((response) => {
            setLoading(false);
            setUserName(name);
            setIdData(response.data);
        })
        .catch((error) => { // 실패했을 경우 에러 출력
            console.log(error);
        })
    }
    useEffect(() => {
        const updatedIdList = idData.map((id, index) => (
            <li key={index}>{id}</li>
        ));
        setIdList(updatedIdList);
    }, [idData]);
    

    return (
        <div id="find-id">
            <h1>아이디 찾기</h1>
            <div className="input-div">
                <label>이름</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    placeholder="사용자님의 이름을 입력해주세요" 
                    onChange={updateName}
                />
            </div>
            {
                (!foundId) ? 
                <></> :
                <>
                {
                    (loading) ?
                    <div className="id-info">
                        <p></p>
                    </div> :
                    <>
                    {  
                        (idData.length !== 0) ?
                        <div className="id-info">
                            <p id="id-num">가입된 아이디가 <span>{idData.length}개</span> 있습니다</p>
                            <ul>
                                {idList}
                            </ul>
                        </div> : 
                        <div className="id-info">
                            <p>가입된 아이디가 없습니다.</p>
                        </div>
                    }
                    </>    
                } 
                </>
            }
            <button onClick={onSubmit} className="btn btn-outline-primary">아이디 찾기</button>
        </div>
    );
}
export default FindId;