import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/CoptraDocs/markdown-page/',
    component: ComponentCreator('/CoptraDocs/markdown-page/', '5b7'),
    exact: true
  },
  {
    path: '/CoptraDocs/search/',
    component: ComponentCreator('/CoptraDocs/search/', '402'),
    exact: true
  },
  {
    path: '/CoptraDocs/',
    component: ComponentCreator('/CoptraDocs/', '4d5'),
    routes: [
      {
        path: '/CoptraDocs/',
        component: ComponentCreator('/CoptraDocs/', '226'),
        routes: [
          {
            path: '/CoptraDocs/',
            component: ComponentCreator('/CoptraDocs/', '2dc'),
            routes: [
              {
                path: '/CoptraDocs/агродрон/',
                component: ComponentCreator('/CoptraDocs/агродрон/', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/база-знаний/',
                component: ComponentCreator('/CoptraDocs/база-знаний/', 'a8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/безопасность/',
                component: ComponentCreator('/CoptraDocs/безопасность/', '5c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/загрузки/',
                component: ComponentCreator('/CoptraDocs/загрузки/', 'b24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/коптра-орлёнок/',
                component: ComponentCreator('/CoptraDocs/коптра-орлёнок/', 'fb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/методики-и-кейсы/',
                component: ComponentCreator('/CoptraDocs/методики-и-кейсы/', '802'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/плата-подключения-дополнительных-модулей/',
                component: ComponentCreator('/CoptraDocs/плата-подключения-дополнительных-модулей/', '0a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/пульт-управления/',
                component: ComponentCreator('/CoptraDocs/пульт-управления/', '904'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/система-ик-навигации/',
                component: ComponentCreator('/CoptraDocs/система-ик-навигации/', '035'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/система-оптической-навигации/',
                component: ComponentCreator('/CoptraDocs/система-оптической-навигации/', 'a1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/система-уз-навигации/',
                component: ComponentCreator('/CoptraDocs/система-уз-навигации/', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/cargo-light/',
                component: ComponentCreator('/CoptraDocs/cargo-light/', 'fa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/cargo-max/',
                component: ComponentCreator('/CoptraDocs/cargo-max/', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/cargo-pro/',
                component: ComponentCreator('/CoptraDocs/cargo-pro/', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/coptra-drone-control-system/',
                component: ComponentCreator('/CoptraDocs/coptra-drone-control-system/', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/coptra-sim/',
                component: ComponentCreator('/CoptraDocs/coptra-sim/', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/fpv-freestyle/',
                component: ComponentCreator('/CoptraDocs/fpv-freestyle/', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/fpv-racer/',
                component: ComponentCreator('/CoptraDocs/fpv-racer/', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/lua/',
                component: ComponentCreator('/CoptraDocs/lua/', '1ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/python/',
                component: ComponentCreator('/CoptraDocs/python/', '2da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/trik-studio/',
                component: ComponentCreator('/CoptraDocs/trik-studio/', 'fb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/CoptraDocs/',
                component: ComponentCreator('/CoptraDocs/', 'b72'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
