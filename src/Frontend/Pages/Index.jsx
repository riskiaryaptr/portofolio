import React from "react";
import Header from "@/Frontend/Components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function Index() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        
        <div className="dark:bg-gray-950 min-h-screen transition-all duration-300">
            <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-2">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />

                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                                <h1 className="text-[26.5px] font-bold tracking-tight leading-normal text-gray-700 dark:text-gray-100">
                                    {t.home.greeting}
                                </h1>

                                <div className="mt-1.5 flex items-center gap-x-4 text-[14.5px] font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400">
                                    <span>• {t.home.location}</span>
                                    <span>• {t.home.workMode}</span>
                                </div>
                            </div>
                        
                            <p className="mt-4.5 text-body leading-loose tracking-tight font-medium text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800 pb-7 animate-slideUp" style={{ animationDelay: '0.15s' }}>
                                {t.home.bio}
                            </p>
                            
                            <div className="mt-6 animate-slideUp" style={{ animationDelay: '0.25s' }}>
                                <div className="flex items-center gap-x-2">
                                    <span className="font-bold text-lg tracking-wide leading-normal text-gray-700 dark:text-gray-100">{"</>"} {t.home.skillsTitle}</span>
                                </div>

                                <p className="mt-1 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400">{t.home.skillsSubtitle}</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Index; 