<template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="error">Something bad happened</div>
  <div v-if="feed">
    <div
      class="article-preview"
      v-for="(article, index) in feed.articles"
      :key="index"
    >
      <div class="article-meta">
        <router-link
          :to="{
            name: 'userProfile',
            params: { slug: article.author.username },
          }"
        >
          <img :src="article.author.image" />
        </router-link>
        <div class="info">
          <router-link
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
            class="author"
          >
            {{ article.author.username }}
          </router-link>
          <span class="date">{{ article.createdAt }}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
          <i class="ion-heart"></i> 29
        </button>
      </div>
      <router-link
        :to="{ name: 'article', params: { slug: article.slug } }"
        class="preview-link"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
        <ul class="tag-list">
          <li class="tag-default tag-pill tag-outline">realworld</li>
          <li class="tag-default tag-pill tag-outline">implementations</li>
        </ul>
      </router-link>
    </div>

    <rw-pagination
      :current-page="currentPage"
      :limit="limit"
      :total="feed.articlesCount"
      :url="baseUrl"
    />
  </div>
</template>

<script>
import { actionTypes } from '@/store/modules/feed'
import { mapState } from 'vuex'
import RwPagination from '@/components/Pagination.vue'
import { LIMIT } from '@/helpers/constants'
import queryString from 'query-string'

export default {
  name: 'RwFeed',
  components: { RwPagination },
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      limit: LIMIT,
    }
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offset() {
      return this.currentPage * LIMIT - LIMIT
    },
  },
  watch: {
    currentPage() {
      this.fetchFeed()
    },
  },
  mounted() {
    this.fetchFeed()
  },
  methods: {
    fetchFeed() {
      const parsedUrl = queryString.parseUrl(this.apiUrl)
      const stringifiedParams = queryString.stringify({
        limit: LIMIT,
        offset: this.offset,
        ...parsedUrl.query,
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
      this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParams })
    },
  },
}
</script>
