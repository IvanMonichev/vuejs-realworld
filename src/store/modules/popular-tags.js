import popularTagsApi from '@/api/popular-tags'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getPopularTagsStart: '[popular-tags] Get popular tags start',
  getPopularTagsSuccess: '[popular-tags] Get popular tags success',
  getPopularTagsFailure: '[popular-tags] Get popular tags failure',
}

export const actionTypes = {
  getPopularTags: '[popular-tags] Get popular tags',
}

const mutations = {
  [mutationTypes.getPopularTagsStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationTypes.getPopularTagsSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationTypes.getPopularTagsFailure](state) {
    state.isLoading = false
  },
}

const actions = {
  [actionTypes.getPopularTags](context) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPopularTagsStart)
      popularTagsApi
        .getPopularTags()
        .then((tags) => {
          context.commit(mutationTypes.getPopularTagsSuccess, tags)
          resolve(tags)
        })
        .catch(() => {
          context.commit(mutationTypes.getPopularTagsFailure)
        })
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
