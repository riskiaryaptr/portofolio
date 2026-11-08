import React, { createContext, useContext, useEffect, useState } from "react";
import { site } from "@/data/site";

const ThemeContext = createContext(null);

function readStoredTheme() {
    try {
        return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
        return "light";
    }
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(readStoredTheme);

    useEffect(() => {
        const dark = theme === "dark";
        document.documentElement.classList.toggle("dark", dark);
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? site.themeColor.dark : site.themeColor.light);
        try {
            localStorage.setItem("theme", theme);
        } catch {
            // storage unavailable (private mode): theme still works for this visit
        }
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
    return ctx;
}
