<template>
  <div>
    <rw-top-bar />
    <router-view />
  </div>
</template>

<script>
import RwTopBar from '@/components/TopBar.vue'

export default {
  name: 'RwApp',
  components: { RwTopBar },
}
</script>
