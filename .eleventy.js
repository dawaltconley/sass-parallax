module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('eleventy/images');
    eleventyConfig.addPassthroughCopy('eleventy/test.js');
    eleventyConfig.addPassthroughCopy('index.mjs');
    eleventyConfig.addWatchTarget('eleventy/css');

    return {
        dir: {
            input: './eleventy',
            output: './eleventy/_site',
        },
        htmlTemplateEngine: 'njk'
    };
};
