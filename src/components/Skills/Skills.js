import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="section-container">
                <h2 data-aos="fade-up">Yetenekler</h2>
                <div className="expertise-grid">
                    <div className="expertise-card" data-aos="zoom-in" data-aos-delay="100">
                        <div className="expertise-icon">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <h5>Web Geliştirme</h5>
                        <p>Web tasarım alanına büyük ilgi duyuyorum ve kullanıcı dostu, estetik açıdan güçlü arayüzler geliştirmeye odaklanıyorum. HTML, CSS ve JavaScript gibi temel teknolojilere hakimim; ayrıca React gibi modern kütüphaneleri kullanarak dinamik ve etkileşimli web arayüzleri oluşturuyorum.</p>
                    </div>
                    <div className="expertise-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="expertise-icon">
                            <i className="fa-brands fa-python"></i>
                        </div>
                        <h5>Python</h5>
                        <p>Python programlama diliyle çeşitli projeler geliştirdim ve bu süreçte hem bireysel hem de pratik odaklı deneyimler edindim. Flask kütüphanesini kullanarak API tabanlı uygulamalar oluşturdum, public API’lerden veri çekme işlemleri gerçekleştirdim.</p>
                    </div>
                    <div className="expertise-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="expertise-icon">
                            <i className="fa-solid fa-robot"></i>
                        </div>
                        <h5>Yapay Zeka Modülü</h5>
                        <p>Balıkesir Üniversitesi | Balikesir University ile MSMB - Mimar Sinan Mühendisler Birliği iş birliğiyle düzenlenen Mühendishane 2.0 Üretken Yapay Zeka Modülü programını başarıyla tamamladım.</p>
                    </div>
                    <div className="expertise-card" data-aos="zoom-in" data-aos-delay="300">
                    <div className="expertise-icon">
                        <i class="fa-brands fa-java"></i>
                    </div>
                    <h5>Yazılım geliştirme</h5>
                    <p>Yazılım geliştirme sürecine büyük ilgiyle yaklaşıyor ve her aşamasında kendimi geliştirmeye özen gösteriyorum.Temiz ve sürdürülebilir kod yazımına önem veriyor, proje geliştirme sürecinde problem çözme becerilerimi etkin bir şekilde kullanıyorum.Farklı teknolojileri bir araya getirerek işlevsel çözümler üretmeyi hedefliyorum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;