import React  from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png'
import { useAuth } from '../../context/AuthContext';
import messages from './messages'

const TopBarView = () => {
  const { currentUser } = useAuth();
    return (
        <nav className="flex items-center z-50 fixed h-10 justify-between flex-wrap bg-gray-800 p-2 w-full">
          <Link to="/">
          <div className="flex items-center flex-shrink-0 text-black ml-1 mr-6">
            <img src={logoImg} className="pr-1 h-6" alt='Logo' />
            <span className="font-semibold text-xl tracking-tight">{messages?.name}</span>
          </div>
          </Link>
          <div className="flex">
            {currentUser ? currentUser?.email :
            <Link to="/login" className="font-bold text-gray-500"><button className="bg-gray-200 rounded-md mr-4 px-3">Log in</button></Link>
            }
          </div>
        </nav>
      );
};

export default TopBarView;