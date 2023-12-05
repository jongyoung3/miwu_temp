import React from 'react';
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import "./Header.scss";
import { useNavigate } from 'react-router-dom';

function Header({loggedIn, logout, id}) {
    const navigate = useNavigate();

    return (
        <div className="header"> 
            <div className="logo">
                <Link to="/">
                    <h1 id="logo">미우</h1>    
                </Link>
            </div>
            <div className="top-navigation">
                <div className="nav-item">
                    <Link to="/">
                    <p>홈</p>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/seoul">
                        <p>상세</p>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={loggedIn ? "/mypage" : "/login"}>
                        <p>마이페이지</p>
                    </Link>
                </div>
            </div>
            {
                loggedIn ? 
                <div className="header-right">
                    <FaUser className="user-icon"/>
                    <p id="user-id">{id}</p>
                    <p
                        id="logout" 
                        onClick={() => {
                            logout();
                            navigate("/");
                        }
                    }>
                        로그아웃
                    </p>
                </div> : 
                <div className="header-right">
                    <FaUser className="user-icon" />
                    <Link to="login">
                        <p>로그인</p>
                    </Link>
                    <Link to="register">
                        <p>회원가입</p>
                    </Link>
                </div>
            }
        </div>
    );
};

export default Header;