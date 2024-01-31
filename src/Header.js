import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import LanguageIcon from '@mui/icons-material/Language';


function Header() {
  return (
    <div className='header'>
        <img className="header_icon" 
        src='https://lifetour.net/wp-content/uploads/2016/05/hd-airbnb-logo-drawing.png'
        alt=""/>  

        <div className='header_center'>
        <input type="text"/>
        <SearchIcon/>
        </div>    

        <div className='header_right'>
            <p>Become a host</p>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header
