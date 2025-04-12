"use strict";(self.webpackChunkfud=self.webpackChunkfud||[]).push([[7044],{3894:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"Blender/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","source":"@site/docs/Blender/manage-docs-versions.md","sourceDirName":"Blender","slug":"/Blender/manage-docs-versions","permalink":"/FUD/docs/Blender/manage-docs-versions","draft":false,"unlisted":false,"editUrl":"https://github.com/Satsumaage/FUD/edit/main/docs/Blender/manage-docs-versions.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Blender","permalink":"/FUD/docs/category/blender"},"next":{"title":"Translate your site","permalink":"/FUD/docs/Blender/translate-your-site"}}');var r=s(4848),d=s(8453);const i={sidebar_position:1},c="Manage Docs Versions",t={},a=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"manage-docs-versions",children:"Manage Docs Versions"})}),"\n",(0,r.jsx)(n.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,r.jsx)(n.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,r.jsx)(n.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"docs"})," folder is copied into ",(0,r.jsx)(n.code,{children:"versioned_docs/version-1.0"})," and ",(0,r.jsx)(n.code,{children:"versions.json"})," is created."]}),"\n",(0,r.jsx)(n.p,{children:"Your docs now have 2 versions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1.0"})," at ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"current"})," at ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,r.jsx)(n.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,r.jsx)(n.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,r.jsxs)(n.p,{children:["Modify the ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Docs Version Dropdown",src:s(7474).A+"",width:"370",height:"302"})}),"\n",(0,r.jsx)(n.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,r.jsx)(n.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docs/hello.md"})," updates ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},7474:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var o=s(6540);const r={},d=o.createContext(r);function i(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);