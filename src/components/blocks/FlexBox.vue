<template>
  <div class="flex-box" :class="classList" :style="{ width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "flex-box",
  props: {
    width: {
      type: String,
      default: "100%",
      enum: ["100%", "auto"],
    },
    column: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    x: {
      type: String,
      default: "start",
      enum: ["start", "end", "center", "between", "around"],
    },
    y: {
      type: String,
      default: "stretch",
      enum: ["top", "center", "bottom", "stretch"],
    },
  },
  computed: {
    classList: {
      get() {
        const classList = [];
        if (this.column) {
          classList.push("flex-box--column");
        }
        if (this.wrap) {
          classList.push("flex-box--wrap");
        }
        if (this.x) {
          classList.push(`flex-box--x-${this.x}`);
        }
        if (this.y) {
          classList.push(`flex-box--y-${this.y}`);
        }
        return classList.join(" ");
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  display: flex;
  flex-direction: row;

  &.flex-box--column {
    flex-direction: column;
  }
  &.flex-box--wrap {
    flex-wrap: wrap;
  }
  &.flex-box--x-start {
    justify-content: flex-start;
  }
  &.flex-box--x-end {
    justify-content: flex-end;
  }
  &.flex-box--x-center {
    justify-content: center;
  }
  &.flex-box--x-between {
    justify-content: space-between;
  }
  &.flex-box--x-around {
    justify-content: space-around;
  }
  &.flex-box--y-top {
    align-items: flex-start;
  }
  &.flex-box--y-center {
    align-items: center;
  }
  &.flex-box--y-bottom {
    align-items: flex-end;
  }
  &.flex-box--y-stretch {
    align-items: stretch;
  }
}
</style>
