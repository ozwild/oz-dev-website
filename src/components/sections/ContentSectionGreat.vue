<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <Layer class="star-shape"></Layer>
      </template>
      <template v-slot:title>
        <TypeWriter component="h2">
          ... a <i>great</i> Full Stack Dev?
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
        font-size: 5em;
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
    animation: star-animation 5s ease-in forwards;
  }
}

@keyframes star-animation {
  0% {
    background: rgb(248 147 29 / 0%);
    clip-path: polygon(
      50% 0%,
      100% 0,
      100% 35%,
      100% 57%,
      100% 100%,
      49% 100%,
      0 100%,
      0 59%,
      0 35%,
      0 0
    );
  }

  10% {
    background: rgb(248 147 29 / 1000%);
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
  }

  85%,
  100% {
    background: rgb(248 147 29 / 100%);
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
  }
}
</style>
