<template>
  <div>
    <div>{{ count }}</div>
    <button id="countBtn" @click="handleClick">click</button>

    <div>{{ inputValue }}</div>
    <input id="inputEle" type="text" v-model="inputValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      inputValue: ''
    }
  },
  methods: {
    handleClick() {
      this.count++
    }
  }
}
</script>
