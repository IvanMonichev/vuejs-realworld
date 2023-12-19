import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
  registaerSuccess(state) {
    state.isSubmitting = false
  },
  registaerFailure(state) {
    state.isSubmitting = false
  },
}

const actions = {
  register(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then((response) => {
          context.commit('registerSuccess', response.data.user)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit('registerFailure', result.response.data.errors)
          console.error(result)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
