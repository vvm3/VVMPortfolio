import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Footer from './Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('','', e.target, '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <h1 className="contactPageTitle"><span className="skillTitleMy">Contact </span> Me</h1>
            <div className='formmain'>
                <h4 className="contactDesc">Please fill out the form below to discuss any work opportunities</h4>

                <form onSubmit={handleSubmit}>
                    {/* <div> */}
                    <label>Name :</label>
                    <input type="text" name="name" value={formData.name} className='forminput' placeholder='Enter Your Name' onChange={handleChange} required />
                    {/* </div> */}
                    {/* <div> */}
                    <label>Email :</label>
                    <input type="email" name="email" value={formData.email} className='forminput' placeholder='Enter Your Email' onChange={handleChange} required />
                    {/* </div> */}
                    {/* <div> */}
                    <label>Message :</label>
                    <textarea name="message" value={formData.message} className='formtxtmsg' placeholder='Text Your Message' onChange={handleChange} required></textarea>
                    {/* </div> */}
                    <button type="submit" className='formbtn'>Send</button>
                </form>
            </div>
            <div className='media'>
                <a href='https://www.linkedin.com/in/vineet-magadum-500600195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin className='lin'/></a>
                <a href='https://www.facebook.com/share/p7ndzwJ1Q7XZra33/?mibextid=qi2Omg'><ImFacebook2 className='fb'/></a>
                <a href='https://www.instagram.com/tigervineet_vm?igsh=MTJmcWkwZHM3MGUxaA=='><SiInstagram className='insta'/></a>
                <a href='https://github.com/vvm3'><FaGithub className='git'/></a>
            </div>
           <Footer/> 
        </>
    );
};

export default Contact;
