<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <g-image
          v-if="mobile"
          src="~/media/pow-mobile.gif"
          class="pow"
        ></g-image>
        <g-image v-else src="~/media/pow.gif" class="pow"></g-image>
        <Layer class="power-overlay"></Layer>
      </template>

      <template v-slot:foreground>
        <Layer class="wcl">
          <SecondWavyShapeLayer
            class="background-dune"
            :color="duneColors.background"
          ></SecondWavyShapeLayer>

          <FirstWavyShapeLayer
            class="foreground-dune"
            :color="duneColors.foreground"
          ></FirstWavyShapeLayer>
        </Layer>
      </template>

      <template v-slot:title>
        <TypeWriter component="h2">
          a <i>full-stack</i> force to be reckoned with
        </TypeWriter>
      </template>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";

import PageSection from "@/components/blocks/PageSection.vue";
import Layer from "@components/blocks/Layer.vue";
import FirstWavyShapeLayer from "@/components/ui/AppHeader/FirstWavyShapeLayer.vue";
import SecondWavyShapeLayer from "@/components/ui/AppHeader/SecondWavyShapeLayer.vue";
import TypeWriter from "@components/blocks/TypeWriter.vue";

export default {
  name: "content-section-ninja",
  components: {
    MatchMedia,
    PageSection,
    Layer,
    FirstWavyShapeLayer,
    SecondWavyShapeLayer,
    TypeWriter,
  },
  data() {
    return {
      duneColors: {
        background: "var(--dark)",
        foreground: "var(--accent)",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.psa {
  &.mobile {
    .pow {
      transform: translate(-50%, -50%) scale(2) rotate(90deg);
    }
    .title-layer {
      h2 {
        top: 40%;
        left: 0.6em;
        width: calc(100% - 1em);
        transform: translateY(-50%);
      }
    }
  }

  .gradient-overlay {
    background: linear-gradient(
      0deg,
      var(--primary),
      var(--accent),
      var(--light)
    );
  }

  .wcl {
    transform: rotate(180deg);
    z-index: 10;
  }

  .background-dune {
    z-index: 20;
    filter: saturate(0.7) brightness(1) contrast(0.8);
  }

  .foreground-dune {
    z-index: 100;
    filter: saturate(1.2) brightness(1.1);
  }

  .pow {
    width: 100%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: opacity(0.8) blur(2px) contrast(1.2);
    z-index: 1;
  }

  .title-layer {
    h2 {
      font-size: calc(2.5rem + 4vw);
      position: absolute;
      top: 32%;
      left: 50%;
    }
  }
}
</style>
