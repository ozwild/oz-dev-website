<template>
  <ShapeContainer>
    <WaveBlock class="fwsl" :style="`background: ${color}`"></WaveBlock>
  </ShapeContainer>
</template>

<script>
import WaveBlock from "../../blocks/WaveBlock.vue";
import ShapeContainer from "../../blocks/ShapeContainer.vue";

export default {
  name: "first-wavy-shape",
  props: { color: { type: String, default: "#fff" } },
  components: { WaveBlock, ShapeContainer },
};
</script>

<style lang="scss" scoped>
.fwsl {
  min-height: 210px;
  height: calc(15.5vw);
}
</style>
