// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Berkeley Compute Docs',
  tagline: 'Documentation for Berkeley Compute',
  favicon: 'img/logo.png',

  url: 'https://docs.berkeleycompute.com',
  baseUrl: '/',

  organizationName: 'berkeleycompute',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/berkeleycompute/docs/tree/main/',
          routeBasePath: '/', // This makes docs the root
        },
        blog: false, // Disable the blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/berkeleycompute-social-card.jpg',
      navbar: {
        title: 'Berkeley Compute Docs',
        logo: {
          alt: 'Berkeley Compute Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/berkeleycompute/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/berkeleycompute',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/berkeleycompute',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/berkeleycompute/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Berkeley Compute. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;