/**
 * Projects.
 *
 * `image`: import a screenshot, or null to show a generated placeholder.
 * `details` (optional): long description shown on the project page.
 *
 * Text that differs per language is written as { US: "...", ID: "..." }.
 * Text that is the same in both languages is written once.
 */
import previewPortfolio from "@/assets/PreviewImage/portfolio.png";

export const projects = [
    {
        slug: "portfolio",
        title: "riskiaryaputra.devs.web.id",
        category: "Web",
        stack: ["React.js", "JavaScript", "Tailwind CSS"],
        description: {
            US: "Personal website & portfolio showcasing my projects, skills, and professional journey. Built with modern web technologies for optimal performance.",
            ID: "Situs web & portofolio pribadi yang menampilkan proyek, keahlian, dan perjalanan profesional saya. Dibangun dengan teknologi web modern untuk performa optimal."
        },
        image: previewPortfolio,
        liveLink: "https://riskiaryaputra.devs.web.id",
        githubLink: "https://github.com/riskiaryaptr/portofolio",
        date: "Jan 2026",
        featured: true,
        details: {
            paragraphs: [
                {
                    US: "This is my personal website built from scratch since February 2024 using modern technologies like React.js and JavaScript.",
                    ID: "Ini adalah situs web pribadi saya yang dibangun dari awal sejak Februari 2024 menggunakan teknologi modern seperti React.js dan JavaScript."
                },
                {
                    US: "I use this platform to:",
                    ID: "Saya menggunakan platform ini untuk:"
                }
            ],
            bullets: [
                {
                    US: "Showcase my portfolio and projects",
                    ID: "Menampilkan portofolio dan proyek saya"
                },
                {
                    US: "Share developer resources and stats",
                    ID: "Berbagi sumber daya dan statistik pengembang"
                },
                {
                    US: "Experiment with new web technologies",
                    ID: "Bereksperimen dengan teknologi web baru"
                }
            ],
            closing: [
                {
                    US: "The site is continuously evolving. You're welcome to fork or explore the source code. If you find it helpful, consider giving it a ⭐ on GitHub.",
                    ID: "Situs ini terus berkembang. Anda dipersilakan untuk fork atau menjelajahi kode sumber. Jika Anda merasa terbantu, pertimbangkan untuk memberikan ⭐ di GitHub."
                },
                {
                    US: "Have questions or feedback? I'd love to hear from you",
                    ID: "Punya pertanyaan atau masukan? Saya ingin mendengar dari Anda"
                }
            ]
        }
    },
    {
        slug: "clario-upscaler",
        title: "Clario Upscaler AI Image",
        category: "Web",
        stack: ["React.js", "TensorFlow.js", "Tailwind CSS"],
        description: {
            US: "AI-powered image upscaling tool that enhances image quality up to 4x resolution using deep learning models.",
            ID: "Alat peningkatan kualitas gambar berbasis AI yang dapat meningkatkan resolusi hingga 4x menggunakan model deep learning."
        },
        image: null,
        liveLink: "https://upscaler-demo.com",
        githubLink: "https://github.com/riskiaryaptr/clario-upscale",
        date: {
            US: "Dec 2025",
            ID: "Des 2025"
        },
        featured: true
    }
];
