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
    component: ComponentCreator('/FUD/docs', '0a1'),
    routes: [
      {
        path: '/FUD/docs',
        component: ComponentCreator('/FUD/docs', 'cbb'),
        routes: [
          {
            path: '/FUD/docs',
            component: ComponentCreator('/FUD/docs', 'a39'),
            routes: [
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
                path: '/FUD/docs/intro',
                component: ComponentCreator('/FUD/docs/intro', '8f7'),
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
