import React  from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png'
import { useAuth } from '../../context/AuthContext';
import messages from './messages'

const TopBarView = ({currentUser, logOut, error, loading}: any) => {
  const avatar = ( currentUser?.photoURL ? 
    <div>
      <img className="rounded-full h-6 mr-1" src={currentUser?.photoURL} alt="avatar" />
    </div> : currentUser?.email
  )
    return (
        <nav className="flex items-center z-50 fixed h-10 justify-between flex-wrap bg-gray-600 p-2 w-full">
          <Link to="/">
          <div className="flex items-center flex-shrink-0 text-black ml-1 mr-6">
            <img src={logoImg} className="pr-1 h-6" alt='Logo' />
            <span className="font-semibold text-md tracking-tight">{messages?.name} 2</span>
          </div>
          </Link>
          <div className="flex">
            {currentUser ? avatar :
            <Link to="/login" className="font-bold text-gray-500"><button className="bg-gray-200 rounded-md mr-4 px-3">Log in</button></Link>
            }
            {currentUser && <button onClick={() => logOut()} className="border border-gray-500 text-sm text-gray-500 hover:bg-gray-500 hover:text-white font-bold px-4 rounded">Log out</button>}
          </div>
        </nav>
      );
};

export default TopBarView;