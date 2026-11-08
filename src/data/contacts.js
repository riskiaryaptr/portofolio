/**
 * Contact cards on the Contact page. Addresses and URLs come from site.js;
 * a card whose `url` is empty is hidden.
 *
 * Text that differs per language is written as { US: "...", ID: "..." }.
 */
import { site } from "@/data/site";
import emailIcon from "@/assets/Icon/Email.webp";
import whatsappIcon from "@/assets/Icon/WhatsApp.svg";
import instagramIcon from "@/assets/Icon/Instagram.webp";
import linkedinIcon from "@/assets/Icon/LinkedIn.webp";
import githubIcon from "@/assets/Icon/Github.webp";

export const contacts = [
    {
        id: "email",
        icon: emailIcon,
        gradientClass: "gradient-gmail",
        url: `mailto:${site.email}`,
        title: { US: "Stay in Touch", ID: "Tetap Terhubung" },
        description: site.email,
        buttonText: { US: "Send Email", ID: "Kirim Email" },
    },
    {
        id: "whatsapp",
        icon: whatsappIcon,
        gradientClass: "gradient-whatsapp",
        url: `https://wa.me/${site.whatsapp}`,
        title: { US: "Chat on WhatsApp", ID: "Chat via WhatsApp" },
        description: site.whatsappDisplay,
        buttonText: { US: "Chat Now", ID: "Chat Sekarang" },
    },
    {
        id: "instagram",
        icon: instagramIcon,
        gradientClass: "gradient-instagram",
        url: site.socials.instagram,
        title: { US: "Follow My Journey", ID: "Ikuti Perjalanan Saya" },
        description: { US: "Follow my creative journey.", ID: "Ikuti perjalanan kreatif saya." },
        buttonText: { US: "Follow Me", ID: "Ikuti Saya" },
    },
    {
        id: "linkedin",
        icon: linkedinIcon,
        gradientClass: "gradient-linkedin",
        url: site.socials.linkedin,
        title: { US: "Let's Connect", ID: "Mari Terhubung" },
        description: { US: "Connect with me professionally.", ID: "Terhubung dengan saya secara profesional." },
        buttonText: { US: "Connect Now", ID: "Hubungkan Sekarang" },
    },
    {
        id: "github",
        icon: githubIcon,
        gradientClass: "gradient-github",
        url: site.socials.github,
        title: { US: "Explore the Code", ID: "Jelajahi Kode" },
        description: { US: "Explore my open-source work.", ID: "Jelajahi karya sumber terbuka saya." },
        buttonText: { US: "View Code", ID: "Lihat Kode" },
    },
];
