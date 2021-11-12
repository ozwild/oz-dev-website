<template>
  <div class="container">
    <div class="cube animated">
      <div class="side front"></div>
      <div class="side left"></div>
      <div class="side right"></div>
      <div class="side back"></div>
      <div class="side top"></div>
      <div class="side bottom"></div>
    </div>
  </div>
</template>

<script>
/* Adapted from the awesome resource at css-tricks.com:
https://css-tricks.com/how-css-perspective-works/ */
export default {
  name: "Cube",
};
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  height: 400px;
  border-radius: 4px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  pointer-events: none;
  perspective: var(--prespective);
  perspective-origin: var(--originHorizontal) var(--originVertical);

  .cube {
    position: relative;
    width: 100px;
    height: 100px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    .side {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.75;
      border: 2px solid var(--accent);
      background: linear-gradient(var(--primary), var(--accent));

      &.front {
        transform: translateZ(100px);
      }

      &.back {
        transform: translateZ(-100px);
      }

      &.left {
        transform: rotateY(90deg) translateZ(125px);
      }

      &.right {
        transform: rotateY(-90deg) translateZ(110px);
      }

      &.top {
        transform: rotateX(90deg) translateZ(106px);
      }

      &.bottom {
        transform: rotateX(-90deg) translateZ(100px);
      }
    }

    &.animated {
      animation: cubeRotate 10s linear infinite;
    }
  }
}

@keyframes cubeRotate {
  from {
    transform: rotateY(0deg) rotateX(720deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(360deg) rotateX(0deg) rotateZ(360deg);
  }
}
</style>
