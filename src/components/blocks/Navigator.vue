<template>
  <MatchMedia v-slot="{ mobile }">
    <FlexBox
      class="navigator"
      :class="{ mobile, desktop: !mobile }"
      width="auto"
      column
    >
      <button
        v-if="sectionId > 0"
        :disabled="sectionId === 0"
        class="nav-button previous"
        @click="gotoFirst"
      >
        <CornerRightUpIcon />
      </button>
      <button
        v-if="sectionId > 0"
        :disabled="sectionId === 0"
        class="nav-button previous"
        @click="gotoPrevious"
      >
        <ArrowUpIcon />
      </button>
      <button
        v-if="sectionId < sections.length - 1"
        :disabled="sectionId >= sections.length"
        class="nav-button next"
        @click="gotoNext"
      >
        <ArrowDownIcon />
      </button>
      <button
        v-if="sectionId < sections.length - 1"
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
      preventWheel: false,
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
    //window.addEventListener("wheel", this.handleScroll, { passive: false });
    window.addEventListener("keydown", this.handleKeyDown);

    this.gotoDefault();
  },
  watch: {
    sectionId(newSectionId) {
      const section = this.sections[newSectionId];
      this.$emit("change", section);
    },
  },
  methods: {
    matchHashedSection(hash) {
      const { sections } = this;
      const hashString = hash.replace("#", "");
      switch (true) {
        case Number(hashString) > 0 && Number(hashString) <= sections.length:
          return Number(hashString) - 1;
        case hashString === "contact":
          return sections.length;
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
      console.log(hashMatch);
      if (hashMatch) {
        gotoSection(hashMatch);
      } else {
        gotoSection(0);
      }
    },
    gotoPrevious() {
      this.gotoSection(this.sectionId - 1);
      this.$emit("prev");
    },
    gotoNext() {
      this.gotoSection(this.sectionId + 1);
      this.$emit("next");
    },
    gotoFirst() {
      this.gotoSection(0);
    },
    gotoLast() {
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
    background-color: var(--dark);
    color: var(--accent);
    z-index: 1;
    transition: color 125ms ease-out, transform 90ms ease-in;
    cursor: pointer;
    border: 2px solid var(--dark);
    padding: 0;
    transform: translateY(-50%);

    &:hover:not(:disabled) {
      color: var(--light);
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
    left: 2em;
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
