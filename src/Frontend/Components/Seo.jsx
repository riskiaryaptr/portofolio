import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { site, pages, pageTitle } from "@/data/site";

function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

/**
 * Keeps <title>, description, canonical and Open Graph tags in sync with the
 * current page and language. The same tags are pre-rendered into each page's
 * HTML at build time (see vite.config.js) for crawlers that don't run JS.
 */
function Seo({ page, title, description }) {
    const { language } = useLanguage();

    useEffect(() => {
        const meta = pages[page];
        const fullTitle = title ? `${title} | ${site.name}` : pageTitle(page, language);
        const desc = description || meta.description[language];
        const url = site.url + (meta.path === "/" ? "/" : meta.path);

        document.title = fullTitle;
        document.documentElement.lang = language === "ID" ? "id" : "en";
        setMeta("name", "description", desc);
        setMeta("property", "og:title", fullTitle);
        setMeta("property", "og:description", desc);
        setMeta("property", "og:url", url);
        setMeta("property", "og:locale", language === "ID" ? "id_ID" : "en_US");
        setMeta("name", "twitter:title", fullTitle);
        setMeta("name", "twitter:description", desc);
        setCanonical(url);
    }, [page, title, description, language]);

    return null;
}

export default Seo;
