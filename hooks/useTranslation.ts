import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

export const useTranslation = () => {
    const { language } = useLanguage();

    const t = (key: string): string => {
        const keys = key.split('.');
        let result: any = translations[language] || translations['en'];

        for (const k of keys) {
            result = result[k];
            if (result === undefined) {
                // Fallback to English if translation is missing
                let fallbackResult: any = translations['en'];
                for (const fk of keys) {
                    fallbackResult = fallbackResult[fk];
                    if(fallbackResult === undefined) return key;
                }
                return fallbackResult;
            }
        }

        return result || key;
    };

    return { t, language };
};
