import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
      href: '/',
    },
    {
      text: 'Products',
      links: [
        {
          text: 'Desktop',
          href: getPermalink('/#features'),
        },
        {
          text: 'E-Shop',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Booking',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Mobile',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Tips and Trick',
          href: getBlogPermalink(),
        },
        {
          text: 'Updates',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Information',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
      ],
    },
    {
      text: 'Documentation',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Desktop', href: '#' },
        { text: 'E-Shop', href: '#' },
        { text: 'Booking', href: '#' },
        { text: 'Mobile', href: '#' },
        { text: 'Desoktop (Docker)', href: '#' },
        { text: 'E-Shop (Docker)', href: '#' },
        { text: 'Booking (Docker)', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Hardware', href: '#' },
        { text: 'Investor', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Support 24h', href: '#' },
        { text: 'Find Bugs', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
