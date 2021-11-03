<template>
  <Layer class="container">
    <BottomShapeLayer style="z-index: 2;"></BottomShapeLayer>
    <BottomDecoratorBar style="z-index: 1;"></BottomDecoratorBar>
  </Layer>
</template>

<script>
import Layer from "../../blocks/Layer.vue";
import BottomDecoratorBar from "./BottomDecoratorBar.vue";
import BottomShapeLayer from "./BottomShapeLayer.vue";
export default {
  name: "app-footer",
  components: { BottomShapeLayer, BottomDecoratorBar, Layer },
};
</script>

<style lang="scss" scoped></style>
