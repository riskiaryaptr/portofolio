import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useContent } from "@/data";

function Segmented({ label, value, onChange, options, size = "sm" }) {
    const pad = size === "lg" ? "py-2" : "py-1";
    return (
        <div role="radiogroup" aria-label={label} className="flex-1 flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            {options.map((opt) => {
                const active = value === opt.value;
                return (
                    <button key={opt.value} type="button" role="radio" aria-checked={active} aria-label={opt.ariaLabel} onClick={() => onChange(opt.value)}
                        className={`flex-1 flex items-center justify-center gap-1.5 ${pad} rounded-full text-[11px] font-bold transition-all duration-300 ${active ? opt.activeClass : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}>
                        {opt.content}
                    </button>
                );
            })}
        </div>
    );
}

export function LanguageToggle({ size }) {
    const { language, setLanguage } = useLanguage();
    const { t } = useContent();
    const activeClass = "bg-blue-500 dark:bg-gray-700 text-white shadow-sm";
    return (
        <Segmented label={t.nav.language} value={language} onChange={setLanguage} size={size} options={[
            { value: "US", content: "US", ariaLabel: "English", activeClass },
            { value: "ID", content: "ID", ariaLabel: "Bahasa Indonesia", activeClass },
        ]} />
    );
}

export function ThemeToggle({ size, showLabels = false }) {
    const { theme, setTheme } = useTheme();
    const { t } = useContent();
    return (
        <Segmented label={t.nav.theme} value={theme} onChange={setTheme} size={size} options={[
            { value: "light", ariaLabel: t.nav.light, activeClass: "bg-white text-gray-800 shadow-sm", content: <><SunIcon className="h-4 w-4" />{showLabels && <span>{t.nav.light}</span>}</> },
            { value: "dark", ariaLabel: t.nav.dark, activeClass: "bg-gray-700 text-white shadow-sm", content: <><MoonIcon className="h-4 w-4" />{showLabels && <span>{t.nav.dark}</span>}</> },
        ]} />
    );
}
