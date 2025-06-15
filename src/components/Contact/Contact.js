import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form verileri:', formData);
        alert('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <section id="contact" className="contact">
            <div className="section-container">
                <h2 data-aos="fade-up">İletişim</h2>
                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">İsim</label>
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">E-posta</label>
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label htmlFor="message">Mesaj</label>
                        </div>
                        <button type="submit" className="btn">Gönder</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;