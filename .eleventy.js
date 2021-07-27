module.exports = eleventyConfig => {
    eleventyConfig.addWatchTarget('eleventy/css');

    return {
        dir: {
            input: './eleventy',
            output: './eleventy/_site',
        },
        htmlTemplateEngine: 'njk'
    };
};
