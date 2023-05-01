import React  from 'react';
import logoImg from '../../assets/logo.png'
import messages from './messages'

const TopBarView = () => {
    return (
        <nav className="flex items-center fixed h-10 justify-between flex-wrap bg-gray-800 p-2 w-full">
          <div className="flex items-center flex-shrink-0 text-black ml-1 mr-6">
          <img src={logoImg} className="pr-1 h-6" alt='Logo' />
            <span className="font-semibold text-xl tracking-tight">{messages?.name}</span>
          </div>
          <div className="flex">
            <a href="" className="text-black mr-4 hover:text-gray-300">{messages?.profile}</a>
          </div>
        </nav>
      );
};

export default TopBarView;