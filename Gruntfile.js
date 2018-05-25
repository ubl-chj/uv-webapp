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
                    base: 'webapp/',
                    middleware: function (connect, options, middlewares) {
                        middlewares.unshift(function (req, res, next) {
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            res.setHeader('Access-Control-Allow-Methods', '*');
                            return next();
                        });

                        return middlewares;
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
};