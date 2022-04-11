const fs = require('fs');
const sass = require('sass');
const sassOpts = {
    loadPaths: [ 'node_modules', '.' ],
};

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('eleventy/images');
    eleventyConfig.addWatchTarget('eleventy/css');
    eleventyConfig.on('eleventy.after', () => {
        const { css:main } = sass.compile('eleventy/css/main.scss', sassOpts);
        const { css:cssProps } = sass.compile('eleventy/css/css-properties.scss', sassOpts);
        return Promise.all([
            fs.promises.writeFile('eleventy/_site/css/main.css', main),
            fs.promises.writeFile('eleventy/_site/css/css-properties.css', cssProps),
        ]);
    });

    return {
        dir: {
            input: './eleventy',
            output: './eleventy/_site',
        },
        htmlTemplateEngine: 'njk'
    };
};
