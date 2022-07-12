import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControler from './validations/FormikControler'

function Api() {
    const [passwordShown, setPasswordShown] = useState(false);

    const initialValues = {
        email: '',
        password: '',
        date: ""
    };
    const validationSchema = Yup.object({
        email: Yup.string('please Enter valid Email Id/ Mobile no.').required('please Enter valid Email Id/ Mobile no.'),
        password: Yup.string().required('This field is required')
    });

    //By using email to login
    const handleSubmit = (values) => {
        if (!values.password && values.email.length === 10) {
            //for mobile otp
        } else if (values.email.includes('@') && values.password) {
            //for gmail login
        }
    };

    return (
        <Formik validationSchema={validationSchema} onSubmit={handleSubmit} initialValues={initialValues}>
            {(formik) => (
                <Form>
                    <div className='mb-4 forgot-relative'>
                        <FormikControler control='date' type='date' label='Enter Email/ Mobile No.' name='email' clsname='form-border' placeholder='Enter email/ mobile number' labelColor='label-color' />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Api