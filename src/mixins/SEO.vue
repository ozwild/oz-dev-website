<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
export default {
  name: "seoMixin",
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const description = this.$static.metadata.description;
    const image = "seo.png";
    const imagePath = (image && `${siteUrl}/${image}`) || "";
    const title = "Ozwild - Sr Full Stack Developer";

    return {
      title,
      meta: [
        { key: "description", name: "description", content: description },
        { key: "og:url", property: "og:url", content: `${siteUrl}` },
        {
          key: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          key: "og:description",
          property: "og:description",
          content: description,
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
          content: description,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: title,
        },
      ],
    };
  },
};
</script>
