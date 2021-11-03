<template>
  <Layer ref="groundSolidLayer" class="bsc"></Layer>
</template>

<script>
import Layer from "../../blocks/Layer.vue";

export default {
  name: "bottom-shape",
  components: { Layer },
};
</script>

<style lang="scss" scoped>
.bsc {
  background: mintcream;
  top: unset;
  height: 50px;
  bottom: 0;
  box-shadow: 0 -4px 4px -3px black;
  transform: translateY(500px);
  transition: all 1s ease-in-out;
  transform: translateY(0);
}
</style>
