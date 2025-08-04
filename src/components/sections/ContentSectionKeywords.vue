<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:animation>
        <div class="keyword-lines">
          <p
            v-for="({ keywords, marqueeOptions }, lineIndex) in lines"
            :key="lineIndex"
            class="keyword-line"
          >
            <DynamicMarquee v-bind="marqueeOptions" class="dynamic-marquee">
              <span
                v-for="({ word, wordOptions: { fontSize, color } },
                wordIndex) in keywords"
                :key="`${word}_${wordIndex}_${lineIndex}`"
                class="keyword-word"
                :style="{ fontSize, color }"
              >
                {{ word }}
              </span>
            </DynamicMarquee>
          </p>
        </div>
      </template>

      <template v-slot:title>
        <TypeWriter component="h2">
          with a
          <i>skillset</i> that builds
        </TypeWriter>
      </template>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
import DynamicMarquee from "vue-dynamic-marquee";

import Layer from "@components/blocks/Layer.vue";
import PageSection from "@components/blocks/PageSection.vue";
import TypeWriter from "@components/blocks/TypeWriter.vue";

export default {
  name: "content-section-keywords",
  components: { Layer, PageSection, MatchMedia, TypeWriter, DynamicMarquee },
  data() {
    return {
      lines: [],
      keywords: [
        "Fullstack Development",
        "Systems Architecture",
        "Excel + VBA Automation",
        "Business Intelligence",
        "Data Pipeline Design",
        "Process Optimization",
        "Dashboard Engineering",
        "Contentful Integration",
        "Twilio Flex Development",
        "Vue.js",
        "React",
        "React Native",
        "JavaScript",
        "CSS",
        "HTML",
        "HTML5",
        "CSS3",
        "Sass",
        "SCSS",
        "Stylus",
        "Jest",
        "Vuex",
        "Ubuntu",
        "Bash",
        "Linux",
        "Apache",
        "npm",
        "Nginx",
        "UX/UI",
        "API",
        "GraphQL",
        "XML",
        "PHP",
        "Laravel",
        "AWS",
        "Git",
        "GitHub",
        "S3",
        "Cloudfront",
        "SaaS",
        "WordPress",
        "TypeScript",
        "REST",
        "Agile",
        "Scrum",
        "Cloud Services",
        "Web Development",
        "SQL",
        "Node.js",
        "Express",
        ".NET",
        "C#",
        "VBA",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "CI/CD Pipelines",
        "Docker",
        "Kubernetes",
        "DevOps Strategy",
        "Git Subversion",
        "Unit Testing",
        "Chromatic",
        "Storybook",
        "Accessibility Standards",
        "Technical Documentation",
        "Systems Integration",
      ],
    };
  },
  mounted() {
    const availableHeight = window.innerHeight;
    const lineSize = 120;
    const lineCount = Math.floor(availableHeight / lineSize);
    this.addLines(lineCount);
  },
  methods: {
    addLine() {
      const count = Math.floor(Math.random() * (90 - 25 + 1)) + 25;
      const keywords = this.getRandomKeywords(count);
      const marqueeOptions = this.getRandomMarqueeOptions();
      this.lines.push({
        keywords,
        marqueeOptions,
      });
    },
    addLines(count) {
      for (let i = 0; i < count; i++) {
        this.addLine();
      }
    },
    getRandomKeyword() {
      const word = this.keywords[
        Math.floor(Math.random() * this.keywords.length)
      ];
      return {
        word,
        wordOptions: {
          color: this.getRandomColor(),
          fontSize: this.getRandomFontSize(),
        },
      };
    },
    getRandomKeywords(count) {
      const keywords = [];
      for (let i = 0; i < count; i++) {
        keywords.push(this.getRandomKeyword());
      }
      return keywords;
    },
    getRandomFontSize() {
      return Math.floor(Math.random() * (60 - 20 + 1)) + 20 + "px";
    },
    getRandomSpeed() {
      return {
        type: "pps",
        number: Math.floor(Math.random() * (300 - 75 + 1)) + 75,
      };
    },
    getRandomColor() {
      const colors = [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    getRandomMarqueeOptions() {
      const speed = this.getRandomSpeed();
      return {
        direction: "row",
        repeat: true,
        speed,
        reverse: Math.random() > 0.5,
        hoverPause: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.psa {
  &.mobile {
    h2 {
      font-size: 6em;
      top: 50%;
      left: 0.8em;
      width: calc(100% - 1em);
      transform: translateY(-50%);
    }
  }
  &.desktop {
    h2 {
      max-width: 50%;
      top: 50%;
      left: 10%;
      width: calc(100% - 1em);
      transform: translateY(-50%);
    }
  }

  .keyword-lines {
    position: absolute;
    top: 10vh;
    filter: contrast(0.5) brightness(0.5);
    .keyword-line {
      width: 100vw;
      font-size: 1rem;
      line-height: 1;
      margin: 15px 0;

      .dynamic-marquee {
        min-height: 60px;
        white-space: nowrap;

        > div {
          background: red;
          display: flex;
        }
      }
    }
  }
}
</style>
