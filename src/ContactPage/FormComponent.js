// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '', name: '', message: '' }}
            validate={values => {
                const errors = {};

                // Email validation
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                // Password validation
                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 8) {
                    errors.password = 'Password must be at least 8 characters long';
                }

                // Name validation (optional)
                // if (!values.name) {
                //     errors.name = 'Required';
                // }

                return errors;
            }}
            onSubmit={(values, { setSubmitting, setStatus }) => {
                setTimeout(() => {
                    // Simulating an API call or any other asynchronous action
                    if (values.email === 'example@email.com') {
                        // Successfully submitted
                        alert('Form submitted successfully');
                        setSubmitting(false);
                        setStatus(null);
                    } else {
                        // Simulating an error
                        setStatus('Invalid email');
                        setSubmitting(false);
                    }
                }, 400);
            }}
        >
            {({ isSubmitting, status }) => (
                <div className='form-container'>
                    <div className='form-box'>
                        <Form>
                            <Field type="text" name="name" placeholder="Your Name" className='field-form'/>
                            <ErrorMessage name="name" component="div" />

                            <Field type="email" name="email" placeholder="Email" className='field-form'/>
                            <ErrorMessage name="email" component="div" />

                            <Field type="subject" name="subject" placeholder="Subject" className='field-form'/>
                            <ErrorMessage name="subject" component="div" />

                            <Field as="textarea" name="message" placeholder="Message" className='field-form'/>
                            <ErrorMessage name="message" component="div" />

                            <button type="submit" disabled={isSubmitting} className='form-btn'>
                                Submit
                            </button>

                            {status && <div>{status}</div>}
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    </div>
);

export default Basic;
