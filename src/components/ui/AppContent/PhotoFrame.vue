<template>
  <div class="container">
    <Layer class="animation-container">
      <g-image class="code" src="~/media/code.gif" />
    </Layer>
    <div class="pfc"></div>
  </div>
</template>

<script>
import Layer from "../../blocks/Layer.vue";
export default {
  name: "photo-frame",
  components: {
    Layer,
  },
};
</script>

<style lang="scss" scoped>
.container {
  &::before {
    content: "";
    background-color: transparent;
    width: 130%;
    height: 50%;
    border-radius: 40%;
    border: 2px solid silver;
    filter: drop-shadow(2px 4px 6px var(--accent));
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    animation: rotate 4s cubic-bezier(0.1, 0.7, 1, 0.1) infinite forwards;
  }
  &::after {
    content: "";
    background-color: transparent;
    width: 125%;
    height: 60%;
    border-radius: 40%;
    border: 2px solid var(--accent);
    filter: drop-shadow(2px 4px 6px var(--accent));
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    animation: rotate 4s linear 0.6s infinite forwards;
  }
}

.animation-container {
  .code {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    filter: hue-rotate(-200deg) blur(0px) invert(1) opacity(0.55);
  }
}

.pfc {
  //source: https://scontent.faqb1-1.fna.fbcdn.net/v/t1.6435-9/203895000_1671969416332779_2452859250742171148_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VpVI-oEvd3UAX-XU9SJ&_nc_ht=scontent.faqb1-1.fna&oh=62ca82998d8100fd5309f8894724889e&oe=61A47F13
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: var(--accent);
  z-index: 1;
  object-fit: cover;
  object-position: 50% 36%;
  border: 1em solid var(--primary);
  top: -1em;
  left: -1em;
  animation: shadow-rotation 0.8s ease-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0) translate(-50%, -50%);
  }
  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}

@keyframes shadow-rotation {
  0% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0px 8px 10px -8px;
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
  }
}
</style>
