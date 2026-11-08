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
import previewPustivo from "@/assets/PreviewImage/pustivo.webp";
import previewTanamjo from "@/assets/PreviewImage/tanamjo.webp";

export const projects = [
    {
        slug: "pustivo",
        title: "Pustivo",
        category: "Web",
        stack: ["Laravel", "Tailwind CSS", "MySQL", "Apriori Algorithm"],
        description: {
            US: "Digital library website and app that recommends books to borrow using the Apriori algorithm, based on titles other members often borrow together.",
            ID: "Website dan aplikasi perpustakaan digital yang merekomendasikan buku untuk dipinjam dengan algoritma Apriori, berdasarkan judul yang sering dipinjam bersamaan oleh peminjam lain."
        },
        image: previewPustivo,
        liveLink: "https://pustivo.devs.web.id",
        githubLink: "",
        featured: true,
        details: {
            paragraphs: [
                {
                    US: "Pustivo helps library members find their next read. Instead of browsing the catalog blindly, the system looks at the library's borrowing history and finds books that are frequently borrowed together.",
                    ID: "Pustivo membantu anggota perpustakaan menemukan bacaan berikutnya. Alih-alih menelusuri katalog tanpa arah, sistem melihat riwayat peminjaman perpustakaan dan mencari buku-buku yang sering dipinjam bersamaan."
                },
                {
                    US: "Main features:",
                    ID: "Fitur utama:"
                }
            ],
            bullets: [
                {
                    US: "Book recommendations generated with the Apriori association-rule algorithm",
                    ID: "Rekomendasi buku yang dihasilkan dengan algoritma association rule Apriori"
                },
                {
                    US: "Searchable book catalog",
                    ID: "Katalog buku yang bisa dicari"
                },
                {
                    US: "Member login with personal borrowing history",
                    ID: "Login anggota dengan riwayat peminjaman pribadi"
                },
                {
                    US: "Responsive layout with light and dark mode",
                    ID: "Tampilan responsif dengan mode terang dan gelap"
                }
            ],
            closing: [
                {
                    US: "Recommendations get more relevant as more borrowing data is collected, because the rules are mined from real transactions in the library.",
                    ID: "Rekomendasi makin relevan seiring bertambahnya data peminjaman, karena aturan asosiasinya digali dari transaksi nyata di perpustakaan."
                }
            ]
        }
    },
    {
        slug: "tanamjo",
        title: "Tanamjo",
        category: "Web",
        stack: ["Machine Learning", "Image Recognition", "Computer Vision"],
        description: {
            US: "AI-powered plant care platform that identifies plants, detects diseases early, and gives care recommendations backed by botanical expertise.",
            ID: "Platform perawatan tanaman berbasis AI yang mengidentifikasi tanaman, mendeteksi penyakit sejak dini, dan memberi rekomendasi perawatan berdasarkan keahlian botani."
        },
        image: previewTanamjo,
        liveLink: "https://tanamjo.devs.web.id",
        githubLink: "",
        featured: true,
        details: {
            paragraphs: [
                {
                    US: "Tanamjo combines artificial intelligence with botanical expertise to create a complete plant care ecosystem. The name comes from \"Tanaman\" (plant) and \"Jo\" (together), reflecting the goal of bringing people and plants closer through technology.",
                    ID: "Tanamjo menggabungkan kecerdasan buatan dengan keahlian botani untuk menciptakan ekosistem perawatan tanaman yang lengkap. Namanya berasal dari \"Tanaman\" dan \"Jo\" (bersama), mencerminkan tujuan mendekatkan manusia dan tanaman melalui teknologi."
                },
                {
                    US: "It started as a simple plant identification app and grew into a platform that helps users understand what their plants need, from growing media and watering schedules to handling pests and diseases.",
                    ID: "Berawal dari aplikasi identifikasi tanaman sederhana, Tanamjo berkembang menjadi platform yang membantu pengguna memahami kebutuhan tanamannya, mulai dari media tanam dan jadwal penyiraman hingga penanganan hama dan penyakit."
                },
                {
                    US: "Main features:",
                    ID: "Fitur utama:"
                }
            ],
            bullets: [
                {
                    US: "Plant identification from photos using image recognition",
                    ID: "Identifikasi tanaman dari foto menggunakan image recognition"
                },
                {
                    US: "Disease detection with symptoms, causes, and treatment options",
                    ID: "Deteksi penyakit lengkap dengan gejala, penyebab, dan pilihan penanganan"
                },
                {
                    US: "Plant care guides and an encyclopedia of plant species",
                    ID: "Panduan perawatan dan ensiklopedia spesies tanaman"
                },
                {
                    US: "Growth tracking and seasonal care tips",
                    ID: "Pelacakan pertumbuhan dan tips perawatan musiman"
                }
            ],
            closing: [
                {
                    US: "The model keeps improving through user interactions and expert feedback, making professional-grade plant diagnosis accessible to home gardeners, farmers, and plant enthusiasts.",
                    ID: "Model terus berkembang melalui interaksi pengguna dan masukan ahli, sehingga diagnosis tanaman setara profesional bisa diakses oleh pekebun rumahan, petani, dan pecinta tanaman."
                }
            ]
        }
    },
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
    }
];
