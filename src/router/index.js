import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },  
    {
      path: '/products/:for',
      name: 'produk dijual',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/product/:id',
      name: 'product detail',
      component: () => import('../views/ProductDetailView.vue'),
    },
    {
      path: '/checkout/:id',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
    },
    {
      path: '/payment/:id',
      name: 'payment',
      component: () => import('../views/PaymentView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
    },
    {
      path: '/article/:id',
      name: 'detail article',
      component: () => import('../views/ArticleDetailView.vue'),
    },
  ],
})

export default router
