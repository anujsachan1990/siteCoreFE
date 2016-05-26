// https://github.com/gruntjs/grunt-contrib-connect - The actual grunt server settings
module.exports = {
    options: {
        port: 9001,
        livereload: 35729,
        hostname: '0.0.0.0'
    },
    livereload: {
        options: {
            open: true,
            base: [
                '<%= config.tmp %>',
                '<%= config.src %>',
                '<%= config.styleguide %>'
            ]
        }
    }
};
