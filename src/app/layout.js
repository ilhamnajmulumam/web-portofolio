import './globals.css';

export const metadata = {
    title: {
        default: 'Ilham Najmul Umam | Web Developer & AI Enthusiast',
        template: '%s | Ilham Najmul Umam',
    },
    description:
        'Portofolio Ilham Najmul Umam - Web Developer yang berfokus pada Next.js, React, dan Artificial Intelligence.',
    keywords: [
        'Ilham Najmul Umam',
        'Web Developer Indonesia',
        'Next.js Developer',
        'React Developer',
        'AI Developer',
        'Portfolio Web Developer',
    ],
    authors: [{ name: 'Ilham Najmul Umam' }],
    creator: 'Ilham Najmul Umam',
    metadataBase: new URL('https://domainkamu.com'), // ganti dengan domain asli
    openGraph: {
        title: 'Ilham Najmul Umam | Web Developer',
        description:
            'Portofolio resmi Ilham Najmul Umam - Next.js & AI Developer.',
        url: 'https://domainkamu.com',
        siteName: 'Ilham Portfolio',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ilham Najmul Umam | Web Developer',
        description: 'Web Developer spesialis Next.js dan AI.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
