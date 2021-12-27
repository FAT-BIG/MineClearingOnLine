<template>
  <useEyeDropper />
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import useEyeDropper from '../components/demo/useEyeDropper.vue'

export default defineComponent({
  name: "Home",
  components: {
    useEyeDropper
  },

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>
