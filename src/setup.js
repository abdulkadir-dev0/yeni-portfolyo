// AOS animasyon kütüphanesi ve diğer global ayarlar
import AOS from 'aos';
import 'aos/dist/aos.css';

export const setup = () => {
    AOS.init({
        duration: 1000,
        once: true
    });

    // Font Awesome ve Google Fonts dinamik ekleme
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    const googleFonts = document.createElement('link');
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    googleFonts.rel = 'stylesheet';
    document.head.appendChild(googleFonts);
};