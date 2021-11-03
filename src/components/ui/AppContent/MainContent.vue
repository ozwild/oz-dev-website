<template>
  <main class="container">
    <PhotoFrame></PhotoFrame>

    <h2 class="hello-world">Hello World!</h2>

    <div>This is my website. Be welcome and please follow</div>
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
  top: 50px;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h2.hello-world {
    font-family: "Roboto Mono", monospace;
    font-family: "Zen Maru Gothic", sans-serif;
    font-weight: 300;
    font-size: calc(5vw + 30px);
    text-align: center;
    line-height: 1;
  }
}
</style>
