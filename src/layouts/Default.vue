<template>
  <div class="layout" id="app-1">
    <ContentSectionAlpha id="1" ref="section1"></ContentSectionAlpha>
    <ContentSectionBeta id="2" ref="section2"></ContentSectionBeta>
    <ContentSectionNinja id="3" ref="section3"></ContentSectionNinja>
    <ContentSectionIAm id="4" ref="section4"></ContentSectionIAm>
    <ContentSectionMatrix id="5" ref="section5"></ContentSectionMatrix>
    <ContentSectionPower id="6" ref="section6"></ContentSectionPower>
    <ContentSectionContact id="7" ref="section7"></ContentSectionContact>
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
import ContentSectionMatrix from "../components/sections/ContentSectionMatrix.vue";
import ContentSectionAlpha from "../components/sections/ContentSectionAlpha.vue";
import ContentSectionBeta from "../components/sections/ContentSectionBeta.vue";
import ContentSectionPow from "../components/sections/ContentSectionPow.vue";
import ContentSectionNinja from "../components/sections/ContentSectionNinja.vue";
import ContentSectionPower from "../components/sections/ContentSectionPower.vue";
import ContentSectionIAm from "../components/sections/ContentSectionIAm.vue";
import ContentSectionContact from "../components/sections/ContentSectionContact.vue";

export default {
  components: {
    ContentSectionMatrix,
    ContentSectionAlpha,
    ContentSectionBeta,
    ContentSectionPow,
    ContentSectionNinja,
    ContentSectionIAm,
    ContentSectionPower,
    ContentSectionContact,
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
      this.$refs.section5,
      this.$refs.section6,
      this.$refs.section7,
    ];

    this.gotoSection(1);

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
      this.sections.forEach((section) => {
        section.$el.classList.remove("active");
      });
      this.section.$el.scrollIntoView({
        alignToTop: true,
        block: "start",
      });
      this.section.$el.classList.add("active");
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

<style lang="scss">
:root {
  --primary: #12151f;
  --accent: #05f4b7;
  --secondary: #371bb1;
  --light: #f6f6f6;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  scroll-behavior: smooth;
}

body,
html {
  background: var(--primary);
}

.psa {
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 4px 4px -2px rgba(0 0 0 / 60%);
}

h2.section-caption {
  margin: 0;
  color: var(--light);
  font-size: calc(3em + 5vw);
  line-height: 1.15;
  position: absolute;
  filter: saturate(1.5);

  padding: 0 1.25em 0.5em 0.5em;
  transform: translate(-50%, -50%);
  text-shadow: 2px 3px 2px rgba(0 0 0 / 60%), -1px -1px 0px var(--light),
    4px 4px 8px rgba(0 0 0 / 20%);

  i {
    color: var(--accent);

    &.big {
      font-size: calc(1.5em);
    }
  }
}
</style>
