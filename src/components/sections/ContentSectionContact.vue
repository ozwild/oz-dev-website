<template>
  <MatchMedia v-slot="{ mobile }">
    <div class="contact-section-wrapper" :class="{ mobile, desktop: !mobile }">
      <Layer class="background"></Layer>
      <Layer class="foreground">
        <Layer class="main-container" :class="{ mobile, desktop: !mobile }">
          <FlexBox column>
            <FlexBox x="center" class="avatar-section">
              <Layer
                v-if="!mobile"
                class="avatar-shadow-circle back-shadow"
              ></Layer>
              <div class="avatar-container">
                <g-image class="avatar" src="~/media/me.jpg"></g-image>
              </div>
              <Layer
                v-if="!mobile"
                class="avatar-shadow-circle fore-shadow"
              ></Layer>
            </FlexBox>
            <FlexBox x="center">
              <div class="animated-name-container">
                <AnimatedText
                  text="Oscar Palencia"
                  :delay="2500"
                  class="my-animated-name"
                />

                <TypeWriter component="h2" class="tagline" :delay="4500">
                  Sr. Full Stack <i>|</i> React
                </TypeWriter>
              </div>
            </FlexBox>

            <FlexBox class="bottom-frame">
              <FlexBox class="contact-section" column>
                <a :href="documents.resume" target="_blank" class="contact-link"
                  ><PaperclipIcon />Resume
                </a>
                <a
                  label="Email"
                  icon="mail"
                  :href="`mailto:${contact.email}`"
                  target="_blank"
                  class="contact-link"
                >
                  <MailIcon />
                  <span>{{ contact.email }}</span>
                </a>
                <a
                  label="Phone"
                  icon="phone"
                  :href="`tel:${contact.phone}`"
                  target="_blank"
                  class="contact-link"
                  ><PhoneIcon />
                  <span>{{ contact.phone }}</span>
                </a>
              </FlexBox>
              <FlexBox class="social-section" column>
                <a
                  :href="`${contact.linkedin}`"
                  target="_blank"
                  class="social-link"
                  ><LinkedinIcon size="32" />
                </a>
                <a
                  :href="`${contact.github}`"
                  target="_blank"
                  class="social-link"
                  ><GithubIcon size="32" />
                </a>
              </FlexBox>
            </FlexBox>
          </FlexBox>

          <!-- <div v-if="!mobile" class="call-me-section">
            <Layer class="call-me-callout-container">
              <g-image
                class="call-me-callout-image"
                src="~/media/call-me.gif"
              ></g-image>
            </Layer>
            <Layer class="callout-bubble">
              <h3>Call me ;)</h3>
            </Layer>
          </div> -->
        </Layer>
      </Layer>
    </div>
  </MatchMedia>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  PaperclipIcon,
  GithubIcon,
} from "vue-feather-icons";

import Layer from "@components/blocks/Layer.vue";
import PageSection from "@components/blocks/PageSection.vue";
import BackgroundCanvas from "@components/blocks/BackgroundCanvas.vue";
import FlexBox from "@components/blocks/FlexBox.vue";
import Typography from "@components/blocks/Typography.vue";
import AnimatedText from "../blocks/AnimatedText.vue";
import TypeWriter from "../blocks/TypeWriter.vue";

import contact from "@/data/contact.js";
import { computed } from "vue";
import { del } from "vue";

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
    AnimatedText,
    TypeWriter,
  },
  data() {
    const { phone, email, linkedin, github, resume } = contact;
    return {
      contact: {
        phone,
        email,
        linkedin,
        github,
      },
      documents: {
        resume,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

$avatarSize: 9em;
$avatarSizeMobile: 6em;
.background {
  position: fixed;
  background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      var(--dark) 10px,
      var(--dark) 20px
    ),
    linear-gradient(to bottom, var(--primary), var(--dark));
  animation: curtain-drop 1s ease-in-out forwards;
}

.contact-section-wrapper {
  &.mobile {
    .main-container {
      position: relative;
      margin-bottom: 3em;

      .avatar-section {
        margin-top: 3em;
        padding: 0.5em;

        .avatar-container {
          width: $avatarSizeMobile;
          height: $avatarSizeMobile;
          top: math.div(-$avatarSizeMobile, 4);
          .avatar {
            width: $avatarSizeMobile;
            height: $avatarSizeMobile;
            filter: drop-shadow(2px 4px 6px black);
          }
        }
        .avatar-shadow-circle {
          width: $avatarSizeMobile;
          height: $avatarSizeMobile;
          &.back-shadow {
            top: math.div(-$avatarSizeMobile, 4);
            left: 45%;
            filter: opacity(0.5);
          }
          &.fore-shadow {
            top: math.div(-$avatarSizeMobile, 5);
            left: 55%;
            filter: opacity(0.5);
          }
        }
      }
    }
    .animated-name-container {
      height: 5em;
      .my-animated-name {
        font-size: 2.5em;
      }
      h2.tagline {
        font-size: 1em;
      }
    }
    .bottom-frame {
      margin: 0 auto;
    }
  }

  &.desktop {
    .call-me-section {
      position: absolute;
      top: 8em;
      right: -3em;
      perspective: 200px;
      z-index: 60;
      filter: drop-shadow(2px 4px 6px black) grayscale(0);

      .callout-bubble {
        width: calc(5em + 4vw);
        height: calc(3.5em + 3vw);
        top: calc(((3.5em + 3vw) * -1) + (0.5em + 1vw));
        left: -7em;
        background: var(--light);
        background: white;
        box-shadow: 2px 5px;
        z-index: 10;
        filter: drop-shadow(2px 4px 6px black);
        clip-path: polygon(
          0 18%,
          100% 7%,
          100% 71%,
          75% 75%,
          38% 100%,
          50% 75%,
          0 78%
        );
        opacity: 0;
        animation: fade-in 0.4s 10.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)
          forwards;

        h3 {
          position: relative;
          margin: 0;
          top: calc(0.2em + 1vw);
          left: calc(0.5vw);
          font-size: calc(1.2em + 0.5vw);
          color: var(--dark);
          color: black;
          transform: rotateZ(-3deg);
        }
      }

      .call-me-callout-container {
        top: 17%;
        left: unset;
        right: 22%;
        width: calc(7em + 5vw);
        height: calc(5em + 4vw);
        border-radius: 50%;
        background: var(--dark);
        overflow: hidden;
        z-index: 5;
        box-shadow: -1px 8px 2px rgba(0 0 0 / 50%);
        opacity: 0;
        transform: translateZ(-1400px);
        animation: slide-in-fwd-center 0.6s 10s
          cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;

        .call-me-callout-image {
          width: calc(4em + 3vw);
          height: calc(4em + 3vw);
          border-radius: 50%;
          position: relative;
          top: 1.5em;
          left: 1.5em;
          object-fit: cover;
          object-position: center;
        }
      }
    }

    .main-container {
      max-width: 50vw;
      position: relative;
      top: calc(5em + 15vh);
      background: rgba(var(--dark-rgb), 0.8);
      z-index: 10;
      opacity: 0;

      animation: fade-in 0.4s 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;

      .avatar-section {
        height: calc($avatarSize - 2em);
      }

      .avatar-container {
        width: $avatarSize;
        height: $avatarSize;
        top: math.div(-$avatarSize, 2);
        .avatar {
          width: $avatarSize;
          height: $avatarSize;
          filter: drop-shadow(2px 4px 6px black);
        }
      }

      .avatar-shadow-circle {
        width: $avatarSize;
        height: $avatarSize;
        &.back-shadow {
          top: math.div(-$avatarSize, 2);
          left: 45%;
          filter: opacity(0.5);
        }
        &.fore-shadow {
          top: math.div(-$avatarSize, 3);
          left: 55%;
          filter: opacity(0.5);
        }
      }

      .my-name {
        top: -4em;
      }

      .featured-skill {
        font-weight: bold;
        padding: 4px 8px;
        min-width: 4em;
        text-align: center;
      }
    }
  }
}

.avatar-container {
  position: relative;
  z-index: 3;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(to bottom, transparent, var(--dark));
    mix-blend-mode: plus-lighter;
    animation: bounce-in-bottom 1.1s both;
    animation-delay: 1s;
  }

  .avatar {
    border-radius: 50%;
    width: $avatarSize;
    height: $avatarSize;
    object-fit: cover;
    object-position: 0% 35%;
    animation: bounce-in-bottom 1.1s both;
    animation-delay: 1.5s;
    border: 4px solid var(--light);
  }
}

.avatar-shadow-circle {
  width: $avatarSize;
  height: $avatarSize;
  border-radius: 50%;
  mix-blend-mode: multiply;
  mix-blend-mode: screen;
  opacity: 0.5;
  animation: fade-in 1.2s 3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  transform: translateX(-50%);

  &.fore-shadow {
    top: 1.25em;
    left: 50%;
    z-index: 2;
    background: var(--primary);
    filter: contrast(0.5) opacity(0.5);
  }

  &.back-shadow {
    top: 0.75em;
    left: 50%;
    z-index: 1;
    background: var(--primary);
    filter: contrast(0.5) opacity(0.5);
  }
}
.animated-name-container {
  position: relative;
  height: 7em;
  width: 100%;

  .my-animated-name {
    font-size: 2.5em;
    font-weight: bold;
    color: var(--accent);
    position: absolute;
    width: 100%;
    text-align: center;
    top: -0.5em;
  }

  h2.tagline {
    margin: 0;
    font-size: 1.25em;
    position: relative;
    text-align: center;
    /// top: 2.5em;

    > span {
      color: var(--light);
      font-weight: bold;
    }

    > i {
      color: var(--accent) !important;
    }
  }
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

.striked-text {
  text-decoration: line-through;
  opacity: 0.2;
}

.foreground {
  z-index: 50;
  height: auto;
  position: relative;

  .main-container {
    margin: 0 auto;
    color: var(--typography);
    z-index: 10;
    margin-bottom: 13em;
    width: fit-content;
  }

  .bottom-frame {
    animation: fade-in 1.2s 2.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    margin: 1.5em auto;
    max-width: 27em;

    a {
      color: var(--typography);
      opacity: 0.8;
      transition: opacity 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &:hover {
        opacity: 1;
      }
      &.contact-link {
        font-size: 1.25em;
        padding-left: 3em;
        position: relative;
        margin-bottom: 0.5em;

        svg {
          fill: var(--typography);
          stroke: var(--typography-inverse);
          position: absolute;
          left: 0;
        }
      }
    }

    h2 {
      position: absolute;
      top: -2.5em;
      left: 50%;
      transform: translateX(-50%);
    }

    .contact-section {
      font-size: 0.75rem;
      padding: 2.5em;
    }

    .social-section {
      padding: 2.5em;
    }
  }
}
</style>
