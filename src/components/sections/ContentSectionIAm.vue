<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:title>
        <h2 component="h2">
          I
          <i>am</i><br />your <br />
          guy
        </h2>
      </template>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";

import Layer from "@components/blocks/Layer.vue";
import PageSection from "@components/blocks/PageSection.vue";
import TypeWriter from "@components/blocks/TypeWriter.vue";

export default {
  name: "content-section-ozwild",
  components: { Layer, PageSection, MatchMedia, TypeWriter },
};
</script>

<style lang="scss" scoped>
.psa {
  &.mobile {
    .title-layer {
      h2 {
        font-size: 6.5rem;
        top: 15%;
      }
    }
  }

  .title-layer {
    z-index: 50;
    width: 300vw;
    left: 50%;
    transform: translateX(-50%);

    h2 {
      text-align: center;
      text-transform: none;
      display: block;
      transform: translate3d(0, 0, 0);
      font-size: calc(4em + 4vw);
      bottom: calc(1em + 2vw);
      margin: 0 auto;
      padding: 0;
      position: relative;
      top: 15%;
      white-space: nowrap;
      opacity: 0;

      animation: puff-in-center 2s 0.5s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }
  }
}
</style>
