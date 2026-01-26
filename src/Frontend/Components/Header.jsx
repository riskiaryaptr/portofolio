import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UsersIcon, TrophyIcon, FolderPlusIcon, SquaresPlusIcon, ChatBubbleLeftRightIcon, EnvelopeOpenIcon, SunIcon, MoonIcon,} from "@heroicons/react/24/outline";
import profilePic from "@/assets/Profile/Profile-1.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const navigationItems = [
    { key: "home", href: "/", icon: HomeIcon },
    { key: "about", href: "/about", icon: UsersIcon },
    { key: "achievements", href: "/achievements", icon: TrophyIcon },
    { key: "projects", href: "/projects", icon: FolderPlusIcon },
    { key: "dashboard", href: "/dashboard", icon: SquaresPlusIcon },
    { key: "chat", href: "/chat", icon: ChatBubbleLeftRightIcon },
    { key: "contact", href: "/contact", icon: EnvelopeOpenIcon },
];

function Header() {
    const { language, setLanguage } = useLanguage();
    const t = translations[language];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        
        const root = window.document.documentElement;
        const body = document.body;
        
        if (!root || !body) return;
        
        if (theme === "dark") {
            root.classList.add("dark");
            body.classList.add("dark");
        } else {
            root.classList.remove("dark");
            body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        if (mobileMenuOpen) {
            const timer = setTimeout(() => setIsAnimated(true), 10);
            return () => clearTimeout(timer);
        }
    }, [mobileMenuOpen]);

    const closeMenu = () => {
        setIsAnimated(false);
        setTimeout(() => setMobileMenuOpen(false), 500);    
    };

    return (
        
        <div className="lg:sticky lg:top-0 lg:w-63 lg:shrink-0 lg:self-start">
            <header className="lg:hidden fixed inset-x-0 top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
                <nav aria-label="Global" className="flex items-center justify-between p-5">
                    <NavLink to="/" className="-m-1.5 p-1 flex items-center gap-x-3">
                        <img src={profilePic} alt="Riski Arya Putra" className="h-8 w-auto rounded-full"/>
                        <h2 className="font-bold text-[15px] text-gray-800 dark:text-white flex items-center gap-x-1.5">
                            <span>Riski Arya Putra</span>
                            <div className="relative inline-block">
                                <div className="tooltip-container relative">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61-.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                                    </svg>
                                </div>
                            </div>
                        </h2>
                    </NavLink>

                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-3 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300">
                        <span className="sr-only">Open main menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </nav>
            </header>

            <nav id="desktop-sidebar" className="hidden lg:flex lg:flex-col lg:pt-12 lg:pr-8 lg:max-h-screen lg:overflow-y-auto">
                <div className="flex flex-col items-center text-center mb-5 border-b border-gray-300 dark:border-gray-800 pb-5">
                    <div className="h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-3">
                        <img src={profilePic} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    
                    <h2 className="font-bold text-base text-gray-800 dark:text-white flex items-center gap-x-2">
                        <span>Riski Arya Putra</span>   
                        <div className="relative inline-block">
                            <div className="tooltip-container relative">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61-.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                                </svg>
                            </div>
                        </div>
                    </h2>
                    
                    <p className="text-[13px] font-medium leading-normal text-gray-500 dark:text-gray-400 mb-4">@riskiaryaputra</p>

                    <div className="flex w-full items-center gap-x-1.5">
                        <div className="flex-1 flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
                            <button onClick={() => setLanguage("US")} className={`flex-1 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${language === "US" ? "bg-blue-500 dark:bg-gray-700 text-white shadow-md font-bold" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}>US</button>
                            <button onClick={() => setLanguage("ID")} className={`flex-1 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${language === "ID" ? "bg-blue-500 dark:bg-gray-700 text-white shadow-md font-bold" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}>ID</button>
                        </div>

                        <div className="flex-1 flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
                            <button onClick={() => setTheme("light")} className={`flex-1 flex justify-center items-center py-1 rounded-full transition-all duration-300 ${theme === "light" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}>
                                <SunIcon className="h-4 w-4" />
                            </button>

                            <button onClick={() => setTheme("dark")} className={`flex-1 flex justify-center items-center py-1 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-gray-700 text-white shadow-sm" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}>
                                <MoonIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
        
                <div className="flex flex-col gap-y-1.5 border-b border-gray-300 dark:border-gray-800 pb-3">
                    {navigationItems.map((item) => (
                        <NavLink key={item.key} to={item.href} className={({ isActive }) => `flex items-center gap-x-3 px-3 py-2.5 text-[15.1px] font-semibold leading-normal rounded-lg transition-colors ${ isActive ? "bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-100" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"}`}>
                            <item.icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />{t.nav[item.key]}
                        </NavLink>
                    ))} 
                </div>

                <div className="mt-3 text-[14px] font-medium leading-normal text-gray-500 dark:text-gray-400 text-center">
                    <p className="mb-1">{t.header.copyright}</p>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div id="mobile-menu" className="relative z-50 lg:hidden" >
                    <div className={`fixed inset-0 bg-gray-900/50 transition-opacity duration-700 ease-in-out ${isAnimated ? "opacity-100" : "opacity-0"}`} onClick={closeMenu} />
                    
                    <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-5 transform transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isAnimated ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <img src={profilePic} alt="Riski Arya Putra" className="h-8 w-auto rounded-full"/>
                                <h2 className="font-bold text-[15px] text-gray-600 dark:text-gray-200 flex items-center gap-x-1.5">
                                    <span>Riski Arya Putra</span>
                                    <div className="relative inline-block">
                                        <div className="tooltip-container relative">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61-.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </h2>
                            </div>
                            
                            <button type="button" onClick={closeMenu} className="-m-3 rounded-md p-2.5 text-gray-700 dark:text-gray-300">
                                <span className="sr-only">{t.nav.closeMenu}</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-7 flex items-center gap-x-3 border-b border-gray-300 dark:border-gray-800 pb-5">
                            <div className="flex-1 flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
                                <button onClick={() => setLanguage("US")} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold transition-all ${language === "US" ? "bg-blue-500 dark:bg-gray-700 text-white shadow-sm" : "text-gray-400 dark:text-gray-500"}`}>US</button>
                                <button onClick={() => setLanguage("ID")} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold transition-all ${language === "ID" ? "bg-blue-500 dark:bg-gray-700 text-white shadow-sm" : "text-gray-400 dark:text-gray-500"}`}>ID</button>
                            </div>

                            <div className="flex-1 flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
                                <button onClick={() => setTheme("light")} className={`flex-1 flex justify-center items-center py-1.5 rounded-full transition-all ${theme === "light" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 dark:text-gray-500"}`}>
                                    <SunIcon className="h-4 w-4" />
                                </button>

                                <button onClick={() => setTheme("dark")} className={`flex-1 flex justify-center items-center py-1.5 rounded-full transition-all ${theme === "dark" ? "bg-gray-700 text-white shadow-sm" : "text-gray-400 dark:text-gray-500"}`}>
                                    <MoonIcon className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 flow-root">
                            <div className="py-3 space-y-3 border-b border-gray-300 dark:border-gray-800 pb-4">   
                                {navigationItems.map((item) => (
                                    <NavLink key={item.key} to={item.href} onClick={closeMenu} className={({ isActive }) => `-mx-3 flex items-center gap-x-3.5 rounded-lg px-3 py-2.5 text-[15px] font-semibold leading-normal transition-colors ${ isActive ? "bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-100" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"}`}>
                                        <item.icon className="h-[18px] w-[18px] shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                                        {t.nav[item.key]}
                                    </NavLink>
                                ))}
                            </div>


                            <div className="mt-3 text-xs font-medium leading-normal text-gray-500 dark:text-gray-400 text-center">
                                <p className="mb-1">{t.header.copyright}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
