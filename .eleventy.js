module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    // the default is "copy"
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  };