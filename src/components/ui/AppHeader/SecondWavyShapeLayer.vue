<template>
  <MatchMedia v-slot="{ mobile }">
    <ShapeContainer>
      <WaveBlock
        :class="['swsl', { mobile, desktop: !mobile }]"
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
  name: "second-wavy-shape",
  props: { color: { type: String, default: "#fff" } },
  components: { WaveBlock, ShapeContainer, MatchMedia },
};
</script>

<style lang="scss" scoped>
.swsl {
  &.mobile {
    height: 50vh;
    width: 160vw;
  }

  background: #282828;
  filter: contrast(0.5);

  height: 50vh;
  width: 160vw;
}
</style>
