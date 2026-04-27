import React, { useMemo, useState } from "react";
import Header from "@/Frontend/Components/Header";
import ProjectPreview from "@/Frontend/Components/ProjectPreview";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Cert1 from "@/assets/Certificates/Certificate-01.jpg";
import Cert2 from "@/assets/Certificates/Certificate-02.jpg";
import Cert3 from "@/assets/Certificates/Certificate-03.jpg";
import Preview1 from "@/assets/PreviewImage/Preview-1.jpg";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function Projects() {
    const { language } = useLanguage();
    const t = translations[language];
    const [activeDemo, setActiveDemo] = useState(null);

    const projectImages = {
        1: Cert1,
        2: Cert2,
        3: Cert3
    };

    const projects = useMemo(() => {
        return t.projects.data.map(item => ({
            ...item,
            image: item.image || projectImages[item.id] || Cert1,
            previewImage: item.previewImage || item.image || projectImages[item.id] || Cert1
        }));
    }, [t]);

    return (
        
        <div className="dark:bg-gray-950 min-h-screen transition-all duration-300">
            <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-2">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    
                    <Header />

                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            {activeDemo ? (
                                <ProjectPreview project={activeDemo} onBack={() => setActiveDemo(null)} />
                            ) : (
                                <>
                                    <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                                        <h1 className="text-[23px] font-bold tracking-tight leading-tight text-gray-800 dark:text-gray-100">
                                            {t.projects.title}
                                        </h1>

                                        <div className="mt-1 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">
                                            <span>{t.projects.subtitle}</span>                                
                                        </div>
                                    </div>

                                    <div className="mt-6 animate-slideUp" style={{ animationDelay: '0.35s' }}>
                                        {projects.length > 0 ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {projects.map((project) => (
                                                    <div key={project.id} className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col h-full relative">                                        
                                                        <a onClick={(e) => { e.preventDefault(); setActiveDemo(project); }} href="#" className="bg-gray-50 mb-1 dark:bg-gray-800 overflow-hidden relative border-b border-gray-100 dark:border-gray-800 shrink-0 block group">                                                            
                                                            <div className="absolute top-0 right-0 z-10">
                                                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white rounded-bl-xl">
                                                                    <StarIcon className="w-3.5 h-3.5 text-white" />
                                                                    <span className="text-[12px] font-semibold leading-normal tracking-wide">{t.projects.featuredLabel}</span>
                                                                </div>
                                                            </div>
                                                            <img src={project.image} alt={project.title} className="w-full h-auto object-contain"/>
                                                        </a>

                                                        <div className="p-3 flex-1 flex flex-col">
                                                            <div className="flex items-center mb-2">
                                                                <h3 className="text-[15.4px] font-semibold text-gray-700 dark:text-gray-200 leading-[22px] tracking-wide line-clamp-1">
                                                                    {project.title}
                                                                </h3>
                                                            </div>

                                                            <p className="text-[12.5px] font-normal text-gray-500 dark:text-gray-400 leading-relaxed tracking-wide mb-5 line-clamp-2">
                                                                {project.description}
                                                            </p>

                                                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
                                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 text-[12px] font-semibold leading-normal tracking-wide text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg transition-all border border-gray-100 dark:border-gray-700">
                                                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                                    </svg>
                                                                    <span>{t.projects.sourceCodeLabel}</span>
                                                                </a>

                                                                <button onClick={() => setActiveDemo(project)} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-1.5 text-[12px] font-semibold leading-normal tracking-wide text-white bg-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border dark:border-gray-700 rounded-lg transition-all shadow-sm">
                                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                    </svg>
                                                                    <span>{t.projects.liveDemoLabel}</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center py-24 bg-transparent border border-dashed border-gray-300 dark:border-gray-800 rounded-3xl animate-in fade-in zoom-in duration-500">
                                                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-full mb-4">
                                                    <FaceFrownIcon className="h-10 w-10 text-gray-400 dark:text-gray-600" />
                                                </div>

                                                <h3 className="text-[17px] font-bold text-gray-400 dark:text-gray-600 tracking-wide leading-normal mb-1">
                                                    {t.projects.noDataTitle}
                                                </h3>

                                                <p className="text-[14px] tracking-wide text-gray-400 dark:text-gray-500 font-medium leading-normal">
                                                    {t.projects.noDataSubtitle}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Projects;