<template>
  <MatchMedia v-slot="{ mobile }">
    <ShapeContainer>
      <WaveBlock
        :class="['fwsl', { mobile, desktop: !mobile }]"
        :style="`background: ${color}`"
      ></WaveBlock>
    </ShapeContainer>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
import WaveBlock from "../../blocks/WaveBlock.vue";
import ShapeContainer from "../../blocks/ShapeContainer.vue";

export default {
  name: "first-wavy-shape",
  props: { color: { type: String, default: "#fff" } },
  components: { WaveBlock, ShapeContainer, MatchMedia },
};
</script>

<style lang="scss" scoped>
.fwsl {
  &.mobile {
    height: 30vh;
    width: 240vw;
    right: 0;
    left: unset;
  }

  filter: saturate(1.5) grayscale(0.6);
  height: 30vh;
  width: 240vw;
  right: 0;
  left: unset;
}
</style>
