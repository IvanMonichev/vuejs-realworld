import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import GlobalFeedView from '@/views/GlobalFeedView.vue'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeedView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: GlobalFeedView,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: GlobalFeedView,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: GlobalFeedView,
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: GlobalFeedView,
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: GlobalFeedView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: GlobalFeedView,
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: GlobalFeedView,
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: GlobalFeedView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
