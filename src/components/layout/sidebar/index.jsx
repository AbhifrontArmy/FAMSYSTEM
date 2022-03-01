import React from 'react';
import './sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div class="sidebar">
            <div className='list'>
                <div class="nav-link text-primary">
                    <Link to="/role" >
                        <i class="fa fa-tasks fa-2x" aria-hidden="true"></i>
                        <b>ROLE</b>
                    </Link>
                </div>
            </div>
            <div className='list'>
                <div class="nav-link text-primary">
                    <Link to="/user" >
                        <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                        <b>USER</b>
                    </Link>
                </div>
            </div>
            <div className='list'>
                <div class="nav-link text-primary">
                    <Link to="/project">
                        <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                        <b>PROJECT</b>
                    </Link>
                </div>
            </div>
            <div className='list'>

                <div class="nav-link text-primary">
                    <Link to="/profile">
                        <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                        <b>PROFILE</b>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;


