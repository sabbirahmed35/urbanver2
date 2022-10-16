import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import sendEmailSchema from '../../../Schemas/index.jsx';
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();
  const initialValues = {
    user_name: '',
    user_email: '',
    user_number: '',
    message: ''
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: sendEmailSchema,
    onSubmit: (values, action) => {
      console.log(values);
      emailjs.sendForm('service_5ilbq8e', 'template_bi5rj8j', form.current, 'OhcLTGmNWyJKna0_n')
        .then((result) => {
          toast("Send Your Email!");
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      action.resetForm();
    }
  })
  return (
    <section className='main-contact-container'>
      <div className="contact-img-container">
        <p className='contact-title'>CONTACT </p> 
        <div className='contact-title-span-container'>
         
            <Link to='/'
             className='contact-title-span-home'
            > HOME </Link>    
          /        
          <Link to="/contact" className='contact-title-span-contact'>CONTACT</Link>
         </div>
      </div>
      <section className="contact-wrapper">
        <div className="from-container">
          <p className="form-title">Send us a message</p>
          <form ref={form} onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="user_name" placeholder='Your Name'
              value={values.user_name}
              id='user_name'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.user_name && touched.user_name ? (
              <p className="form-error">{errors.user_name}</p>
            ) : null}
            <input className="input-field"
              type="email" name="user_email" placeholder='Your Email'
              value={values.user_email}
              id='user_email'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.user_email && touched.user_email ? (
              <p className="form-error">{errors.user_email}</p>
            ) : null}
            <input
              className="input-field"
              type="text" name="user_number" placeholder='Your Number'
              value={values.user_number}
              id='user_number'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.user_number && touched.user_number ? (
              <p className="form-error">{errors.user_number}</p>
            ) : null}
            <textarea name="message" rows="4" className=' input-field' placeholder='Write your message'
              value={values.message}
              id='message'
              onChange={handleChange}
              onBlur={handleBlur}
            >

            </textarea>
            {errors.message && touched.message ? (
              <p className="form-error">{errors.message}</p>
            ) : null}
            <input
              className="input-btn"
              type="submit" value="Submit" />
            <ToastContainer />
          </form>
        </div>
        <div className="contact-us-container">
          <p className="contact-us-title">Contact Us</p>
          <article className="all-contact-info-container">
            {/* start of  single info container */}
            <div className="single-contact-info">
                <p className="contact-info-title contact-info-title-address">Address:</p>
                <p className="contact-us-details">
                   360, Lakecity Shopping Complex, Khilkhet, Dhaka - 1229, Bangladesh

                </p>

            </div>
            {/* end of single info container */}
            {/* start of  single info container */}
            <div className="single-contact-info">
              <p className="contact-info-title">Phone:</p>
              <p className="contact-us-details">
                +880 1958172960
              </p>
            </div>
            {/* end of single info container */}
            {/* start of  single info container */}
            <div className="single-contact-info">
              <p className="contact-info-title">Email:</p>
              <p className="contact-us-details contact-num">
                info@urbangaz.com
              </p>
            </div>
            {/* end of single info container */}
            {/* start of  single info container */}
            <div className="single-contact-info">
              <p className="contact-info-title"> Open:</p>
                <p className="contact-us-details">Saturday - Thursday | 9.00 AM - 5.00 PM </p>
            </div>
            {/* end of single info container */}
          </article>
          

        </div>
      </section>
    </section>
  );
};

export default Contact;
