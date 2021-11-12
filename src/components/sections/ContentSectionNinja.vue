<template>
  <PageSection class="psa">
    <Layer class="background"></Layer>
    <Layer class="title-layer">
      <h2 class="section-caption">... One major <i>badass</i> code Ninja?</h2>
    </Layer>
    <Layer class="wcl">
      <SecondWavyShapeLayer
        class="background-dune"
        :color="duneColors.background"
      ></SecondWavyShapeLayer>

      <!-- <g-image class="ninja" src="~/media/ninja.gif"></g-image> -->

      <FirstWavyShapeLayer
        class="foreground-dune"
        :color="duneColors.foreground"
      ></FirstWavyShapeLayer>
    </Layer>
    <lottie
      :options="powOptions"
      view-box="1920 1080"
      :width="1920"
      :height="1080"
      class="pow-lottie"
    ></lottie>
  </PageSection>
</template>

<script>
import Lottie from "vue-lottie";
import PageSection from "@/components/blocks/PageSection.vue";
import Layer from "@components/blocks/Layer.vue";
import FirstWavyShapeLayer from "@/components/ui/AppHeader/FirstWavyShapeLayer.vue";
import SecondWavyShapeLayer from "@/components/ui/AppHeader/SecondWavyShapeLayer.vue";
import * as animationData from "~/media/pow.json";

export default {
  name: "content-section-ninja",
  components: {
    PageSection,
    Layer,
    FirstWavyShapeLayer,
    SecondWavyShapeLayer,
    lottie: Lottie,
  },
  data() {
    return {
      duneColors: {
        background: "var(--dark)",
        foreground: "var(--dark)",
      },
      powOptions: {
        animationData: animationData.default,
        loop: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.psa {
  .background {
    background: linear-gradient(0deg, var(--primary), var(--accent), var(--light));
    filter: none;
  }

  .wcl {
    transform: rotate(180deg);
    z-index: 10;
  }

  .ninja {
    width: calc(20em + 10vw);
    position: absolute;
    top: 5%;
    left: 50%;
    filter: brightness(0) opacity(0.68);
    z-index: 50;
    transform: rotate(180deg) translateX(50%) scale(1.5);
  }

  .background-dune {
    z-index: 20;
    filter: saturate(0.7) brightness(1) contrast(0.8);
  }

  .foreground-dune {
    z-index: 100;
    filter: saturate(1.2) brightness(1.1);
  }

  .pow,
  .pow-lottie {
    width: 100%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    opacity: 0.6;
    z-index: 1;
  }

  .title-layer {
    z-index: 50;

    h2.section-caption {
      background: unset;
      box-shadow: unset;
      border: unset;
      font-size: calc(2.5rem + 4vw);
      position: absolute;
      top: 32%;
      left: 50%;
      padding: 0.5em 1em 0.5em 0.5em;
      i {
        font-size: 1.5em;
      }
    }
  }
}
</style>
