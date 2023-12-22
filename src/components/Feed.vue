<template>
  <rw-loading v-if="isLoading" />
  <rw-error-message v-if="error" :message="error" />
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
        <rw-tag-list :tags="article.tagList" />
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
import RwLoading from '@/components/Loading.vue'
import RwErrorMessage from '@/components/ErrorMessage.vue'
import RwTagList from '@/components/TagList.vue'

export default {
  name: 'RwFeed',
  components: { RwTagList, RwErrorMessage, RwLoading, RwPagination },
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
    apiUrl() {
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
