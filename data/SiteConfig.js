const config = {
  siteTitle: "Azware Portfolio Website", // Site title.
  siteTitleShort: "Azware Dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Azware Dev Portfolio Website", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://azware.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "This Portfolio Website just a beginning of great things", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Azware Dev RSS feed", // Title of the RSS feed
  siteFBAppID: "#", // FB Application ID for using app insights. original = 1825356251115265
  googleAnalyticsID: "#", // GA tracking ID. original = UA-47311644-5
  disqusShortname: "#", // Disqus shortname. original = https-vagr9k-github-io-gatsby-advanced-starter
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Azware Dev.", // Username to display in the author segment.
  userEmail: "azware.az@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Yogyakarta, Indonesia", // User location to display in the author segment.
  userAvatar: "/logos/logo-512.png", // User avatar to display in the author segment.
  userDescription:
    "I am just a beginner and now still working in many project like \"Human Resource Information System, Training Information System, E-Commerce, Studying Information System, etc\". Please teach me everything in this world of developer. I want to know everything about software developer. cause i want to be a full-stack developer", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/azware/azware.github.io",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/azzamnajib",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:azware.az@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Azware Dev. Build with Gatsby Advanced Starter", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
