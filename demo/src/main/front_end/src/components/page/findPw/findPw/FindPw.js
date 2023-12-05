import React, { useState, useEffect } from 'react';
import "./FindPw.scss";
import HintSelect from '../hintSelect/HintSelect';
import axios from 'axios';

const FindPw = () => {
    const [id, setId] = useState("");
    const [queryId, setQueryId] = useState(1);
    const [answer, setAnswer] = useState("");
    const [pw, setPw] = useState("");

    const [foundPw, setFoundPw] = useState(false);
    const [loading, setLoading] = useState(false);

    const updateId = (event) => {    
        setId(event.currentTarget.value);
        if (foundPw == true) {
            setFoundPw(false);
        }
    } // 아이디 값이 변경되면, 상태값도 업데이트함

    const updateQueryId = (event) => {
        setQueryId(event.currentTarget.value);
        if (foundPw == true) {
            setFoundPw(false);
        }
    } // 힌트 질문 선택값이 변경되면, 상태값도 업데이트함

    const updateAnswer = (event) => {
        setAnswer(event.currentTarget.value);
        if (foundPw == true) {
            setFoundPw(false);
        }
    } // 힌트 대답 값이 변경되면, 상태값도 업데이트함

    class Query {
        constructor(id, q) {
            this.id = id; // 아이디
            this.q = q;
        }
    }

    const queryData = [
        new Query(1, "내가 좋아하는 여행지는?"),
        new Query(2, "내 고향은?"),
        new Query(3, "테스트 질문"),
    ];

    const queryList = queryData.map((query) => (
        <option key={query.id} value={query.id}>
            {query.q}
        </option>
    ));

    const onSubmit = (event) => { // 회원가입 버튼 눌렀을 때 실행되는 함수
        event.preventDefault();
        if (!foundPw) {
            setFoundPw(true);
        }
        setLoading(true);
        axios.post('/api/find_pw', 
            {
                userId: id,
                queryId: queryId,
                answer: answer,
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then((response) => {
            setLoading(false);
            setPw(response.data);
            
        })
        .catch((error) => { // 실패했을 경우 에러 출력
            console.log(error);
        })
    }

    return (
        <div id="find-pw">
            <h1>비밀번호 찾기</h1>
            <div className="input-div">
                <label>아이디</label>
                <input 
                    type="text" 
                    name="id" 
                    value={id}
                    placeholder="아이디" 
                    onChange={updateId}
                />
            </div>
            <HintSelect 
                options={queryList} 
                queryId={queryId}
                queryIdHandler={updateQueryId}
                answerHandler={updateAnswer} 
            />
            {
                (!foundPw) ? 
                <></> :
                <>
                {
                    (loading) ?
                    <div className="pw-info">
                        <p></p>
                    </div> :
                    <>
                    {  
                        (pw !== "") ?
                        <div className="pw-info">
                            <p>비밀번호는 {pw}입니다</p>
                        </div> : 
                        <div className="pw-info">
                            <p>존재하지 않는 아이디거나 비밀번호 힌트를 잘못 입력하였습니다.</p>
                        </div>
                    }
                    </>    
                } 
                </>
            }
            <button onClick={onSubmit} className="btn btn-outline-primary">비밀번호 찾기</button>
        </div>
    );
}
export default FindPw;