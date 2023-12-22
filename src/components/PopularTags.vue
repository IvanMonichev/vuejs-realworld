<template>
  <div class="sidebar">
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Something bad happened...</div>
    <template v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          class="tag-pill tag-default"
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{ name: 'tag', params: { slug: popularTag } }"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/popular-tags'

export default {
  name: 'RwPopularTags',
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      error: (state) => state.popularTags.error,
      popularTags: (state) => state.popularTags.data,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  },
}
</script>
