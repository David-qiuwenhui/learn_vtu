<template>
  <div id="app">
    <TodoList></TodoList>
    <foo></foo>
    <Layout>
      <template #header="data"> data.msg: {{ data.msg }} </template>
    </Layout>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import Foo from './components/Foo.vue'
import Layout from './components/Layout.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    Foo,
    Layout
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
