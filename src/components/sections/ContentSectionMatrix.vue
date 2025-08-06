<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <BackgroundCanvas :mobile="mobile"></BackgroundCanvas>
        <Layer class="bcl"></Layer>
        <Layer class="bgcl"></Layer>
      </template>

      <template v-slot:foreground>
        
      </template>

      <template v-slot:title>
        <TypeWriter component="h2"> Enter the <i>Matrix</i></TypeWriter>
      </template>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";

import BackgroundCanvas from "@components/blocks/BackgroundCanvas.vue";
import PageSection from "../blocks/PageSection.vue";
import AppHeaderFooter from "../ui/AppHeader/AppHeaderFooter.vue";
import AppHeaderTop from "../ui/AppHeader/AppHeaderTop.vue";
import Layer from "../blocks/Layer.vue";
import FirstWavyShapeLayer from "../ui/AppHeader/FirstWavyShapeLayer.vue";
import SecondWavyShapeLayer from "../ui/AppHeader/SecondWavyShapeLayer.vue";
import TypeWriter from "@components/blocks/TypeWriter.vue";

export default {
  name: "content-section-matrix",
  components: {
    MatchMedia,
    Layer,
    BackgroundCanvas,
    PageSection,
    AppHeaderFooter,
    AppHeaderTop,
    FirstWavyShapeLayer,
    SecondWavyShapeLayer,
    TypeWriter,
  },
};
</script>

<style lang="scss" scoped>
.psa {
  &.mobile {
    .title-layer {
      h2 {
        top: 40%;
        left: 0.5em;
        text-align: start;
        transform: translateY(-50%);
      }
    }
  }
  &.desktop {
    .title-layer {
      h2 {
        top: 40%;
        left: 50%;
        text-align: start;
        font-size: calc(5rem + 3vw);
      }
    }
  }

  .animation-layer {
    filter: opacity(0.5);
  }

  .bcl {
    background: var(--dark);
    mix-blend-mode: overlay;
    mix-blend-mode: soft-light;
    z-index: 20;
    animation: fade-in 1.5s ease-in forwards;
  }

  .bgcl {
    background: linear-gradient(170deg, var(--light), black);
    background: linear-gradient(170deg, orange, var(--accent));
    mix-blend-mode: overlay;
    mix-blend-mode: soft-light;
    animation: fade-in 1.5s ease-in forwards;
    z-index: 21;
  }

  .wclb {
    transform: rotate(180deg);
    z-index: 70;
    top: unset;
  }
}
</style>
