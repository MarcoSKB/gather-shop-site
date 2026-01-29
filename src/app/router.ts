import HomeView from '@pages/Home/HomePage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/cart',
    component: () => import('@pages/Cart/CartPage.vue'),
  },
  {
    path: '/post',
    component: () => import('@pages/Post/PostPage.vue'),
  },
  {
    path: '/product',
    component: () => import('@pages/Product/ProductPage.vue'),
  },
  {
    path: '/reading',
    component: () => import('@pages/Reading/ReadingPage.vue'),
  },
  {
    path: '/shop',
    component: () => import('@pages/Shop/ShopPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
