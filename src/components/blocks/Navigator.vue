<template>
  <MatchMedia v-slot="{ mobile }">
    <FlexBox
      v-if="loaded"
      class="navigator"
      :class="{ mobile, desktop: !mobile }"
      width="auto"
      column
    >
      <transition name="nav-menu-fade">
        <FlexBox
          v-if="shouldDisplayNavMenu"
          class="nav-menu"
          :class="{ open: shouldDisplayNavMenu }"
          column
        >
          <button
            v-if="sectionId > 0"
            ref="btnGoToFirst"
            :disabled="sectionId === 0"
            class="nav-button first"
            @click="gotoFirst"
          >
            <CornerRightUpIcon />
          </button>
          <button
            v-if="sectionId > 0"
            ref="btnGoToPrevious"
            :disabled="sectionId === 0"
            class="nav-button previous"
            @click="gotoPrevious"
          >
            <ArrowUpIcon />
          </button>
          <button
            v-if="sectionId < sections.length - 1"
            ref="btnGoToNext"
            :disabled="sectionId >= sections.length"
            class="nav-button next"
            @click="gotoNext"
          >
            <ArrowDownIcon />
          </button>
          <button
            v-if="sectionId < sections.length - 1"
            ref="btnGoToLast"
            :disabled="sectionId >= sections.length"
            class="nav-button last"
            @click="gotoLast"
          >
            <CornerRightDownIcon />
          </button>
        </FlexBox>
      </transition>

      <button
        ref="toggleNavMenu"
        class="nav-button burguer"
        @click="toggleNavMenu"
      >
        <MenuIcon />
      </button>
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
  components: {
    MatchMedia,
    ArrowUpIcon,
    ArrowDownIcon,
    CornerRightUpIcon,
    CornerRightDownIcon,
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
      shouldDisplayNavMenu: false,
      sections: [
        ContentSectionHello,
        ContentSectionSearch,
        ContentSectionGreat,
        ContentSectionNinja,
        ContentSectionKeywords,
        ContentSectionIAm,
        ContentSectionPower,
        ContentSectionMatrix,
        ContentSectionContact,
      ],
    };
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);

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
      const yDelta = this.touchEnd.y - this.touchStart.y;

      if (
        timeDelta < this.swipeTimeout &&
        Math.abs(yDelta) > this.swipeThreshold
      ) {
        this.handleTouchGesture();
      }
    });

    this.gotoDefault();
  },
  watch: {
    sectionId(newSectionId) {
      const section = this.sections[newSectionId];
      if (!this.loaded) {
        this.loaded = true;
        this.$emit("loaded");
      }
      this.$emit("change", section);
    },
  },
  methods: {
    toggleNavMenu() {
      this.shouldDisplayNavMenu = !this.shouldDisplayNavMenu;
    },
    handleTouchGesture() {
      const { touchStart, touchEnd } = this;

      if (touchEnd.x < touchStart.x) {
        // Swipe left
      }

      if (touchEnd.x > touchStart.x) {
        // Swipe right
      }

      if (touchEnd.y < touchStart.y) {
        // Swipe up
        this.gotoNext();
      }

      if (touchEnd.y > touchStart.y) {
        // Swipe down
        this.gotoPrevious();
      }
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
    handleKeyDown(e) {
      const { gotoPrevious, gotoNext, gotoFirst, gotoLast } = this;

      switch (e.key) {
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
      }
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
.navigator {
  position: fixed;
  z-index: 150;
  padding: 7px 4px;

  .nav-menu {
    &:not(.open) {
      .nav-button {
        z-index: -1;
      }
    }
  }

  .nav-button {
    width: 3em;
    height: 3em;
    margin-top: 1em;
    padding-top: 1em;
    background-color: var(--dark);
    background: rgba(18 21 31 / 80%);
    color: var(--accent);
    z-index: 1;
    transition: box-shadow 150ms ease-out, transform 90ms ease-in,
      opacity 90ms ease-in-out;
    cursor: pointer;
    border: 2px solid;
    padding: 0;
    transform: translateY(-50%);
    box-shadow: 0 0 2px -1px var(--primary);
    border-radius: 50%;

    &:hover:not(:disabled) {
      transform: translateY(-50%) scale(1);
      box-shadow: 0 0 8px -2px var(--primary);
    }

    &:active:not(:disabled) {
      transform: translateY(-50%) scale(0.9);
    }

    &:disabled {
      filter: grayscale(1);
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

  &.mobile {
    bottom: 0em;
    left: 0.5em;
    .nav-button {
      border-radius: 50%;
    }
  }

  &.desktop {
    bottom: 1em;
    right: 1em;
    display: flex;
    .nav-button {
      width: 4em;
      height: 4em;
    }
  }
}
</style>
