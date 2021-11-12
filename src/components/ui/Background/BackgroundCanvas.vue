<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  name: "background-canvas",
  props: {
    drawSpeed: {
      type: Number,
      default: 128,
    },
    fontSize: {
      type: Number,
      default: 13,
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

      // Setting and storing canvas box sizes
      this.width = canvas.width = 1920;
      this.height = canvas.height = 1080;

      const numberOfColumns = this.width / fontSize;

      this.columns = this.getArrayOfSize(numberOfColumns);
      this.initialSkip = Math.ceil(this.height / this.fontSize);
      this.runs = 0;
      this.isRainingCode = false;
    },
    draw() {
      const {
        columns,
        width,
        height,
        fontSize,
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

      context.fillStyle = "rgba(7,8,12,0.12)";
      context.fillStyle = "rgba(250,250,250,0.12)";
      context.fillRect(0, 0, width, height);

      // Setup font type and color before rendering characters

      context.font =
        (Math.random() > 0.5 ? fontSize + 3 : fontSize - 3) + "px monospace";

      // with a loop for maximum performance
      for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        if (shouldSkipColumnProgress()) {
          continue;
        }
        const x = columnIndex * fontSize,
          y = columns[columnIndex] * fontSize;

        let character = getRandomCharacter();

        if (isRainingCode) {
          var blur = 3;
          var w = context.measureText(character).width + blur * 2;
          context.textBaseline = "top";
          context.shadowColor = "rgba(0 0 0 / 70%)";
          context.shadowBlur = blur;
          context.fillStyle = "orange";
          context.shadowOffsetX = x + w;
          context.shadowOffsetY = 0;
          context.fillText(character, x - w, y);
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
  z-index: -1;
  filter: blur(1.5px) saturate(0.5) drop-shadow(2px 4px 6px black);
}
</style>
