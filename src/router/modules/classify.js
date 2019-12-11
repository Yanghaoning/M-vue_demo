export default [
  {
    path: '/classify',
    name: 'classify',
    meta: {
      title: '分类',
    },
    component: () => import('../../views/classify/index')
  },
]
