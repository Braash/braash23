import React, { useState }  from 'react';
import SideBarView from './SideBarView'
import aboutImg from '../../assets/about.png';
import homeImg from '../../assets/home.png';

const SideBar = ({children}: any) => {
     // #region STATE
    const[isOpen ,setIsOpen] = useState(false);
    // #endregion
    
    const toggle = () => setIsOpen (!isOpen);
    const navigationItems = [
        {
            path: '/',
            name: 'Dashboard',
            icon: homeImg,

        },
        {
            path: '/about',
            name: 'About',
            icon: aboutImg,

        },
    ]
    return (
        <div>
            <SideBarView
                navigationItems={navigationItems}
                children={children}
                isOpen={isOpen}
                toggle={toggle}
            />
        </div>
    );
};

export default SideBar;