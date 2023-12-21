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
  </div>

  <ul class="pagination">
    <li class="page-item active">
      <a class="page-link" href="">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="">2</a>
    </li>
  </ul>
</template>

<script>
import { actionTypes } from '@/store/modules/feed'
import { mapState } from 'vuex'

export default {
  name: 'RwFeed',
  props: {
    apiUrl: {
      type: String,
      require: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl })
  },
}
</script>
