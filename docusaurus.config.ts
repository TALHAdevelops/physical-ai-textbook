import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'A comprehensive guide to Physical AI, ROS 2, Gazebo, Unity, NVIDIA Isaac, and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://yourusername.github.io', // Placeholder for GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // Base URL for GitHub Pages deployment

  markdown: {
    mermaid: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yourusername', // Usually your GitHub org/user name.
  projectName: 'physical-ai-textbook', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],




  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // Will be updated later
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // Will be updated later
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'modulesSidebar',
          position: 'left',
          label: 'Modules',
        },
        // Removed blog link as it's not a primary feature for a textbook
        {
          href: 'https://github.com/yourusername/physical-ai-textbook', // Placeholder for actual GitHub repo
          label: 'GitHub',
          position: 'right',
        },
      ],
    }, // Added missing closing curly brace for navbar and closing square bracket for items
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Modules',
              to: '/docs/intro', // Will point to the introduction of the modules
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // Removed blog link
            {
              label: 'GitHub',
              href: 'https://github.com/yourusername/physical-ai-textbook', // Placeholder for actual GitHub repo
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID', // Placeholder: Replace with actual Algolia App ID
      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY', // Placeholder: Replace with actual Algolia Search API Key
      indexName: 'YOUR_INDEX_NAME', // Placeholder: Replace with actual Algolia Index Name
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur per window.location
      // For example, if your site is deployed at https://www.example.com and you want to search on https://www.example.com/docs,
      // use `externalUrlRegex: 'www.example.com/docs/'`.
      externalUrlRegex: 'YOUR_EXTERNAL_URL_REGEX', // Placeholder: adjust as needed
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that Algolia will use to display results.
      // E.g. '/search/'
      searchPagePath: 'search',
      // Optional: whether the search field is disabled in the mobile nav bar.
      // disableOnMobile: true,
    },
  }
};

export default config;
