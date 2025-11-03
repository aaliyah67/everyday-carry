
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("note", function(text) {
    return `<p class="note">💡 ${text}</p>`;
  });
};