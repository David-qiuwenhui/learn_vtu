<template>
  <div>
    <div>
      {{ users }}
      <button id="getUsersBtn" @click="handleGetUsers">getUsers</button>
    </div>

    <div>
      <div v-if="boxOneRender" id="box1">box1</div>
      <div v-show="boxTwoVisible" id="box2">box2</div>
    </div>

    <div>
      <button id="incrementBtn" @click="handleClick">increment</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  emits: ['increment'],
  data() {
    return {
      users: [],
      boxOneRender: false,
      boxTwoVisible: false,
      count: 0
    }
  },
  methods: {
    async handleGetUsers() {
      const { data } = await axios.get('/users')
      this.users = data
    },
    handleClick() {
      this.$emit('increment', this.count++)
    }
  }
}
</script>
