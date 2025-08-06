<template>
  <MatchMedia v-slot="{ mobile }">
    <div class="ps" :class="[`mode-${mode}`, { mobile, desktop: !mobile }]">
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
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
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
    MatchMedia,
  },
};
</script>

<style lang="scss">
.ps {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  &.mobile {
    .title-layer {
      h2 {
        font-size: 4em;
      }
    }
  }

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
      color: var(--typography);
      font-size: 6em;
      line-height: 1.15;
      max-width: 100%;

      position: absolute;
      transform: translate(-50%, -50%);
      margin: 0;

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
    background: var(--background);
  }

  .foreground {
    z-index: 20;
  }
}
</style>
