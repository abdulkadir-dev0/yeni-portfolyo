import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="section-container">
                <h2 data-aos="fade-up">Hakkımda</h2>

                <div className="about-container">
                    <div className="about-content" data-aos="fade-left" data-aos-duration="1200">
                        <div className="about-text">
                            <h3><span className="highlight">Ben Kimim?</span></h3>
                            <p className="about-bio">
                                Ben Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi Abdulkadir Uçar.
                                Şu anda yapay zeka, web ve mobil uygulama geliştirme alanlarında aktif projeler yürütüyor ve bu alanlarda uzmanlaşmak için yoğun bir şekilde kendimi geliştiriyorum.
                                Bu doğrultuda, makine öğrenimi, derin öğrenme, doğal dil işleme gibi yapay zekanın temel disiplinlerini kapsayan ileri seviye bootcamp’lere ve sertifikalı eğitim programlarına katılıyorum.
                                Ayrıca modern web teknolojileri (React, Node.js) ve mobil geliştirme platformları (Kotlin, Flutter) üzerine kapsamlı kurslar alarak, güncel framework ve araçlarla pratik deneyim kazanıyorum.
                                Bu sayede hızlı değişen teknoloji ekosisteminde güncel kalırken, yüksek kaliteli, ölçeklenebilir ve sürdürülebilir yazılım çözümleri geliştirebilen bir mühendis olma hedefime emin adımlarla ilerliyorum.
                            </p>

                            <div className="info-grid">
                                <div className="info-item" data-aos="fade-up" data-aos-delay="150">
                                    <span className="info-label">E-posta:</span>
                                    <span className="info-value">ucarabdulkadir25@gmail.com</span>
                                </div>
                                <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                                    <span className="info-label">Telefon:</span>
                                    <span className="info-value">+90 555 000 0000</span>
                                </div>
                                <div className="info-item" data-aos="fade-up" data-aos-delay="350">
                                    <span className="info-label">Dil:</span>
                                    <span className="info-value">Türkçe, İngilizce</span>
                                </div>
                            </div>



                            <div className="cta-container">
                                <a href="#contact" className="btn" data-aos="fade-up" data-aos-delay="100">
                                    Benimle İletişime Geç
                                </a>
                                <a
                                    href={`${process.env.PUBLIC_URL}/cv.pdf`}
                                    download="CV.pdf"
                                    className="btn"
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                >
                                    CV'mi İndir
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;