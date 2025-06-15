import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Abdulkadir Uçar. Tüm hakları saklıdır.</p>
        </footer>
    );
};

export default Footer;