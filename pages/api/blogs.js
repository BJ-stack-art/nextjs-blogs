export default function handler(req,res) {
    res.status(200).json([
        {
            id: 1,
            title: 'Membuat Aplikasi Laravel',
            day: 'Tuesday',
            date: '24 Agustus 2021',
            summary: 'lorem ipsum dolor sit amet',
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
        {
            id: 2,
            title: 'Membuat Aplikasi React',
            day: 'Tuesday',
            date: '24 Agustus 2021',
            summary: 'lorem ipsum dolor sit amet',
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
        {
            id: 3,
            title: 'Membuat Aplikasi Vue Js',
            day: 'Tuesday',
            date: '24 Agustus 2021',
            summary: 'lorem ipsum dolor sit amet',
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
        {
            id: 4,
            title: 'Membuat Project Gatsby',
            day: 'Tuesday',
            date: '24 Agustus 2021',
            summary: 'lorem ipsum dolor sit amet',
            content: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
    ])
}