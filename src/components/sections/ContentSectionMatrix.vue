<template>
  <PageSection class="psa">
    <AppBackground class="matrix-background"></AppBackground>
    <Layer class="wclt">
      <SecondWavyShapeLayer color="var(--dark)"></SecondWavyShapeLayer>
      <FirstWavyShapeLayer color="var(--dark)"></FirstWavyShapeLayer>
    </Layer>
    <Layer class="wclb">
      <SecondWavyShapeLayer color="var(--accent)"></SecondWavyShapeLayer>
      <FirstWavyShapeLayer color="var(--dark)"></FirstWavyShapeLayer>
    </Layer>
    <Layer class="title-layer">
      <h2 class="section-caption">
        Come into the <i class="big">matrix</i>
      </h2>
    </Layer>
  </PageSection>
</template>

<script>
import AppBackground from "../ui/Background/AppBackground.vue";
import PageSection from "../blocks/PageSection.vue";
import AppHeaderFooter from "../ui/AppHeader/AppHeaderFooter.vue";
import AppHeaderTop from "../ui/AppHeader/AppHeaderTop.vue";
import Layer from "../blocks/Layer.vue";
import FirstWavyShapeLayer from "../ui/AppHeader/FirstWavyShapeLayer.vue";
import SecondWavyShapeLayer from "../ui/AppHeader/SecondWavyShapeLayer.vue";

export default {
  name: "content-section-matrix",
  components: {
    Layer,
    AppBackground,
    PageSection,
    AppHeaderFooter,
    AppHeaderTop,
    FirstWavyShapeLayer,
    SecondWavyShapeLayer,
  },
};
</script>

<style lang="scss" scoped>
.psa {
  overflow: hidden;

  .matrix-background {
    z-index: 1;
  }
  .wclt {
    z-index: 70;
  }
  .wclb {
    transform: rotate(180deg) rotateX(45deg);
    z-index: 70;
    top: unset;
    bottom: -131px;
  }

  .title-layer {
    z-index: 100;
    h2 {
      background: unset;
      box-shadow: unset;
      border: unset;
      top: 45%;
      left: 50%;
      font-size: calc(3rem + 3vw);
      
    }
  }
}
</style>
