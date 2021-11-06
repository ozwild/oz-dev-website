<template>
  <PageSection class="psa">
    <Layer class="animation-layer">
      <g-image class="lightning" src="~/media/lightning.gif"></g-image>
      <Layer class="animation-color-overlay"></Layer>
    </Layer>
    <Layer class="color-overlay"></Layer>
    <Layer class="title-layer">
      <h2 class="section-caption a">
        <span class="a">I can harness the </span>
        <span class="b"><i class="big">power</i> of </span> 
        <span class="c"><i>&lt;</i>code<i>/&gt;</i></span>
      </h2>
    </Layer>

    <PhotoFrame class="photo-frame"></PhotoFrame>
  </PageSection>
</template>

<script>
import Layer from "../blocks/Layer.vue";
import PageSection from "../blocks/PageSection.vue";
import PhotoFrame from "../ui/AppContent/PhotoFrame.vue";
export default {
  name: "content-section-ozwild",
  components: { Layer, PageSection, PhotoFrame },
};
</script>

<style lang="scss" scoped>
.psa {
  overflow: hidden;

  .animation-layer {
    .animation-color-overlay {
      background-color: var(--accent);
      mix-blend-mode: color-burn;
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
    background-color: var(--primary);
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
    background-color: variant(--primary);

    h2.section-caption {
      font-size: calc(3.5em + 4vw);
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
}
</style>
