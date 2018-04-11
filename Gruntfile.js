module.exports = function (grunt) {

    grunt.initConfig({
        global: {
            port: '9001'
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    keepalive: true,
                    hostname: "0.0.0.0",
                    base: 'webapp/'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
};