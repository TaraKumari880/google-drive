import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
function Header(){
    return(
        <div className='header'>
            <div className='header_logo'>
                <img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" alt=""/>
                <span>Drive</span>

            </div>
            <div className='header_search'>
                <SearchIcon/>
        
                <input type="text" placeholder='Search in Drive'/>
                <FormatAlignCenterIcon/>
                

            </div>
            <div className='header_icons'>
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>
                <span>
                    <AppsIcon/>
                    <Avatar/>
                </span>
                
                

            

            </div>
        
        </div>
    )
}
export default Header