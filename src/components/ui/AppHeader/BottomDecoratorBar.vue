<template>
  <Layer class="bdbc"></Layer>
</template>

<script>
import Layer from "../../blocks/Layer.vue";
export default {
  name: "bottom-decorator-bar",
  components: { Layer },
};
</script>

<style lang="scss" scoped>
.bdbc {
  background: yellow;
  top: unset;
  height: 55px;
  bottom: 0;
  transform: translateY(500px);
  transition: all 1s ease-in-out;
  transform: translateY(0);
}
</style>
