<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <Layer class="star-shape"></Layer>
      </template>
      <template v-slot:title>
        <TypeWriter component="h2">
          ... one <i>seasoned</i> in the craft
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
  name: "content-section-search",
  components: { PageSection, Layer, MatchMedia, TypeWriter },
};
</script>

<style lang="scss" scoped>
.psa {
  &.mobile {
    .animation-layer {
      .star-shape {
        left: 10%;
        width: 11em;
        height: 11em;
      }
    }

    .title-layer {
      h2 {
        left: unset;
        right: 0.5em;
        top: 47%;
        transform: translateY(-50%);
      }
    }
  }

  &.desktop {
    .animation-layer {
      .star-shape {
        left: 50%;
        width: 11em;
        height: 11em;
      }
    }
  }

  .title-layer {
    z-index: 10;

    h2 {
      top: 45%;
      left: 50%;
      padding: 0;
      text-align: end;
    }
  }
}

.animation-layer {
  .star-shape {
    width: 15em;
    height: 15em;
    top: 4em;
    left: 50%;
    background: var(--light);
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    animation: fade-in 5s ease-in forwards;
  }
}
</style>
