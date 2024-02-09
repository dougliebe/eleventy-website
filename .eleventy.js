module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("favicon_io/favicon.ico");
    // the default is "copy"
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  };