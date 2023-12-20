<template>
  <ul class="error-messages">
    <li v-for="errorMessage in errorsMessages" :key="errorMessage">
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RwValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorsMessages() {
      return Object.keys(this.validationErrors).map((name) => {
        const messages = this.validationErrors[name].join(', ')
        return `${name} ${messages}`
      })
    },
  },
}
</script>
