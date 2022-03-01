import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';


function Login() {
    const history = useHistory();
    const initialValues = { email: "", password: "" };
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({ email: "", password: "" });
    const [isSubmit, setIsSubmit] = useState(false);
    const [show, setShow] = useState(false);

    const togglePassword = () => {
        setShow(!show);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        setIsSubmit(true);
        if (formValues.email !== '' && formValues.password !== '') {
            history.push('/dashboard');
        } else {

        }
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
            // alert("Your form is submitted succesfully");
        }

    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "*email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "*This is not a valid email";
        }


        if (!values.password) {
            errors.password = "*password is required";
        }

        return errors;

    };

    return (

        <div className="app">

            <div className="login-form">
                <img src='./assets/Logo.svg' alt="logo" />

                <h1 className="title">Login</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-container">
                        <i style={{ color: "white" }} class="fa fa-envelope" aria-hidden="true"></i>
                        <input type="email" name="email"
                            placeholder="Enter your Email"
                            value={formValues.email} onChange={(e) => [setformErrors({ ...formErrors, email: "" }), handleChange(e)]} />
                    </div>
                    <p className="errors">{formErrors.email}</p>

                    <div className="input-container">
                        <i style={{ color: "white" }} class="fa fa-lock" aria-hidden="true"></i>
                        <input type={show ? "text" : "password"} name="password"
                            placeholder="Enter your password"
                            value={formValues.password} onChange={(e) => [setformErrors({ ...formErrors, password: "" }), handleChange(e)]} />
                        <div className='eye'>
                            <i class={!show ? "fa fa-eye-slash" : "fa fa-eye"} aria-hidden="true" onClick={togglePassword}></i>
                        </div>

                    </div>

                    <p className="errors">{formErrors.password}</p>

                    <div className="button-container">
                        <input type="submit" />

                    </div>
                </form>

            </div>

        </div>

    );
};

export default Login;
