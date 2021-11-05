<template>
  <Layer class="container">
    <BackgroundCanvas></BackgroundCanvas>
    <Layer class="bcl"></Layer>
    <Layer class="bgcl"></Layer>
  </Layer>
</template>

<script>
import Layer from "../../blocks/Layer.vue";
import BackgroundCanvas from "./BackgroundCanvas.vue";

export default {
  name: "app-background",
  components: { BackgroundCanvas, Layer },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  overflow: hidden;
  .bcl {
    background: silver;
    opacity: 0.12;
    z-index: 20;
  }

  .bgcl {
    background: linear-gradient(
        45deg,
        rgba(0, 255, 25, 0.05),
        transparent,
        rgba(255, 255, 255, 0.05),
        transparent
      ),
      radial-gradient(rgba(0,0,0, 0.3), transparent);
    z-index: 21;
  }
}
</style>
