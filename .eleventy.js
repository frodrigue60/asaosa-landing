let sitemap;
try {
  sitemap = require("@11ty/eleventy-plugin-sitemap");
} catch (err) {
  console.warn("[Eleventy] Sitemap plugin not installed. Skipping sitemap generation.");
}

module.exports = function (eleventyConfig) {
  // Copy assets to output folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");
  eleventyConfig.addWatchTarget("src/assets/images/");

  // Sitemap generation (basic hostname; override via site.json in templates if needed)
  if (sitemap) {
    eleventyConfig.addPlugin(sitemap, {
      sitemap: {
        hostname: "https://asaosa.org"
      }
    });
  }

  // Copy robots.txt to site root
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  // Always copy a static sitemap.xml as fallback when sitemap plugin is unavailable
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
