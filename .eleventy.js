
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("image", function(src, caption) {
    return `
      <figure>
        <img src="${src}" alt="${caption}" style="max-width:100%;border:2px solid #ccc;">
        <figcaption>${caption}</figcaption>
      </figure>
    `;
  });
};