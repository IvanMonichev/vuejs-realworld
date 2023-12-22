<template>
  <div class="sidebar">
    <rw-loading v-if="isLoading" />
    <rw-error-message v-if="error" :message="error" />
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
import RwLoading from '@/components/Loading.vue'
import RwErrorMessage from '@/components/ErrorMessage.vue'

export default {
  name: 'RwPopularTags',
  components: { RwErrorMessage, RwLoading },
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
