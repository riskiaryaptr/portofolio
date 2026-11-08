import React from "react";
import profilePic from "@/assets/Profile/profile.webp";

export const PROFILE_PIC = profilePic;

export function VerifiedBadge({ size = 18 }) {
    return (
        <svg role="img" aria-label="Verified" fill="currentColor" viewBox="0 0 24 24" className="text-blue-400 shrink-0" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
            <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61-.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
        </svg>
    );
}

/** Small square logo; falls back to initials when no image is given. */
export function LogoBox({ src, name, className = "h-14 w-14" }) {
    const initials = name
        .split(/\s+/)
        .filter((w) => /^[A-Za-z0-9]/.test(w))
        .slice(0, 2)
        .map((w) => w[0].toUpperCase())
        .join("");

    return (
        <div className={`flex flex-none items-center justify-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 ${className}`}>
            {src ? (
                <img src={src} alt={`${name} logo`} loading="lazy" decoding="async" className="h-full w-full object-contain" />
            ) : (
                <span aria-hidden="true" className="text-[15px] font-bold tracking-wide text-gray-500 dark:text-gray-400">{initials}</span>
            )}
        </div>
    );
}
