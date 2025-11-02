import React from 'react';
import { CheckIcon } from './icons';
import { useTranslation } from '../hooks/useTranslation';

interface FeatureItemProps {
    title: string;
    description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600/20 text-purple-400">
                <CheckIcon className="w-6 h-6" />
            </div>
        </div>
        <div className="ml-4 rtl:ml-0 rtl:mr-4">
            <h4 className="text-xl font-bold text-white">{title}</h4>
            <p className="mt-1 text-gray-400">{description}</p>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => {
    const { t } = useTranslation();
    const features = [
        { title: t('whyChooseUs.features.agile.title'), description: t('whyChooseUs.features.agile.description') },
        { title: t('whyChooseUs.features.userCentric.title'), description: t('whyChooseUs.features.userCentric.description') },
        { title: t('whyChooseUs.features.scalable.title'), description: t('whyChooseUs.features.scalable.description') },
        { title: t('whyChooseUs.features.support.title'), description: t('whyChooseUs.features.support.description') },
        { title: t('whyChooseUs.features.consultation.title'), description: t('whyChooseUs.features.consultation.description') },
    ];

    return (
        <section id="why-us" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            {t('whyChooseUs.title.main')} <span className="text-purple-400">{t('whyChooseUs.title.highlight')}</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            {t('whyChooseUs.subtitle')}
                        </p>
                        <div className="mt-10 space-y-10">
                            {features.map((feature, index) => (
                                <FeatureItem key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img src="https://picsum.photos/seed/team/600/700" alt="Team collaborating" className="rounded-xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;