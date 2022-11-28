// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'setting-up',
    },
    {
      type: 'doc',
      label: 'FAQ',
      id: 'faq',
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        {
          type: 'autogenerated',
          dirName: 'commands',
        },
      ],
    },
  ],
};

module.exports = sidebars;
