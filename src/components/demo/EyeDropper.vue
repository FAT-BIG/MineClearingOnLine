<template>
  <template v-if="isSupported">
    <el-input v-model="sRGBHex" />
    <div>sRGBHex: {{ sRGBHex }}</div>
  </template>
  <div>
    <el-button
        circle
        @click="open"
    >
      <el-icon :size="20">
        <Star/>
      </el-icon>
    </el-button>
  </div>
</template>

<script>
import {useEyeDropper} from '@vueuse/core'
import {defineComponent} from 'vue'
import {Star} from '@element-plus/icons-vue'

export default defineComponent({
  name: "UseEyeDropper",
  components: {
    Star
  },
  setup() {
    const {isSupported, open, sRGBHex} = useEyeDropper()
    return {
      isSupported,
      open,
      sRGBHex
    }
  }
})

</script>

<style lang="scss" scoped>

</style>
