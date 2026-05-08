import React, { useState } from "react";
import Header from "@/Frontend/Components/Header";
import { SparklesIcon, ChevronRightIcon, AcademicCapIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import Logo1 from "@/assets/logo/logo-1.png";
import Logo2 from "@/assets/logo/logo-2.png";
import Logo3 from "@/assets/logo/logo-3.png";
import Logo4 from "@/assets/logo/logo-4.png";
import Logo5 from "@/assets/logo/logo-5.png";
import Logo6 from "@/assets/logo/logo-6.png";

function About() {
    const { language } = useLanguage();
    const t = translations[language];
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleAccordion = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    const experiences = t.about.experiences.map((exp, index) => ({
        ...exp,
        logo: [Logo1, Logo2, Logo3][index]
    }));

    const education = t.about.education.map((edu, index) => ({
        ...edu,
        logo: [Logo4, Logo5][index] || Logo4
    }));

    const organizations = t.about.organizations.map((org, index) => ({
        ...org,
        logo: [Logo6][index] || Logo6
    }));

    return (
        
        <div className="dark:bg-gray-950 min-h-screen transition-all duration-300">
            <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-2">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    
                    <Header />

                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                                <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800 dark:text-gray-100">
                                    {t.about.title}
                                </h1>

                                <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">
                                    <span>{t.about.subtitle}</span>                                
                                </div>
                            </div>
                        
                            <div className="mt-5 space-y-2.5 border-b border-gray-200 dark:border-gray-800 pb-8 animate-slideUp" style={{ animationDelay: '0.15s' }}>
                                <p className="text-body leading-loose tracking-tight font-medium text-gray-600 dark:text-gray-300">
                                    {t.about.bio1}
                                </p>

                                <p className="text-body leading-loose tracking-tight font-medium text-gray-600 dark:text-gray-300">
                                    {t.about.bio2}
                                </p>

                                <p className="text-body leading-loose tracking-tight font-medium text-gray-600 dark:text-gray-300">
                                    {t.about.bio3}
                                </p>

                                <div className="mt-2 pt-4">
                                    <p className="text-[15px] text-gray-600 dark:text-gray-400 mb-3">{t.about.bestRegards}</p>
                                    <p className="font-signature font-bold tracking-normal text-[35px] leading-none text-blue-500 dark:text-gray-300">Riski Arya</p>
                                </div>
                            </div>
                            
                            {/* Experience */}
                            <div className="mt-6 border-b border-gray-200 dark:border-gray-800 pb-8 animate-slideUp" style={{ animationDelay: '0.25s' }}>
                                <div className="flex items-center gap-x-2">
                                    <SparklesIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                                    <h2 className="text-[20px] font-semibold leading-normal tracking-tight text-gray-700 dark:text-gray-100">{t.about.experienceTitle}</h2>
                                </div>

                                <p className="mt-2 text-[15px] font-medium leading-normal tracking-tight text-gray-500 dark:text-gray-400">{t.about.experienceSubtitle}</p>

                                <div className="mt-6 space-y-4">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="group relative rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-3 sm:p-4 transition-all duration-300">
                                            <div className="flex flex-row items-start gap-5.5">
                                                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2">
                                                    <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[15px] sm:text-[16.2px] font-semibold text-gray-700 dark:text-gray-200 leading-normal tracking-normal">
                                                        {exp.title}
                                                    </h3>
                                                        
                                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[13.5px] text-gray-600 dark:text-gray-400 font-medium leading-normal tracking-normal">
                                                        <span className="font-medium text-gray-500 dark:text-gray-400">{exp.company}</span>
                                                        <span className="text-gray-500 dark:text-gray-600 hidden sm:inline">/</span>
                                                        <span className="text-gray-500 dark:text-gray-600">{exp.location}</span>
                                                     </div>

                                                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px] text-gray-400 dark:text-gray-500 font-medium leading-normal">
                                                        <span>{exp.period}</span>
                                                        <span className="text-gray-300 dark:text-gray-700">•</span>
                                                        <span>{exp.duration}</span>
                                                        <span className="text-gray-300 dark:text-gray-700">•</span>
                                                        <span>{exp.type}</span>
                                                        <span className="text-gray-300 dark:text-gray-700">•</span>
                                                        <span>{exp.mode}</span>
                                                    </div>

                                                    <button onClick={() => toggleAccordion(`exp-${index}`)} className="mt-3.5 flex items-center gap-x-1 text-[13px] sm:text-[13.5px] font-semibold leading-normal tracking-normal text-gray-500 dark:text-gray-400">
                                                        <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expandedItem === `exp-${index}` ? 'rotate-90' : ''}`} />
                                                        {expandedItem === `exp-${index}` ? t.about.hideResponsibilities : t.about.showResponsibilities}
                                                    </button>

                                                    {expandedItem === `exp-${index}` && (
                                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                                            <h4 className="text-[14px] font-semibold text-gray-700 dark:text-gray-200 mb-2.5">{t.about.keyResponsibilities}</h4>
                                                            <ul className="space-y-2">
                                                                {exp.responsibilities.map((resp, idx) => (
                                                                    <li key={idx} className="flex items-baseline gap-x-2 text-[14px] text-gray-600 dark:text-gray-400 leading-normal">
                                                                        <span className="text-blue-500 dark:text-gray-400 shrink-0">•</span>
                                                                        <span>{resp}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                                
                            {/* Education */}
                            <div className="mt-6 border-b border-gray-200 dark:border-gray-800 pb-8 animate-slideUp" style={{ animationDelay: '0.25s' }}>
                                <div className="flex items-center gap-x-2">
                                    <AcademicCapIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                                    <h2 className="text-[20px] font-semibold leading-normal tracking-tight text-gray-700 dark:text-gray-100">{t.about.educationTitle}</h2>
                                </div>

                                <p className="mt-2 text-[15px] font-medium leading-normal tracking-tight text-gray-500 dark:text-gray-400">{t.about.educationSubtitle}</p>

                                <div className="mt-6 space-y-4">
                                    {education.map((edu, index) => (
                                        <div key={index} className="group relative rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-3 sm:p-4 transition-all duration-300">
                                            <div className="flex flex-row items-start gap-5.5">
                                                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2">
                                                    <img src={edu.logo} alt={edu.degree} className="h-full w-full object-contain" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[15px] sm:text-[16.2px] font-semibold text-gray-700 dark:text-gray-200 leading-normal tracking-normal">
                                                        {edu.degree}
                                                    </h3>
                                                        
                                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[13.5px] text-gray-600 dark:text-gray-400 font-medium leading-normal tracking-normal">
                                                        <span className="font-medium text-gray-500 dark:text-gray-400">{edu.institution}</span>
                                                        <span className="text-gray-500 dark:text-gray-600 hidden sm:inline">/</span>
                                                        <span className="text-gray-500 dark:text-gray-600">{edu.location}</span>
                                                    </div>

                                                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px] text-gray-400 dark:text-gray-500 font-medium leading-normal">
                                                        <span>{edu.period}</span>
                                                        <span className="text-gray-300 dark:text-gray-700">•</span>
                                                        <span>{edu.status}</span>
                                                        <span className="text-gray-300 dark:text-gray-700">•</span>
                                                        <span>{edu.type}</span>
                                                    </div>

                                                    <button onClick={() => toggleAccordion(`edu-${index}`)} className="mt-3.5 flex items-center gap-x-1 text-[13px] sm:text-[13.5px] font-semibold leading-normal tracking-normal text-gray-500 dark:text-gray-400">
                                                        <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expandedItem === `edu-${index}` ? 'rotate-90' : ''}`} />
                                                        {expandedItem === `edu-${index}` ? t.about.hideResponsibilities : t.about.showResponsibilities}
                                                    </button>

                                                    {expandedItem === `edu-${index}` && (
                                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                                            <h4 className="text-[14px] font-semibold text-gray-700 dark:text-gray-200 mb-2.5">{t.about.activitiesAchievements}</h4>
                                                            <ul className="space-y-2">
                                                                {edu.responsibilities.map((resp, idx) => (
                                                                    <li key={idx} className="flex items-baseline gap-x-2 text-[14px] text-gray-600 dark:text-gray-400 leading-normal">
                                                                        <span className="text-blue-500 dark:text-gray-400 shrink-0">•</span>
                                                                        <span>{resp}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Organization */}
                            <div className="mt-6 animate-slideUp" style={{ animationDelay: '0.35s' }}>
                                <div className="flex items-center gap-x-2">
                                    <BuildingOffice2Icon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                                    <h2 className="text-[20px] font-semibold leading-normal tracking-tight text-gray-700 dark:text-gray-100">{t.about.organizationTitle}</h2>
                                </div>

                                <p className="mt-2 text-[15px] font-medium leading-normal tracking-tight text-gray-500 dark:text-gray-400">{t.about.organizationSubtitle}</p>

                                <div className="mt-6 space-y-4">
                                    {organizations.map((org, index) => (
                                        <div key={index} className="group relative rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-3 sm:p-4 transition-all duration-300">
                                            <div className="flex flex-row items-start gap-5.5">
                                                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2">
                                                    <img src={org.logo} alt={org.name} className="h-full w-full object-contain" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[15px] sm:text-[16.2px] font-semibold text-gray-700 dark:text-gray-200 leading-normal tracking-normal">
                                                        {org.name}
                                                    </h3>

                                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-[13.5px] text-gray-600 dark:text-gray-400 font-medium leading-normal tracking-normal">
                                                        <span className="font-medium text-gray-500 dark:text-gray-400">{org.role}</span>
                                                        <span className="text-gray-500 dark:text-gray-600 hidden sm:inline">/</span>
                                                        <span className="text-gray-500 dark:text-gray-600">{org.location}</span>
                                                    </div>

                                                     <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px] text-gray-400 dark:text-gray-500 font-medium leading-normal">
                                                        <span>{org.period}</span>
                                                        <span className="text-gray-300 dark:text-gray-700">•</span>
                                                        <span>{org.duration}</span>
                                                        <span className="text-gray-300 dark:text-gray-700">•</span>
                                                        <span>{org.type}</span>
                                                    </div>

                                                    <button onClick={() => toggleAccordion(`org-${index}`)} className="mt-3.5 flex items-center gap-x-1 text-[13px] sm:text-[13.5px] font-semibold leading-normal tracking-normal text-gray-500 dark:text-gray-400">
                                                        <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expandedItem === `org-${index}` ? 'rotate-90' : ''}`} />
                                                        {expandedItem === `org-${index}` ? t.about.hideResponsibilities : t.about.showResponsibilities}
                                                    </button>

                                                    {expandedItem === `org-${index}` && (
                                                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                                            <h4 className="text-[14px] font-semibold text-gray-700 dark:text-gray-200 mb-2.5">{t.about.activitiesAchievements}</h4>
                                                            <ul className="space-y-2">
                                                                {org.activities.map((act, idx) => (
                                                                    <li key={idx} className="flex items-baseline gap-x-2 text-[14px] text-gray-600 dark:text-gray-400 leading-normal">
                                                                        <span className="text-blue-500 dark:text-gray-400 shrink-0">•</span>
                                                                        <span>{act}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default About;