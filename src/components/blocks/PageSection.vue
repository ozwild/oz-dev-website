<template>
  <div class="ps" :class="`mode-${mode}`">
    <Layer class="background">
      <slot name="background"></slot>
    </Layer>
    <Layer class="animation-layer">
      <slot name="animation"></slot>
    </Layer>
    <Layer class="foreground">
      <slot name="foreground"></slot>
    </Layer>
    <Layer class="title-layer" v-if="$slots.title">
      <slot name="title"></slot>
    </Layer>
    <slot></slot>
  </div>
</template>

<script>
import Layer from "@components/blocks/Layer.vue";
export default {
  name: "page-section",
  props: {
    mode: {
      type: String,
      default: "normal",
      enum: ["previous", "next", "normal"],
    },
  },
  components: {
    Layer,
  },
};
</script>

<style lang="scss">
.ps {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  &.mode-previous {
    position: absolute;
    top: -100vh;
  }
  &.mode-next {
    top: 100vh;
  }
  .title-layer {
    position: fixed;
    z-index: 50;

    h2 {
      color: var(--light);
      font-size: calc(3em + 5vw);
      line-height: 1.15;
      max-width: 100%;
      filter: saturate(1.5);
      position: absolute;
      transform: translate(-50%, -50%);
      margin: 0;
      text-shadow: 2px 3px 2px rgba(0 0 0 / 60%),
        -1px -1px 0px rgba(255 255 255 / 60%), 4px 4px 8px rgba(0 0 0 / 20%);

      i {
        color: var(--accent);
        font-size: 1.1em;
      }

      small {
        font-size: 0.5em;
        line-height: 1;
      }
    }
  }

  .animation-layer {
    z-index: 10;
    left: 0;
  }

  .background {
    z-index: 0;
    background: var(--dark);
  }

  .foreground {
    z-index: 20;
  }
}
</style>
