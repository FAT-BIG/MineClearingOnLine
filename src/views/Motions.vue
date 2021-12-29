<template>
  <button @click="handleToggle">
    toggle
  </button>
  <div style="display: flex">
    <div v-if="show">
      <div
          v-for="index in 8"
          class="block"
          v-motion
          @click="showSub = !showSub"
          :delay="100 * index"
          :initial="motionOption.initial"
          :enter="motionOption.enter"
          :leave="motionOption.leave"
      >

      </div>
    </div>
    <div v-if="showSub">
      <div
          v-for="index in 8"
          class="block"
          v-motion
          :delay="100 * index"
          :initial="motionOption.initial"
          :enter="motionOption.enter"
          :leave="motionOption.leave"
      >

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {reactive, defineComponent, ref} from 'vue'

export default defineComponent({
  name: "Motions",
  setup() {
    const show = ref(false)
    const showSub = ref(false)
    const handleToggle = () => {
      show.value = !show.value
      showSub.value && (showSub.value = false)
    }
    const motionOption = reactive({
      initial: {
        opacity: 0,
        scale: 0,
        x: -100,
      },
      enter: {
        opacity: 1,
        scale: 1,
        x: 0,
      },
      leave: {
        opacity: 0,
        scale: 0,
        x: -100,
      },
      hovered: {
        scale: 1.2,
      },
    })
    return {
      show,
      showSub,
      handleToggle,
      motionOption
    }
  }
})
</script>

<style lang="scss" scoped>
.block {
  width: 96px;
  height: 48px;
  background: #00CE7D;
  border-radius: 4px;
  margin-right: 16px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
