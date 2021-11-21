<template>
  <MediaQueryProvider :queries="$options.queries">
    <div class="layout" id="app-1">
      <main>
        <Navigator @change="setSection" @loaded="loadedHandler"></Navigator>

        <transition name="component-fade" mode="out-in">
          <component :is="section"></component>
        </transition>
      </main>
    </div>
  </MediaQueryProvider>
</template>

<script>
import { MediaQueryProvider } from "vue-component-media-queries";

import Navigator from "@components/blocks/Navigator.vue";

const queries = {
  mobile: "(max-width: 760px)",
};

export default {
  components: {
    MediaQueryProvider,
    Navigator,
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
