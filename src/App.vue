<template>
  <div id="app">
    <TodoList></TodoList>
    <foo></foo>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import Foo from './components/Foo.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    Foo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
