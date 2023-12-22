<template>
  <rw-article-form
    :initial-values="initialValues"
    :errors="validationErrors"
    :is-submitting="isSubmitting"
    @articleSubmit="onSubmit"
  />
</template>

<script>
import RwArticleForm from '@/components/ArticleForm.vue'
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/create-article'

export default {
  name: 'CreateArticleView',
  components: { RwArticleForm },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.createArticle.isSubmitting,
      validationErrors: (state) => state.createArticle.validationErrors,
    }),
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
    }
  },
  methods: {
    onSubmit(articleInput) {
      this.$store
        .dispatch(actionTypes.createArticle, { articleInput })
        .then((article) => {
          this.$router.push({ name: 'article', params: { slug: article.slug } })
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
