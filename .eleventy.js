const fs = require('fs');
const sass = require('sass');

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('eleventy/images');
    eleventyConfig.addWatchTarget('eleventy/css');
    eleventyConfig.on('eleventy.after', () => {
        const { css } = sass.compile('eleventy/css/main.scss', {
            loadPaths: ['node_modules'],
        });
        return fs.promises.writeFile('eleventy/_site/css/main.css', css);
    });

    return {
        dir: {
            input: './eleventy',
            output: './eleventy/_site',
        },
        htmlTemplateEngine: 'njk'
    };
};
