<template>
  <div>
    <transition name="instructions-fade">
      <Layer class="frame" v-if="showLayer">
        <div class="interior">
          <div class="title">Tip:</div>
          <div class="text">
            <transition name="instructions-fade" mode="out-in">
              <div v-if="mobile">
                <ul>
                  <li>Swipe left and right to navigate through the sections</li>
                  <li>Toggle automatic navigation by double tapping</li>
                </ul>
                or use the navigation buttons
              </div>

              <div v-else-if="!mobile">
                <ul>
                  <li>
                    Use the arrow keys to navigate through the sections.
                  </li>
                  <li>
                    Jump to the first or last section with the Home or End keys.
                  </li>
                  <li>
                    Toggle automatic navigation with the spacebar.
                  </li>
                </ul>
                or use the navigation buttons
              </div>
            </transition>
          </div>

          <FlexBox x="between" class="pt-3">
            <button class="action-button" @click="dismiss">Dismiss</button>
          </FlexBox>
        </div>
      </Layer>
    </transition>
  </div>
</template>

<script>
import { MenuIcon } from "vue-feather-icons";

import Layer from "@components/blocks/Layer.vue";
import FlexBox from "@components/blocks/FlexBox.vue";

export default {
  name: "PageInstructions",
  props: ["mobile"],
  components: {
    Layer,
    MenuIcon,
    FlexBox,
  },
  data() {
    return {
      section: 1,
      showPointer: false,
      doNotShowAgain: false,
      showLayer: false,
      doNotShowStorageKey: "_ozwild_doNotShowTip",
    };
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
    this.show();
  },
  watch: {
    mobile() {
      this.section = 1;
    },
  },
  methods: {
    handleKeyDown(e) {
      switch (e.key) {
        case "Escape":
          this.dismiss();
          break;
      }
      e.preventDefault();
    },
    show() {
      setTimeout(() => {
        this.showLayer = true;
        this.$emit("change", true);
      }, 2e3);
    },
    dismiss() {
      this.showLayer = false;
      this.$emit("change", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.frame {
  height: auto;
  background: var(--background);
  color: var(--typography);
  z-index: 100;
  width: 30em;
  max-width: 90%;
  font-size: 0.85em;
  bottom: 1em;
  top: unset;
  left: 1em;

  .interior {
    padding: 1em 2em;
  }

  .icon {
    position: relative;
    top: 0.25em;
    margin: 0 0.2em;
    color: var(--accent);
  }
  .title {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .text {
    margin-bottom: 1rem;
  }
  .action-button {
    appearance: unset;
    border: none;
    background: transparent;
    color: var(--typography);
    font-size: 1em;
    text-decoration: underline;
    text-underline-offset: 0.2em;
    filter: opacity(0.8);
    cursor: pointer;
    &:hover {
      filter: opacity(1);
    }
  }
}
</style>
