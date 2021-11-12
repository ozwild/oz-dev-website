<template>
  <Layer class="container">
    <BackgroundCanvas class="canvas"></BackgroundCanvas>
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

  .canvas {
    
  }
  .bcl {
    background: var(--primary);
    mix-blend-mode: lighten;
    z-index: 20;
  }

  .bgcl {
    background: linear-gradient(0deg, var(--dark), transparent), var(--primary);
    mix-blend-mode: hard-light;
    z-index: 21;
  }
}
</style>
