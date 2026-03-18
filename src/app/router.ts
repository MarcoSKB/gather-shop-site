import HomePage from '@pages/Home'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@pages/Cart'),
  },
  {
    path: '/posts',
    name: 'post-list',
    component: () => import('@pages/PostList'),
  },
  {
    path: '/post/:slug',
    name: 'post-details',
    component: () => import('@pages/PostDetails'),
  },
  {
    path: '/shop',
    name: 'product-list',
    component: () => import('@pages/ProductList'),
  },
  {
    path: '/shop/:slug',
    name: 'product-details',
    component: () => import('@pages/ProductDetails'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
