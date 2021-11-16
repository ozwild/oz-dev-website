<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:background>
        <BackgroundCanvas :mobile="mobile"></BackgroundCanvas>
        <Layer class="bcl"></Layer>
        <Layer class="bgcl"></Layer>
      </template>

      <template v-slot:animation>
        <Layer class="wclb">
          <SecondWavyShapeLayer color="var(--accent)"></SecondWavyShapeLayer>
          <FirstWavyShapeLayer color="var(--dark)"></FirstWavyShapeLayer>
        </Layer>
      </template>

      <template v-slot:title>
        <TypeWriter component="h2">
          Come into the <i class="big">matrix</i>
        </TypeWriter>
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
        left: 5%;
        text-align: start;
        transform: translateY(-50%);
        font-size: 4.75em;
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

  .bcl {
    background: var(--accent);
    mix-blend-mode: overlay;
    z-index: 20;
  }

  .bgcl {
    background: linear-gradient(0deg, var(--dark), var(--light));
    mix-blend-mode: exclusion;
    z-index: 21;
  }

  .wclb {
    transform: rotate(180deg) rotateX(45deg);
    z-index: 70;
    top: unset;
    bottom: -131px;
  }
}
</style>
