import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const navLinks = [
        { href: '#services', labelKey: 'header.services' },
        { href: '#portfolio', labelKey: 'header.portfolio' },
        { href: '#testimonials', labelKey: 'header.testimonials' },
        { href: '#team', labelKey: 'header.team' },
        { href: '#contact', labelKey: 'header.contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (!targetId) return;

        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        handleNavClick(e);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={handleNavClick} className="text-2xl font-black text-white">
                    Digi<span className="text-purple-400">Thage</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                                {t(link.labelKey)}
                            </a>
                        ))}
                    </nav>

                    <a href="#contact" onClick={handleNavClick} className="hidden md:inline-block bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                        {t('header.getQuote')}
                    </a>
                    
                    <LanguageSwitcher />
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={handleMobileLinkClick} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg">
                            {t(link.labelKey)}
                        </a>
                    ))}
                    <a href="#contact" onClick={handleMobileLinkClick} className="mt-4 bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-all duration-300">
                        {t('header.getQuote')}
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;