import React, { useState } from "react";
import Header from "@/Frontend/Components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function Dashboard() {
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
                                <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800 dark:text-gray-100">
                                    {t.dashboard.title}
                                </h1>

                                <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">
                                    <span>{t.dashboard.subtitle}</span>                                
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;