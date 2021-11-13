<template>
  <component :is="component" :style="styles">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "typography",
  props: {
    component: { type: String, default: "p" },
    color: { type: String, default: "inherit" },
    size: { type: String, default: "1em" },
    family: { type: String, default: "inherit" },
    weight: { type: String, default: "normal" },
    align: { type: String, default: "inherit" },
    lineHeight: { type: String, default: "1.5" },
    letterSpacing: { type: String, default: "0" },
    textTransform: { type: String, default: "none" },
    textDecoration: { type: String, default: "none" },
    textShadow: { type: String, default: "none" },
    textOverflow: { type: String, default: "ellipsis" },
    whiteSpace: { type: String, default: "normal" },
    wordBreak: { type: String, default: "normal" },
    wordWrap: { type: String, default: "normal" },
    wordSpacing: { type: String, default: "normal" },
    display: { type: String, default: "inline-block" },
    fullWidth: { type: Boolean, default: false },
  },
  computed: {
    styles() {
      return {
        color: this.color,
        fontSize: this.size,
        fontFamily: this.family,
        fontWeight: this.weight,
        textAlign: this.align,
        lineHeight: this.lineHeight,
        letterSpacing: this.letterSpacing,
        textTransform: this.textTransform,
        textDecoration: this.textDecoration,
        textShadow: this.textShadow,
        textOverflow: this.textOverflow,
        whiteSpace: this.whiteSpace,
        wordBreak: this.wordBreak,
        wordWrap: this.wordWrap,
        wordSpacing: this.wordSpacing,
        display: this.display,
        width: this.fullWidth ? "100%" : "auto",
      };
    },
  },
};
</script>

<style></style>
