<template>
  <MediaQueryProvider :queries="$options.queries">
    <div class="layout" id="app-1">
      <component :is="section"></component>
      <Navigator @change="setSection"></Navigator>
    </div>
  </MediaQueryProvider>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
    };
  },
  methods: {
    setSection(section) {
      this.section = section;
    },
  },
};
</script>

<style lang="scss"></style>
