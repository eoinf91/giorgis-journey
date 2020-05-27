import React from 'react';
import * as Yup from 'yup'; // for everything
import { Formik, Field, Form } from 'formik';

// Styles
import './Contact.styles.scss';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Please include your name'),
    email: Yup.string()
        .email('Email address is not recognised')
        .required('Required'),
    subject: Yup.string()
        .required('Please include a subject line'),
    copy: Yup.string()
        .required('Please include as much information as possible'),
});

const ContactForm = () => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            subject: '',
            copy: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
            fetch('https://api.formik.com/submit/efstudio/giorgisjourneycontact', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),

            });
            // console.log(values);
            resetForm();
        }}

        render={({ errors, touched }) => (
            <div className='contact'>
                <div className='contact-text'>
                    <h2>contact me</h2>
                    <p>Whether you need some tips, information or just want to reach out. Complete the form below to get in touch and I will respond to you soon.</p>
                </div>
                <div className='contact-form'>
                    <Form>
                        <div className='form-row'>
                            <div className='form-row-item'>
                                <label for="name">Name: </label>
                                <Field name="name" />
                                {errors.name && touched.name ? (
                                    <h4 className='required'>{errors.name}</h4>
                                ) : null}
                            </div>

                            <div className='form-row-item'>
                                <label for="email">Email Address: </label>
                                <Field name="email" />
                                {errors.email && touched.email ? (
                                    <h4 className='required'>{errors.email}</h4>
                                ) : null}
                            </div>

                            <div className='form-row-item'>
                                <label for="subject">Subject: </label>
                                <Field name="subject" />
                                {errors.subject && touched.subject ? (
                                    <h4 className='required'>{errors.subject}</h4>
                                ) : null}
                            </div>
                        </div>

                        <div className='form-row'>
                            <div className='form-row-item full'>
                                <label for="copy">Your message...</label>
                                <Field name="copy" as="textarea" />
                                {errors.copy && touched.copy ? (
                                    <h4 className='required'>{errors.copy}</h4>
                                ) : null}
                                <button type="submit" className='cta cta-beige'>Send</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        )}
    />
);

export default ContactForm;