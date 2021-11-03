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
  filter: drop-shadow(2px 8px 4px rgba(0, 0, 0, 0.9));
}
</style>
