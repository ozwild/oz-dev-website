<template>
  <PageSection class="psa">
    <Layer class="title-layer">
      <h2 class="section-caption">Hello there <i>jolly</i> visitor</h2>
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
  background-color: var(--accent);
  .mask-layer {
    z-index: 20;
    .mask {
      position: absolute;
      top: 26%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(26.5em + 5vw);
      height: calc(26.5em + 5vw);
      background: transparent;
      border: 150em solid var(--dark);
      box-shadow: inset 1px 1px 6px -3px black, inset -1px -1px 4px -1px black;
    }
  }
  .animation-layer {
    z-index: 10;
    mix-blend-mode: screen;
    .hello {
      position: absolute;
      left: 50%;
      top: 23%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }
  }
  .title-layer {
    z-index: 50;

    h2.section-caption {
      top: unset;
      bottom: calc(0.5em + 1vw);
      left: 50%;
      transform: translateX(-50%);
      padding: 1em 0 0.5em 0;
      z-index: 100;
      font-size: calc(4em + 3vw);
      max-width: 6em;
    }
  }
}
</style>
