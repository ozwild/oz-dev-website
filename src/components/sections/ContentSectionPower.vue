<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <Layer class="gateway">
          <Layer class="beyond-gateway">
            <g-image class="lightning" src="~/media/lightning.gif"></g-image>
            <CubeFrame class="cube-frame"></CubeFrame>
          </Layer>
        </Layer>
        
      </template>

      <template v-slot:foreground>
        <Layer class="near-land"></Layer>
      </template>

      <template v-slot:title>
        <TypeWriter component="h2">
          <span class="a">Tap on the </span>
          <span class="b"><i>POWER</i></span>
        </TypeWriter>
      </template>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";

import Layer from "@components/blocks/Layer.vue";
import PageSection from "@components/blocks/PageSection.vue";
import CubeFrame from "@components/blocks/CubeFrame.vue";
import TypeWriter from "@components/blocks/TypeWriter.vue";

export default {
  name: "content-section-power",
  components: { Layer, PageSection, CubeFrame, MatchMedia, TypeWriter },
};
</script>

<style lang="scss" scoped>
.psa {
  &.mobile {
    .title-layer {
      h2 {
        font-size: 4.75em;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
      }
    }
  }

  &.desktop {
    .title-layer {
      h2 {
        top: 50%;
        left: 50%;
      }
    }
  }

  .near-land {
    z-index: 10;
    background: linear-gradient(0deg, white, var(--light) 40%, transparent 40%);
  }

  .animation-layer {
    .beyond-gateway {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .lightning {
      position: absolute;
      top: 35%;
      left: 48%;
      width: 42em;
      transform: translate(-50%, -50%);
    }
  }

  .cube-frame {
    position: absolute;
    top: 28%;
    left: 47%;
    transform: translate(-50%, -50%);
    width: calc(11em + 5vw);
    height: calc(11em + 5vw);
  }
}
</style>
