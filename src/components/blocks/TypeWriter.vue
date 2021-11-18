<template>
  <component
    :is="component"
    class="typewriter"
    :class="{ typing }"
    v-html="`${html}`"
  ></component>
</template>

<script>
export default {
  name: "TypeWriter2",
  props: {
    text: {
      type: String,
      default: "Hello there jolly visitor",
    },
    component: {
      type: String,
      default: "div",
    },
  },
  data() {
    return {
      typing: false,
      typingSpeed: 70,
      words: [],
      nodeSections: [],
      htmlBlocks: [],
      html: "",
    };
  },
  mounted() {
    this.run();
  },
  methods: {
    parseNode(node, tag) {
      if (node.tag) {
        for (const child of node.children) {
          this.parseNode(child, node.tag);
        }
      }

      if (node.text) {
        this.nodeSections.push({
          tag: tag ?? "span",
          content: node.text,
        });
      }
    },
    parseSection(section) {
      const { content, tag } = section;
      const words = content.trim().split(" ");

      for (const word of words) {
        this.parseWord(word, tag);
      }
    },
    async parseWord(word, tag) {
      const chars = word.trim().split("");

      for (const char of chars) {
        this.parseCharacter(char, tag);
      }
      this.parseCharacter(" ", tag);
    },
    parseCharacter(char, tag) {
      const html = `<${tag}>${char}</${tag}>`;
      this.htmlBlocks.push(html);
    },

    async printHTMLBlocks() {
      const { htmlBlocks: blocks } = this;

      this.typing = true;

      for (const block of blocks) {
        await this.printHTMLBlock(block);
      }

      this.typing = false;
    },
    printHTMLBlock(block) {
      const { typingSpeed } = this;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.html += block;
          resolve();
        }, typingSpeed);
      });
    },

    run() {
      const nodes = this.$slots.default;
      const { nodeSections } = this;

      this.html = "";
      this.htmlBlocks = [];

      for (const node of nodes) {
        this.parseNode(node);
      }

      for (const section of nodeSections) {
        this.parseSection(section);
      }

      this.printHTMLBlocks();
    },
  },
};
</script>

<style lang="scss" scoped>
.typewriter {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0.125em;
    margin-left: 0.2em;
    background: var(--accent);
    box-shadow: 2px 3px 2px rgba(0 0 0 / 30%),
      4px 4px 8px rgba(0 0 0 / 20%);

    display: inline-block;
    width: 4px;
    height: 1em;
    animation: caret-smooth 0.25s ease-in-out 0s infinite alternate;
  }
  &.typing {
    &:after {
      background: var(--accent);
    }
  }
}

@keyframes caret-smooth {
  0%,
  20% {
    opacity: 1;
  }
  60%,
  to {
    opacity: 0;
  }
}
</style>
