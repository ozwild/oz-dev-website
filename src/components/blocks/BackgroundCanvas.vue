<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  name: "background-canvas",
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
    drawSpeed: {
      type: Number,
      default: 128,
    },
    fontSize: {
      type: Number,
      default: 15,
    },
  },
  setup() {},
  data() {
    const characters =
      "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я";

    return {
      canvas: null,
      context: null,
      timeout: null,
      initialSkip: null,
      isRainingCode: false,
      runs: null,
      characters: characters.split(""),
      width: null,
      height: null,
      fontFamily:
        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      columns: [],
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.context = this.canvas.getContext("2d");
    this.run();
    window.stop = this.stop;
  },
  methods: {
    recalculateBoundaries() {
      const { canvas, fontSize } = this;

      if (this.mobile) {
        this.width = canvas.width = 640;
        this.height = canvas.height = 800;
      } else {
        this.width = canvas.width = 1920;
        this.height = canvas.height = 1080;
      }

      const numberOfColumns = this.width / fontSize;

      this.columns = this.getArrayOfSize(numberOfColumns);
      this.initialSkip = Math.ceil((this.height * 1.15) / (fontSize - 3));
      this.runs = 0;
      this.isRainingCode = false;
    },
    draw() {
      const {
        columns,
        width,
        height,
        fontSize,
        fontFamily,
        context,
        getRandomCharacter,
        increaseColumnPosition,
        resetColumnPosition,
        shouldSkipColumnProgress,
        shouldSkipRowProgress,
        draw,
        drawSpeed,
        isRainingCode,
      } = this;

      this.incrementRuns();

      /**
       * Color the canvas with a solid color with opacity
       * to paint over the previous layer of text
       */

      context.fillStyle = "rgba(18, 21, 31, 0.12)";
      context.fillRect(0, 0, width, height);

      // Setup font type and color before rendering characters
      const blur = 3;
      const size = (Math.random() > 0.5 ? fontSize - 5 : fontSize - 3) + "px";

      context.font = `bold ${size} ${fontFamily}`;
      context.textBaseline = "top";

      // with a loop for maximum performance
      for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        if (shouldSkipColumnProgress()) {
          continue;
        }
        const x = columnIndex * fontSize,
          y = columns[columnIndex] * (fontSize - 3);

        let character = getRandomCharacter();

        if (isRainingCode) {
          var w = context.measureText(character).width + blur * 2;
          context.shadowColor = "rgba(0 0 0 / 70%)";
          context.shadowBlur = blur;
          context.shadowOffsetY = 0;
          context.shadowOffsetX = x + w;

          context.fillStyle = "darkgray";
          context.fillText(character, x - w - 1, y - 1);

          context.fillStyle = "gray";
          context.fillText(character, x - w, y);

          context.fillStyle = "lightgray";
          context.fillText(character, x - w + 1, y + 1);
        }

        if (y > height && shouldSkipRowProgress()) {
          resetColumnPosition(columnIndex);
        }

        increaseColumnPosition(columnIndex);
      }
      this.timeout = setTimeout(
        draw,
        isRainingCode ? drawSpeed : drawSpeed / 10
      );
    },
    incrementRuns() {
      this.runs++;
      if (!this.isRainingCode && this.runs > this.initialSkip) {
        this.isRainingCode = true;
        this.$emit("raining-code");
      }
    },
    screenIsSettingUp() {
      return this.runs < this.initialSkip;
    },
    getArrayOfSize(n) {
      const a = [];
      for (let i = 0; i < n; i++) a[i] = 1;
      return a;
    },
    shouldSkipColumnProgress() {
      return Math.random() > 0.99;
    },
    shouldSkipRowProgress() {
      return Math.random() > 0.98;
    },
    resetColumnPosition(index) {
      this.columns[index] = 0;
    },
    increaseColumnPosition(index) {
      this.columns[index]++;
    },
    getRandomCharacter() {
      const { characters } = this;
      return characters[Math.floor(Math.random() * characters.length)];
    },
    resizeHandler() {
      this.stop();
      this.run();
    },
    run() {
      this.recalculateBoundaries();
      this.draw();
    },
    stop() {
      clearTimeout(this.timeout);
    },
  },
};
</script>
<style lang="scss" scoped>
canvas {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 0;
  filter: opacity(0.5) contrast(0.7);
}
</style>
