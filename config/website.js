const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Web-bit', // Navigation and Site Title
  siteTitleAlt: 'Web-bit', // Alternative Site title for SEO
  siteUrl: 'https://Web-bit.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@Web-bit', // Twitter Username
  ogSiteName: 'Web-bit', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
