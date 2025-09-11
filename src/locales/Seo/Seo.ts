function setMeta(name: string, content: string) {
    if (typeof document === 'undefined') return;
    let m = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', name); document.head.appendChild(m); }
    m.setAttribute('content', content);
}

function setOg(property: string, content: string) {
    if (typeof document === 'undefined') return;
    let m = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
    if (!m) { m = document.createElement('meta'); m.setAttribute('property', property); document.head.appendChild(m); }
    m.setAttribute('content', content);
}

export function pageHeaders(title: string, desc?: string, opts?: { url?: string; image?: string; site?: string }) {
    const site = opts?.site ?? 'Higa Base';
    const d = desc ?? title;

    document.title = `${site} - ${title}`;
    setMeta('description', d);

    setOg('og:title', `${site} - ${title}`);
    setOg('og:description', d);
    if (opts?.url) setOg('og:url', opts.url);
    if (opts?.image) setOg('og:image', opts.image);

    setMeta('twitter:card', opts?.image ? 'summary_large_image' : 'summary');
    setMeta('twitter:title', `${site} - ${title}`);
    setMeta('twitter:description', d);
}

type PageHeaderOpts = { url?: string; image?: string; site?: string; locale?: string };

export const localePageHeader = (): PageHeaderOpts => {
    if (typeof window === 'undefined') return { site: 'Higa Base' };
    return {
        url: window.location.href,
        image: 'https://cdn.example.com/og/register-1200x630.png', // абсолютный URL
        site: 'Higa Base',
    };
};
