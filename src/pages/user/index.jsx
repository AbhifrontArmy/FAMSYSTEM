import React, { useState } from 'react';
import './user.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from "axios";


const User = () => {
    const [apiData, setApiDate] = useState([]);

    return (
        <>
            <div className="dash">
                <div className="dashch">
                    <div className="child" href="#">
                        <Link to="/adduser" >
                            <Button variant="primary" size="sm">
                                <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New User
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="dashch">
                    <div className="child" href="#">

                        <Link to="/adduser" >
                            <Button variant="primary" size="sm">
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit User Details
                            </Button>
                        </Link>
                    </div>
                </div>
                <div class="dashch">
                    <div class="child" href="#">

                        <Link to="/delete" >
                            <Button variant="primary" size="sm">
                                <FontAwesomeIcon icon={faTrash} className="me-2" /> DeleteUser
                            </Button>
                        </Link>
                    </div>
                </div>
                <div class="dashch1">
                    <a class="child" href="#">

                        <input type="search" placeholder='Search' />
                        <i class="fa fa-search fa-1x" aria-hidden="true"></i>
                    </a>


                </div>
                <table class="table table-warning table-bordered w-auto">
                    <thead>
                        <tr>
                            <th scope="col">Select</th>
                            <td scope="col">Name</td>


                        </tr>
                    </thead>


                    <tbody>
                        {apiData.map((data) => {
                            return (
                                <tr>
                                    <input type="checkbox">{data.select}</input>
                                    <th scope="row">{data.name}</th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>



        </>
    )
}

export default User;
