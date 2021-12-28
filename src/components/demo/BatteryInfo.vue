<template>
  <pre>{{ battery }}</pre>
  <div>{{ battery.level * 100 }}%</div>
</template>

<script lang="ts">
import {useBattery} from '@vueuse/core'
import {defineComponent,reactive} from 'vue'

export default defineComponent({
  name: "BatteryInfo",
  setup() {
    const battery = reactive(useBattery())
    return {
      battery
    }
  }
})
</script>
