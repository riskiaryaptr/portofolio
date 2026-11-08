/**
 * Content entry point. Components read everything through useContent(),
 * which returns the data already resolved to the active language.
 *
 * Folder layout:
 *   site.js           name, contact details, social links, SEO per page
 *   ui.js             interface labels per language
 *   skills.js         Home → Skills (grouped cards)
 *   experiences.js    About → Experience
 *   education.js      About → Education
 *   organizations.js  About → Organizations
 *   achievements.js   Achievements page
 *   projects.js       Projects page
 *   contacts.js       Contact page cards
 */
import { useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { site, pages } from "@/data/site";
import { ui } from "@/data/ui";
import { skillGroups } from "@/data/skills";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { organizations } from "@/data/organizations";
import { achievements } from "@/data/achievements";
import { projects } from "@/data/projects";
import { contacts } from "@/data/contacts";

const isPlainObject = (v) => v !== null && typeof v === "object" && Object.getPrototypeOf(v) === Object.prototype;
const isTranslation = (v) => isPlainObject(v) && "US" in v && "ID" in v && Object.keys(v).length === 2;

/** Replace every { US, ID } pair in `value` with the text for `lang`. */
export function localize(value, lang) {
    if (isTranslation(value)) return value[lang];
    if (Array.isArray(value)) return value.map((v) => localize(v, lang));
    if (isPlainObject(value)) {
        return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, lang)]));
    }
    return value;
}

export function useContent() {
    const { language } = useLanguage();

    return useMemo(() => ({
        language,
        site,
        t: ui[language],
        pages: localize(pages, language),
        skillGroups: localize(skillGroups, language),
        experiences: localize(experiences, language),
        education: localize(education, language),
        organizations: localize(organizations, language),
        achievements: localize(achievements, language),
        projects: localize(projects, language),
        contacts: localize(contacts, language).filter((c) => c.url),
    }), [language]);
}
