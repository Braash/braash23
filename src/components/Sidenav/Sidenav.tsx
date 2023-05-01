import React, { useState }  from 'react';
import SidenavView from './SidenavView';
import aboutImg from '../../assets/about.png'
import homeImg from '../../assets/home.png'

const Sidenav = ({children}: any) => {
    const[isOpen ,setIsOpen] = useState(false);
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
                children={children}
                isOpen={isOpen}
                toggle={toggle}
            />
        </div>
    );
};

export default Sidenav;