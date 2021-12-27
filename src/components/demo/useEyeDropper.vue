<template>
  <template v-if="isSupported">
    <div>sRGBHex: {{ sRGBHex }}</div>
  </template>
  <div>
    <button
        :disabled="!isSupported"
        @click="open"
    >
      {{ isSupported ? 'Open Eye Dropper' : 'Not Supported by Your Browser' }}
    </button>
  </div>
</template>

<script lang="ts">
import {useEyeDropper} from '@vueuse/core'
import {defineComponent} from 'vue'

export default defineComponent({
  name: "UseEyeDropper",
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
