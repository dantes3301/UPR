import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import webpcss from 'gulp-webpcss'
import cleanCSS from 'gulp-clean-css'; // Сжатие css файла
import autoPrefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemap: true })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(
			sass({
				outputStyle: 'expanded', // Вывод файла (сжатие)
			})
		)
		.pipe(groupCssMediaQueries())
	
		.pipe(
			webpcss({
				webpClass: '.webp',
				noWebpClass: '.no-webp',
			})
		)
		.pipe(
			autoPrefixer({
				grid: true,
				overrideBrowserslist: ['last 3 version'],
				cascade: true,
			})
		)
		.pipe(cleanCSS())
		.pipe(
			rename({
				extname: '.css',
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}
