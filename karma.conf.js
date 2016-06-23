// Karma configuration

var webpack = require('webpack');

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['mocha'],


        // list of files / patterns to load in the browser
        files: [
            'app/**/*.spec.js'
        ],


        // list of preprocessors
        preprocessors: {
            'app/**/*': ['webpack']
        },


        webpack: {
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        cacheDirectory: true,
                        plugins: ['transform-decorators-legacy'],
                        presets: ['react', 'es2015', 'stage-2']
                    }
                }]
            }
        },


        webpackMiddleware: {
            stats: {
                colors: true
            }
        },

        mochaReporter: {
            showDiff: true
        },


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS2'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,


        // List plugins explicitly, since autoloading karma-webpack
        // won't work here
        plugins: [
            require('karma-mocha'),
            //require('karma-spec-reporter'),
            require('karma-phantomjs2-launcher'),
            require('karma-webpack'),
            require('karma-mocha-reporter')
        ]
    });
};
