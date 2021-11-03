<template>
  <div class="lc">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "layer",
};
</script>

<style lang="scss" scoped>
.lc {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
