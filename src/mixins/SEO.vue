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

    const siteName = "Oscar Senior Fullstack Developer & Systems Architect”";
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
          key: "twitter:description",
          name: "twitter:description",
          content: siteDescription,
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
