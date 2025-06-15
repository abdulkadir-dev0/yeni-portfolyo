import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

        const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    const closeMobileMenu = () => {
        if (window.innerWidth <= 768) {
            setMenuOpen(false);
            const navLinks = document.querySelectorAll('.nav-links li');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">ABDULKADİR UÇAR</div>
            <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
                <li><a href="#home" onClick={closeMobileMenu}>Ana Sayfa</a></li>
                <li><a href="#about" onClick={closeMobileMenu}>Hakkımda</a></li>
                <li><a href="#skills" onClick={closeMobileMenu}>Yetenekler</a></li>
                <li><a href="#projects" onClick={closeMobileMenu}>Projeler</a></li>
                <li><a href="#contact" onClick={closeMobileMenu}>İletişim</a></li>
            </ul>
            <div className={`burger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;