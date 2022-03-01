import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import './addrole.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Add = () => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log({ name })

        axios.post(`https://famsystem.herokuapp.com/api/role`, {
            name,
        })

    };


    return (
        <div className="add">
            <Form>
                <Form.Field>
                    <div> <strong>Role-Profile</strong></div>
                    <br />
                    <b>Name :</b>
                    <input
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Name"
                    />
                </Form.Field>
                <button type="button" class="btn btn-success m-4" onClick={handleSubmit}>Create</button>
                {/* <button type="button" class="btn btn-success m-4">Update</button> */}
                <Link to="/user">
                    <button type="button" class="btn btn-danger">Back</button>
                </Link>
            </Form>
        </div>
    );
}


export default Add;