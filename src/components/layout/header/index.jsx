import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';



const Header = () => {
    const history = useHistory();
    const profi = () => {
        history.push('/profile');
    }

    const out = () => {

        if (window.confirm('do you want to exit'))
            history.push('/');
    }


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="collapse navbar-collapse" id="navbarText">
                    <div class="navbar-nav mr-auto">
                        <div className='nav-logo'>

                            <Link to="/dashboard" >
                                <img src='./assets/Logo.svg' alt="logo" />

                            </Link>
                        </div>
                        <div class="dropdown">
                            <i class="fa fa-user-circle fa-2x m-2" aria-hidden="true" onClick={profi}></i>
                            <i class="fa fa-sign-out fa-2x" aria-hidden="true" onClick={out}></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header;