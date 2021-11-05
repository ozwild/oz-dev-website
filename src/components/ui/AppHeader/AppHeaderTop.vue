<template>
  <Layer class="container">
    <RainboxShapeLayer></RainboxShapeLayer>
    <SecondWavyShapeLayer></SecondWavyShapeLayer>
    <FirstWavyShapeLayer></FirstWavyShapeLayer>
  </Layer>
</template>

<script>
import Layer from "../../blocks/Layer.vue";
import SecondWavyShapeLayer from "./SecondWavyShapeLayer.vue";
import FirstWavyShapeLayer from "./FirstWavyShapeLayer.vue";
import RainboxShapeLayer from "./RainboxShapeLayer.vue";
export default {
  name: "app-header-top",
  components: {
    Layer,
    SecondWavyShapeLayer,
    FirstWavyShapeLayer,
    RainboxShapeLayer,
  },
};
</script>

<style lang="scss" scoped></style>
