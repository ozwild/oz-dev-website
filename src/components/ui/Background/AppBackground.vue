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
    background: black;
    opacity: 0.4;
    z-index: 20;
  }

  .bgcl {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      transparent,
      rgba(0, 187, 0, 0.4) 36%,
      rgba(0, 255, 0, 0.4) 43%,
      transparent,
      rgba(255, 255, 255, 0.2)
    );
    /* background: linear-gradient(
        45deg,
        black,
        rgba(0, 255, 25, 0.05),
        transparent,
        rgba(255, 255, 2550, 0.05),
        transparent
      ),
      radial-gradient(black, transparent); */
    z-index: 21;
  }
}
</style>
