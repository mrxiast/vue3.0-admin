<template>
  <div class="p-btn">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent, watch, reactive, onMounted, onUnmounted, toRefs, ref } from 'vue'
export default defineComponent({
  name: 'myBtn',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    console.log(props, '999')
    const message = ref('测试')
    message.value = props.message
    return {
      message
    }
  }
})
</script>

<style scoped src="./index.scss"></style>