<template>
  <div class="ps">
    <Layer class="background">
      <slot name="background"></slot>
    </Layer>
    <Layer class="animation-layer">
      <slot name="animation"></slot>
    </Layer>
    <Layer class="title-layer">
      <slot name="title"></slot>
    </Layer>
    <slot></slot>
  </div>
</template>

<script>
import Layer from "@components/blocks/Layer.vue";
export default {
  name: "page-section",
  components: {
    Layer,
  },
};
</script>

<style lang="scss">
.ps {
  position: relative;
  min-height: 100vh;
  mix-blend-mode: screen;
  overflow: hidden;
  box-shadow: inset 0 4px 4px -2px rgba(0 0 0 / 60%);

  @media screen and (min-height: 0px) and (max-height: 500px) {
    min-height: 175vh;
  }

  .title-layer {
    z-index: 50;

    h2 {
      color: var(--light);
      font-size: calc(3em + 5vw);
      line-height: 1.15;
      max-width: 100%;
      filter: saturate(1.5) blur(0.5px);
      position: absolute;
      transform: translate(-50%, -50%);
      margin: 0;
      text-shadow: 2px 3px 2px rgba(0 0 0 / 60%), -1px -1px 0px var(--light),
        4px 4px 8px rgba(0 0 0 / 20%);

      i {
        color: var(--accent);
        font-size: calc(1.25em);
      }
    }
  }

  .animation-layer {
    z-index: 10;
    filter: blur(1.5px);
  }

  .background {
    z-index: 0;
    background: var(--dark);
  }
}
</style>
