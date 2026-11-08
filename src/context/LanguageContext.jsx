import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext(null);
const LANGUAGES = ['US', 'ID'];

function readStoredLanguage() {
    try {
        const stored = localStorage.getItem('language');
        return LANGUAGES.includes(stored) ? stored : 'US';
    } catch {
        return 'US';
    }
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(readStoredLanguage);

    useEffect(() => {
        try {
            localStorage.setItem('language', language);
        } catch {
            // storage unavailable: language still applies for this visit
        }
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
