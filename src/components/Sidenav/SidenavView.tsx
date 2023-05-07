import React  from 'react';
import { NavLink } from 'react-router-dom';
import barsImg from '../../assets/bars.png'

export type NavigationItems = {
    path: string;
    name: string;
    icon: string;
};

export type SidenavViewProps = {
    navigationItems: NavigationItems[];
    toggle: Function;
    isOpen: boolean;
    children: any;
};

const SidenavView = ({navigationItems, toggle, isOpen}: SidenavViewProps) => {
    return (
        <div className="flex">
            <div id="sidebar" style={{width: isOpen ? "100px" : "50px"}} className="bg-gray-600 mt-10 fixed h-screen p-2">
                <div className="items-center flex justify-center">
                    <img src={barsImg} onClick={() => toggle()} className="h-6 object-cover" alt='Logo' />
                </div>
                <div>
                    {
                        navigationItems.map((item, index) => (
                            <NavLink className="flex items-center justify-center mt-4" to={item.path} key={index}>
                                <img src={item.icon} className="h-6 object-cover" alt={item.name} />
                                <div style={{display: isOpen ? "block" : "none"}} className="ml-1 text-sm">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div> 
        </div>
    );
};

export default SidenavView;