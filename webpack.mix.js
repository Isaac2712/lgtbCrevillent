const mix = require('laravel-mix');

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

mix.scripts([
    'resources/js/jquery.js',
    'resources/js/popper.js',
    'resources/js/bootstrap.min.js',
    'resources/js/app.js',
    ],'public/js/app.js').version();
mix.sass('resources/sass/app.scss', 'public/css').version();

/* VERSION ANTIGUA
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
*/