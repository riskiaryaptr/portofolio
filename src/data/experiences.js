/**
 * Work experience, newest / most relevant first.
 *
 * Text that differs per language is written as { US: "...", ID: "..." }.
 * Text that is the same in both languages is written once.
 */
import logoSleman from "@/assets/Logo/dinas-pendidikan-sleman.webp";
import logoIsc from "@/assets/Logo/informatics-study-club.webp";
import logoCodingCamp from "@/assets/Logo/coding-camp-dbs.webp";

export const experiences = [
    {
        id: "exp-1",
        company: "Dinas Pendidikan Kabupaten Sleman",
        logo: logoSleman,
        title: {
            US: "Frontend Web Developer",
            ID: "Pengembang Web Frontend"
        },
        location: "Sleman, Yogyakarta, Indonesia 🇮🇩",
        period: {
            US: "Aug 2024 - Nov 2024",
            ID: "Agu 2024 - Nov 2024"
        },
        duration: {
            US: "4 months",
            ID: "4 bulan"
        },
        type: {
            US: "Intern (Full-time)",
            ID: "Magang (Penuh waktu)"
        },
        mode: "Onsite",
        responsibilities: {
            US: [
                "Developed and maintained responsive web applications using React and Tailwind CSS",
                "Collaborated with design team to implement user-friendly interfaces",
                "Optimized application performance and improved loading times by 40%"
            ],
            ID: [
                "Mengembangkan dan memelihara aplikasi web yang responsif menggunakan React dan Tailwind CSS",
                "Berkolaborasi dengan tim desain untuk menerapkan antarmuka yang ramah pengguna",
                "Mengoptimalkan kinerja aplikasi dan meningkatkan waktu pemuatan sebesar 40%"
            ]
        }
    },
    {
        id: "exp-2",
        company: "Informatics Study Club",
        logo: logoIsc,
        title: {
            US: "Web Developer",
            ID: "Pengembang Web"
        },
        location: {
            US: "Semarang, Central Java, Indonesia 🇮🇩",
            ID: "Semarang, Jawa Tengah, Indonesia 🇮🇩"
        },
        period: {
            US: "Mar 2024 - Aug 2025",
            ID: "Mar 2024 - Agu 2025"
        },
        duration: {
            US: "1 year 6 months",
            ID: "1 tahun 6 bulan"
        },
        type: {
            US: "Part-time",
            ID: "Paruh waktu"
        },
        mode: "Onsite",
        responsibilities: {
            US: [
                "Built and maintained club website using modern web technologies",
                "Implemented new features based on member feedback and requirements",
                "Conducted code reviews and mentored junior developers"
            ],
            ID: [
                "Membangun dan memelihara situs web klub menggunakan teknologi web modern",
                "Menerapkan fitur baru berdasarkan umpan balik dan persyaratan anggota",
                "Melakukan ulasan kode dan membimbing pengembang junior"
            ]
        }
    },
    {
        id: "exp-3",
        company: {
            US: "Coding Camp powered by DBS Foundation",
            ID: "Coding Camp didukung oleh DBS Foundation"
        },
        logo: logoCodingCamp,
        title: {
            US: "Frontend Developer And Back End Developer Cohort",
            ID: "Kohort Pengembang Frontend dan Pengembang Backend"
        },
        location: {
            US: "Remote",
            ID: "Jarak Jauh"
        },
        period: "Feb 2025 - Jul 2025",
        duration: {
            US: "6 months",
            ID: "6 bulan"
        },
        type: {
            US: "Full-time",
            ID: "Penuh waktu"
        },
        mode: {
            US: "Remote",
            ID: "Jarak Jauh"
        },
        responsibilities: {
            US: [
                "Completed intensive full-stack development training program",
                "Built multiple projects using React, Node.js, and databases",
                "Collaborated with team members on real-world applications"
            ],
            ID: [
                "Menyelesaikan program pelatihan pengembangan full-stack yang intensif",
                "Membangun beberapa proyek menggunakan React, Node.js, dan database",
                "Berkolaborasi dengan anggota tim pada aplikasi dunia nyata"
            ]
        }
    }
];
