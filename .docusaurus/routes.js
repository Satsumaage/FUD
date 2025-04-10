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
    component: ComponentCreator('/FUD/docs', '0a4'),
    routes: [
      {
        path: '/FUD/docs',
        component: ComponentCreator('/FUD/docs', 'adf'),
        routes: [
          {
            path: '/FUD/docs',
            component: ComponentCreator('/FUD/docs', 'eea'),
            routes: [
              {
                path: '/FUD/docs/Animator,Animation/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/Animator,Animation/manage-docs-versions', 'b5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/Animator,Animation/translate-your-site',
                component: ComponentCreator('/FUD/docs/Animator,Animation/translate-your-site', '91c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/Blender/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/Blender/manage-docs-versions', '0cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/Blender/translate-your-site',
                component: ComponentCreator('/FUD/docs/Blender/translate-your-site', '2a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/animatoranimation',
                component: ComponentCreator('/FUD/docs/category/animatoranimation', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/blender',
                component: ComponentCreator('/FUD/docs/category/blender', '3a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/gimp',
                component: ComponentCreator('/FUD/docs/category/gimp', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/liltoon',
                component: ComponentCreator('/FUD/docs/category/liltoon', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/ma',
                component: ComponentCreator('/FUD/docs/category/ma', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/poiyomi',
                component: ComponentCreator('/FUD/docs/category/poiyomi', 'a92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/tutorial---basics',
                component: ComponentCreator('/FUD/docs/category/tutorial---basics', 'ebf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/tutorial---extras',
                component: ComponentCreator('/FUD/docs/category/tutorial---extras', 'b9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/vrcfury',
                component: ComponentCreator('/FUD/docs/category/vrcfury', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/テクスチャ解説',
                component: ComponentCreator('/FUD/docs/category/テクスチャ解説', '4ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/category/パーティクル',
                component: ComponentCreator('/FUD/docs/category/パーティクル', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/constraint',
                component: ComponentCreator('/FUD/docs/constraint', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/GIMP/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/GIMP/manage-docs-versions', '3c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/GIMP/translate-your-site',
                component: ComponentCreator('/FUD/docs/GIMP/translate-your-site', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/intro',
                component: ComponentCreator('/FUD/docs/intro', '8f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/liltoon/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/liltoon/manage-docs-versions', 'cfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/liltoon/translate-your-site',
                component: ComponentCreator('/FUD/docs/liltoon/translate-your-site', '57e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/MA/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/MA/manage-docs-versions', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/MA/translate-your-site',
                component: ComponentCreator('/FUD/docs/MA/translate-your-site', '897'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/physbone',
                component: ComponentCreator('/FUD/docs/physbone', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/poiyomi/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/poiyomi/manage-docs-versions', '22a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/poiyomi/translate-your-site',
                component: ComponentCreator('/FUD/docs/poiyomi/translate-your-site', '2b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/Quest',
                component: ComponentCreator('/FUD/docs/Quest', '09f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/FUD/docs/tutorial-basics/congratulations', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/FUD/docs/tutorial-basics/create-a-blog-post', '2ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/FUD/docs/tutorial-basics/create-a-document', 'e6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/FUD/docs/tutorial-basics/create-a-page', '14f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/FUD/docs/tutorial-basics/deploy-your-site', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/FUD/docs/tutorial-basics/markdown-features', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/tutorial-extras/manage-docs-versions', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/FUD/docs/tutorial-extras/translate-your-site', '5d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/VRCFury/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/VRCFury/manage-docs-versions', '6e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/VRCFury/translate-your-site',
                component: ComponentCreator('/FUD/docs/VRCFury/translate-your-site', '82d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/テクスチャ解説/manage-docs-versions',
                component: ComponentCreator('/FUD/docs/テクスチャ解説/manage-docs-versions', 'aa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/テクスチャ解説/translate-your-site',
                component: ComponentCreator('/FUD/docs/テクスチャ解説/translate-your-site', 'fb3'),
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
                path: '/FUD/docs/パーティクル/translate-your-site',
                component: ComponentCreator('/FUD/docs/パーティクル/translate-your-site', 'cf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/FUD/docs/軽量化',
                component: ComponentCreator('/FUD/docs/軽量化', '2c5'),
                exact: true,
                sidebar: "tutorialSidebar"
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
