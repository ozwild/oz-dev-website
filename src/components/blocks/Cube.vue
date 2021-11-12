<template>
  <div class="container">
    <div class="core animated"></div>
    <div class="cube animated">
      <div class="side front">
        <div>{{ lorem }}</div>
      </div>
      <div class="side left">
        <div>{{ lorem }}</div>
      </div>
      <div class="side right">
        <div>{{ lorem }}</div>
      </div>
      <div class="side back">
        <div>{{ lorem }}</div>
      </div>
      <div class="side top">
        <div>{{ lorem }}</div>
      </div>
      <div class="side bottom">
        <div>{{ lorem }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* Adapted from the awesome resource at css-tricks.com:
https://css-tricks.com/how-css-perspective-works/ */
export default {
  name: "Cube",
  data() {
    const lorem = [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      "nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    ];
    return {
      lorem: lorem.join(" "),
    };
  },
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
  perspective: var(--perspective);
  perspective-origin: var(--originHorizontal) var(--originVertical);
  transform-style: preserve-3d;

  .core {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background: var(--light);
    transform-origin: 50% 50%;
    transform-style: preserve-3d;

    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 15px 2px var(--accent), 0 0 14px 3px var(--primary),
      0 0 42px 4px white;
    border: 2 px solid var(--primary);
    mix-blend-mode: difference;

    &.animated {
      animation: corePulse 0.5s ease-out alternate infinite;
    }
  }

  .cube {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;

    .side {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.75;
      border: 2px solid rgba(0 0 0 / 20%);
      background: linear-gradient(
        to bottom,
        rgba(250 250 250 / 70%) 0%,
        rgba(250 250 250 / 20%) 100%
      );
      box-shadow: 0 0 1.5em 1em var(--dark);
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
      animation-timing-function: ease-out;
      filter: brightness(1.3) contrast(2.5) saturate(0.3);

      > div {
        font-size: 7px;
        line-height: 1;
        font-family: monospace;
        color: var(--dark);
        position: relative;
        box-shadow: 1px 1px 2px;
        top: -20%;
      }

      &.front {
        transform: translateZ(50px);
      }

      &.back {
        transform: translateZ(-50px);
      }

      &.left {
        transform: rotateY(90deg) translateZ(50px);
      }

      &.right {
        transform: rotateY(-90deg) translateZ(50px);
      }

      &.top {
        transform: rotateX(90deg) translateZ(50px);
      }

      &.bottom {
        transform: rotateX(-90deg) translateZ(50px);
      }
    }

    &.animated {
      animation: cubeRotate 8s infinite;
      animation-timing-function: linear;
      .front {
        animation-name: sideExpanseFront;
      }
      .back {
        animation-name: sideExpanseBack;
      }
      .left {
        animation-name: sideExpanseLeft;
      }
      .right {
        animation-name: sideExpanseRight;
      }
      .top {
        animation-name: sideExpanseTop;
      }
      .bottom {
        animation-name: sideExpanseBottom;
      }
    }
  }
}

@keyframes corePulse {
  from {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 8px 0px cyan, 0 0 4px 3px var(--primary), 0 0 22px 4px white;
  }

  to {
    transform: translate(-50%, -50%) scale(1.65);
    box-shadow: 0 0 15px 3px var(--accent), 0 0 14px 3px var(--primary),
      0 0 42px 4px white;
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

@keyframes sideExpanseBack {
  20% {
    transform: translateZ(-50px);
  }
  to {
    transform: translateZ(-106px);
  }
}
@keyframes sideExpanseFront {
  20% {
    transform: translateZ(50px);
  }
  to {
    transform: translateZ(100px);
  }
}
@keyframes sideExpanseLeft {
  20% {
    transform: rotateY(90deg) translateZ(50px);
  }
  to {
    transform: rotateY(90deg) translateZ(125px);
  }
}
@keyframes sideExpanseRight {
  20% {
    transform: rotateY(-90deg) translateZ(50px);
  }
  to {
    transform: rotateY(-90deg) translateZ(110px);
  }
}
@keyframes sideExpanseTop {
  20% {
    transform: rotateX(90deg) translateZ(50px);
  }
  to {
    transform: rotateX(90deg) translateZ(106px);
  }
}
@keyframes sideExpanseBottom {
  20% {
    transform: rotateX(-90deg) translateZ(50px);
  }
  to {
    transform: rotateX(-90deg) translateZ(115px);
  }
}
</style>
