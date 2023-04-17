const config = {
  title: "SSY-UI",
  description: "组件库搭建文档",
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'SSY-UI-VITE',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mqxu/ssy-ui-vite' }
    ],
    sidebar: [
      {
        items: [
          { text: '首页', link: '/' },
          { text: '按钮', link: '/components/button/' },
          { text: '链接' },
          { text: '反馈' },
          { text: '数据录入' },
          { text: '数据展示' },
          { text: '布局' },
        ]
      }
    ],
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }

}
export default config