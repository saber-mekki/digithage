import React from 'react';
import { ExternalLinkIcon } from './icons';
import { useTranslation } from '../hooks/useTranslation';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    category: string;
    url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, category, url }) => {
    const isLink = url !== '#';

    const content = (
        <div className={`group relative overflow-hidden rounded-lg shadow-lg ${!isLink ? 'cursor-default' : ''}`}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="flex items-center text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {title}
                    {isLink && <ExternalLinkIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                </h3>
                <p className="text-purple-300 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{category}</p>
            </div>
        </div>
    );

    if (isLink) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </a>
        );
    }

    return content;
};

const Portfolio: React.FC = () => {
    const { t } = useTranslation();
    const projects = [
        { imageUrl: 'https://i.ibb.co/4ZkC6r7/edix-academy-clear.png', title: 'Edix Academy', category: t('portfolio.categories.elearning'), url: 'https://edixacademy.com' },
        { imageUrl: 'https://i.ibb.co/wJvB9tD/gopiscine-clear.png', title: 'GoPiscine', category: t('portfolio.categories.booking'), url: 'https://gopiscine.fr' },
        { imageUrl: 'https://i.ibb.co/yQ5fD1b/transit-tn-clear.png', title: 'Transit.tn', category: t('portfolio.categories.logistics'), url: 'https://transit.tn' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        {t('portfolio.title.main')} <span className="text-purple-400">{t('portfolio.title.highlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        {t('portfolio.subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;