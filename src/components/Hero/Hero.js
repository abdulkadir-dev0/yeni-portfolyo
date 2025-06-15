import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const typingRef = useRef(null);
    const text = "Biilgisayar Mühendisi";

    useEffect(() => {
        let i = 0;
        let isCancelled = false;

        const typeWriter = () => {
            if (i < text.length && !isCancelled) {
                setTypedText(prev => prev + text.charAt(i));
                i++;
                typingRef.current = setTimeout(typeWriter, 100);
            }
        };

        // Başlangıçta 500ms gecikme ekleyelim
        const startTimeout = setTimeout(() => {
            typeWriter();
        }, 500);

        return () => {
            isCancelled = true;
            clearTimeout(typingRef.current);
            clearTimeout(startTimeout);
        };
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-bg-shapes">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
            </div>
            <div className="hero-content" data-aos="fade-up">
                <h1>Merhaba, Ben <span className="highlight">ABDULKADİR</span></h1>
                <p className="typing-text">{typedText}<span className="cursor">|</span></p>
                <div className="social-links">
                    <a
                        href="https://github.com/abdulkadir-dev0"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profilim"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdulkadir-u%C3%A7ar-42a6a7254/"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profilim"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://x.com/"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter Profilim"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Profilim"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <a href="#about" className="scroll-down">
                    <span>Daha Fazla</span>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </section>
    );
};

export default Hero;
