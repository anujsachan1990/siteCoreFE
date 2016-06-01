module.exports = {
	vendor: {
		src: [ '<%= config.jsPath %>/bower/jquery/dist/jquery.js','<%= config.jsPath %>/bower/jquery-pubsub/dist/jquery.pubsub.min.js','<%= config.jsPath %>/bower/handlebars/handlebars.js' ],
			dest: '<%= config.MergeJsPath %>/vendor.js',
			options: {
			separator: ';'
		}
	},
	mergeJs: {
		src: [ '<%= config.jsPath %>/*.js','<%= config.src_modules %>/*/js/*.js' ],
			dest: '<%= config.MergeJsPath %>/main.js',
			options: {
			separator: ';'
		}
	}
}