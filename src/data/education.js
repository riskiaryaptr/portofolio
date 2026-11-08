/**
 * Education history.
 *
 * Text that differs per language is written as { US: "...", ID: "..." }.
 * Text that is the same in both languages is written once.
 */
import logoUms from "@/assets/Logo/universitas-muhammadiyah-semarang.webp";

export const education = [
    {
        id: "edu-1",
        school: "Universitas Muhammadiyah Semarang",
        program: {
            US: "S1 Informatics Engineering",
            ID: "S1 Teknik Informatika"
        },
        logo: logoUms,
        location: {
            US: "Semarang, Central Java, Indonesia 🇮🇩",
            ID: "Semarang, Jawa Tengah, Indonesia 🇮🇩"
        },
        period: {
            US: "2022 - Present",
            ID: "2022 - Sekarang"
        },
        status: {
            US: "Expected 2026",
            ID: "Diharapkan 2026"
        },
        type: {
            US: "Full-time",
            ID: "Penuh waktu"
        },
        activities: {
            US: [
                "Studying software development, web technologies, and computer science fundamentals",
                "Participating in programming competitions and hackathons",
                "Active member of Informatics Study Club"
            ],
            ID: [
                "Mempelajari pengembangan perangkat lunak, teknologi web, dan dasar-dasar ilmu komputer",
                "Berpartisipasi dalam kompetisi pemrograman dan hackathon",
                "Anggota aktif Informatics Study Club"
            ]
        }
    },
    {
        id: "edu-2",
        school: "SMA Negeri 3 Demak",
        program: {
            US: "Science Major",
            ID: "MIPA (Matematika dan Ilmu Pengetahuan Alam)"
        },
        logo: null,
        location: {
            US: "Demak, Central Java, Indonesia 🇮🇩",
            ID: "Demak, Jawa Tengah, Indonesia 🇮🇩"
        },
        period: "2019 - 2022",
        status: {
            US: "Graduated",
            ID: "Lulus"
        },
        type: {
            US: "Full-time",
            ID: "Penuh waktu"
        },
        activities: {
            US: [
                "Excellence in Science and Mathematics",
                "Active member of Student Council (OSIS)",
                "Participated in various school competitions"
            ],
            ID: [
                "Unggul dalam mata pelajaran IPA dan Matematika",
                "Anggota aktif Organisasi Siswa Intra Sekolah (OSIS)",
                "Berpartisipasi dalam berbagai kompetisi sekolah"
            ]
        }
    }
];
