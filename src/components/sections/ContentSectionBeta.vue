<template>
  <PageSection class="psa">
    <Layer class="background"></Layer>
    <Layer class="title-layer">
      <h2 class="section-caption top">Are you on the <i>look</i>...</h2>
      <h2 class="section-caption bottom">
        ...for a <i>great</i> developer?<br />
      </h2>
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
  .title-layer {
    z-index: 10;

    .searching {
      width: calc(50em + 15vw);
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%) scale(1.25);
      z-index: 10;
      filter: drop-shadow(2px 6px 4px rgba(0 0 0 / 70%)) saturate(2)
        contrast(1.3) hue-rotate(5deg);
    }

    h2 {
      background: none;
      border: none;
      box-shadow: none;
      font-size: calc(2.5em + 4vw);
      z-index: 50;
      transform: unset;

      &.top {
        top: 5vh;
        left: calc(0.25em + 5vw);
        min-width: 6em;
      }
      &.bottom {
        bottom: 5vh;
        right: 5vw;
      }
    }
  }
}
</style>
