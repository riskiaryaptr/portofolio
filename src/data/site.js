/**
 * Site identity, contact details and SEO metadata.
 *
 * Plain JavaScript only (no asset imports, no `@/` aliases): this file is
 * also read by vite.config.js at build time to generate per-page HTML,
 * sitemap.xml and robots.txt.
 */

export const site = {
    // Public URL of the deployed site, without trailing slash.
    url: "https://riskiaryaputra.devs.web.id",
    name: "Riski Arya Putra",
    username: "riskiaryaputra",
    jobTitle: "Frontend Developer",
    email: "riskiary1402@gmail.com",
    // WhatsApp number in international format, digits only.
    whatsapp: "6287830943025",
    whatsappDisplay: "+62 878-3094-3025",
    location: { city: "Demak", region: "Central Java", country: "ID" },
    // Image used when a page is shared on social media (file in /public).
    ogImage: "/og-image.png",
    themeColor: { light: "#ffffff", dark: "#030712" },

    // Leave a URL empty ("") to hide that card on the Contact page.
    socials: {
        github: "https://github.com/riskiaryaptr",
        linkedin: "",
        instagram: "",
    },

    keywords: [
        "Riski Arya Putra",
        "Frontend Developer",
        "React Developer",
        "Web Developer Indonesia",
        "Laravel",
        "Tailwind CSS",
        "Portfolio",
        "Demak",
        "Semarang",
    ],
};

/**
 * One entry per page. `path` must match the route in App.jsx.
 * `title` is shown in the browser tab and search results (keep it under ~60 characters),
 * `description` under ~160 characters.
 */
export const pages = {
    home: {
        path: "/",
        title: {
            US: "Riski Arya Putra — Frontend Developer",
            ID: "Riski Arya Putra — Frontend Developer",
        },
        description: {
            US: "Frontend Developer from Demak, Indonesia building fast, responsive and accessible web apps with React, JavaScript, Laravel and Tailwind CSS.",
            ID: "Frontend Developer asal Demak, Indonesia yang membangun aplikasi web cepat, responsif dan mudah diakses dengan React, JavaScript, Laravel dan Tailwind CSS.",
        },
    },
    about: {
        path: "/about",
        title: { US: "About", ID: "Tentang" },
        description: {
            US: "Background, work experience, education and organizations of Riski Arya Putra, Frontend Developer and Informatics student at Universitas Muhammadiyah Semarang.",
            ID: "Latar belakang, pengalaman kerja, pendidikan dan organisasi Riski Arya Putra, Frontend Developer dan mahasiswa Informatika Universitas Muhammadiyah Semarang.",
        },
    },
    achievements: {
        path: "/achievements",
        title: { US: "Achievements", ID: "Pencapaian" },
        description: {
            US: "Certificates and courses completed by Riski Arya Putra, including Coding Camp DBS Foundation and Digital Talent Scholarship 2025.",
            ID: "Sertifikat dan kursus yang diselesaikan Riski Arya Putra, termasuk Coding Camp DBS Foundation dan Digital Talent Scholarship 2025.",
        },
    },
    projects: {
        path: "/projects",
        title: { US: "Projects", ID: "Proyek" },
        description: {
            US: "Web projects built by Riski Arya Putra with React, JavaScript and Tailwind CSS — live demos and source code.",
            ID: "Proyek web buatan Riski Arya Putra dengan React, JavaScript dan Tailwind CSS — demo langsung dan kode sumber.",
        },
    },
    contact: {
        path: "/contact",
        title: { US: "Contact", ID: "Kontak" },
        description: {
            US: "Get in touch with Riski Arya Putra by email or WhatsApp for collaborations, freelance work or job opportunities.",
            ID: "Hubungi Riski Arya Putra lewat email atau WhatsApp untuk kolaborasi, pekerjaan freelance atau peluang kerja.",
        },
    },
};

/** Full <title> for a page: the home title as-is, other pages get " | Name". */
export function pageTitle(key, lang = "US") {
    const title = pages[key].title[lang];
    return key === "home" ? title : `${title} | ${site.name}`;
}

/** schema.org Person data, embedded as JSON-LD for search engines. */
export function personJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.name,
        alternateName: site.username,
        jobTitle: site.jobTitle,
        url: site.url,
        image: site.url + site.ogImage,
        email: `mailto:${site.email}`,
        address: {
            "@type": "PostalAddress",
            addressLocality: site.location.city,
            addressRegion: site.location.region,
            addressCountry: site.location.country,
        },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Muhammadiyah Semarang" },
        knowsAbout: ["JavaScript", "React", "Laravel", "Tailwind CSS", "Bootstrap", "Frontend Development"],
        sameAs: Object.values(site.socials).filter(Boolean),
    };
}
