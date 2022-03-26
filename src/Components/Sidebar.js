import '../App.css';
import React from 'react';
import {SideBarData} from './SideBarData';
import logo from '../images/logo.png';
import {FaLinkedin, FaTelegram, FaDiscord, FaTwitter} from "react-icons/fa";

function Sidebar() {
  return <div className="Sidebar">
  <div className='logo'>
    <img src={logo} alt="" />
  </div>
  <ul className='SidebarList'>
    {SideBarData.map((val,key) => {
      return ( 
        <li key={key} className="row" id={window.location.pathname == val.link ? "active" : ""} onClick={()=> {window.location.pathname = val.link;
        }}
      > 
          <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
        </li>
      );
    })}
  </ul>
  <div className='icons'>
    <div onClick={()=> window.open("https://mobile.twitter.com/Millticketcoin", "_blank")} className='icon'><FaTwitter /></div>
    <div onClick={()=> window.open("https://t.me/+aItpDBfFuI83N2Q0", "_blank")} className='icon'><FaTelegram /></div>
    <div onClick={()=> window.open("https://discord.gg/Qh5776WdSJ", "_blank")} className='icon'><FaDiscord /></div>
    <div onClick={()=> window.open("https://www.linkedin.com/in/mike-mcgee-jr-b3088880", "_blank")} className='icon'><FaLinkedin /></div>
  </div>
  <div>
  </div>
  </div>;
}

export default Sidebar;
