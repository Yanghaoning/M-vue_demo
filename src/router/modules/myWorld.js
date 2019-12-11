export default [
  {
    path: '/myWorld',
    name: 'myWorld',
    meta: {
      title: '我的',
      showFooter:true
    },
    component: () => import('../../views/myWorld/index')
  },
]
