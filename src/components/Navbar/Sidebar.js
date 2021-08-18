import React from 'react'
import { FaChartLine, FaBookMedical, FaBriefcase, FaScroll,FaClock,FaPowerOff } from 'react-icons/fa';
import './navbar.css'
function Sidebar() {
    return (
        <div className="sidebar_wrapper">
           <div className="sidebar_items_container d_flex flex_direction_column justify_content_center text_light">
                <div className="sidebar_items font-md p_20">
                    <FaChartLine/>&nbsp;&nbsp;&nbsp;Dashboard
                </div>
                <div className="sidebar_items font-md p_20">
                <FaBookMedical/>&nbsp;&nbsp;&nbsp;Add Jobs
                </div>
                <div className="sidebar_items font-md p_20">
                <FaBriefcase/>&nbsp;&nbsp;&nbsp;Jobs
                </div>
                <div className="sidebar_items font-md p_20">
                <FaScroll/>&nbsp;&nbsp;&nbsp;Archives
                </div>
                <div className="sidebar_items font-md p_20">
                <FaClock/>&nbsp;&nbsp;&nbsp;Timeline
                </div>
                <div className="sidebar_items font-md p_20">
                <FaPowerOff/>&nbsp;&nbsp;&nbsp;Logout
                </div>
           </div>
        </div>
    )
}

export default Sidebar
