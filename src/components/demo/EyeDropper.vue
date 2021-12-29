<template>
  <template v-if="isSupported">
    <div class="color-block" :style="{background: sRGBHex}"></div>
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
.color-block {
  width: 48px;
  height: 48px;
  background: #45be87;
}
</style>
