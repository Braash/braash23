import React, { useState }  from 'react';
import SidenavView from './SidenavView';
import aboutImg from '../../assets/about.png'
import homeImg from '../../assets/home.png'

const Sidenav = () => {
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
            <SidenavView
                navigationItems={navigationItems}
                isOpen={isOpen}
                toggle={toggle}
            />
        </div>
    );
};

export default Sidenav;