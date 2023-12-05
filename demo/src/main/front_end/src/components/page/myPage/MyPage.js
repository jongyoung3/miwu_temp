import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

import History from './History';
import Bookmark from './Bookmark';
import Privacy from './privacy/privacy/Privacy';

const MyPage = ({id, logout}) => {
    return (
        <div id="my-page">
            <Privacy id={id}/>
        </div>
    );
}
export default MyPage;