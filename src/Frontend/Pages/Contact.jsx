import React, { useState, useMemo } from "react";
import Header from "@/Frontend/Components/Header";
import EmailIcon from "@/assets/Icon/Email.png";
import InstagramIcon from "@/assets/Icon/Instagram.png";
import LinkedInIcon from "@/assets/Icon/LinkedIn.png";
import GithubIcon from "@/assets/Icon/Github.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

function Contact() {
    const { language } = useLanguage();
    const t = translations[language];

    const contactLinks = useMemo(() => {
        const assets = [
            { icon: EmailIcon, gradientClass: "gradient-gmail", url: "/" },
            { icon: InstagramIcon, gradientClass: "gradient-instagram", url: "/" },
            { icon: LinkedInIcon, gradientClass: "gradient-linkedin", url: "/" },
            { icon: GithubIcon, gradientClass: "gradient-github", url: "/" }
        ];

        return t.contact.links.map((link, index) => ({
            ...link,
            ...assets[index]
        }));
    }, [t]);
    
    return (

        <div className="dark:bg-gray-950 min-h-screen transition-all duration-300">
            <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-2">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    
                    <Header />

                    <main className="flex-1 w-full py-28 lg:py-12">  
                        <div className="animate-slideUp" style={{ animationDelay: '0.05s' }}>
                            <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800 dark:text-gray-100">
                                {t.contact.title}
                            </h1>

                            <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 dark:text-gray-400 border-b border-dashed pb-6 border-gray-300 dark:border-gray-800">
                                <span>{t.contact.subtitle}</span>                                
                            </div>
                        </div>

                        <div className="mt-6 animate-slideUp" style={{ animationDelay: '0.15s' }}>
                            <h2 className="text-body font-semibold leading-normal tracking-wide text-gray-700 dark:text-gray-200 mb-4 text-[15.3px]">
                                {t.contact.socialHeading}
                            </h2>   

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {contactLinks.map((link, index) => (
                                    <div key={index} className={`relative overflow-hidden rounded-xl ${link.gradientClass} p-3.5 text-white min-h-[140px] flex items-center group cursor-pointer transition-all duration-300 hover:shadow-lg`}>
                                        <div className="absolute -left-6 -top-8 opacity-[0.08] pointer-events-none">
                                            <img src={link.icon} alt="" className="h-42 w-42 object-contain brightness-0 invert -rotate-12" />
                                        </div> 

                                        <div className="relative z-10 flex-1">
                                            <h3 className="text-[16.1px] font-semibold leading-normal tracking-normal mb-1">{link.title}</h3>
                                            <p className="text-[13px] font-medium leading-normal tracking-normal opacity-80 mb-5">{link.description}</p>
                                            
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-x-2 px-3.5 py-1.5 bg-white/25 backdrop-blur-md rounded-lg text-[12.3px] font-semibold leading-normal tracking-normal transition-all border border-white/10 text-white">
                                                {link.buttonText}
                                                <ArrowUpRightIcon className="h-3 w-3 stroke-[3]" />
                                            </a>
                                        </div>

                                        <div className="relative z-10 ml-4 flex-none">
                                            <div className="h-12 w-12 rounded-xl border border-white/20 flex items-center justify-center bg-white/5 shadow-inner">
                                                <img src={link.icon} alt={link.title} className="h-6 w-6 object-contain brightness-0 invert" />
                                            </div>
                                        </div> 
                                                                                    
                                        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 animate-slideUp" style={{ animationDelay: '0.25s' }}>
                            <h2 className="text-body font-semibold leading-normal tracking-wide text-gray-700 dark:text-gray-200 mb-4 text-[15.3px]">{t.contact.formHeading}</h2>
                            
                            <form className="space-y-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input type="text" placeholder={t.contact.formName} className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-[14px] outline-none text-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-1 dark:focus:ring-gray-700 focus:border-transparent transition-all placeholder:text-gray-400"/>
                                    <input type="email" placeholder={t.contact.formEmail} className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-[14px] outline-none text-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-1 dark:focus:ring-gray-700 focus:border-transparent transition-all placeholder:text-gray-400"/>
                                </div>

                                <textarea placeholder={t.contact.formMessage} className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-[14px] outline-none text-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-1 dark:focus:ring-gray-700 focus:border-transparent transition-all h-32 resize-none placeholder:text-gray-400"/>

                                <button type="button" className="w-full py-3 bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-200 border border-transparent dark:border-gray-800 rounded-lg font-bold text-[14px] shadow-sm transition-all outline-none dark:focus:ring-1 dark:focus:ring-gray-700">
                                    {t.contact.formButton}
                                </button>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Contact;