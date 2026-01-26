import React, { useState } from "react";
import { XMarkIcon, ArrowLongRightIcon, ArrowLongUpIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function AchievementsModal({ achievement, onClose }) {
    const { language } = useLanguage();
    const t = translations[language];
    const [isExpanded, setIsExpanded] = useState(false);
    
    if (!achievement) return null;

    const paragraphs = achievement.description.split('\n\n');
    const hasMoreContent = achievement.description.length > 300 || paragraphs.length > 1 || (achievement.skills && achievement.skills.length > 0);
    
    return (
        
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 lg:p-8">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] animate-in fade-in duration-300" onClick={onClose}/>
            
            <div className="relative w-full h-full lg:h-[530px] lg:max-w-4xl bg-white dark:bg-gray-950 rounded-none lg:rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden animate-in lg:zoom-in-95 fade-in duration-300 border border-transparent dark:border-gray-800">        
                <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden relative">                    
                    <button onClick={onClose} className="lg:hidden absolute top-[5px] right-4 z-50 p-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 shadow-md transition-all">
                        <XMarkIcon className="h-4 w-4" />
                    </button>   
                    
                    <div className="w-full lg:w-[54%] bg-gray-50 dark:bg-gray-900 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-800 flex-shrink-0">
                        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-white/50 dark:bg-transparent">
                            <span className="text-[12.5px] font-normal text-gray-400 tracking-wider flex items-center gap-1.5 font-medium leading-normal">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>{t.achievements.modalPreview}</span>
                            </span>
                        </div>

                        <div className="flex-1 min-h-[300px] lg:min-h-0 flex items-center justify-center p-2 lg:p-4">
                            <img src={achievement.image} alt={achievement.title} className="max-w-full max-h-full object-contain rounded-lg shadow-sm cursor-zoom-in" onClick={() => window.open(achievement.image, '_blank')}/>
                        </div>

                        <div className="px-5 py-3 text-center border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-transparent">
                            <p className="text-[12.5px] font-medium leading-normal tracking-wide text-gray-400">
                                {t.achievements.modalClickZoom}
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[46%] flex flex-col bg-white dark:bg-gray-950 overflow-y-visible lg:overflow-hidden">
                        <div className="flex-1 lg:overflow-y-auto scroll-smooth no-scrollbar">
                            <div className="relative p-5 lg:p-5">                                
                                <button onClick={onClose} className="hidden lg:block absolute top-4 right-4 z-[60] p-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-full text-gray-400 hover:text-gray-800 dark:hover:text-white shadow-sm transition-all border border-transparent dark:border-gray-800">
                                    <XMarkIcon className="h-4 w-4" />
                                </button>

                                <h2 className="text-xl md:text-xl font-bold text-gray-800 dark:text-gray-100 leading-normal tracking-normal mb-3 max-w-[350px]">
                                    {achievement.title}
                                </h2>

                                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                                    {achievement.issuerLogo && (
                                        <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center relative">
                                            <img src={achievement.issuerLogo} alt={achievement.issuer} className="w-8 h-8 max-w-none object-contain absolute z-10"/>
                                        </div>
                                    )}

                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide truncate">{t.achievements.modalIssuedBy}</p>
                                        <p className="text-[13px] font-semibold leading-normal tracking-wide text-gray-700 dark:text-gray-200">{achievement.issuer}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-[100px_1fr] gap-y-5 gap-x-12 mb-3 border-b border-gray-100 dark:border-gray-800 pb-4">
                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t.achievements.modalType}</p>
                                        <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-200">{t.achievements.types[achievement.type] || achievement.type}</p>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t.achievements.modalCategory}</p>
                                        <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-200">{t.achievements.categories[achievement.category] || achievement.category}</p>
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t.achievements.modalDate}</p>
                                        <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-200">{achievement.issuedDate}</p>
                                    </div>

                                    <div className="flex flex-col gap-1.5 min-w-0">
                                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{t.achievements.modalCredentialId}</p>
                                        <p className="text-[12.5px] font-mono font-semibold text-gray-700 dark:text-gray-200 tracking-tight break-all leading-tight">
                                            {achievement.credentialId || "-"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className={`text-gray-600 dark:text-gray-400 leading-loose text-[15.2px] ${!isExpanded ? "line-clamp-6" : "flex flex-col gap-3"}`}>
                                        {paragraphs.map((paragraph, index) => (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    
                                    {!isExpanded && hasMoreContent && (
                                        <button onClick={() => setIsExpanded(true)} className="text-blue-600 font-semibold leading-normal tracking-wide text-[14px] text-left flex items-center gap-1.5 group w-fit">
                                            <span>{t.achievements.modalReadMore}</span>
                                            <ArrowLongRightIcon className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" />
                                        </button>
                                    )}

                                    {isExpanded && (
                                        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-1 duration-500">
                                            {achievement.skills && (
                                                <div className="mt-2 pb-4">
                                                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                                                        {achievement.skillsLabel}
                                                    </p>
                                                    
                                                    <div className="flex flex-wrap gap-2">
                                                        {achievement.skills.map((skill, index) => (
                                                            <span key={index} className="px-3.5 py-1.5 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-[12px] font-medium rounded-lg border border-gray-100 dark:border-gray-800 cursor-default">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <button onClick={() => setIsExpanded(false)} className="mt-0 text-gray-400 text-[12px] font-medium leading-normal tracking-wide w-fit hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                                {t.achievements.modalHideDetails}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AchievementsModal;