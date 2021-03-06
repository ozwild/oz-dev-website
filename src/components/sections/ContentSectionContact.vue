<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa" :class="{ mobile, desktop: !mobile }">
      <template v-slot:background>
        <Layer class="background"></Layer>
      </template>

      <template v-slot:foreground>
        <Layer class="foreground">
          <Layer
            class="main-container acrylic-material"
            :class="{ mobile, desktop: !mobile }"
          >
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
                <g-image
                  v-if="mobile"
                  class="my-name"
                  src="~/media/Ozwild - Oscar Palencia-alt.png"
                ></g-image>
                <g-image
                  v-else
                  class="my-name"
                  src="~/media/Ozwild - Oscar Palencia-alt.png"
                ></g-image>
              </FlexBox>
              <FlexBox x="around">
                <div class="featured-skill">VUE</div>
                <div class="featured-skill">REACT</div>
                <div class="featured-skill">LARAVEL</div>
              </FlexBox>

              <FlexBox class="bottom-frame">
                <FlexBox class="contact-section" column>
                  <FlexBox y="center">
                    <a
                      :href="documents.resume"
                      target="_blank"
                      class="contact-link"
                      ><PaperclipIcon />Get my Resume
                    </a>
                  </FlexBox>
                  <FlexBox y="center">
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
                  </FlexBox>
                  <FlexBox y="center">
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
                </FlexBox>
                <FlexBox class="social-section" x="between" y="center" column>
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

            <div v-if="!mobile && withCallout" class="call-me-section">
              <Layer class="call-me-callout-container">
                <g-image
                  class="call-me-callout-image"
                  src="~/media/call-me.gif"
                ></g-image>
              </Layer>
              <Layer class="callout-bubble">
                <h3>Call me ;)</h3>
              </Layer>
            </div>
          </Layer>
        </Layer>
      </template>
    </PageSection>
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
    const withCallout = Math.random() > 0.65;
    return {
      withCallout,
      contact: {
        phone: "+50258858515",
        email: "aozikuma@gmail.com",
        linkedin: "https://www.linkedin.com/in/ozwild/",
        github: "https://github.com/ozwild",
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
    // Saving this gradient in case I decide
    // to add a light version of the site

    /* background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 10px,
        #fff 10px,
        #fff 20px
      ),
      linear-gradient(to bottom, #fff, #ddd); */
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

  &.mobile {
    .main-container {
      position: relative;
      top: 0;
      left: 0;
      height: 95%;
      color: var(--light);
      //color: var(--dark);
      z-index: 10;
      width: 100%;

      .avatar-section {
        margin-top: 2em;
        padding: 0.5em;
      }

      .bottom-frame {
        margin: 0 1em 0em 5.5em;
        width: calc(100% - 7em) !important;

        a {
          color: var(--light);
          //color: var(--dark);
        }
      }
    }
  }

  &.desktop {
    min-height: 50em;

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
      width: 100%;
      min-width: 35em;
      max-width: 50vw;
      position: relative;
      top: 54%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 65%;
      min-height: 32em;
      color: var(--light);
      background: var(--dark);
      z-index: 10;
      opacity: 0;
      box-shadow: 2px 2px 8px 0px rgba(0 0 0 / 40%);
      animation: fade-in 0.4s 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;

      .avatar-section {
        height: 6em;
      }

      .avatar-container {
        width: calc(7em + 5vw);
        height: calc(7em + 5vw);
        top: calc((7em + 5vw) / -2);
        .avatar {
          width: calc(7em + 5vw);
          height: calc(7em + 5vw);
          filter: drop-shadow(2px 4px 6px black) brightness(0.7);
        }
      }

      .avatar-shadow-circle {
        width: calc(7em + 5vw);
        height: calc(7em + 5vw);
        &.back-shadow {
          top: calc((7em + 5vw) / -2);
          left: 45%;
          filter: opacity(0.5);
        }
        &.fore-shadow {
          top: calc((5em + 5vw) / -2);
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

      .bottom-frame {
        margin: 0 15vw 2em 5vw;
        width: calc(100% - 5vw);
        a {
          color: var(--light);
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
      background: var(--dark);
      mix-blend-mode: color;
      animation: bounce-in-bottom 1.1s both;
      animation-delay: 1s;
    }

    .avatar {
      border-radius: 50%;
      width: 9em;
      height: 9em;
      object-fit: cover;
      object-position: 0% 35%;
      animation: bounce-in-bottom 1.1s both;
      animation-delay: 1.5s;
    }
  }

  .avatar-shadow-circle {
    width: 9em;
    height: 9em;
    border-radius: 50%;
    mix-blend-mode: multiply;
    mix-blend-mode: screen;
    opacity: 0.5;
    animation: fade-in 1.2s 5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
    color: var(--light);
    z-index: 50;

    .main-container {
      a {
        color: var(--dark);
      }
    }

    .bottom-frame {
      position: absolute;
      bottom: 0;
      animation: fade-in 1.2s 5s cubic-bezier(0.39, 0.575, 0.565, 1) both;

      a {
        &.contact-link {
          font-size: 1.25em;
          display: flex;
          padding-left: 3em;
          position: relative;
          margin-bottom: 1em;
          //margin-left: 3em;
          svg {
            fill: var(--light);
            stroke: var(--dark);
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
      }

      .social-section {
        margin-left: 2em;
      }
    }
  }
}
</style>
