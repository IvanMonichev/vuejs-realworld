<template>
  <div class="home-page">
    <rw-banner />

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <rw-feed-toggler />
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
  name: 'RwYourFeed',
  components: { RwFeedToggler, RwBanner, RwPopularTags, RwFeed },
  data() {
    return {
      apiUrl: '/articles/feed',
    }
  },
}
</script>
