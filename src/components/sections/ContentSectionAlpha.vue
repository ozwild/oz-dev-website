<template>
  <PageSection class="psa">
    <Layer class="title-layer">
      <h2>Hi there!</h2>
    </Layer>
    <Layer class="animation-layer">
      <g-image class="hello" src="~/media/hello.gif"></g-image>
    </Layer>
    <Layer class="mask-layer">
      <div class="mask"></div>
    </Layer>
  </PageSection>
</template>

<script>
import PageSection from "@/components/blocks/PageSection.vue";
import Layer from "@components/blocks/Layer.vue";
export default {
  name: "content-section-alpha",
  components: { PageSection, Layer },
};
</script>

<style lang="scss" scoped>
.psa {
  overflow: hidden;
  background: linear-gradient(0deg, #dadada, transparent);
  background-color: darkturquoise;
  .mask-layer {
    z-index: 20;
    .mask {
      position: absolute;
      top: 32%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(25em + 5vw);
      height: calc(25em + 5vw);
      background: transparent;
      border: 150em solid dodgerblue;
      box-shadow: inset 1px 1px 6px -3px black, inset -1px -1px 4px -1px black;
    }
  }
  .animation-layer {
    z-index: 10;
    .hello {
      width: calc(30em + 25vw);
      position: absolute;
      left: 50%;
      top: 32%;
      transform: translate(-50%, -50%);
      z-index: 5;
      filter: saturate(1.5);
    }
  }
  .title-layer {
    z-index: 50;

    h2 {
      color: white;
      font-size: calc(5rem + 1vw);
      line-height: 1.15;
      position: absolute;
      bottom: 2em;
      left: 20%;
      width: 2em;
      height: 2em;
      z-index: 100;
      filter: saturate(1.5);
      border: 1px solid #999;
      padding: 0 1.25em 0.5em 0.5em;
      background: #282828;
      text-shadow: 1px 1px 1px #222, -1px -1px 1px #ddd,
        4px 4px 8px rgb(0 0 0 / 30%);
    }
  }
}
</style>
