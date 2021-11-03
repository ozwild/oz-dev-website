<template>
  <ShapeContainer>
    <WaveBlock class="fwsl"></WaveBlock>
  </ShapeContainer>
</template>

<script>
import WaveBlock from "../../blocks/WaveBlock.vue";
import ShapeContainer from "../../blocks/ShapeContainer.vue";

export default {
  name: "first-wavy-shape",
  components: { WaveBlock, ShapeContainer },
};
</script>

<style lang="scss" scoped>
.fwsl {
  background: mintcream;
  min-height: 210px;
  height: calc(15.5vw);
  box-shadow: 0 4px 4px -3px black;
  transform: translateY(-500px);
  transition: all 1s ease-in-out;
  transform: translateY(0);
}
</style>
