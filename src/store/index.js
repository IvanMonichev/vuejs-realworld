import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popular-tags'

export default createStore({
  modules: {
    auth,
    feed,
    popularTags,
  },
})
