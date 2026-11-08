/**
 * Skills shown on the Home page, grouped into cards (in display order).
 * Icons come from react-icons (https://react-icons.github.io/react-icons/);
 * `color` is the brand colour shown on hover.
 *
 * Text that differs per language is written as { US: "...", ID: "..." }.
 */
import {
    SiTypescript, SiJavascript, SiPhp, SiPython, 
    SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss,
    SiLaravel, SiNodedotjs, 
    SiPostgresql, SiMysql, SiSupabase, SiFirebase, SiDocker, SiGit, SiGithubactions,
} from "react-icons/si";
import { TbDatabase, TbApi, TbBrandReactNative, TbBrandAzure } from "react-icons/tb";

export const skillGroups = [
    {
        id: "programming",
        title: { US: "Programming", ID: "Pemrograman" },
        items: [
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "SQL", icon: TbDatabase, color: "#F29111" },
        ],
    },
    {
        id: "frontend",
        title: "Frontend",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
            { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
            { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ],
    },
    {
        id: "backend",
        title: "Backend & API",
        items: [
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
            { name: "Node.js (Express)", icon: SiNodedotjs, color: "#5FA04E" },
            { name: "REST API Design", icon: TbApi, color: "#3B82F6" },
        ],
    },
    {
        id: "databases-tools",
        title: { US: "Databases & Tools", ID: "Database & Tools" },
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
        ],
    },
];
