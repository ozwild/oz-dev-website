<template>
  <div class="layout" id="app-1">
    <HeaderSection></HeaderSection>
    <PageSection><h2>New Section</h2></PageSection>
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
import HeaderSection from "../components/sections/HeaderSection.vue";
import PageSection from "../components/blocks/PageSection.vue";

export default {
  components: {
    HeaderSection,
    PageSection
},
  data() {
    return {
      isRainingCode: false,
    };
  },
  mounted() {},
  methods: {
    rainingCodeHandler() {
      this.isRainingCode = true;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400&display=swap");

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
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
