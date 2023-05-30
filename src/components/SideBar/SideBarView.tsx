import React from 'react';
import { NavLink } from 'react-router-dom';
import barsImg from '../../assets/bars.png';

export type NavigationItems = {
  path: string;
  name: string;
  icon: string;
};

export type SideBarViewProps = {
  navigationItems: NavigationItems[];
  toggle: Function;
  isOpen: boolean;
  children: any;
};

const SideBarView = ({ navigationItems, toggle, isOpen }: SideBarViewProps) => {
  return (
    <div className="flex">
      <div id="sidebar" className={`fixed w-50 p-2 top-0 bottom-0 right-0 ${ isOpen ? "bg-gray-700 bg-opacity-50" : "transparent"} flex flex-col justify-between items-center transition-width duration-200`}>
        <div className="mt-10 bg-transparent">
          <div className="items-center flex bg-transparent justify-center">
            <img
              src={barsImg}
              onClick={() => toggle()}
              className="h-6 object-cover bg-transparent"
              alt="Logo"
              data-testid="logo-img"
            />
          </div>
          {isOpen && <div className="bg-transparent">
            {navigationItems.map((item, index) => (
              <NavLink
                className="flex items-center justify-center bg-transparent mt-4"
                to={item.path}
                key={index}
                onClick={() => toggle()}
              >
                <img
                  src={item.icon}
                  className="h-6 object-cover bg-transparent"
                  alt={item.name}
                />
              </NavLink>
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default SideBarView;
