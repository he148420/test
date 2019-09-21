module.exports = {
  title: "Hello, Vuepress",
  description: "Just playing",
  base: '/',
  themeConfig: {
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: '网站',
      link: '/blog/'
    }, {
      text: 'Web',
      link: '/web/'
    }],
    // sidebarDepth: 3,
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    // sidebar: [
      // '/blog/': [
      //   '',
      //   'test',
      //   'yoyo'
      // ],
      // {
      //   title: 'Group',
      //   collapsable:false,
      //   children: [
      //     '/blog/',
      //     '/web/',
      //   ]
      // },
      // '/web/': [
      //   '',
      //   'ha',
      //   'he'
      // ]
  // ]
  sidebar: {
    '/blog/': [
    {
      title: 'Xlog',
      collapsable:false,
      children: [
        'test-a',
        'yoyo'
      ]
    }, {
      title: 'XX',
      collapsable:false,
      children: [
        'yoyo'
      ]
    }],
    '/web/': [{
      title: 'Test',
      collapsable:false,
      children: [
        '',
        'he',
        '面试'
      ]
    }],
  }
    // sidebar: 'auto'
  },
  
}
