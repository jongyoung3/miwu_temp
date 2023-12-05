import React, { useEffect, useState } from 'react';
import './scss/App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './components/page/Home';

import Login from './components/page/login/Login';
import Register from './components/page/register/register/Register';

import FindId from './components/page/findId/FindId';
import FindPw from './components/page/findPw/findPw/FindPw';

import MyPage from './components/page/myPage/MyPage';
import Local from './components/page/Local';
import Theme from './components/page/Theme';
import Seoul from './components/area/Seoul';
import Gyeonggido from './components/area/Gyeonggi';
import Incheon from './components/area/Incheon';
import Daejon from './components/area/Daejon';
import Chungnam from './components/area/Chungnam';
import Chungbuk from './components/area/Chungbuk';
import Sejong from './components/area/Sejong';
import Busan from './components/area/Busan';
import Ulsan from './components/area/Ulsan';
import Daegu from './components/area/Daegu';
import Gyeongnam from './components/area/Gyeongnam';
import Gyeongbuk from './components/area/Gyeongbuk';
import Gwangju from './components/area/Gwangju';
import Jeonnam from './components/area/Jeonnam';
import Jeonbuk from './components/area/Jeonbuk';
import Gangwon from './components/area/Gangwon';
import Jeju from './components/area/Jeju';

import Search from './components/search/Search1';

function App() {
    const [LoggedIn, setLoggedIn] = useState(false);
    const [UserId, setUserId] = useState("");
    const login = (id) => { 
        setLoggedIn(true);
        setUserId(id);
    }
    
    const logout = () => {
        setLoggedIn(false);
        setUserId(""); 
    }

    return ( 
        <div className="App">

            <BrowserRouter basename="/miwu/">
                <Header loggedIn={LoggedIn} logout={logout} id={UserId} />  
                <Routes>
                    <Route path="/" element={<Home />} />  
                    <Route path= "/login" element={<Login login={login} /> } />
                    <Route path="/register" element={<Register />} />
                    <Route path="find_id" element={<FindId />} />
                    <Route path="find_pw" element={<FindPw />} />
                    <Route path="/mypage/*" element={<MyPage id={UserId} logout={logout}/> } />
                    <Route path="/theme" element={<Theme />} />
                    <Route path="/local" element={<Local />} />
                    <Route path="*" element={<Navigate replace to="/" />} /> 
                    <Route path="/seoul" element={<Seoul />} />
                    <Route path="/gyeonggi-do" element={<Gyeonggido />} />
                    <Route path="/incheon" element={<Incheon />} />
                    <Route path="/daejon" element={<Daejon />} />
                    <Route path="/chungnam" element={<Chungnam />} />
                    <Route path="/chungbuk" element={<Chungbuk />} />
                    <Route path="/sejong" element={<Sejong />} />
                    <Route path="/busan" element={<Busan />} />
                    <Route path="/ulsan" element={<Ulsan />} />
                    <Route path="/daegu" element={<Daegu />} />
                    <Route path="/gyeongnam" element={<Gyeongnam />} />
                    <Route path="/gyeongbuk" element={<Gyeongbuk />} />
                    <Route path="/gwangju" element={<Gwangju />} />
                    <Route path="/jeonnam" element={<Jeonnam />} />
                    <Route path="/jeonbuk" element={<Jeonbuk />} />
                    <Route path="/gangwon" element={<Gangwon />} />
                    <Route path="/jeju" element={<Jeju />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;