export default [
  {
    path: '/shopCart',
    name: 'shopCart',
    meta: {
      title: '购物车',
      showFooter:true
    },
    component: () => import('../../views/shopCart/index')
  },
]
