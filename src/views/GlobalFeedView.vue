<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
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

export default {
  name: 'RwGlobalFeed',
  components: { RwPopularTags, RwFeed },
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>
