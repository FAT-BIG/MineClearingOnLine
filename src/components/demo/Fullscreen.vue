<template>
  <div ref="el" class="demo" :class="{'is-fullscreen':isFullscreen}">
    <div @click="toggle">
      {{ isFullscreen ? '退出' : '全屏' }}
    </div>
  </div>
</template>

<script lang="ts">
import {useFullscreen} from '@vueuse/core'
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "Fullscreen",
  setup() {
    const el = ref<HTMLElement | null>(null)
    const {isFullscreen, toggle} = useFullscreen(el)
    return {
      isFullscreen,
      toggle,
      el
    }
  }
})
</script>
<style lang="scss" scoped>
.demo {
  width: 240px;
  height: 240px;
  background: rgba(255, 0, 0, .2);
  transition: all ease .4s;
}

.is-fullscreen {
  background: rgba(255, 81, 81, 0.5);
}
</style>
