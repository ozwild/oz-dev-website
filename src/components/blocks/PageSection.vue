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
  position: relative;
  min-height: 100vh;
  @media screen and (min-height: 0px) and (max-height: 500px) {
    min-height: 175vh;
  }
}
</style>
