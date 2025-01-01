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
          href: getPermalink('/desktop', 'page'),
        },
        {
          text: 'E-Shop',
          href: getPermalink('/eshop', 'page'),
        },
        {
          text: 'Booking',
          href: getPermalink('/booking', 'page'),
        },
        {
          text: 'Mobile',
          href: getPermalink('/mobile', 'page'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Tips and Trick',
          href: getPermalink('tips-and-trick', 'tag'),
        },
        {
          text: 'Updates',
          href: getPermalink('updates', 'tag'),
        },
        {
          text: 'Information',
          href: getPermalink('information', 'tag'),
        },
      ],
    },
    {
      text: 'Documentation',
      href: 'https://documentation.chauffeurpos.app',
      target: '_blank',
    },
  ],
  actions: [{ text: 'Download', href: getPermalink('/desktop', 'page') }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Desktop', href: getPermalink('/desktop', 'page') },
        { text: 'E-Shop', href: getPermalink('/eshop', 'page') },
        { text: 'Booking', href: getPermalink('/booking', 'page') },
        { text: 'Mobile', href: getPermalink('/mobile', 'page') },
        { text: 'Desoktop (Docker)', href: getPermalink('/desktop#docker', 'page') },
        { text: 'E-Shop (Docker)', href: getPermalink('/eshop#docker', 'page') },
        { text: 'Booking (Docker)', href: getPermalink('/booking#docker', 'page') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: 'https://apidocs.chauffeurpos.app', target: '_blank' },
        { text: 'Partners', href: getPermalink('/partners', 'page') },
        { text: 'Hardware', href: getPermalink('/hardware', 'page') },
        { text: 'Investor', href: getPermalink('/investor', 'page') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://documentation.chauffeurpos.app', target: '_blank' },
        { text: 'Support 24h', href: getPermalink('/support', 'page') },
        { text: 'Find Bugs', href: getPermalink('/find-bugs', 'page') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about', 'page') },
        { text: 'Blog', href: getPermalink('/blog', 'page') },
        { text: 'Careers', href: getPermalink('/carrers', 'page') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/chauffeurposapp/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
