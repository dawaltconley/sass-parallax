const fsp = require('fs').promises;
const sass = require('sass');
const sassOpts = {
    loadPaths: [ 'node_modules', '.' ],
};

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('eleventy/images');
    eleventyConfig.addWatchTarget('eleventy/css');
    eleventyConfig.addWatchTarget('*.scss');
    eleventyConfig.on('eleventy.before', async () => {
        const { css:main } = sass.compile('eleventy/css/main.scss', sassOpts);
        const { css:cssProps } = sass.compile('eleventy/css/css-properties.scss', sassOpts);
        await fsp.mkdir('eleventy/_site/css', { recursive: true });
        await Promise.all([
            fsp.writeFile('eleventy/_site/css/main.css', main),
            fsp.writeFile('eleventy/_site/css/css-properties.css', cssProps),
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
