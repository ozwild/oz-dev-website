<template>
  <MediaQueryProvider :queries="$options.queries">
    <MatchMedia v-slot="{}">
      <div class="layout" id="app-1">
        <ContentSectionHello v-if="sectionId === 1"></ContentSectionHello>
        <ContentSectionSearch v-if="sectionId === 2"></ContentSectionSearch>
        <ContentSectionGreat v-if="sectionId === 3"></ContentSectionGreat>
        <ContentSectionNinja v-if="sectionId === 4"></ContentSectionNinja>
        <ContentSectionIAm v-if="sectionId === 5"></ContentSectionIAm>
        <ContentSectionMatrix v-if="sectionId === 6"></ContentSectionMatrix>
        <ContentSectionPower v-if="sectionId === 7"></ContentSectionPower>
        <ContentSectionContact v-if="sectionId === 8"></ContentSectionContact>
      </div>
    </MatchMedia>
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
import { MediaQueryProvider, MatchMedia } from "vue-component-media-queries";

import ContentSectionHello from "../components/sections/ContentSectionHello.vue";
import ContentSectionMatrix from "../components/sections/ContentSectionMatrix.vue";
import ContentSectionSearch from "../components/sections/ContentSectionSearch.vue";
import ContentSectionGreat from "@components/sections/ContentSectionGreat.vue";
import ContentSectionNinja from "../components/sections/ContentSectionNinja.vue";
import ContentSectionPower from "../components/sections/ContentSectionPower.vue";
import ContentSectionIAm from "../components/sections/ContentSectionIAm.vue";
import ContentSectionContact from "../components/sections/ContentSectionContact.vue";

const queries = {
  mobile: "(max-width: 760px)",
};

export default {
  components: {
    MediaQueryProvider,
    MatchMedia,
    ContentSectionMatrix,
    ContentSectionHello,
    ContentSectionSearch,
    ContentSectionNinja,
    ContentSectionIAm,
    ContentSectionPower,
    ContentSectionContact,
    ContentSectionGreat,
  },
  queries,
  data() {
    return {
      section: null,
      sectionId: null,
      sections: [],
      preventWheel: false,
    };
  },
  mounted() {
    this.sections = [1, 2, 3, 4, 5, 6, 7, 8];

    this.gotoDefault();

    window.addEventListener("wheel", this.handleScroll, { passive: false });
    window.addEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    findTargetSection(target) {
      const { sections, sectionId } = this;

      let newId;

      if (newId < 1) index = 1;
      if (newId > sections.length) index = sections.length;

      return newId;
    },
    matchHashedSection(hash) {
      const { sections } = this;
      const hashString = hash.replace("#", "");
      switch (true) {
        case Number(hashString) > 0 && Number(hashString) <= sections.length:
          return Number(hashString);
        case hashString === "contact":
          return sections.length;
        default:
          return;
      }
    },
    gotoSection(target) {
      const { sections, sectionId } = this;
      if (target < 1 || target > sections.length || target === sectionId) {
        return;
      }
      this.sectionId = target;
    },
    gotoDefault() {
      const { gotoSection, matchHashedSection } = this;
      const hash = this.$route.hash;
      const hashMatch = matchHashedSection(hash);

      if (hashMatch) {
        gotoSection(hashMatch);
      } else {
        gotoSection(1);
      }
    },
    handleKeyDown(e) {
      const { sectionId } = this;
      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          this.gotoSection(sectionId - 1);
          break;
        case "ArrowDown":
        case "ArrowRight":
          this.gotoSection(sectionId + 1);
          break;
      }
      e.preventDefault();
    },
    handleScroll(e) {
      const { sectionId } = this;
      if (e.deltaY < 0) this.gotoSection(sectionId - 1);
      if (e.deltaY > 0) this.gotoSection(sectionId + 1);
      e.preventDefault();
      this.preventWheel = true;
      setTimeout(() => {
        this.preventWheel = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss"></style>
