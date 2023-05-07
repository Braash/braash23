import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import About from '../../pages/About';
import Dashboard from '../../pages/Home';
import LogIn from '../LogIn/LogIn';
import Sidenav from '../Sidenav/Sidenav';
import SideBar from '../SideBar/SideBar'
import SignUp from '../SignUp/SignUp';
import TopBar from '../TopBar/TopBar';

const Navigation = () => {
    const { currentUser } = useAuth();
    console.log(currentUser, 'value currentUser');
    return (
        <div>
                {currentUser && <TopBar />}
                {currentUser && 
                    <>
                        <div className="hidden md:block">
                            <Sidenav />
                        </div>
                        <div className="md:hidden">
                            <SideBar />
                        </div>
                    </>
                    
                }
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