import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/FUD/blog',
    component: ComponentCreator('/FUD/blog', '39c'),
    exact: true
  },
  {
    path: '/FUD/blog/archive',
    component: ComponentCreator('/FUD/blog/archive', '773'),
    exact: true
  },
  {
    path: '/FUD/blog/authors',
    component: ComponentCreator('/FUD/blog/authors', 'f08'),
    exact: true
  },
  {
    path: '/FUD/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/FUD/blog/authors/all-sebastien-lorber-articles', 'd88'),
    exact: true
  },
  {
    path: '/FUD/blog/authors/yangshun',
    component: ComponentCreator('/FUD/blog/authors/yangshun', '81f'),
    exact: true
  },
  {
    path: '/FUD/blog/first-blog-post',
    component: ComponentCreator('/FUD/blog/first-blog-post', 'f39'),
    exact: true
  },
  {
    path: '/FUD/blog/long-blog-post',
    component: ComponentCreator('/FUD/blog/long-blog-post', '7cf'),
    exact: true
  },
  {
    path: '/FUD/blog/mdx-blog-post',
    component: ComponentCreator('/FUD/blog/mdx-blog-post', '5c1'),
    exact: true
  },
  {
    path: '/FUD/blog/tags',
    component: ComponentCreator('/FUD/blog/tags', '25b'),
    exact: true
  },
  {
    path: '/FUD/blog/tags/docusaurus',
    component: ComponentCreator('/FUD/blog/tags/docusaurus', 'dac'),
    exact: true
  },
  {
    path: '/FUD/blog/tags/facebook',
    component: ComponentCreator('/FUD/blog/tags/facebook', 'fac'),
    exact: true
  },
  {
    path: '/FUD/blog/tags/hello',
    component: ComponentCreator('/FUD/blog/tags/hello', 'c98'),
    exact: true
  },
  {
    path: '/FUD/blog/tags/hola',
    component: ComponentCreator('/FUD/blog/tags/hola', 'd01'),
    exact: true
  },
  {
    path: '/FUD/blog/welcome',
    component: ComponentCreator('/FUD/blog/welcome', 'd56'),
    exact: true
  },
  {
    path: '/FUD/markdown-page',
    component: ComponentCreator('/FUD/markdown-page', '9a8'),
    exact: true
  },
  {
    path: '/FUD/docs',
    component: ComponentCreator('/FUD/docs', '1e5'),
    routes: [
      {
        path: '/FUD/docs',
        component: ComponentCreator('/FUD/docs', '033'),
        routes: [
          {
            path: '/FUD/docs',
            component: ComponentCreator('/FUD/docs', '972'),
            routes: [
              {
                path: '/FUD/docs/Animator,Animation/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/Animator,Animation/manage-docs-versions', 'ef3'),
                exact: true
              },
              {
                path: '/FUD/docs/Animator,Animation/translate-your-site',
                component: ComponentCreator('/FUD/docs/Animator,Animation/translate-your-site', '308'),
                exact: true
              },
              {
                path: '/FUD/docs/Blender/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/Blender/manage-docs-versions', 'b0f'),
                exact: true
              },
              {
                path: '/FUD/docs/Blender/translate-your-site',
                component: ComponentCreator('/FUD/docs/Blender/translate-your-site', '4ea'),
                exact: true
              },
              {
                path: '/FUD/docs/constraint',
                component: ComponentCreator('/FUD/docs/constraint', 'f7e'),
                exact: true
              },
              {
                path: '/FUD/docs/GIMP/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/GIMP/manage-docs-versions', '5f3'),
                exact: true
              },
              {
                path: '/FUD/docs/GIMP/translate-your-site',
                component: ComponentCreator('/FUD/docs/GIMP/translate-your-site', 'e90'),
                exact: true
              },
              {
                path: '/FUD/docs/intro',
                component: ComponentCreator('/FUD/docs/intro', 'de2'),
                exact: true
              },
              {
                path: '/FUD/docs/liltoon/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/liltoon/manage-docs-versions', '2ae'),
                exact: true
              },
              {
                path: '/FUD/docs/liltoon/translate-your-site',
                component: ComponentCreator('/FUD/docs/liltoon/translate-your-site', '421'),
                exact: true
              },
              {
                path: '/FUD/docs/MA/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/MA/manage-docs-versions', 'c3c'),
                exact: true
              },
              {
                path: '/FUD/docs/MA/translate-your-site',
                component: ComponentCreator('/FUD/docs/MA/translate-your-site', '549'),
                exact: true
              },
              {
                path: '/FUD/docs/physbone',
                component: ComponentCreator('/FUD/docs/physbone', 'c56'),
                exact: true
              },
              {
                path: '/FUD/docs/poiyomi/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/poiyomi/manage-docs-versions', '2a0'),
                exact: true
              },
              {
                path: '/FUD/docs/poiyomi/translate-your-site',
                component: ComponentCreator('/FUD/docs/poiyomi/translate-your-site', '649'),
                exact: true
              },
              {
                path: '/FUD/docs/Quest',
                component: ComponentCreator('/FUD/docs/Quest', '803'),
                exact: true
              },
              {
                path: '/FUD/docs/VRCFury/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/VRCFury/manage-docs-versions', '002'),
                exact: true
              },
              {
                path: '/FUD/docs/VRCFury/translate-your-site',
                component: ComponentCreator('/FUD/docs/VRCFury/translate-your-site', '3a6'),
                exact: true
              },
              {
                path: '/FUD/docs/テクスチャ解説/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/テクスチャ解説/manage-docs-versions', '685'),
                exact: true
              },
              {
                path: '/FUD/docs/テクスチャ解説/translate-your-site',
                component: ComponentCreator('/FUD/docs/テクスチャ解説/translate-your-site', 'a14'),
                exact: true
              },
              {
                path: '/FUD/docs/パーティクル/Emission',
                component: ComponentCreator('/FUD/docs/パーティクル/Emission', '249'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/パーティクル/MainModule',
                component: ComponentCreator('/FUD/docs/パーティクル/MainModule', 'd50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/パーティクル/Shape',
                component: ComponentCreator('/FUD/docs/パーティクル/Shape', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/軽量化',
                component: ComponentCreator('/FUD/docs/軽量化', '0ed'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/FUD/',
    component: ComponentCreator('/FUD/', 'e33'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
