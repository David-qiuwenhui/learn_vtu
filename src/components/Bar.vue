<template>
  <div>
    {{ users }}
    <button id="getUsersBtn" @click="handleGetUsers">getUsers</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async handleGetUsers() {
      const { data } = await axios.get('/users')
      this.users = data
    }
  }
}
</script>
