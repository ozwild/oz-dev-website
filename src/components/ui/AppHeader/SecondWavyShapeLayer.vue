<template>
  <ShapeContainer>
    <WaveBlock class="swsl"></WaveBlock>
  </ShapeContainer>
</template>

<script>
import WaveBlock from "../../blocks/WaveBlock.vue";
import ShapeContainer from "../../blocks/ShapeContainer.vue";

export default {
  name: "second-wavy-shape",
  components: { WaveBlock, ShapeContainer },
};
</script>

<style lang="scss" scoped>
.swsl {
  background: yellowgreen;
  min-height: 225px;
  height: calc(22.5vw + 15px);
  transform: translateY(-500px);
  transition: all 1s ease-in-out;
  transform: translateY(0);
}
</style>
