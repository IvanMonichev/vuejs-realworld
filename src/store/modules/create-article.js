import articleApi from '@/api/article'

const state = {
  isSubmitting: false,
  validationErrors: null,
}

export const mutationTypes = {
  createArticleStart: '[create- article] Create article start',
  createArticleSuccess: '[create-article] Create article success',
  createArticleFailure: '[create-article] Create article failure',
}

export const actionTypes = {
  createArticle: '[create-article] Create article',
}

const mutations = {
  [mutationTypes.createArticleStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.createArticleSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.createArticleFailure](state, payload) {
    state.validationErrors = payload
    state.isSubmitting = false
  },
}

const actions = {
  [actionTypes.createArticle](context, { articleInput }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.createArticleStart)
      articleApi
        .createArticle(articleInput)
        .then((article) => {
          context.commit(mutationTypes.createArticleSuccess)
          resolve(article)
        })
        .catch((result) => {
          context.commit(
            mutationTypes.createArticleFailure,
            result.response.data.errors,
          )
        })
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
