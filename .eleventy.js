module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('eleventy/images');
    eleventyConfig.addWatchTarget('eleventy/css');

    return {
        dir: {
            input: './eleventy',
            output: './eleventy/_site',
        },
        htmlTemplateEngine: 'njk'
    };
};
