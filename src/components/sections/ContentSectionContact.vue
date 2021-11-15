<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa">
      <Layer class="background">
        <BackgroundCanvas class="canvas"></BackgroundCanvas>
        <Layer class="color-overlay"></Layer>
      </Layer>
      <Layer class="foreground">
        <Layer
          class="main-container acrylic-material"
          v-if="mobile"
          :class="{ mobile, desktop: !mobile }"
        >
          <FlexBox column>
            <FlexBox v-if="mobile" x="center" class="p-1">
              <g-image class="avatar" src="~/media/me.jpg"></g-image>
            </FlexBox>
            <FlexBox v-if="mobile" x="center">
              <g-image class="my-name" src="~/media/my-name.png"></g-image>
            </FlexBox>
            <FlexBox v-if="mobile" x="around">
              <div class="featured-skill">VUE</div>
              <div class="featured-skill">REACT</div>
              <div class="featured-skill">LARAVEL</div>
            </FlexBox>

            <FlexBox class="bottom-frame">
              <FlexBox class="contact-section" column>
                <FlexBox y="center">
                  <a :href="documents.resume" class="contact-link"
                    ><PaperclipIcon />Get my Resume
                  </a>
                </FlexBox>
                <FlexBox y="center">
                  <a
                    label="Email"
                    icon="mail"
                    :href="`mailto:${contact.email}`"
                    class="contact-link"
                  >
                    <MailIcon />
                    <span>{{ contact.email }}</span>
                  </a>
                </FlexBox>
                <FlexBox y="center">
                  <a
                    label="Phone"
                    icon="phone"
                    :href="`tel:${contact.phone}`"
                    class="contact-link"
                    ><PhoneIcon />
                    <span>{{ contact.phone }}</span>
                  </a>
                </FlexBox>
              </FlexBox>
              <FlexBox class="social-section" x="between" y="center" column>
                <a :href="`${contact.linkedin}`" class="social-link"
                  ><LinkedinIcon size="32" />
                </a>
                <a :href="`${contact.github}`" class="social-link"
                  ><GithubIcon size="32" />
                </a>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </Layer>
      </Layer>
    </PageSection>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";

import Layer from "../blocks/Layer.vue";
import PageSection from "../blocks/PageSection.vue";
import BackgroundCanvas from "@components/blocks/BackgroundCanvas.vue";
import FlexBox from "../blocks/FlexBox.vue";
import Typography from "../blocks/Typography.vue";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  PaperclipIcon,
  GithubIcon,
} from "vue-feather-icons";

export default {
  name: "content-section-contact",
  components: {
    MatchMedia,
    Layer,
    PageSection,
    BackgroundCanvas,
    FlexBox,
    Typography,
    MailIcon,
    LinkedinIcon,
    GithubIcon,
    PhoneIcon,
    PaperclipIcon,
  },
  data() {
    return {
      contact: {
        phone: "+50258858515",
        email: "aozikuma@gmail.com",
        linkedin: "https://www.linkedin.com/in/ozwild/",
      },
      documents: {
        resume: "https://1drv.ms/b/s!AhNEwBINRYMhmhNgnq8SaFlWrIjQ",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.psa {
  .background {
    .canvas {
      z-index: 1;
      filter: blur(4px) hue-rotate(125deg);
    }

    .color-overlay {
      background: var(--accent);
      background: linear-gradient(0deg, var(--accent), transparent),
        var(--secondary);
      background: linear-gradient(0deg, var(--dark), transparent),
        var(--primary);
      mix-blend-mode: hard-light;
      z-index: 5;
    }
  }

  .avatar {
    border-radius: 50%;
    width: 9em;
    height: 9em;
    object-fit: cover;
    object-position: 0% 35%;
  }

  .striked-text {
    text-decoration: line-through;
    opacity: 0.2;
  }

  .foreground {
    color: var(--light);
    z-index: 50;

    .main-container {
      &.mobile {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        color: var(--dark);
        background: var(--light);
        z-index: 10;
      }

      a {
        color: var(--accent);
        &.contact-link {
          display: flex;
          padding-left: 3em;
          position: relative;
          margin-bottom: 1em;
          margin-left: 3em;
          svg {
            fill: var(--light);
            stroke: var(--dark);
            position: absolute;
            left: 0;
          }
        }
        &.social-link {
        }
      }

      &.desktop {
        width: 25em;

        .avatar {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      &.mobile {
        width: 100%;

        .avatar {
        }
      }
    }

    .bottom-frame {
      position: absolute;
      bottom: 0;
      margin: 0 15vw 2em 10vw;
      width: calc(100% - 30vw);

      h2 {
        position: absolute;
        top: -2.5em;
        left: 50%;
        transform: translateX(-50%);
      }

      .contact-section {
        font-size: 0.75rem;
      }

      .social-section {
        margin-left: 2em;
      }
    }
  }

  &.active {
    .canvas {
      animation: kenburns-top 15s ease-out both;
    }

    .avatar {
      animation: bounce-in-bottom 1.1s both;
      animation-delay: 1.5s;
    }

    .my-name {
      animation: bounce-in-bottom 1.1s both;
      animation-delay: 1s;
    }

    .featured-skill {
      animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;

      &:nth-child(1) {
        animation-delay: 2.5s;
      }
      &:nth-child(2) {
        animation-delay: 3.25s;
      }
      &:nth-child(3) {
        animation-delay: 4s;
      }
    }
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-11-11 21:1:22
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation kenburns-top
 * ----------------------------------------
 */

@keyframes kenburns-top {
  0% {
    transform: scale(1) translateY(0) translateX(-50%);
    transform-origin: 50% 16%;
  }
  100% {
    transform: scale(1.25) translateY(-15px) translateX(-50%);
    transform-origin: top;
  }
}

@keyframes bounce-in-bottom {
  0% {
    -webkit-transform: translateY(500px);
    transform: translateY(500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(65px);
    transform: translateY(65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(28px);
    transform: translateY(28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>
