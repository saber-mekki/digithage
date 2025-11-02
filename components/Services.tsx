import React from 'react';
import { WebDevIcon, MobileDevIcon, UiUxIcon } from './icons';
import { useTranslation } from '../hooks/useTranslation';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 hover:scale-105 transition-all duration-300">
        <div className="bg-purple-600/20 text-purple-400 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
    const { t } = useTranslation();
    const services = [
        {
            icon: <WebDevIcon className="w-8 h-8" />,
            title: t('services.cards.web.title'),
            description: t('services.cards.web.description'),
        },
        {
            icon: <MobileDevIcon className="w-8 h-8" />,
            title: t('services.cards.mobile.title'),
            description: t('services.cards.mobile.description'),
        },
        {
            icon: <UiUxIcon className="w-8 h-8" />,
            title: t('services.cards.uiux.title'),
            description: t('services.cards.uiux.description'),
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        {t('services.title.main')} <span className="text-purple-400">{t('services.title.highlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;