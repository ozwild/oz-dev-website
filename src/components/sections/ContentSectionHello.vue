<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <Layer class="hello-container">
          <g-image class="hello" src="~/media/hello.gif"></g-image>
        </Layer>
        <Layer class="mask-layer">
          <div class="mask"></div>
        </Layer>
      </template>

      <template v-slot:title>
        <TypeWriter component="h2" class="caption">
          Hello <i>jolly</i> visitor!
        </TypeWriter>
      </template>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";

import PageSection from "@/components/blocks/PageSection.vue";
import Layer from "@components/blocks/Layer.vue";
import TypeWriter from "@components/blocks/TypeWriter.vue";

export default {
  name: "content-section-hello",
  components: { PageSection, Layer, MatchMedia, TypeWriter },
  data() {
    return {
      caption: "Hello there\njolly visitor",
    };
  },
};
</script>

<style lang="scss" scoped>
.psa {
  &.mobile {
    .mask-layer {
      .mask {
        top: 27%;
        width: calc(12.5em + 5vw);
        height: calc(12.5em + 5vw);
      }
    }
    .animation-layer {
      .hello {
        top: 27%;
        width: calc(12em);
      }
    }
    .title-layer {
      h2 {
        font-size: 4.5em;
        top: 55%;
        left: 10%;
        transform: translateY(-50%);
      }
    }
  }
  &.desktop {
    .mask-layer {
      .mask {
        top: 32%;
        width: calc(22.5em + 5vw);
        height: calc(22.5em + 5vw);
      }
    }
    .animation-layer {
      .hello {
        top: 32%;
        width: calc(22.5em + 5vw);
      }
    }
    .title-layer {
      h2 {
        bottom: 1.5em;
        transform: translateX(-50%);
      }
    }
  }

  .mask-layer {
    z-index: 20;
    .mask {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: transparent;
      border: 150em solid var(--dark);
      box-shadow: inset 1px 1px 6px -3px black, inset -1px -1px 4px -1px black;
      mix-blend-mode: multiply;
    }
  }
  .animation-layer {
    .hello-container {
      background-color: var(--accent);
      background-color: var(--dark);
      background-color: var(--primary);
    }

    .hello {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }
  }
  .title-layer {
    z-index: 50;

    .caption {
      left: 50%;
      z-index: 100;
      font-size: calc(4em + 3vw);
    }
  }
}
</style>
