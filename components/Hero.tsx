import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative py-20 md:py-32 bg-gray-900 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-gray-900 opacity-60"></div>
            <div className="absolute inset-0 pattern-dots opacity-10"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight">
                    {t('hero.title.line1')} <br className="hidden md:block" /> {t('hero.title.line2')} <span className="text-purple-400">{t('hero.title.highlight')}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    {t('hero.subtitle')}
                </p>
                <div className="flex justify-center items-center space-x-4">
                    <a href="#contact" onClick={handleNavClick} className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        {t('hero.cta.quote')}
                    </a>
                    <a href="#portfolio" onClick={handleNavClick} className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-600 transition-all duration-300">
                        {t('hero.cta.work')}
                    </a>
                </div>
                 <p className="mt-6 text-sm text-gray-400">{t('hero.consultation')}</p>
            </div>
        </section>
    );
};

export default Hero;