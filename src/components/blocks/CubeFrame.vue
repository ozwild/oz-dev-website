<template>
  <div class="container">
    <Layer class="animation-container"> </Layer>
    <div class="pfc">
      <Cube class="cube-object"></Cube>
    </div>
  </div>
</template>

<script>
import Layer from "./Layer.vue";
import Cube from "./Cube.vue";
export default {
  name: "cube-frame",
  components: {
    Layer,
    Cube,
  },
};
</script>

<style lang="scss" scoped>
.container {
  perspective: 25em;
  perspective-origin: top right;

  &::before {
    content: "";
    background-color: transparent;
    width: 130%;
    height: 50%;
    border-radius: 50%;
    border: 2px solid silver;
    filter: drop-shadow(2px 4px 6px var(--accent));
    z-index: -1;
    position: absolute;
    top: 25%;
    left: -15%;
    animation: rotate 3s linear infinite forwards;
    transform-style: preserve-3d;
  }
  &::after {
    content: "";
    background-color: transparent;
    width: 125%;
    height: 60%;
    border-radius: 50%;
    border: 2px solid var(--light);
    filter: drop-shadow(2px 4px 6px var(--accent));
    z-index: -1;
    position: absolute;
    top: 25%;
    left: -15%;
    animation: rotate 2s ease-in-out 0.6s infinite forwards;
    transform-style: preserve-3d;
  }
}

.cube-object {
  position: absolute;
  left: 25%;
  top: 20%;
  z-index: 10;
  width: 50%;
  height: 50%;
  transform: scale(0.85);
  filter: blur(0.5px);
}

.animation-container {
}

.pfc {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: var(--accent);
  z-index: 1;
  top: -1em;
  left: -1em;
  animation: shadow-rotation 8s ease-out infinite;
  perspective: var(--prespective);
  perspective-origin: var(--originHorizontal) var(--originVertical);
}

@keyframes rotate {
  from {
    transform: rotateY(0deg) rotateX(720deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(360deg) rotateX(0deg) rotateZ(360deg);
  }
}

@keyframes shadow-rotation {
  0% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0px 8px 10px -8px;
    transform: rotateZ(0deg);
  }
  56.25% {
    box-shadow: -8px 8px 10px -8px;
  }
  62.5% {
    box-shadow: -8px 0px 10px -8px;
  }
  68.75% {
    box-shadow: -8px -8px 10px -8px;
  }
  75% {
    box-shadow: 0px -8px 10px -8px;
  }
  81.25% {
    box-shadow: 8px -8px 10px -8px;
  }
  87.5% {
    box-shadow: 8px 0px 10px -8px;
  }
  93.75% {
    box-shadow: 8px 8px 10px -8px;
  }
  99.5% {
    box-shadow: 0px 8px 10px -8px;
  }
  100% {
    box-shadow: none;
    transform: rotateZ(360deg);
  }
}
</style>
