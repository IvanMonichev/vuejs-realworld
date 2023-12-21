<template>
  <div>
    <rw-top-bar />
    <router-view />
  </div>
</template>

<script>
import RwTopBar from '@/components/TopBar.vue'
import { actionTypes } from '@/store/modules/auth'

export default {
  name: 'RwApp',
  components: { RwTopBar },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>
