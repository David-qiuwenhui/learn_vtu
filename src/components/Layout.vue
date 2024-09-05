<template>
  <div>
    <slot :msg="msg" name="header"></slot>
    <!-- 默认插槽 -->
    <slot></slot>
    <!-- 作用域插槽 -->
    <header></header>

    <!-- 具名插槽 -->
    <main>
      <slot name="main"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      msg: 'message'
    }
  }
}
</script>
