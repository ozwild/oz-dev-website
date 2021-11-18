<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <div class="searching-container">
          <g-image class="searching" src="~/media/searching.gif"></g-image>
        </div>
      </template>

      <template v-slot:title>
        <TypeWriter component="h2">
          Are you on the <i>look</i> for...
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
    .title-layer {
      h2 {
        font-size: 4.5em;
        top: 45%;
        left: 10%;
        transform: translateY(-50%);
        max-width: 80%;
      }
    }
    .searching {
      right: 1em;
      top: 50%;
      left: 50%;
      transform: translate(-40%, -40%);
    }
  }

  &.desktop {
    .searching {
      width: auto;
      height: 150vh;
      top: 50%;
      left: 50%;
      transform: translate(-40%, -45%);
    }

    .title-layer {
      h2 {
        top: 37%;
        left: 50%;
      }
    }
  }

  .searching-container {
    animation: fade-in 0.7s 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    .searching {
      position: absolute;
      filter: drop-shadow(0.5em 1em 2px rgba(0 0 0 / 60%)) brightness(0.75);
    }
  }
}
</style>
