export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://www.kumarwaterproofingsolution.com/sitemap.xml',
    }
}
