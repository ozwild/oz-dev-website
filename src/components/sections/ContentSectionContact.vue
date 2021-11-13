<template>
  <MatchMedia v-slot="{ mobile }">
    <PageSection class="psa">
      <Layer class="background">
        <BackgroundCanvas class="canvas"></BackgroundCanvas>
        <Layer class="color-overlay"></Layer>
      </Layer>
      <Layer class="foreground">
        <Layer class="main-container acrylic-material" :class="{ mobile }">
          <FlexBox column>
            <FlexBox x="center" class="p-1">
              <g-image class="avatar" src="~/media/me.jpg"></g-image>
            </FlexBox>
            <Typography
              component="h1"
              size="3em"
              align="center"
              color="var(--light)"
              class="ozwild-text"
            >
              Ozwild
            </Typography>
            <Typography
              component="h2"
              size="2em"
              align="center"
              color="var(--primary)"
              class="name-text"
              full-width
            >
              Os<span class="striked-text">car</span>
              <span class="palencia">Palencia</span>
            </Typography>
            <FlexBox column class="bottom-frame">
              <FlexBox class="content-section" column>
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
              <FlexBox class="social-section">
                <FlexBox x="around" y="center">
                  <a :href="`${contact.linkedin}`" class="social-link"
                    ><LinkedinIcon size="32" />
                  </a>
                  <a :href="`${contact.github}`" class="social-link"
                    ><GithubIcon size="32" /> </a
                ></FlexBox>
              </FlexBox>
              <FlexBox y="center">
                <a :href="``"><PaperclipIcon /></a>
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
import BackgroundCanvas from "../ui/Background/BackgroundCanvas.vue";
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

  .striked-text {
    text-decoration: line-through;
    opacity: 0.2;
  }

  .foreground {
    color: var(--light);
    z-index: 50;

    .avatar {
      border-radius: 50%;
      width: 9em;
      height: 9em;
      object-fit: cover;
      object-position: 0% 35%;
      border: 0.5em solid var(--dark);
    }

    .name-text {
      margin: 0;
      .palencia {
        color: var(--accent);
      }
    }

    .ozwild-text {
      margin: 0;
    }

    .main-container {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      color: var(--dark);
      background: var(--dark);
      z-index: 10;

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

      &:not(.mobile) {
        width: 25em;
      }

      &.mobile {
        width: 100%;
      }
    }

    .bottom-frame {
      position: absolute;
      bottom: 0;
      margin-top: 3em;

      h2 {
        position: absolute;
        top: -2.5em;
        left: 50%;
        transform: translateX(-50%);
      }

      .contact-section {
      }

      .social-section {
        margin-top: 2em;
      }
    }
  }

  &.active {
    .canvas {
      animation: kenburns-top 15s ease-out both;
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
</style>
