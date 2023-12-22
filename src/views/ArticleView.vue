<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>

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
              href="/profile/eric-simons"
              class="author"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <template v-if="isAuthor">
            <router-link
              :to="{ name: 'editArticle', params: { slug: article.slug } }"
              class="btn btn-sm btn-outline-secondary"
            >
              <i class="ion-edit"></i> Edit Article
            </router-link>
            <button class="btn btn-sm btn-outline-danger">
              <i class="ion-trash-a"></i> Delete Article
            </button>
          </template>
        </div>
      </div>
    </div>

    <div class="container page">
      <rw-loading v-if="isLoading" />
      <rw-error-message v-if="error" :message="error" />
      <div class="row article-content" v-if="article">
        <div class="col-md-12">
          <p>
            {{ article.body }}
          </p>
          <rw-tag-list :tags="article.tagList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes as articleActionsTypes } from '@/store/modules/article'
import { getterTypes as authGetterTypes } from '@/store/modules/auth'
import { mapGetters, mapState } from 'vuex'
import RwLoading from '@/components/Loading.vue'
import RwErrorMessage from '@/components/ErrorMessage.vue'
import RwTagList from '@/components/TagList.vue'

export default {
  name: 'RwArticle',
  components: { RwTagList, RwErrorMessage, RwLoading },
  mounted() {
    this.$store.dispatch(articleActionsTypes.getArticle, {
      slug: this.$route.params.slug,
    })
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
      article: (state) => state.article.data,
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser,
    }),
    isAuthor() {
      if (!this.currentUser || !this.article) {
        return false
      }

      return this.currentUser.username === this.article.author.username
    },
  },
  methods: {
    deleteArticle() {
      this.$store
        .dispatch(articleActionsTypes.deleteArticle, {
          slug: this.$route.params.slug,
        })
        .then(() => {
          this.$router.push({ name: 'globalFeed' })
        })
    },
  },
}
</script>
