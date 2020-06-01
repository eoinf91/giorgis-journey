import React from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"
import { useFormik } from "formik"

import './Subscription.styles.scss';

const Subscription = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
        },
        onSubmit: values => {
            addToMailchimp(values.email, { FNAME: values.firstName })
                .then(data => {
                    if (data.result === "error") {
                        alert("error: likely a duplicate email");
                    } else {
                        alert("Thank you for signing up to my newsletter. Your free preset is on it's way!");
                    }
                })
        },
    })
    return (
        <div className='subscription'>
            <h2>Subscribe and get one preset free!</h2>
            <div className='subscription-form'>
                <p>Stay up to date with my travel stories as I share insights to my favourite places, bloggers and adventures.</p>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="name"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        aria-label="Enter first name"
                    />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        aria-label="Enter email address"
                    />
                    <p>By signing up you are giving permission to Giorg's Journey to contact you with latest posts and product information.</p>
                    <p>We use Mailchimp as our marketing platform. By clicking "Sign Up" you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank" rel="noopener nofollow noreferrer">Learn more about Mailchimp's privacy practices here.</a></p>
                    <button type="submit" className='cta cta-beige'>Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default Subscription