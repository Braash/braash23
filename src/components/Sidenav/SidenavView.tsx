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
};

const SidenavView = ({navigationItems, toggle, isOpen}: SidenavViewProps) => {
    return (
        <div className="flex">
            <div id="sidebar" style={{width: isOpen ? "100px" : "50px"}} className="bg-gray-600 mt-10 fixed shadow-right drop-shadow-md h-screen p-2">
                <div className="items-center flex justify-center bg-gray-600">
                    <img src={barsImg} onClick={() => toggle()} className="h-6 object-cover bg-gray-600" alt='Logo' />
                </div>
                <div className="bg-gray-600">
                    {
                        navigationItems.map((item, index) => (
                            <NavLink className={`flex ${ isOpen ? '' : 'items-center justify-center'} mt-4 bg-gray-600`} to={item.path} key={index}>
                                <img src={item.icon} className="h-6 object-cover bg-gray-600" alt={item.name} />
                                <div style={{display: isOpen ? "block" : "none"}} className="ml-1 text-xs bg-gray-600 mt-auto mb-auto">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div> 
        </div>
    );
};

export default SidenavView;