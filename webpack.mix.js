let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.copy('src/img/*', 'web/dist/img');
mix.copy('src/video/*', 'web/dist/video');

mix
	.js('src/js/main.js', 'js')
	.sass('src/css/main.scss', 'css')
	.version()
	.setPublicPath('web/dist')
	.setResourceRoot('/dist')
	.options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });

if ( ! mix.inProduction()) {
	mix.webpackConfig({
		devtool: 'inline-source-map'
	});
}

mix.browserSync({
	files: [
		"./src/*.scss",
		"./src/**/*.scss",
		"./src/*.js",
		"./src/**/*.js",
		"./templates/*.twig",
		"./templates/**/*.twig"
	],
	proxy:'http://finding-flow-solutions.ddev.site/'
});