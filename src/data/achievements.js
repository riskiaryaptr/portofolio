/**
 * Certificates & badges.
 *
 * `type` must be a key of ui.achievements.types, `category` a key of ui.achievements.categories.
 *
 * Text that differs per language is written as { US: "...", ID: "..." }.
 * Text that is the same in both languages is written once.
 */
import logoDbs from "@/assets/Logo/dbs-foundation.webp";
import logoKomdigi from "@/assets/Logo/komdigi.webp";
import certCodingCamp from "@/assets/Certificates/coding-camp-dbs-2025.webp";
import certDataScience from "@/assets/Certificates/dts-data-science-2025.webp";
import certAiMarketing from "@/assets/Certificates/dts-ai-digital-marketing-2025.webp";

export const achievements = [
    {
        id: 1,
        title: {
            US: "Coding Camp DBS Foundation (Front-End and Back End Developer)",
            ID: "Coding Camp DBS Foundation (Pengembang Frontend dan Backend)"
        },
        issuer: "DBS Foundation & Dicoding",
        issuerLogo: logoDbs,
        image: certCodingCamp,
        type: "Frontend",
        category: "Course",
        credentialId: "CC25/GRAD/XXV-07/FC454D5Y0655",
        issuedDate: {
            US: "July 2025",
            ID: "Juli 2025"
        },
        description: {
            US: "The Coding Camp DBS Foundation program is a prestigious initiative designed to produce competent, industry-ready Full-Stack developers. During this intensive program, I delved into modern web architectures from both Front-End and Back-End perspectives.\n\nThe primary focus was building high-efficiency, large-scale web applications. I mastered React.js for responsive and interactive interfaces with complex state management, and Node.js with Express.js for secure RESTful APIs and PostgreSQL database management.\n\nThe highlight was a Capstone Project where I collaborated in a cross-functional team to build a real-world solution. We applied Agile methodologies and Git version control, simulating a professional environment. Weekly mentorship provided insights into industry best practices, code optimization, and sustainable digital career strategies in Indonesia's tech ecosystem.",
            ID: "Program Coding Camp DBS Foundation adalah inisiatif bergengsi yang dirancang untuk menghasilkan pengembang Full-Stack yang kompeten dan siap kerja. Selama program intensif ini, saya mendalami arsitektur web modern dari perspektif Front-End dan Back-End.\n\nFokus utamanya adalah membangun aplikasi web berskala besar dengan efisiensi tinggi. Saya menguasai React.js untuk antarmuka yang responsif dan interaktif dengan manajemen state yang kompleks, serta Node.js dengan Express.js untuk API RESTful yang aman dan manajemen database PostgreSQL.\n\nPuncaknya adalah Proyek Capstone di mana saya berkolaborasi dalam tim lintas fungsi untuk membangun solusi dunia nyata. Kami menerapkan metodologi Agile dan kontrol versi Git, mensimulasikan lingkungan profesional. Mentorship mingguan memberikan wawasan tentang praktik terbaik industri, optimasi kode, dan strategi karir digital yang berkelanjutan di ekosistem teknologi Indonesia."
        },
        skillsLabel: {
            US: "Learning Curriculum",
            ID: "Kurikulum Pembelajaran"
        },
        skills: {
            US: [
                "Front-End Development",
                "Back-End Development",
                "Database Management",
                "RESTful API",
                "React.js",
                "Node.js",
                "Express.js",
                "PostgreSQL"
            ],
            ID: [
                "Pengembangan Front-End",
                "Pengembangan Back-End",
                "Manajemen Database",
                "RESTful API",
                "React.js",
                "Node.js",
                "Express.js",
                "PostgreSQL"
            ]
        }
    },
    {
        id: 2,
        title: {
            US: "Data Science and Its Utilization in Various Micro Skill Sectors - Digital Talent Scholarship 2025",
            ID: "Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor Micro Skill - Digital Talent Scholarship 2025"
        },
        issuer: {
            US: "Komdigi & Digital Literacy Development Center",
            ID: "Komdigi & Pusat Pengembangan Literasi Digital"
        },
        issuerLogo: logoKomdigi,
        image: certDataScience,
        type: "General",
        category: "Course",
        credentialId: "2299818850-14712/MS/BLSDM.Komdigi/2025",
        issuedDate: {
            US: "October 2025",
            ID: "Oktober 2025"
        },
        description: {
            US: "This micro-skill training program provided comprehensive insights into data science fundamentals and its practical applications across various industry sectors. The course was part of the prestigious Digital Talent Scholarship 2025 initiative by the Ministry of Communication and Digital Affairs (Komdigi).\n\nThe training covered essential data science concepts, data analysis techniques, and how organizations leverage data-driven decision making to improve business outcomes. I learned about data collection methods, basic statistical analysis, data visualization, and interpreting data insights for strategic planning.\n\nThis 1-hour intensive session equipped me with foundational knowledge to understand the role of data science in modern digital transformation across healthcare, finance, education, and e-commerce sectors. The program emphasized practical applications and real-world case studies.",
            ID: "Program pelatihan micro skill ini memberikan wawasan komprehensif tentang dasar-dasar data science dan aplikasi praktisnya di berbagai sektor industri. Kursus ini merupakan bagian dari inisiatif bergengsi Digital Talent Scholarship 2025 oleh Kementerian Komunikasi dan Digital (Komdigi).\n\nPelatihan mencakup konsep esensial data science, teknik analisis data, dan bagaimana organisasi memanfaatkan pengambilan keputusan berbasis data untuk meningkatkan hasil bisnis. Saya mempelajari metode pengumpulan data, analisis statistik dasar, visualisasi data, dan interpretasi wawasan data untuk perencanaan strategis.\n\nSesi intensif 1 jam ini membekali saya dengan pengetahuan dasar untuk memahami peran data science dalam transformasi digital modern di sektor kesehatan, keuangan, pendidikan, dan e-commerce. Program ini menekankan aplikasi praktis dan studi kasus dunia nyata."
        },
        skillsLabel: {
            US: "Key Learning Outcomes",
            ID: "Hasil Pembelajaran Utama"
        },
        skills: {
            US: [
                "Data Science Fundamentals",
                "Data Analysis",
                "Data Visualization",
                "Statistical Concepts",
                "Business Intelligence",
                "Digital Transformation",
                "Industry Applications"
            ],
            ID: [
                "Dasar-dasar Data Science",
                "Analisis Data",
                "Visualisasi Data",
                "Konsep Statistik",
                "Business Intelligence",
                "Transformasi Digital",
                "Aplikasi Industri"
            ]
        }
    },
    {
        id: 3,
        title: {
            US: "Digital Marketing with Artificial Intelligence (AI) for Entrepreneurs - Digital Academy 2025",
            ID: "Pemasaran Digital Dengan Kecerdasan Buatan (AI) Untuk Wirausaha - Digital Academy 2025"
        },
        issuer: "Komdigi & BPSDMP Yogyakarta",
        issuerLogo: logoKomdigi,
        image: certAiMarketing,
        type: "General",
        category: "Course",
        credentialId: "196104561110-46/DEA/BLSDM.Komdigi/2025",
        issuedDate: {
            US: "May 2025",
            ID: "Mei 2025"
        },
        description: {
            US: "An intensive 7-hour training program under the Digital Entrepreneurship Academy, part of the Digital Talent Scholarship 2025 initiative. This course focused on leveraging artificial intelligence technologies to enhance digital marketing strategies for entrepreneurial ventures.\n\nThe curriculum covered AI-powered marketing tools, customer behavior prediction using machine learning, automated content creation, chatbot implementation, and personalized marketing campaigns. I learned how to integrate AI solutions into marketing workflows to improve efficiency, targeting accuracy, and customer engagement.\n\nPractical sessions included hands-on experience with AI marketing platforms, analyzing marketing data with AI tools, and developing AI-driven marketing strategies. The program was organized by BPSDMP Yogyakarta in collaboration with Komdigi, providing insights into the future of digital marketing and entrepreneurship in Indonesia's growing digital economy.",
            ID: "Program pelatihan intensif 7 jam di bawah Digital Entrepreneurship Academy, bagian dari inisiatif Digital Talent Scholarship 2025. Kursus ini berfokus pada pemanfaatan teknologi kecerdasan buatan untuk meningkatkan strategi pemasaran digital bagi usaha wirausaha.\n\nKurikulum mencakup alat pemasaran berbasis AI, prediksi perilaku pelanggan menggunakan machine learning, pembuatan konten otomatis, implementasi chatbot, dan kampanye pemasaran yang dipersonalisasi. Saya belajar bagaimana mengintegrasikan solusi AI ke dalam alur kerja pemasaran untuk meningkatkan efisiensi, akurasi targeting, dan keterlibatan pelanggan.\n\nSesi praktis termasuk pengalaman langsung dengan platform pemasaran AI, menganalisis data pemasaran dengan alat AI, dan mengembangkan strategi pemasaran berbasis AI. Program ini diselenggarakan oleh BPSDMP Yogyakarta bekerja sama dengan Komdigi, memberikan wawasan tentang masa depan pemasaran digital dan kewirausahaan dalam ekonomi digital Indonesia yang berkembang."
        },
        skillsLabel: {
            US: "Core Competencies Acquired",
            ID: "Kompetensi Inti yang Diperoleh"
        },
        skills: {
            US: [
                "AI in Marketing",
                "Digital Marketing Strategy",
                "Marketing Automation",
                "Customer Analytics",
                "AI Tools",
                "Entrepreneurship",
                "Content Marketing",
                "Data-Driven Marketing"
            ],
            ID: [
                "AI dalam Pemasaran",
                "Strategi Pemasaran Digital",
                "Otomasi Pemasaran",
                "Analitik Pelanggan",
                "Alat AI",
                "Kewirausahaan",
                "Pemasaran Konten",
                "Pemasaran Berbasis Data"
            ]
        }
    }
];
