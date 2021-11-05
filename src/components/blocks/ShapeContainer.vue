<template>
  <div class="shape-container">
    <slot />
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.shape-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
