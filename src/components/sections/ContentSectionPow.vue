<template>
  <PageSection class="psa">
    <g-image class="pow" src="~/media/pow.gif"></g-image>
  </PageSection>
</template>

<script>
import PageSection from "@/components/blocks/PageSection.vue";
import Layer from "@components/blocks/Layer.vue";
export default {
  name: "content-section-pow",
  components: { PageSection, Layer },
};
</script>

<style lang="scss" scoped>
.psa {
  background-color: black;
  overflow: hidden;
  .title-layer {
    z-index: 10;

    h2 {
      color: gold;
      filter: shadow(0px 0px 10px gold);
      font-size: calc(2.5rem + 1vw);
      position: absolute;
      top: calc(50% - 5rem);
      left: -2em;
      width: 17.5rem;
      transform: translateY(-50%);
      background: black;
      padding: 3em;
      border-radius: 50%;
    }
  }
  .pow {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
