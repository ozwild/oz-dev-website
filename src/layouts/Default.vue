<template>
  <MediaQueryProvider :queries="$options.queries">
    <MatchMedia v-slot="{ mobile }">
      <div class="layout" id="app-1">
        <main>
          <Navigator
            :eventBus="eventBus"
            @change="setSection"
            @loaded="loadedHandler"
            :pauseAutoSwitch="presentingInstructions"
          />

          <transition name="component-fade" mode="out-in">
            <component :is="section"></component>
          </transition>

          <PageInstructions
            :mobile="mobile"
            @change="instructionsChangeHandler"
          />
        </main>
      </div>
    </MatchMedia>
  </MediaQueryProvider>
</template>

<script>
import Vue from "vue";
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
      eventBus: new Vue(),
      section: null,
      ready: false,
      presentingInstructions: false,
    };
  },
  methods: {
    setSection(section) {
      this.section = section;
      this.eventBus.$emit("section-loaded", section);
    },
    loadedHandler() {
      this.ready = true;
    },
    instructionsChangeHandler(presentingInstructions) {
      this.presentingInstructions = presentingInstructions;
    },
  },
};
</script>

<style lang="scss"></style>
