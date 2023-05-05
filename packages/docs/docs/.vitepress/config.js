export default {
    title: 'POICC-COMPONENTS',
    description: '组件库搭建文档',
    themeConfig: {
        logo: '/poicc-logo.png',
        siteTitle: 'POICC-COMPONENTS',
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/poicc/vue3-front-module',
            },
        ],
        docFooter: { prev: '上一篇', next: '下一篇' },
        nav: [
            {
                text: '首页',
                link: '/',
            },
            // {
            //     text: '下拉选择框',
            //     items: [
            //         { text: 'options-1', link: '/' },
            //         { text: 'options-2', link: 'http://www.baidu.com' },
            //     ],
            // },
        ],
        sidebar: {
            '/guide/': [
                {
                    items: [{ text: '介绍', link: '/guide/' }],
                    collapsible: true,
                },
                {
                    text: '组件',
                    items: [
                        { text: '按钮Button', link: '/guide/components/button/' },
                        { text: '对话框Dialog', link: '/guide/components/dialog/' },
                        { text: '倒计时CountDown', link: '/guide/components/count-down/' },
                        { text: '输入框Input', link: '/guide/components/input/' },
                        { text: '导航栏NavBar', link: '/guide/components/navbar/' },
                        // { text: '确认框Confirm', link: '/guide/components/confirm/' },
                        { text: '滚动组件Infinite', link: '/guide/components/infinite/' },
                        // { text: '消息Message', link: '/guide/components/message/' },
                        { text: '弹出框Popover', link: '/guide/components/popover/' },
                        { text: '气泡框Popup', link: '/guide/components/popup/' },
                        { text: '搜索栏Search', link: '/guide/components/search/' },
                        { text: '菜单Trigger-menu', link: '/guide/components/trigger-menu/' },
                        { text: '瀑布流Waterfull', link: '/guide/components/waterfull/' },
                    ],
                    collapsible: true,
                },
            ],
        },
    },
    markdown: {
        config: (md) => {
            const { demoBlockPlugin } = require('vitepress-theme-demoblock');
            md.use(demoBlockPlugin);
        },
    },
};
// const config = {
//   title: "POICC-COMPONENTS",
//   description: "组件库搭建文档",
//   themeConfig: {
//     logo: '/logo.png',
//     siteTitle: 'POICC-COMPONENTS',
//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/poicc/vue3-front-module' }
//     ],
//     sidebar: [
//       {
//         items: [
//           { text: '首页', link: '/' },
//           { text: '按钮', link: '/components/button/' },
//           { text: '链接' },
//           { text: '反馈' },
//           { text: '数据录入' },
//           { text: '数据展示' },
//           { text: '布局' },
//         ]
//       }
//     ],
//   },
//   // markdown: {
//   //   config: (md) => {
//   //     const { demoBlockPlugin } = require('vitepress-theme-demoblock')
//   //     md.use(demoBlockPlugin)
//   //   }
//   // }

// }
// export default config
