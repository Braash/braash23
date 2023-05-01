import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import About from '../../pages/About';
import Dashboard from '../../pages/Home';
import LogIn from '../LogIn/LogIn';
import Sidenav from '../Sidenav/Sidenav'
import SignUp from '../SignUp/SignUp';
import TopBar from '../TopBar/TopBar'

const Navigation = () => {
    const { currentUser } = useAuth();
    return (
        <div>
                {currentUser && <TopBar />}
                {currentUser && <Sidenav />}
            <Routes>
                {currentUser ? <Route path="/" element={<Dashboard />} /> : <Route path="/" element={<LogIn />} /> }
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </div>
    )
};

export default Navigation;