<template>
  <div>
    <transition-group name="list" tag="p">
      <span v-for="{ char, key } in items" v-bind:key="key" class="list-item">
        {{ char }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import { method } from "lodash";

export default {
  name: "animated-text",
  props: {
    text: {
      type: String,
      default: "Hello, World!",
    },
    delay: {
      type: Number,
      default: 0, // Delay in milliseconds for each character
    },
  },
  data() {
    return {
      revealedCount: 0,
      intervalId: null,
      ready: false,
    };
  },
  computed: {
    items() {
      return this.text
        .split("")
        .map((char, idx) => ({
          char,
          key: `${char}-${idx}`,
        }))
        .slice(0, this.revealedCount);
    },
  },
  mounted() {
    setTimeout(() => {
      this.ready = true;
      this.revealedCount = 0; // Start with no characters revealed
    }, this.$props.delay);
  },
  watch: {
    ready(newVal) {
      if (newVal) {
        this.run();
      }
    },
  },

  methods: {
    run() {
      if (!this.ready) {
        return;
      }
      if (this.intervalId) clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        if (this.revealedCount < this.text.length) {
          this.revealedCount++;
        } else {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }, 45); // Adjust speed as needed
    },
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  transition: all 0.5s;
  display: inline-block;
  margin-right: 5px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-active {
  position: absolute;
}
</style>
