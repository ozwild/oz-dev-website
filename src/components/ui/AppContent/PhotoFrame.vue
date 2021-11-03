<template>
  <div class="container">
    <div class="rdc"></div>
    <div class="pfc"></div>
  </div>
</template>

<script>
export default {
  name: "photo-frame",
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .rdc {
    background-color: yellow;
    width: calc(25vw + 30px);
    height: calc(12.5vw + 30px);
    max-width: 220px;
    max-height: 110px;
    border-radius: 40%;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.4));
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    animation: rotate 4s cubic-bezier(0.1, 0.7, 1, 0.1) infinite forwards;
  }

  .pfc {
    background-image: url(https://scontent.faqb1-1.fna.fbcdn.net/v/t1.6435-9/203895000_1671969416332779_2452859250742171148_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VpVI-oEvd3UAX-XU9SJ&_nc_ht=scontent.faqb1-1.fna&oh=62ca82998d8100fd5309f8894724889e&oe=61A47F13);

    width: 25vw;
    height: 25vw;
    max-width: 180px;
    max-height: 180px;
    border-radius: 50%;
    text-align: center;
    margin: 0 0 0em 0;
    background-size: cover;
    background-position: 35% 35%;
    border: 10px solid #333;
    filter: brightness(1.25) contrast(2.25) drop-shadow(1px 1px 4px black);
    color: lime;
    animation: shadow-rotation 0.8s ease-out infinite;
  }
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
    box-shadow: 0px 8px 4px -5px;
  }
  56.25% {
    box-shadow: -8px 8px 4px -8px;
  }
  62.5% {
    box-shadow: -8px 0px 4px -5px;
  }
  68.75% {
    box-shadow: -8px -8px 4px -8px;
  }
  75% {
    box-shadow: 0px -8px 4px -5px;
  }
  81.25% {
    box-shadow: 8px -8px 4px -8px;
  }
  87.5% {
    box-shadow: 8px 0px 4px -5px;
  }
  93.75% {
    box-shadow: 8px 8px 4px -8px;
  }
  99.5% {
    box-shadow: 0px 8px 4px -5px;
  }
  100% {
    box-shadow: none;
  }
}
</style>
