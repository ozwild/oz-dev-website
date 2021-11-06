<template>
  <ShapeContainer>
    <WaveBlock class="swsl" :style="`background: ${color}`"></WaveBlock>
  </ShapeContainer>
</template>

<script>
import WaveBlock from "../../blocks/WaveBlock.vue";
import ShapeContainer from "../../blocks/ShapeContainer.vue";

export default {
  name: "second-wavy-shape",
  props: { color: { type: String, default: "#fff" } },
  components: { WaveBlock, ShapeContainer },
};
</script>

<style lang="scss" scoped>
.swsl {
  background: #282828;
  min-height: 225px;
  height: calc(22.5vw + 15px);
}
</style>
