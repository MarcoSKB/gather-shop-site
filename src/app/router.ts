import { HomePage } from '@pages/Home'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/cart',
    component: () => import('@pages/Cart').then((m) => m.CartPage),
  },
  {
    path: '/post',
    component: () => import('@pages/Post').then((m) => m.PostPage),
  },
  {
    path: '/product',
    component: () => import('@pages/Product').then((m) => m.ProductPage),
  },
  {
    path: '/reading',
    component: () => import('@pages/Reading').then((m) => m.ReadingPage),
  },
  {
    path: '/shop',
    component: () => import('@pages/Shop').then((m) => m.ShopPage),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
