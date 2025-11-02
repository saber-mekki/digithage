import React from 'react';
import { FacebookIcon, LinkedInIcon, MailIcon } from './icons';
import { useTranslation } from '../hooks/useTranslation';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const recipientEmail = 'contact@digithage.com';
    const socialLinks = [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/digithage', icon: <LinkedInIcon className="w-8 h-8" /> },
        { name: 'Facebook', href: 'https://www.facebook.com/people/DigiThage/61582623975797/', icon: <FacebookIcon className="w-8 h-8" /> },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        {t('contact.title.main')} <span className="text-purple-400">{t('contact.title.highlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-gray-700/50 inline-block p-6 rounded-xl border border-gray-600">
                         <a href={`mailto:${recipientEmail}`} className="flex items-center text-gray-200 hover:text-white transition-colors duration-300 group">
                            <MailIcon className="w-10 h-10 mr-4 rtl:mr-0 rtl:ml-4 text-purple-400 group-hover:scale-110 transition-transform"/>
                            <div>
                                <p className="text-lg font-semibold text-left rtl:text-right">{t('contact.emailUs')}</p>
                                <p className="text-2xl font-bold text-left rtl:text-right">{recipientEmail}</p>
                            </div>
                        </a>
                    </div>
                   

                    <div className="mt-8">
                        <p className="text-gray-400 mb-4">{t('contact.connect')}</p>
                        <div className="flex justify-center space-x-8">
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;