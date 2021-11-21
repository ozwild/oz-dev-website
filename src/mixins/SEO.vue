<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
      keywords
    }
  }
</static-query>

<script>
export default {
  name: "seoMixin",
  metaInfo() {
    const {
      siteUrl,
      siteDescription,
      author,
      keywords,
    } = this.$static.metadata;

    const siteName = "I'm a ninja! ";
    const image = "seo.png";
    const imagePath = (image && `${siteUrl}/${image}`) || "";

    return {
      title: siteName,
      meta: [
        { key: "author", name: "author", content: author },
        { key: "keywords", name: "keywords", content: keywords },
        { key: "description", name: "description", content: siteDescription },
        { key: "og:url", property: "og:url", content: `${siteUrl}` },
        {
          key: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          key: "og:description",
          property: "og:description",
          content: siteDescription,
        },
        {
          key: "og:image",
          property: "og:image",
          content: imagePath,
        },
        {
          key: "og:image:width",
          property: "og:image:width",
          content: (image && 640) || "",
        },
        {
          key: "og:image:height",
          property: "og:image:height",
          content: (image && 480) || "",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: siteDescription,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: siteName,
        },
      ],
    };
  },
};
</script>
