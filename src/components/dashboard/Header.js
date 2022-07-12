import React from 'react';
import '../styles/header.css'
import register from '../images/eye.svg'
import login from '../images/signin.svg'
import setting from '../images/setting.png';
import Pro from '../images/pro.png';
import logo from "../images/parivar.svg";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router";


function Header() {
    const navigate = useNavigate();
    return (
        
        <div className="header_main_container">
                 <NavLink to="" className="sidebar_logo">
                {/* <img style={{ height: '60px', width: 'auto' }} src={logo} alt="" /> */}
                <img style={{ height: '55px', width: 'auto' }} src={logo} class="img-fluid image_logo" id='eye-icon' alt="..." /> 
               
            </NavLink>
            <h4  id='head-icon'>Eye-Care</h4>
            <div className="header_half_one"> 
                {/* <img className="header_images" src={register} alt="" /> */}
                {/* <h6 style={{ marginRight: "60px", cursor: "pointer" }}>Registeration</h6> */}
                {/* <img className="header_images" src={login} alt="" /> */}
                {/* <h6 style={{ cursor: "pointer" }}>  Login</h6> */}
            </div>
            <div className="header_half_second_part" >
                <div className="header_half_second_part_first">
                <img style={{ marginRight: "15px" ,height: '45px', width: 'auto' }} className="header_images" src={Pro} alt="" />
                {/* <h4 className='ad-head'>Admin</h4> */}
                    <div class="dropdown">
  <button  class="drop-head" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img style={{ marginRight: "0px" ,height: '25px', width: 'auto' }} className="header_images" src={setting} alt="" />
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li> <button
                onClick={() => navigate("/login")}
                type="button"
                class="btn"
                className='btn-log'
                aria-describedby="basic-addon1"
              >
                Log Out
              </button></li> 
            <li> <button
                onClick={() => navigate("/login")}
                type="button"
                class="btn"
                className='btn-log'
                aria-describedby="basic-addon1"
              >
                profile
              </button></li>
   
  </ul>
</div>
            
                </div>
                <div>
                    {/* <h4 style={{ cursor: "pointer" }}>Name</h4>
                    <h4 style={{ cursor: "pointer" }}>Admin</h4> */}
               
                </div>
            </div>
        </div>
    );
}

export default Header;
