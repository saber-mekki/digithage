import React from 'react';
import { FacebookIcon, LinkedInIcon } from './icons';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        
        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const socialLinks = [
        { href: 'https://www.linkedin.com/company/digithage', icon: <LinkedInIcon className="w-6 h-6" /> },
        { href: 'https://www.facebook.com/people/DigiThage/61582623975797/', icon: <FacebookIcon className="w-6 h-6" /> },
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 py-8 text-center text-gray-500">
                <a href="#" onClick={handleNavClick} className="text-xl font-black text-white mb-4 inline-block">
                    Digi<span className="text-purple-400">Thage</span>
                </a>
                
                <div className="flex justify-center space-x-6 my-4">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                            {link.icon}
                        </a>
                    ))}
                </div>

                <p>&copy; {new Date().getFullYear()} DigiThage. {t('footer.rights')}</p>
                <p className="text-sm mt-2">{t('footer.tagline')}</p>
            </div>
        </footer>
    );
};

export default Footer;