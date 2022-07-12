import React from 'react';
// import logo from '../images/logoimage.png'

import dashboard from '../images/home.svg'
import academic from '../images/book-alt.svg'
import management from '../images/layers.svg'
import payment from '../images/credit-card.svg'
import placement from '../images/user-add.svg'

// import facebook from '../images/facebook.png'
// import linkedin from '../images/linkedIn.svg'
// import twitter from '../images/twitter.svg'

import '../styles/sidebar.css'
import { NavLink } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar_main_container" >
        {/* _main_container */}
            {/* Logo is coming here  */}
            {/* <NavLink to="" className="sidebar_logo">
                <img style={{ height: '80px', width: 'auto' }} src={logo} alt="" />
            </NavLink> */}
            {/* Logo part end here  */}

            {/* Sidebar tabs comes here  */}
            <div className="sidebar_tabs_container">
            {/* _tabs_container */}
                <ul className="sidebar_tabs_name">
                {/* _tabs_name */}
                    <NavLink
                        to=""
                        className="sidebar_list_item ">
                        {/* <img className="sidebar_icons" src={dashboard} alt="" />   */}
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="D_from"
                        className="sidebar_list_item">
                        {/* <img className="sidebar_icons" src={academic} alt="" /> */}
                        Academics
                    </NavLink>
                    <NavLink
                        to="from"
                        className="sidebar_list_item">
                        {/* <img className="sidebar_icons" src={management} alt="" /> */}
                        From
                    </NavLink>
                    <NavLink
                        to="payment"
                        className="sidebar_list_item">
                        {/* <img className="sidebar_icons" src={payment} alt="" /> */}
                        Payments
                    </NavLink>
                    <NavLink
                        to="table"
                        className="sidebar_list_item">
                                  {/* <img className="sidebar_icons" src={payment} alt="" /> */}
                        {/* <img className="sidebar_icons" src={placement} alt="" /> */}
                        Table
                    </NavLink>
                    {/* <NavLink
                        to="table"
                        className="sidebar_list_item">
                        Table
                    </NavLink> */}
                </ul>
            </div>
        </div >
    )
}

export default Sidebar;
