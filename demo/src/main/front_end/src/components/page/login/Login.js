import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

import axios from 'axios';

import "./Login.scss";
const Login = ({login}) => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [warning, setWarning] = useState("");

    const [idValidity, setIdValidity] = useState(false);
    const [pwValidity, setPwValidity] = useState(false);

    const navigate = useNavigate();

    const updateId = (event) => {    
        setId(event.currentTarget.value);
        setIdValidity(checkIdValidity(id));
        // console.log("updateId: " + idValidity);
    } // 아이디 값이 변경되면, 상태값도 업데이트함

    const updatePw = (event) => {
        setPw(event.currentTarget.value);
        setPwValidity(checkPwValidity(pw));
        // console.log("updatePw: " + pwValidity);
    } // 비밀번호 값이 변경되면, 상태값도 업데이트함

    const checkIdValidity = (id) => { // 아이디 유효성 검사
        return /[a-zA-Z0-9]{6,10}$/.test(id);
    }

    const checkPwValidity = (pw) => { // 비밀번호 유효성 검사
        return /[a-zA-Z0-9`~!@#$%^&*()-_=+]{6,20}$/.test(pw);
    }

    const onSubmit = (event)  => {
        event.preventDefault(); 
        axios.post('/api/login', 
            {
                user_id: id,
                password: pw,
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then((response) => {
            if (response.data == true) {
                console.log(response);
                login(id);
                navigate("/");
            } else {
                setWarning("가입되어 있지 않은 아이디이거나, 잘못된 비밀번호입니다.");    
            }
        })
        .catch((error) => { // 실패했을 경우 에러 출력
            console.log(error);
        })       
    }
    
    return (
        <div id="login">
            <h1>로그인</h1>
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
            <div className="input-div">
                <label>비밀번호</label>
                <input 
                    type="password" 
                    name="pw" 
                    value={pw}
                    placeholder="비밀번호" 
                    onChange={updatePw}
                />
            </div>
            {(warning === "") ?  <></>: <p id="warning">{warning}</p>}
            <button onClick={onSubmit} id="signin" className="btn btn-primary">로그인</button>
            
            <div className="extra">
                <Link to="/find_id">
                    <p>아이디 찾기</p>
                </Link>
                <Link to="/find_pw">
                    <p>비밀번호 찾기</p>
                </Link>
                <Link to="/register">
                    <p>회원가입</p>
                </Link>
            </div>
        </div>
    );
}
export default Login;