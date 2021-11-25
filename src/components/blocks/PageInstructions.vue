<template>
  <div>
    <transition name="instructions-fade">
      <Layer
        v-if="showLayer"
        class="container"
        :class="{ mobile, desktop: !mobile }"
      >
        <Layer class="backdrop"></Layer>
        <div
          v-if="showPointer"
          class="pointer"
          :class="{ mobile, desktop: !mobile }"
        ></div>
        <Layer class="frame">
          <div class="interior">
            <div class="title">Tips:</div>
            <div class="text">
              <transition name="instructions-fade" mode="out-in">
                <div v-if="mobile && section === 1">
                  Swipe up (<CornerRightUpIcon class="icon" />) or down
                  (<CornerRightDownIcon class="icon" />) to navigate.
                </div>

                <div v-else-if="!mobile && section === 1">
                  Use your arrow keys (<ArrowDownIcon class="icon" />)
                  (<ArrowUpIcon class="icon" />) to navigate.
                </div>

                <div v-else-if="section === 2">
                  Or you can use the menu (<MenuIcon class="icon" />) on your
                  left
                </div>

                <div v-else-if="section === 3">
                  Or you can use the menu (<MenuIcon class="icon" />) on your
                  left
                </div>

                <div v-else-if="section === 4">
                  Using the 'Home' key (<HomeIcon class="icon" />) will return
                  you to the top of the page.
                </div>

                <div v-else-if="section === 5">
                  Using the 'End' key (<ChevronsDownIcon class="icon" />) will
                  take you to the the last section of the page.
                </div>
              </transition>
            </div>

            <FlexBox x="between" class="pt-3">
              <button class="action-button" @click="dismiss">Dismiss</button>
              <button class="action-button" @click="next">Next Tip</button>
            </FlexBox>
            <FlexBox class="pt-2" y="center">
              <input
                id="do-not-show-tips-checkbox"
                v-model="doNotShowAgain"
                type="checkbox"
              />
              <label for="do-not-show-tips-checkbox">
                Do not show this again</label
              >
            </FlexBox>
          </div>
        </Layer>
      </Layer>
    </transition>
  </div>
</template>

<script>
import {
  ArrowUpIcon,
  ArrowDownIcon,
  HomeIcon,
  ChevronsDownIcon,
  CornerRightUpIcon,
  CornerRightDownIcon,
  MenuIcon,
} from "vue-feather-icons";

import Layer from "@components/blocks/Layer.vue";
import FlexBox from "@components/blocks/FlexBox.vue";

export default {
  name: "PageInstructions",
  props: ["mobile"],
  components: {
    Layer,
    ArrowDownIcon,
    ArrowUpIcon,
    CornerRightUpIcon,
    CornerRightDownIcon,
    HomeIcon,
    ChevronsDownIcon,
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
    const shouldNotShow = localStorage.getItem(this.doNotShowStorageKey);
    if (!shouldNotShow) {
      this.show();
    }
  },
  watch: {
    mobile() {
      this.section = 1;
    },
    section(newValue) {
      if (newValue === 2) {
        this.showPointer = true;
      }
    },
    showPointer(newValue) {
      if (newValue) {
        setTimeout(() => (this.showPointer = false), 7e3);
      }
    },
  },
  methods: {
    show() {
      setTimeout(() => {
        this.showLayer = true;
      }, 1e3);
    },
    dismiss() {
      if (this.doNotShowAgain) {
        localStorage.setItem(this.doNotShowStorageKey, true);
      }
      this.showLayer = false;
    },
    next() {
      const { mobile, section: currentSectionIndex } = this;
      const ceiling = mobile ? 2 : 5;

      const next =
        currentSectionIndex + 1 > ceiling ? 1 : currentSectionIndex + 1;

      console.log("next", ceiling, next);
      this.section = next;
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  position: fixed;
  background: transparent;
  color: var(--light);
  opacity: 0;
  border-radius: 50%;
  z-index: 50;
  transform: translate(-50%, -50%) scale(50);
  animation: pointer-appear 0.65s 0.35s cubic-bezier(0.23, 1, 0.32, 1) forwards,
    pointer-appear 0.8s 2s ease-out reverse forwards;

  &.mobile {
    border: 12em solid;
    width: 3.2em;
    height: 3.2em;
    bottom: -47.2%;
    left: 7.5%;
  }
}
.container {
  position: fixed;
  z-index: 50;

  &.desktop {
    top: 15%;
    bottom: 10%;
  }

  &.mobile {
    .frame {
      top: 10%;
    }
  }

  .backdrop {
    position: fixed;
    background: rgba(0 0 0 / 40%);
    z-index: 0;
  }

  .frame {
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    max-width: 640px;
    height: auto;
    background: var(--dark);
    color: var(--light);
    z-index: 100;

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
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .text {
      //font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .action-button {
      appearance: unset;
      border: none;
      background: transparent;
      color: var(--accent);
      font-size: 1em;
      cursor: pointer;
      &:hover {
        filter: grayscale(0.8);
      }
    }
    .close {
    }
    .accept {
    }
  }
}
</style>
