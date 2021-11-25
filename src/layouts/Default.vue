<template>
  <MediaQueryProvider :queries="$options.queries">
    <MatchMedia v-slot="{ mobile }">
      <div class="layout" id="app-1">
        <main>
          <Navigator @change="setSection" @loaded="loadedHandler" />

          <transition name="component-fade" mode="out-in">
            <component :is="section"></component>
          </transition>

          <PageInstructions :mobile="mobile" />
        </main>
      </div>
    </MatchMedia>
  </MediaQueryProvider>
</template>

<script>
import { MediaQueryProvider, MatchMedia } from "vue-component-media-queries";

import Navigator from "@components/blocks/Navigator.vue";
import PageInstructions from "@components/blocks/PageInstructions.vue";

const queries = {
  mobile: "(max-width: 760px)",
};

export default {
  components: {
    MediaQueryProvider,
    MatchMedia,
    Navigator,
    PageInstructions,
  },
  queries,
  data() {
    return {
      section: null,
      ready: false,
    };
  },
  methods: {
    setSection(section) {
      this.section = section;
    },
    loadedHandler() {
      this.ready = true;
    },
  },
};
</script>

<style lang="scss"></style>
