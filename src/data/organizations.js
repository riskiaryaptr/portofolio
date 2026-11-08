/**
 * Organizations & communities.
 *
 * Text that differs per language is written as { US: "...", ID: "..." }.
 * Text that is the same in both languages is written once.
 */
import logoHimafor from "@/assets/Logo/himafor-unimus.webp";

export const organizations = [
    {
        id: "org-1",
        name: "Himpunan Mahasiswa Informatika (Himafor)",
        role: {
            US: "Puskominfo Division",
            ID: "Divisi Puskominfo"
        },
        location: "Universitas Muhammadiyah Semarang, Indonesia 🇮🇩",
        period: "2022 - 2024",
        duration: {
            US: "1 month",
            ID: "1 bulan"
        },
        type: {
            US: "Full-time",
            ID: "Penuh Waktu"
        },
        activities: {
            US: [
                "Managed and handled informatics and communication division tasks",
                "Participated in organizational events and activities within the faculty",
                "Contributed to the design and distribution of organizational content and media",
                "Collaborated with fellow members on department-level student programs"
            ],
            ID: [
                "Mengelola dan menangani tugas-tugas divisi informasi dan komunikasi",
                "Berpartisipasi dalam kegiatan dan acara organisasi di tingkat fakultas",
                "Berkontribusi dalam perancangan dan penyebaran konten serta media organisasi",
                "Berkolaborasi dengan sesama anggota dalam program mahasiswa tingkat jurusan"
            ]
        },
        logo: logoHimafor
    }
];
