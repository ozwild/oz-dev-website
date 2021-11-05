<template>
  <Layer class="container">
    <BottomShapeLayer style="z-index: 2;">
      <FlexBox x="center" y="center" class="legend">
        Copyright © {{ year }} {{ $static.metadata.siteName }}
      </FlexBox>
    </BottomShapeLayer>
    <BottomDecoratorBar style="z-index: 1;"></BottomDecoratorBar>
  </Layer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Layer from "../../blocks/Layer.vue";
import FlexBox from "../../blocks/FlexBox.vue";
import BottomShapeLayer from "../AppHeader/BottomShapeLayer.vue";
import BottomDecoratorBar from "../AppHeader/BottomDecoratorBar.vue";
export default {
  name: "app-header-footer",
  components: { Layer, FlexBox, BottomShapeLayer, BottomDecoratorBar },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  .legend {
    height: 100%;
    color: #454545;
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
