<template>
  <MatchMedia v-slot="{ mobile }">
    <FlexBox
      v-if="loaded"
      class="navigator"
      :class="{ mobile, desktop: !mobile }"
      width="auto"
      column
    >
      <button
        v-if="sectionId > 0"
        ref="btnGoToFirst"
        :disabled="sectionId === 0"
        class="nav-button previous"
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
        class="nav-button next"
        @click="gotoLast"
      >
        <CornerRightDownIcon />
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

export default {
  name: "Navigator",
  components: {
    MatchMedia,
    ArrowUpIcon,
    ArrowDownIcon,
    CornerRightUpIcon,
    CornerRightDownIcon,
    FlexBox,
    ContentSectionMatrix,
    ContentSectionHello,
    ContentSectionSearch,
    ContentSectionNinja,
    ContentSectionIAm,
    ContentSectionPower,
    ContentSectionContact,
    ContentSectionGreat,
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
      sections: [
        ContentSectionHello,
        ContentSectionSearch,
        ContentSectionGreat,
        ContentSectionNinja,
        ContentSectionIAm,
        ContentSectionMatrix,
        ContentSectionPower,
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

      if (timeDelta < this.swipeTimeout && yDelta > this.swipeThreshold) {
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
      this.$refs.btnGoToPrevious.blur();
      this.gotoSection(this.sectionId - 1);
      this.$emit("prev");
    },
    gotoNext() {
      console.log(this.$refs.btnGoToNext);
      this.$refs.btnGoToNext.blur();
      this.gotoSection(this.sectionId + 1);
      this.$emit("next");
    },
    gotoFirst() {
      this.$refs.btnGoToFirst.blur();
      this.gotoSection(0);
    },
    gotoLast() {
      this.$refs.btnGoToLast.blur();
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

  .nav-button {
    width: 3em;
    height: 3em;
    margin-top: 1em;
    background-color: var(--primary);
    color: var(--light);
    z-index: 1;
    transition: box-shadow 250ms ease-out, transform 90ms ease-in;
    cursor: pointer;
    border: 2px solid var(--dark);
    padding: 0;
    transform: translateY(-50%);

    &:hover:not(:disabled) {
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 0 32px -2px var(--light);
    }

    &:active:not(:disabled) {
      transform: translateY(-50%) scale(0.9);
    }

    &:disabled {
      filter: grayscale(1);
    }
  }

  &.mobile {
    bottom: 2em;
    left: 1em;
    .nav-button {
      border-radius: 50%;
      filter: drop-shadow(2px 4px 6px black);

      &.previous {
        bottom: calc(3em + 6em);
      }
      &.next {
        bottom: 3em;
      }
    }
  }

  &.desktop {
    bottom: 2em;
    right: 2em;
    display: flex;
    .nav-button {
      width: 4em;
      height: 4em;
      &.previous {
        bottom: calc(3em + 6em);
      }
      &.next {
        bottom: 3em;
      }
    }
  }
}
</style>
