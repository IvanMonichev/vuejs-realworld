<template>
  <div class="home-page">
    <rw-banner />

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <rw-feed-toggler :tag-name="tagName"></rw-feed-toggler>
          <rw-feed :api-url="apiUrl" />
        </div>

        <div class="col-md-3">
          <rw-popular-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RwFeed from '@/components/Feed.vue'
import RwPopularTags from '@/components/PopularTags.vue'
import RwBanner from '@/components/Banner.vue'
import RwFeedToggler from '@/components/FeedToggler.vue'

export default {
  name: 'RwTagFeed',
  components: { RwFeedToggler, RwBanner, RwPopularTags, RwFeed },
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`
    },
  },
  watch: {},
}
</script>
