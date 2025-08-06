<template>
  <MatchMedia v-slot="{ mobile }">
    <FlexBox
      v-if="loaded"
      class="navigator"
      :class="{ mobile, desktop: !mobile }"
      width="auto"
      column
    >
      <FlexBox class="nav-menu" :class="{ open: shouldDisplayNavMenu }">
        <transition name="nav-menu-fade">
          <div class="nav-menu-container">
            <button
              ref="btnGoToFirst"
              :disabled="sectionId === 0"
              class="nav-button first"
              type="button"
              @click="gotoFirst"
            >
              <ChevronsLeftIcon />
            </button>
          </div>
        </transition>
        <transition name="nav-menu-fade">
          <div class="nav-menu-container">
            <button
              ref="btnGoToPrevious"
              :disabled="sectionId === 0"
              class="nav-button previous"
              type="button"
              @click="gotoPrevious"
            >
              <ChevronLeftIcon />
            </button>
          </div>
        </transition>
        <div class="nav-menu-container">
          <button
            v-if="sectionId < sections.length - 1"
            ref="btnPlayPause"
            class="nav-button play-pause"
            type="button"
            @click="togglePause"
          >
            <PauseIcon v-if="!pauseAutoSwitch" />
            <PlayIcon v-else />
          </button>
        </div>
        <transition name="nav-menu-fade">
          <div class="nav-menu-container">
            <button
              ref="btnGoToNext"
              :disabled="sectionId >= sections.length - 1"
              class="nav-button next"
              type="button"
              @click="gotoNext"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </transition>
        <transition name="nav-menu-fade">
          <div class="nav-menu-container">
            <button
              ref="btnGoToLast"
              :disabled="sectionId >= sections.length - 1"
              class="nav-button last"
              type="button"
              @click="gotoLast"
            >
              <ChevronsRightIcon />
            </button>
          </div>
        </transition>
      </FlexBox>

      <div v-if="autoSwitch.counting" class="auto-switch-progress-bar">
        <div
          class="progress"
          :style="{ width: `${autoSwitch.progress}%` }"
        ></div>
      </div>
    </FlexBox>
  </MatchMedia>
</template>

<script>
import { debounce } from "lodash";
import { MatchMedia } from "vue-component-media-queries";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CornerRightUpIcon,
  CornerRightDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  PlayIcon,
  PauseIcon,
  MenuIcon,
} from "vue-feather-icons";

import FlexBox from "@components/blocks/FlexBox.vue";

import ContentSectionHello from "@components/sections/ContentSectionHello.vue";
import ContentSectionMatrix from "@components/sections/ContentSectionMatrix.vue";
import ContentSectionSearch from "@components/sections/ContentSectionSearch.vue";
import ContentSectionGreat from "@components/sections/ContentSectionGreat.vue";
import ContentSectionNinja from "@components/sections/ContentSectionNinja.vue";
import ContentSectionPower from "@components/sections/ContentSectionPower.vue";
import ContentSectionIAm from "@components/sections/ContentSectionIAm.vue";
import ContentSectionContact from "@components/sections/ContentSectionContact.vue";
import ContentSectionKeywords from "@components/sections/ContentSectionKeywords.vue";

export default {
  name: "Navigator",
  props: {
    autoSwitchSpeed: { type: Number, default: 7 },
    presentingInstructions: { type: Boolean, default: false },
    eventBus: Object,
  },
  components: {
    MatchMedia,
    ArrowUpIcon,
    ArrowDownIcon,
    CornerRightUpIcon,
    CornerRightDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
    PlayIcon,
    PauseIcon,
    MenuIcon,
    FlexBox,
    ContentSectionMatrix,
    ContentSectionHello,
    ContentSectionSearch,
    ContentSectionNinja,
    ContentSectionIAm,
    ContentSectionPower,
    ContentSectionContact,
    ContentSectionGreat,
    ContentSectionKeywords,
  },
  data() {
    return {
      sectionId: null,
      loaded: false,
      pauseAutoSwitch: false,
      swipeTimeout: 250,
      swipeThreshold: 100,
      touchStart: {
        x: 0,
        y: 0,
        timestamp: null,
      },
      touchEnd: {
        x: 0,
        y: 0,
        timestamp: null,
      },
      autoSwitch: {
        counting: false,
        // 0 to 100
        progress: 0,
        timeToSwitch: this.autoSwitchSpeed,
        iterationsPerSecond: 30,
      },
      shouldDisplayNavMenu: false,
      sections: [
        ContentSectionHello,
        ContentSectionSearch,
        ContentSectionGreat,
        ContentSectionNinja,
        ContentSectionKeywords,
        ContentSectionIAm,
        ContentSectionMatrix,
        ContentSectionPower,
        ContentSectionContact,
      ],
    };
  },
  mounted() {
    this.eventBus.$on("section-loaded", this.abortAutoSwitch);
    document.addEventListener("keydown", this.handleKeyDown);

    document.addEventListener("dblclick", (e) => {
      this.togglePause();
      e.preventDefault();
    });

    document.addEventListener("touchstart", (e) => {
      this.touchStart.x = e.changedTouches[0].screenX;
      this.touchStart.y = e.changedTouches[0].screenY;
      this.touchStart.timestamp = Date.now();
    });

    document.addEventListener("touchend", (e) => {
      this.touchEnd.x = e.changedTouches[0].screenX;
      this.touchEnd.y = e.changedTouches[0].screenY;
      this.touchEnd.timestamp = Date.now();

      const timeDelta = this.touchEnd.timestamp - this.touchStart.timestamp;

      const xDelta = this.touchEnd.x - this.touchStart.x;

      if (
        timeDelta < this.swipeTimeout &&
        Math.abs(xDelta) > this.swipeThreshold
      ) {
        if (xDelta > 0) {
          this.gotoPrevious();
        } else {
          this.gotoNext();
        }
      }
    });

    this.gotoDefault();
  },
  watch: {
    sectionId(newSectionId) {
      const { sections, pauseAutoSwitch } = this;
      const section = sections[newSectionId];
      if (!this.loaded) {
        this.loaded = true;
        this.$emit("loaded");
      }
      this.$emit("change", section);

      if (newSectionId !== sections.length - 1 && !pauseAutoSwitch) {
        this.triggerAutoSwitch();
      }
    },
    pauseAutoSwitch(newValue) {
      const { sectionId, sections } = this;
      if (sectionId !== sections.length - 1 && !newValue) {
        this.triggerAutoSwitch();
      }
    },
  },
  methods: {
    toggleNavMenu() {
      this.shouldDisplayNavMenu = !this.shouldDisplayNavMenu;
    },
    matchHashedSection(hash) {
      const { sections } = this;
      const hashString = hash.replace("#", "");
      switch (true) {
        case Number(hashString) > 0 && Number(hashString) <= sections.length:
          return Number(hashString) - 1;
        case hashString === "contact":
          return sections.length - 1;
        default:
          return;
      }
    },
    gotoSection: debounce(
      function(target) {
        const { sections, sectionId } = this;
        if (
          target < 0 ||
          target > sections.length - 1 ||
          target === sectionId
        ) {
          return;
        }
        this.sectionId = target;
      },
      50,
      { leading: true, trailing: false }
    ),
    gotoDefault() {
      const { gotoSection, matchHashedSection } = this;

      const hash = this.$route.hash;
      const hashMatch = matchHashedSection(hash);

      if (hashMatch) {
        gotoSection(hashMatch);
      } else {
        gotoSection(0);
      }
    },
    gotoPrevious() {
      if (this.$refs.btnGoToPrevious) {
        this.$refs.btnGoToPrevious.blur();
      }

      this.gotoSection(this.sectionId - 1);
      this.$emit("prev");
    },
    gotoNext() {
      if (this.$refs.btnGoToNext) {
        this.$refs.btnGoToNext.blur();
      }

      this.gotoSection(this.sectionId + 1);
      this.$emit("next");
    },
    gotoFirst() {
      if (this.$refs.btnGoToFirst) {
        this.$refs.btnGoToFirst.blur();
      }
      this.gotoSection(0);
    },
    gotoLast() {
      if (this.$refs.btnGoToLast) {
        this.$refs.btnGoToLast.blur();
      }
      this.gotoSection(this.sections.length - 1);
    },
    togglePause() {
      if (this.$refs.btnPlayPause) {
        this.$refs.btnPlayPause.blur();
      }
      this.pauseAutoSwitch = !this.pauseAutoSwitch;
      if (this.pauseAutoSwitch) {
        this.abortAutoSwitch();
      } else {
        this.triggerAutoSwitch();
      }
    },
    handleKeyDown(e) {
      const { gotoPrevious, gotoNext, gotoFirst, gotoLast, togglePause } = this;

      switch (e.code) {
        case "Home":
          gotoFirst();
          break;
        case "End":
          gotoLast();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          gotoPrevious();
          break;
        case "ArrowDown":
        case "ArrowRight":
          gotoNext();
          break;
        case "Space":
          togglePause();
          break;
      }
      e.preventDefault();
    },
    triggerAutoSwitch() {
      this.autoSwitch.progress = 0;
      this.autoSwitch.counting = false;
      setTimeout(() => this.autoSwitchCountDown(), 0.5e3);
    },
    autoSwitchCountDown() {
      const { timeToSwitch, iterationsPerSecond } = this.autoSwitch;
      this.autoSwitch.counting = true;
      let timeReference;
      let iterations = 0;

      const handler = (timestamp) => {
        if (!timeReference) timeReference = timestamp;
        const delta = timestamp - timeReference;
        if (delta > 1e3 / iterationsPerSecond) {
          if (!this.pauseAutoSwitch) {
            timeReference = timestamp;
            iterations++;
            this.updateAutoSwitchProgress(iterations);
          }
        }
        if (
          iterations < timeToSwitch * iterationsPerSecond &&
          !this.pauseAutoSwitch &&
          this.autoSwitch.counting
        ) {
          requestAnimationFrame(handler);
        }
      };
      requestAnimationFrame(handler);
    },
    abortAutoSwitch() {
      this.autoSwitch.counting = false;
    },
    updateAutoSwitchProgress(iterations) {
      const { timeToSwitch, iterationsPerSecond } = this.autoSwitch;
      const totalIterations = timeToSwitch * iterationsPerSecond;
      const progress = (iterations / totalIterations) * 100;

      if (progress >= 100) {
        this.autoSwitch.counting = false;
        this.autoSwitch.progress = 0;
        this.gotoNext();
      } else {
        this.autoSwitch.progress = progress;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navigator {
  position: fixed;
  z-index: 150;
  padding: 7px 4px;
  top: 1em;
  right: 0.5em;

  .nav-menu {
    &:not(.open) {
      .nav-button {
        z-index: -1;
      }
    }
  }

  .burguer,
  .nav-button {
    width: 3em;
    height: 3em;
    z-index: 1;
    border: none;
    color: var(--accent);
    padding: 0;
    cursor: pointer;

    transform: translateY(-50%) scale(0.9);
    box-shadow: 0 0 2px -1px rgba(var(--dark-rgb), 0.4);

    &:hover {
      opacity: 1;
    }
  }

  .burguer {
    background: transparent;
    border-color: transparent;
    z-index: 10;
  }

  .nav-button {
    background: linear-gradient(
      to bottom,
      rgba(var(--dark-rgb), 0.2),
      rgba(var(--dark-rgb), 0.01)
    );

    transition: box-shadow 150ms ease-out, transform 90ms ease-in,
      opacity 90ms ease-in-out;

    border: none;
    border-top: 2px solid;

    transform: translateY(-50%) scale(0.9);
    opacity: 0.9;
    box-shadow: 0 0 2px -1px rgba(var(--dark-rgb), 0.4);

    &:hover:not(:disabled) {
      transform: translateY(-50%) scale(1);
      box-shadow: 0 0 8px -2px rgba(var(--dark-rgb), 0.4);
    }

    &:active:not(:disabled) {
      transform: translateY(-50%) scale(0.9);
    }

    &:disabled {
      opacity: 0.5;
      filter: grayscale(1);
      pointer-events: none;
    }

    &.burguer {
      color: var(--accent);
      background: transparent;
      border-color: transparent;
      z-index: 10;
      &:hover {
        opacity: 1;
      }
    }
  }

  .auto-switch-progress-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.25em;

    .progress {
      height: 0.25em;
      background: var(--accent);
      max-width: 100%;
    }
  }

  &.mobile {
    .nav-button {
      width: 2.5em;
      height: 2.5em;
      margin-right: 0.25em;
    }
  }

  &.desktop {
    display: flex;
  }
}
</style>
