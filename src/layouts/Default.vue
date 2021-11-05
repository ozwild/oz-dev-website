<template>
  <div class="layout" id="app-1">
    <ContentSectionAlpha id="1" ref="section1"></ContentSectionAlpha>
    <ContentSectionBeta id="2" ref="section2"></ContentSectionBeta>
    <ContentSectionNinja id="3" ref="section3"></ContentSectionNinja>
    <HeaderSection id="4" ref="section4"></HeaderSection>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { debounce } from "lodash";
import HeaderSection from "../components/sections/HeaderSection.vue";
import ContentSectionAlpha from "../components/sections/ContentSectionAlpha.vue";
import ContentSectionBeta from "../components/sections/ContentSectionBeta.vue";
import ContentSectionPow from "../components/sections/ContentSectionPow.vue";
import ContentSectionNinja from "../components/sections/ContentSectionNinja.vue";

export default {
  components: {
    HeaderSection,
    ContentSectionAlpha,
    ContentSectionBeta,
    ContentSectionPow,
    ContentSectionNinja,
  },
  data() {
    return {
      section: null,
      sections: [],
      preventWheel: false,
    };
  },
  mounted() {
    this.sections = [
      this.$refs.section1,
      this.$refs.section2,
      this.$refs.section3,
      this.$refs.section4,
    ];

    this.section = this.sections[0];

    window.addEventListener("wheel", this.handleScroll, { passive: false });
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    findTargetSection(target) {
      const { sections, section } = this;
      let index = sections.indexOf(section);
      
      if (target === "next") {
        index++;
      } else if (target === "prev") {
        index--;
      } else {
        index = Number(target) - 1;
      }

      if (index < 0) index = 0;
      if (index > sections.length - 1) index = sections.length - 1;

      return sections[index];
    },
    focus() {
      this.section.$el.scrollIntoView({
        alignToTop: true,
        block: "start",
      });
    },
    gotoSection(target) {
      this.section = this.findTargetSection(target);
      this.focus();
    },
    handleResize: debounce(function() {
      this.focus();
    }, 300),
    handleKeyDown(e) {
      
      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          this.gotoSection("prev");
          break;
        case "ArrowDown":
        case "ArrowRight":
          this.gotoSection("next");
          break;
      }

      e.preventDefault();
    },
    handleScroll(e) {
      if (e.deltaY < 0) this.gotoSection("prev");
      if (e.deltaY > 0) this.gotoSection("next");
      e.preventDefault();
      this.preventWheel = true;
      setTimeout(() => {
        this.preventWheel = false;
      }, 500);
    },
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  scroll-behavior: smooth;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
