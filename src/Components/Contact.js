import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";

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

        emailjs.sendForm('service_8dij0zx', 'template_ppa89kl', e.target, 'kDuAOhXfR5ojG_lYA')
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
        </>
    );
};

export default Contact;