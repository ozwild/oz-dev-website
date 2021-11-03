<template>
  <div class="ps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "page-section",
};
</script>

<style lang="scss" scoped>
.ps {
  min-height: 100vh;
}
</style>
