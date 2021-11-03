<template>
  <PageSection>
    <AppBackground></AppBackground>
    <AppHeader style="z-index: 50"></AppHeader>
    <AppFooter style="z-index: 50;"></AppFooter>
    <MainContent style="z-index: 100;"></MainContent>
  </PageSection>
</template>

<script>
import BackgroundCanvas from "../ui/Background/BackgroundCanvas.vue";
import Layer from "../blocks/Layer.vue";
import ShapeContainer from "../blocks/ShapeContainer.vue";
import BottomShapeLayer from "../ui/AppFooter/BottomShapeLayer.vue";
import AppHeader from "../ui/AppHeader/AppHeader.vue";
import MainContent from "../ui/AppContent/MainContent.vue";
import AppFooter from "../ui/AppFooter/AppFooter.vue";
import AppBackground from "../ui/Background/AppBackground.vue";
import PageSection from "../blocks/PageSection.vue";
export default {
  name: "header-section",
  components: {
    BackgroundCanvas,
    Layer,
    ShapeContainer,
    BottomShapeLayer,
    AppHeader,
    MainContent,
    AppFooter,
    AppBackground,
    PageSection,
  },
};
</script>

<style></style>
