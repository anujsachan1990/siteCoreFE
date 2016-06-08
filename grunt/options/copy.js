// https://github.com/gruntjs/grunt-contrib-copy - Copies remaining files to places other tasks can use
module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= config.src_assets %>',
            dest: '<%= config.dist %>/resources',
            src: [
                'images/**/*{jpg,png,ico,svg}',
                'fonts/{,*/}*.*'
            ]
        }]
    },
    moduleimg: {
        files: [{
            expand: true,
            dot: true,
            flatten: true,
            cwd: '<%= config.src_modules %>',
            dest: '<%= config.src_assets %>/images',
            src: [
                '**/resources/**/*.jpg',
                '**/resources/**/*.png'
            ]
        }]
    },
    modulesvg: {
        files: [{
            expand: true,
            dot: true,
            flatten: true,
            cwd: '<%= config.src_modules %>',
            dest: '<%= config.src_assets %>/images/svg',
            src: [
                '**/resources/**/*.svg'
            ]
        }]
    },
    styleguide: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= config.styleguide %>',
            dest: '<%= config.dist %>/styleguide',
            src: [
                'styledown.js',
                'styledown.css'
            ]
        }]
    }
};
