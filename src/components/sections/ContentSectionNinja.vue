<template>
  <PageSection class="psa">
    <Layer class="title-layer">
      <h2>... One <i>badass</i> Code Ninja</h2>
    </Layer>
    <Layer class="wcl">
      <SecondWavyShapeLayer></SecondWavyShapeLayer>
      <FirstWavyShapeLayer></FirstWavyShapeLayer>
    </Layer>
    <g-image class="ninja" src="~/media/ninja.gif"></g-image>
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
  overflow: hidden;
  box-shadow: inset 0 4px 4px -4px black;
  background: linear-gradient(0deg, #dadada, transparent);
  background-color: darkturquoise;

  .wcl {
    transform: rotate(180deg);
    z-index: 10;
  }

  .ninja {
    width: calc(20em + 10vw);
    position: absolute;
    bottom: 0.5em;
    left: calc(10vw - 5em);
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0.3));
    z-index: 100;
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

    h2 {
      font-size: calc(2.5rem + 1vw);
      line-height: 1.15;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #999;
      width: 5em;
      height: 5em;
      text-align: center;
      transform-origin: center;
      color: white;
      filter: saturate(1.5);
      padding: 0.5em 1em 0.5em 0.5em;
      background: #282828;
      text-shadow: 1px 1px 1px #222, -1px -1px 1px #ddd,
        4px 4px 8px rgb(0 0 0 / 30%);

      i {
        color: yellow;
      }
    }
  }
}
</style>
