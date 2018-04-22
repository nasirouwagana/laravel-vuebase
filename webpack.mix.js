let mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sourceMaps()
    .js('resources/assets/js/app.js', 'public/js')
    .stylus('resources/assets/stylus/app.styl', 'public/css', {
        use: [
            require('rupture')()
        ]
    })
    .sourceMaps()
    .disableNotifications()

mix.browserSync({
    notify: false,
    proxy: 'http://localhost:8000'
})

mix.webpackConfig({
    devtool: "source-map"
})

if (mix.inProduction()) {
    mix.version()
}
