import React from 'react'
import { useFormik, FormikProvider, Form } from "formik";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router';
import * as Yup from "yup";

import Logo from '../assests/images/logo.svg'
import mainlogo from '../assests/images/mainlogo.svg'
import LiveFeedBack from '../assests/common/LiveFeedBack';
import './login.css'


function Signin() {

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async (values) => {
            navigate('/dashboard');
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Username must be at least 2 characters")
                .max(30, "password must be less than 30 character")
                .required("Username is required"),
            //Email validation

            email: Yup.string()
                .required("Email is required")
                .matches(// eslint-disable-next-line
                    /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g,
                    "Email is required"
                ),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .max(30, "password must be less than 30 character")
                .required("Password is required")
                .matches(
                    /^[a-zA-Z0-9]+$/,
                    "Cannot contain special characters or spaces"
                ),
            confirmPassword: Yup.string()
                .required("confirm password is required")
                .min(8, "Password must be at least 8 characters")
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .max(30, "password must be less than 30 character")
        })
    });

    //For mobile devices
    const isMobile = useMediaQuery(
        { maxDeviceWidth: 425 },
    )

    return (
        <div className="login_container" >
            < div className="login_inside_one">
                <div
                    className="col main_login_container" style={{ height: '585px' }}>
                    {/* First row for the logo of the product  */}
                    {!isMobile &&
                        <div className="row second_container_login">
                            <img className="main_logo" src={mainlogo} alt="" />
                        </div>
                    }
                    {/* second row will be the personal information of the user  */}
                    <div className="row second_container_login " >
                        <div>
                            {/* Logo image settelment  */}
                            <div className="container-fluid logo_handle">
                                <img className="logo_style" src={Logo} alt="" />
                            </div>
                            {/* Heading of the Signin   */}
                            <h1 className="container-fluid logo_handle">Sign-in</h1>
                            {/* Form controls neccessary things goes here  */}
                            <div className="container-fluid arrange_inputs">
                                <FormikProvider className='container-fluid' value={formik}>
                                    <Form className="form-container container-fluid">
                                        <LiveFeedBack
                                            label="Username"
                                            id="name"
                                            name="name"
                                            // helpText="Must be 8-20 characters and cannot contain special characters."
                                            type="text"
                                            placeholder="Enter your username"
                                            className="login_input"
                                        />
                                        <LiveFeedBack
                                            label="E-mail"
                                            id="email"
                                            name="email"
                                            // helpText="Must be 8-20 characters and cannot contain special characters."
                                            type="email"
                                            placeholder="Enter your e-mail"
                                            className="login_input"
                                        />

                                        <LiveFeedBack
                                            label="Password"
                                            id="password"
                                            name="password"
                                            // helpText="Must be 8 characters and cannot contain special characters."
                                            placeholder="Enter your password"
                                            type="password"
                                            className="login_input"
                                        />
                                        <LiveFeedBack
                                            label="Confirm Password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            // helpText="Must be 8 characters and cannot contain special characters."
                                            placeholder="Re-type your password"
                                            type="password"
                                            className="login_input"
                                        />
                                        <span className="login_forget">forget password</span>
                                        {/* <Button type="submit" className="login_button" label="Signin" loading={isLoading} /> */}
                                        <button type="submit" className="login_button" label="Signin" >Signin</button>
                                    </Form>
                                </FormikProvider>
                                <p className="have_account">Have an account ? <span onClick={() => {
                                    navigate('/')
                                }
                                } className="Sign_up">Log in</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Signin
