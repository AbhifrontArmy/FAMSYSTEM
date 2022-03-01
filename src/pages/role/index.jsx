import React, { useEffect, useState } from "react";
import "./role.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Pagination from "../pagination";


const Role = () => {
    const [ApiData, setApiData] = useState('');
    const [currentPage, setCurrentPage] = useState();
    const [postsPerPage] = useState(10);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ApiData.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const getalldata = () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const body = JSON.stringify({
            where: {
                isActive: "true",
            },
            pagination: {
                sortBy: "createdAt",
                descending: true,
                rowsPerPage: 10,
                page: 2,
            },
        });
        console.log(body);
        axios
            .post(`https://famsystem.herokuapp.com/api/role/list`, body, {
                headers: headers
            })
            .then((getData) => {
                setApiData(getData.data.data.list);
            });
    };

    useEffect(() => {
        getalldata();
    }, []);


    return (
        <>
            <div className="dash">
                <div className="dashch">
                    <div className="child" href="#">
                        <Link to="/addrole">
                            <Button variant="primary" size="sm">
                                <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Role
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="dashch">
                    <div className="child" href="#">
                        <Link to="/Updaterole">
                            <Button variant="primary" size="sm">
                                <FontAwesomeIcon icon={faEdit} className="me-2" />
                                Edit Role
                            </Button>
                        </Link>
                    </div>
                </div>
                <div class="dashch">
                    <div class="child" href="#">
                        <Link to="/delete">
                            <Button variant="primary" size="sm">
                                <FontAwesomeIcon icon={faTrash} className="me-2" />
                                Delete Role
                            </Button>
                        </Link>
                    </div>
                </div>
                <div class="dashch1">
                    <a class="child" href="#" >
                        <input type="search" placeholder="Search" />
                        <i class="fa fa-search fa-1x" aria-hidden="true" ></i>
                    </a>
                </div>
                <table class="table table-warning table-bordered w-auto">
                    <thead>
                        <tr>
                            <th scope="col">Select</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    {ApiData.length > 0 && ApiData.map((roles) => {
                        return (

                            <tr>
                                <th><input type="checkbox" /></th>
                                <th> {roles.name}</th>

                            </tr>
                        )
                    })}
                </table>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={ApiData.length}
                    paginate={paginate}
                />
            </div>
        </>
    );
};

export default Role;

