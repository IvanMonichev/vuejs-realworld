import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import GlobalFeedView from '@/views/GlobalFeedView.vue'
import YoufFeedView from '@/views/YourFeedView.vue'
import TagFeedView from '@/views/TagFeedView.vue'
import ArticleView from '@/views/ArticleView.vue'
import CreateArticleView from '@/views/CreateArticleView.vue'
import EditArticleView from '@/views/EditArticleView.vue'

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
    component: YoufFeedView,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeedView,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticleView,
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: ArticleView,
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: EditArticleView,
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
