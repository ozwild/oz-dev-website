<template>
  <layer class="rslc"></layer>
</template>

<script>
export default {
  name: "rainbow-shape",
};
</script>

<style lang="scss" scoped>
.rslc {
  min-height: 120px;
  height: calc(11vw + 15px);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  box-shadow: 0 4px 4px -3px black;
  transform: translateY(-500px);
  transform: translateY(0);
  background: linear-gradient(45deg, magenta, turquoise, lime),
    linear-gradient(0deg, black, transparent);
  animation: hue-rotation 3s linear infinite;
}

@keyframes hue-rotation {
  0% {
    filter: hue-rotate(-45deg) saturate(1.5);
  }
  50% {
    filter: hue-rotate(90deg) saturate(1.5);
  }
  100% {
    filter: hue-rotate(-45deg) saturate(1.5);
  }
}
</style>
