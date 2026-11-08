import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UsersIcon, TrophyIcon, FolderPlusIcon, EnvelopeOpenIcon, ChevronRightIcon, XMarkIcon, Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { SiWhatsapp } from "react-icons/si";
import { PROFILE_PIC, VerifiedBadge } from "@/Frontend/Components/Brand";
import { LanguageToggle, ThemeToggle } from "@/Frontend/Components/Preferences";
import { useContent } from "@/data";

const navigationItems = [
    { key: "home", href: "/", icon: HomeIcon },
    { key: "about", href: "/about", icon: UsersIcon },
    { key: "achievements", href: "/achievements", icon: TrophyIcon },
    { key: "projects", href: "/projects", icon: FolderPlusIcon },
    { key: "contact", href: "/contact", icon: EnvelopeOpenIcon },
];

const DRAWER_MS = 400;

function Header() {
    const { t, site } = useContent();
    const [menuMounted, setMenuMounted] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const closeBtnRef = useRef(null);
    const openBtnRef = useRef(null);

    const openMenu = () => {
        setMenuMounted(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setMenuVisible(true)));
    };

    const closeMenu = useCallback(() => {
        setMenuVisible(false);
        setTimeout(() => {
            setMenuMounted(false);
            openBtnRef.current?.focus();
        }, DRAWER_MS);
    }, []);

    // Lock page scroll, focus the close button and close on Escape while the menu is open.
    useEffect(() => {
        if (!menuMounted) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeBtnRef.current?.focus();
        const onKey = (e) => e.key === "Escape" && closeMenu();
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [menuMounted, closeMenu]);

    return (
        <div className="lg:sticky lg:top-0 lg:w-63 lg:shrink-0 lg:self-start">
            {/* Mobile top bar */}
            <header className="lg:hidden fixed inset-x-0 top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800">
                <nav aria-label={t.nav.menu} className="flex items-center justify-between px-4 py-3">
                    <NavLink to="/" className="flex items-center gap-x-3 min-w-0">
                        <img src={PROFILE_PIC} alt={site.name} width="36" height="36" className="h-9 w-9 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800" />
                        <span className="min-w-0">
                            <span className="flex items-center gap-x-1.5 font-bold text-[15px] leading-tight text-gray-800 dark:text-white">
                                <span className="truncate">{site.name}</span>
                                <VerifiedBadge size={16} />
                            </span>
                            <span className="block text-[12px] font-medium leading-tight text-gray-500 dark:text-gray-400">{site.jobTitle}</span>
                        </span>
                    </NavLink>

                    <button ref={openBtnRef} type="button" onClick={openMenu} aria-expanded={menuMounted} aria-controls="mobile-menu" aria-label={t.nav.openMenu}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </nav>
            </header>

            {/* Desktop sidebar */}
            <nav id="desktop-sidebar" aria-label={t.nav.menu} className="hidden lg:flex lg:flex-col lg:pt-11 lg:pr-8 lg:max-h-screen lg:overflow-y-auto">
                <div className="flex flex-col items-center text-center mb-5 border-b border-gray-300 dark:border-gray-800 pb-5">
                    <div className="h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden mb-3">
                        <img src={PROFILE_PIC} alt={site.name} width="96" height="96" className="w-full h-full object-cover" />
                    </div>

                    <p className="font-bold text-base text-gray-800 dark:text-white flex items-center gap-x-2">
                        <span>{site.name}</span>
                        <VerifiedBadge />
                    </p>

                    <p className="text-[13px] font-medium leading-normal text-gray-500 dark:text-gray-400 mb-4">@{site.username}</p>

                    <div className="flex w-full items-center gap-x-1.5">
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex flex-col gap-y-1.5 border-b border-gray-300 dark:border-gray-800 pb-3">
                    {navigationItems.map((item) => (
                        <NavLink key={item.key} to={item.href} end className={({ isActive }) => `flex items-center gap-x-3 px-3 py-2.5 text-[15.1px] font-semibold leading-normal rounded-lg transition-colors ${isActive ? "bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-100" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"}`}>
                            <item.icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />{t.nav[item.key]}
                        </NavLink>
                    ))}
                </div>

                <p className="mt-3 mb-1 text-[14px] font-medium leading-normal text-gray-500 dark:text-gray-400 text-center">{t.header.copyright}</p>
            </nav>

            {/* Mobile drawer */}
            {menuMounted && (
                <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={t.nav.menu} className="lg:hidden fixed inset-0 z-[60]">
                    <div onClick={closeMenu} aria-hidden="true"
                        className={`absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 ${menuVisible ? "opacity-100" : "opacity-0"}`} />

                    <div style={{ transitionDuration: `${DRAWER_MS}ms` }}
                        className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-white dark:bg-gray-950 shadow-2xl rounded-l-3xl transition-transform ease-[cubic-bezier(0.32,0.72,0,1)] ${menuVisible ? "translate-x-0" : "translate-x-full"}`}>

                        {/* Profile */}
                        <div className="flex items-start justify-between gap-3 px-5 pt-6 pb-5">
                            <div className="flex items-center gap-x-3 min-w-0">
                                <img src={PROFILE_PIC} alt="" width="48" height="48" className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-100 dark:ring-gray-800" />
                                <div className="min-w-0">
                                    <p className="flex items-center gap-x-1.5 font-bold text-[15.5px] text-gray-800 dark:text-white">
                                        <span className="truncate">{site.name}</span>
                                        <VerifiedBadge size={16} />
                                    </p>
                                    <p className="text-[12.5px] font-medium text-gray-500 dark:text-gray-400">@{site.username}</p>
                                </div>
                            </div>

                            <button ref={closeBtnRef} type="button" onClick={closeMenu} aria-label={t.nav.closeMenu}
                                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-3">
                            {/* Navigation */}
                            <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{t.nav.menu}</p>
                            <ul className="space-y-1">
                                {navigationItems.map((item, i) => (
                                    <li key={item.key} style={{ transitionDelay: menuVisible ? `${80 + i * 40}ms` : "0ms" }}
                                        className={`transition-all duration-300 ${menuVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                                        <NavLink to={item.href} end onClick={closeMenu}
                                            className={({ isActive }) => `group flex items-center gap-x-3 rounded-2xl px-2 py-2 text-[15px] font-semibold transition-colors ${isActive ? "bg-blue-50 text-blue-600 dark:bg-gray-800/70 dark:text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900"}`}>
                                            {({ isActive }) => (
                                                <>
                                                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-blue-500 text-white dark:bg-gray-700" : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"}`}>
                                                        <item.icon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                    <span className="flex-1">{t.nav[item.key]}</span>
                                                    <ChevronRightIcon className={`h-4 w-4 ${isActive ? "text-blue-400 dark:text-gray-400" : "text-gray-300 dark:text-gray-600"}`} aria-hidden="true" />
                                                </>
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Preferences */}
                            <p className="mt-6 px-2 pb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{t.nav.preferences}</p>
                            <div className="mx-1 space-y-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60 p-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-16 shrink-0 text-[13px] font-semibold text-gray-600 dark:text-gray-400">{t.nav.language}</span>
                                    <LanguageToggle size="lg" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-16 shrink-0 text-[13px] font-semibold text-gray-600 dark:text-gray-400">{t.nav.theme}</span>
                                    <ThemeToggle size="lg" showLabels />
                                </div>
                            </div>
                        </div>

                        {/* Quick contact */}
                        <div className="border-t border-gray-100 dark:border-gray-800 px-5 pt-4 pb-6">
                            <div className="grid grid-cols-2 gap-2">
                                <a href={`mailto:${site.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 py-2.5 text-[13px] font-semibold text-gray-700 dark:text-gray-200">
                                    <EnvelopeIcon className="h-4 w-4" /> Email
                                </a>
                                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-[13px] font-semibold text-white">
                                    <SiWhatsapp className="h-4 w-4" /> WhatsApp
                                </a>
                            </div>
                            <p className="mt-4 text-center text-[12px] font-medium text-gray-400 dark:text-gray-500">{t.header.copyright}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
