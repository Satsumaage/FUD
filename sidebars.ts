import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'パーティクル',
      items: [
        'particle/MainModule',
        'particle/Shape',
        'particle/Emission',
      ],
    },
  ],

};

export default sidebars;
