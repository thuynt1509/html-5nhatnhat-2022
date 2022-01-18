const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Fo development Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            files: [
                'src/**/*',
            ],
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: "docs/",
                index: "index.html"
            }
        })
    ],
});



/*
 |--------------------------------------------------------------------------
 | Website
 |--------------------------------------------------------------------------
 */

mix
    .js('./src/app.js', './docs/assets/main.js')
    // .sass('./src/css/app.scss', './docs/css/')
    .sass('./src/main.scss', './docs/assets/')
    .sass('./src/style-longform-nn6.scss', './docs/assets/')
    .sass('./src/button-support-page.scss', './docs/assets/')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .copy('./src/app.html', './docs/index.html')
    .copy('./src/longform-nn6.html', './docs/longform-nn6.html')
    .copy('./src/video.html', './docs/')
    .copyDirectory('./src/js','./docs/js')
    .copyDirectory('./src/font','./docs/font');