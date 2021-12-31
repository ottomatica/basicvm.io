// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'basic{VM}',
  tagline: 'Creating a VM has started to get unwieldy... let\'s start back at the "basics" 🛠',
  url: 'https://basicvm.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-sm.svg',
  organizationName: 'ottomatica', // Usually your GitHub org/user name.
  projectName: 'basicvm.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Basic{VM} logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          width: '200px'
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Get Started',
          },
          // {to: '/blog', label: 'Blog', position: 'right'},
          // {
          //   href: 'https://github.com/ottomatica',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            label: 'Documentation',
            to: '/docs',
          },
          {
            label: 'Privacy Policy',
            to: '/agreements/privacy'
          },
          {
            label: 'EULA',
            to: '/agreements/eula'
          },
          {
            label: 'Terms & Condition',
            to: '/agreements/terms'
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ottomatica`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
// {
//   items: [
//     {
//       label: 'End-User License Agreement',
//       to: '/agreements/eula'
//     },
//     {
//       label: 'Terms and Conditions',
//       to: '/agreements/terms'
//     },
//     {
//       label: 'Privacy Policy',
//       to: '/agreements/privacy'
//     },
//   ]
// }