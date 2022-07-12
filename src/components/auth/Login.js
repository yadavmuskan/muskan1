import React from 'react'
import { useFormik, FormikProvider, Form } from "formik";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router';
// import { useQuery } from 'react-query';
import * as Yup from "yup";
// import axios from 'axios';

import Logo from '../assests/images/logo.svg'
import mainlogo from '../assests/images/mainlogo.svg'
import LiveFeedBack from '../assests/common/LiveFeedBack';
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SUCCESS } from '../../redux/constants/actions';
// import Button from '../assests/common/Button';


function Login() {
    // const { isLoading, data } = useQuery('user', () => {
    //     return axios.get("https://mocki.io/v1/ccd541dc-a4a4-444a-8aa4-51ed1504803d")
    // })
    // console.log(data.data.user)

    const dispatch = useDispatch();

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    email: formik.values.email,
                    password: formik.values.password
                }
            })
            navigate('/dashboard');
        },
        validationSchema: Yup.object({
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
                )
        })
    });

    //For mobile devices
    const isMobile = useMediaQuery(
        { maxDeviceWidth: 425 },
    )



    // Just for testing 
    // if (isLoading) {
    //     return (
    //         <h1>loadiing</h1>
    //     )
    // }
    // if (data) {
    //     // console.log(JSON.stringify(data.data.role))
    //     return (
    //         <h2>
    //             sfsaf
    //         </h2>
    //     )
    // }

    return (
        <div className="login_container" >
            < div className="login_inside_one">
                <div
                    className="col main_login_container">
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
                            {/* Heading of the Login   */}
                            <h1 className="container-fluid logo_handle">Login</h1>
                            {/* Form controls neccessary things goes here  */}
                            <div className="container-fluid arrange_inputs">
                                <FormikProvider className='container-fluid' value={formik}>
                                    <Form className="form-container container-fluid">
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
                                            // helpText="Must be 6-8 characters and cannot contain special characters."
                                            placeholder="Enter your password"
                                            type="password"
                                            className="login_input"
                                        />
                                        <span className="login_forget">forget password</span>
                                        {/* <Button type="submit" className="login_button" label="Login" loading={isLoading} /> */}
                                        <button type="submit" className="login_button" label="Login"  >Login</button>
                                    </Form>
                                </FormikProvider>
                                <p className="have_account">Don't have an account ? <span onClick={() => {
                                    navigate('/signin')
                                }
                                } className="Sign_up">Sign in</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login
