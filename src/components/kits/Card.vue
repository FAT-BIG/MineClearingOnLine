<template>
  <div class="card">
    <div class="card-header" v-if="title">
      <div class="card-header-title">
        {{ title }}
      </div>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: "Card",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 246, 255, .2);
  border-radius: 8px;
  background: rgba(9, 14, 90, .5);
  box-shadow: inset 0 0 50px 0 rgba(10, 180, 190, .4);
  padding-bottom: 8px;
  // min-height: 320px;

  .card-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    background-image: linear-gradient(90deg, rgba(0, 153, 255, 0) 0%, rgba(0, 153, 255, .2) 50%, rgba(0, 153, 255, 0) 100%);

    .card-header-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $text-color;
      font-size: 16px;
      font-weight: bold;
    }
  }
}

</style>
