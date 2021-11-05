<template>
  <main class="container">
    <PhotoFrame></PhotoFrame>
    
  </main>
</template>

<script>
import PhotoFrame from "./PhotoFrame.vue";
export default {
  components: { PhotoFrame },
  name: "main-content",
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  top: 15px;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  color: white;

  
}
</style>
