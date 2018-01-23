// Load general packages
var gulp = require('gulp'),
	pkg = require('../package.json'),
	path = require('path');

// variables
var src = path.join(pkg.src.others, '**/*');
var dest = pkg.build.others;

// Copy to dest directory
gulp.task('others', function() {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
});

export default function others () {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}
