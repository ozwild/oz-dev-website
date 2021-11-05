<template>
  <PageSection class="psa">
    <AppBackground></AppBackground>
    <AppHeaderTop style="z-index: 50"></AppHeaderTop>
    <!-- <MainContent style="z-index: 100;"></MainContent> -->
    <!-- <AppHeaderFooter style="z-index: 50;"></AppHeaderFooter> -->
    <Layer class="wcl">
      <SecondWavyShapeLayer></SecondWavyShapeLayer>
      <FirstWavyShapeLayer></FirstWavyShapeLayer>
    </Layer>
    <Layer class="title-layer">
      <h2>I'm your <i>expert</i> in the matrix</h2>
    </Layer>
  </PageSection>
</template>

<script>
import MainContent from "../ui/AppContent/MainContent.vue";
import AppBackground from "../ui/Background/AppBackground.vue";
import PageSection from "../blocks/PageSection.vue";
import AppHeaderFooter from "../ui/AppHeader/AppHeaderFooter.vue";
import AppHeaderTop from "../ui/AppHeader/AppHeaderTop.vue";
import Layer from "@components/blocks/Layer.vue";
import FirstWavyShapeLayer from "@/components/ui/AppHeader/FirstWavyShapeLayer.vue";
import SecondWavyShapeLayer from "@/components/ui/AppHeader/SecondWavyShapeLayer.vue";

export default {
  name: "header-section",
  components: {
    Layer,
    MainContent,
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

  .wcl {
    transform: rotate(180deg) rotateX(45deg);
    z-index: 70;
    top: unset;
    bottom: -131px;
  }

  .title-layer {
    z-index: 50;
    h2 {
      color: white;
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: calc(3rem + 1vw);
      width: 4em;
      height: 4em;
      line-height: 1;
      filter: saturate(1.5);
      padding: 0.5em 2em 0.5em 0.5em;
      background: #282828;
      border: 1px solid #999;
      text-shadow: 1px 1px 1px #222, -1px -1px 1px #ddd,
        4px 4px 8px rgb(0 0 0 / 30%);

      i {
        color: yellow;
      }
    }
  }
}
</style>
