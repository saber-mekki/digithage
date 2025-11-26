import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface TeamMemberCardProps {
    imageUrl: string;
    name: string;
    role: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, name, role }) => (
    <div className="text-center p-4">
        <img
            src={imageUrl}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-gray-700"
        />
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-purple-400">{role}</p>
    </div>
);

const Team: React.FC = () => {
    const { t } = useTranslation();
    const teamMembers = [
        {
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQFI5vswVthrsg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702210548299?e=1763596800&v=beta&t=7kffUP78UrgoLVQFYufvYIpW_DtyqAl2L1Twuqn8rWE',
            name: 'Saber Mekki',
            role: t('team.roles.itEngineer'),
        },
        {
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHUt_vDdMzGsA/profile-displayphoto-scale_200_200/B4DZl3s2ICGwAc-/0/1758649872346?e=1763596800&v=beta&t=UR7ib_4OU2xaQMqLxUx7gIEUKBnkg0otpBx03vvRlYg',
            name: 'Wissal Mekki',
            role: t('team.roles.itEngineer'),
        },
        {
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D35AQELNiO5KYZB8w/profile-framedphoto-shrink_400_400/B4DZbTpQezHsAc-/0/1747307530443?e=1762675200&v=beta&t=N876zr1M08h14o1N3DxkEuHGYYsNG0FEMrOp4eBlSZ0',
            name: 'Imen Edhri',
            role: t('team.roles.itEngineer'),
        },
        {
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D35AQHuUnX04Y75mA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1735951655031?e=1764799200&v=beta&t=zA0OIDugBMj4KBDhNxbq-pone9fGtkYSzAzixZq82Wo',
            name: 'Mohamed Bouraoui',
            role: t('team.roles.itEngineer'),
        },
    ];

    return (
        <section id="team" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        {t('team.title.main')} <span className="text-purple-400">{t('team.title.highlight')}</span>
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        {t('team.subtitle')}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                       {t('team.freelancers')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;