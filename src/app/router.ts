import HomePage from '@pages/Home'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/cart',
    name: 'cart-page',
    component: () => import('@pages/Cart'),
  },
  {
    path: '/stories',
    name: 'post-list',
    component: () => import('@pages/PostList'),
  },
  {
    path: '/stories/:slug([a-z0-9-]+)',
    name: 'post-details',
    props: true,
    component: () => import('@pages/PostDetails'),
  },
  {
    path: '/stories/:pathMatch(.*)*',
    redirect: { name: 'post-list' },
  },
  {
    path: '/shop',
    name: 'product-list',
    component: () => import('@pages/ProductList'),
  },
  {
    path: '/shop/:slug([a-z0-9-]+)',
    name: 'product-details',
    props: true,
    component: () => import('@pages/ProductDetails'),
  },
  {
    path: '/shop/:pathMatch(.*)*',
    redirect: { name: 'product-list' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
