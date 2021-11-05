<template>
  <PageSection class="psa">
    <Layer class="title-layer">
      <h2>Looking for a <i>great</i> developer?<br /></h2>
      <g-image class="searching" src="~/media/searching.gif"></g-image>
    </Layer>
  </PageSection>
</template>

<script>
import PageSection from "@/components/blocks/PageSection.vue";
import Layer from "@components/blocks/Layer.vue";
export default {
  name: "content-section-beta",
  components: { PageSection, Layer },
};
</script>

<style lang="scss" scoped>
.psa {
  box-shadow: inset 0 4px 4px -3px black;
  overflow: hidden;
  background-color: yellow;

  .title-layer {
    z-index: 10;

    .searching {
      width: calc(15em + 20vw);
      position: absolute;
      left: 50%;
      top: 65%;
      transform: translate(-50%, -50%);
      z-index: 100;
      filter: drop-shadow(2px 6px 4px rgba(0, 0, 0, 0.7)) saturate(2)
        contrast(1.3) hue-rotate(5deg);
    }

    h2 {
      color: white;
      font-size: calc(3rem + 1vw);
      line-height: 1.15;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #999;
      width: 1em;
      height: 6em;
      filter: saturate(1.5);
      padding: 0.5em 5em 0.5em 0.5em;
      background: #282828;
      text-shadow: 1px 1px 1px #222, -1px -1px 1px #ddd,
        4px 4px 8px rgb(0 0 0 / 30%);
      z-index: 50;

      i {
        color: yellow;
      }
    }
  }
}
</style>
