import React from 'react';
import { QuoteIcon } from './icons';
import { useTranslation } from '../hooks/useTranslation';

interface TestimonialCardProps {
    quote: string;
    avatarUrl: string;
    name: string;
    company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, avatarUrl, name, company }) => (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col h-full">
        <QuoteIcon className="w-10 h-10 text-purple-500 mb-4" />
        <p className="text-gray-300 italic flex-grow">"{quote}"</p>
        <div className="flex items-center mt-6">
            <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full object-cover mr-4 rtl:mr-0 rtl:ml-4 border-2 border-purple-400" />
            <div>
                <p className="font-bold text-white">{name}</p>
                <p className="text-sm text-gray-400">{company}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    const testimonials = [
        {
            quote: t('testimonials.cards.edix.quote'),
            avatarUrl: 'https://i.ibb.co/4ZkC6r7/edix-academy-clear.png',
            name: t('testimonials.cards.edix.name'),
            company: 'Edix Academy',
        },
        {
            quote: t('testimonials.cards.gopiscine.quote'),
            avatarUrl: 'https://i.ibb.co/wJvB9tD/gopiscine-clear.png',
            name: t('testimonials.cards.gopiscine.name'),
            company: 'GoPiscine',
        },
        {
            quote: t('testimonials.cards.transit.quote'),
            avatarUrl: 'https://i.ibb.co/yQ5fD1b/transit-tn-clear.png',
            name: t('testimonials.cards.transit.name'),
            company: 'Transit.tn',
        },
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        {t('testimonials.title.main')} <span className="text-purple-400">{t('testimonials.title.highlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;