<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:background>
        <Layer class="scene-background"></Layer>
      </template>

      <template v-slot:animation>
        <Layer class="gateway">
          <Layer class="beyond-gateway">
            <g-image class="lightning" src="~/media/lightning.gif"></g-image>
            <CubeFrame class="cube-frame"></CubeFrame>
            <Layer class="animation-color-overlay">
              <Layer class="far-land"></Layer>
              <Layer class="air"></Layer>
              <Layer class="near-land"></Layer>
            </Layer>
          </Layer>
        </Layer>
      </template>

      <Layer class="color-overlay"></Layer>

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

import Layer from "../blocks/Layer.vue";
import PageSection from "../blocks/PageSection.vue";
import CubeFrame from "../blocks/CubeFrame.vue";
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

  .scene-background {
    background: white;
  }

  .animation-layer {
    /* width: 15em;
    height: 65vh;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 1s;
    box-shadow: inset 2px 0 2px 0px black, inset -2px 0 2px 0px black,
      0 0 12px 0 var(--light); */

    .gateway {
      /* &:before {
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
      } */
    }

    .beyond-gateway {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      filter: blur(3.5px) grayscale(0.3);
      mix-blend-mode: lighten;
      //transition: background 1.5s;
      /* background: linear-gradient(
        0deg,
        white,
        var(--light) 16%,
        pink,
        transparent 50%,
        black
      );
      background: linear-gradient(
        0deg,
        white,
        var(--light) 2%,
        pink 3%,
        transparent 4%,
        black
      ); */
      //background: var(--accent);
    }

    .animation-color-overlay {
      /* background: var(--dark);
      mix-blend-mode: lighten; */
      mix-blend-mode: color-burn;
      .far-land {
        z-index: 5;
        background: linear-gradient(
          45deg,
          var(--dark),
          var(--accent),
          var(--light)
        );
      }

      .air {
        z-index: 7;
        background: var(--accent);
        mix-blend-mode: color-dodge;
        animation: sky 3.65s linear infinite alternate both;
      }

      .near-land {
        z-index: 10;
        background: linear-gradient(
          0deg,
          white,
          var(--light) 40%,
          transparent 40%
        );
      }
    }

    .lightning {
      position: absolute;
      top: 35%;
      left: 48%;
      width: 42em;
      transform: translate(-50%, -50%);
      //filter: saturate(0.4) blur(1px);
    }
  }

  .color-overlay {
    /* background-color: var(--dark);
    mix-blend-mode: lighten; */
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
