<template>
  <div>
    <div>{{ password }}</div>
    <div>minLength:{{ minLength }}</div>
    <input id="inputEle" v-model="password" />
    <div id="errorMessage" v-if="error.length">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    minLength: {
      type: Number
    }
  },
  data() {
    return {
      password: 'password'
    }
  },

  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`
      }
      return ''
    }
  }
}
</script>
