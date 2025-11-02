import React, { useState, useRef, useEffect } from 'react';
import { GlobeIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../lib/translations';

const LanguageSwitcher: React.FC = () => {
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const langMenuRef = useRef<HTMLDivElement>(null);

    const handleLanguageChange = (langCode: string) => {
        setLanguage(langCode);
        setIsLangMenuOpen(false);
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={langMenuRef}>
            <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                className="text-gray-300 hover:text-purple-400 transition-colors"
                aria-label="Change language"
            >
                <GlobeIcon className="w-6 h-6" />
            </button>
            {isLangMenuOpen && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`block w-full text-left rtl:text-right px-4 py-2 text-sm ${language === lang.code ? 'bg-purple-600 text-white' : 'text-gray-300'} hover:bg-purple-500 hover:text-white transition-colors`}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
