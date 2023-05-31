import React, { useState }  from 'react';
import SideBarView from './SideBarView';
import aboutImg from '../../assets/about.png';
import homeImg from '../../assets/home.png';
import gamesImg from '../../assets/games.png';
import booksImg from '../../assets/books.png';
import dashboardImg from '../../assets/dashboard.png';

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
    {
        path: '/about',
        name: 'Games',
        icon: gamesImg,

    },
    {
        path: '/about',
        name: 'Books',
        icon: booksImg,

    },
    {
        path: '/about',
        name: 'Random',
        icon: dashboardImg,

    },
]

const SideBar = ({children}: any) => {
     // #region STATE
    const[isOpen ,setIsOpen] = useState(false);
    // #endregion
    
    const toggle = () => setIsOpen (!isOpen);
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