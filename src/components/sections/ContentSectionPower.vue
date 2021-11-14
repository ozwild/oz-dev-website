<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile }">
      <Layer class="background"></Layer>
      <Layer class="animation-layer">
        <Layer class="gateway">
          <Layer class="beyond-gateway">
            <g-image class="lightning" src="~/media/lightning.gif"></g-image>
            <CubeFrame class="photo-frame"></CubeFrame>
            <Layer class="animation-color-overlay"></Layer>
          </Layer>
        </Layer>
      </Layer>
      <Layer class="color-overlay"></Layer>
      <Layer class="title-layer">
        <h2 class="section-caption a">
          <span class="a">Discover the </span>
          <span class="b"><i>&lt;</i>POWER<i>/&gt;</i> to </span>
          <br />
          <span class="c"><i class="big">create</i></span>
        </h2>
      </Layer>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";

import Layer from "../blocks/Layer.vue";
import PageSection from "../blocks/PageSection.vue";
import CubeFrame from "../blocks/CubeFrame.vue";
export default {
  name: "content-section-power",
  components: { Layer, PageSection, CubeFrame, MatchMedia },
};
</script>

<style lang="scss" scoped>
.psa {
  overflow: hidden;

  .animation-layer {
    width: 15em;
    height: 65vh;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 1s;
    box-shadow: inset 2px 0 2px 0px black, inset -2px 0 2px 0px black,
      0 0 12px 0 var(--light);

    .gateway {
      &:before {
        content: "";
        position: absolute;
        width: 550%;
        height: 40vh;
        bottom: -60vh;
        left: 50%;
        z-index: 5;
        transform: translate(-50%, -50%);
        background: linear-gradient(
          180deg,
          var(--dark),
          rgba(255 255 255 / 20%)
        );
        clip-path: polygon(40% 0, 60% 0, 100% 100%, 0% 100%);
      }
    }

    .beyond-gateway {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      filter: blur(2.5px) grayscale(0.3);
      mix-blend-mode: lighten;
      background: linear-gradient(
          0deg,
          white,
          var(--light) 16%,
          pink,
          transparent 50%,
          black
        ),
        deeppink;
      background: var(--accent);
    }

    .animation-color-overlay {
      background: var(--dark);
      mix-blend-mode: lighten;
    }

    .lightning {
      position: absolute;
      top: 35%;
      left: 48%;
      width: 42em;
      transform: translate(-50%, -50%);
      filter: saturate(0.4) blur(1px);
    }
  }

  .color-overlay {
    background-color: var(--dark);
    mix-blend-mode: lighten;
  }

  .photo-frame {
    position: absolute;
    top: 28%;
    left: 47%;
    transform: translate(-50%, -50%);
    width: calc(11em + 5vw);
    height: calc(11em + 5vw);
  }
  .title-layer {
    z-index: 50;

    h2.section-caption {
      font-size: calc(2.5em + 5vw);
      bottom: calc(1em + 2vw);
      left: 50%;
      transform: translateX(-50%);
      padding: 0;
      line-height: 1;

      .a {
        font-size: 85%;
        z-index: 10;
      }

      .b {
        font-size: 100%;
        bottom: calc(2em + 2vw);
        z-index: 50;
      }

      .c {
        font-family: monospace;
        font-size: 110%;
        bottom: calc(0.5em + 2vw);
        z-index: 20;
      }
    }
  }

  &.mobile {
    .animation-layer {
      transform: translateX(-100%);
    }
  }
}
</style>
