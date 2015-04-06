/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (config) {
  config.set({
    basePath: '../',
    files: [
      "public_html/js/libs/angular.min.js",
      "public_html/js/libs/angular-mocks.js",
      "public_html/js/libs/angular-route.min.js",
      "public_html/js/*.js",
      "test/**/*Spec.js"
    ],
    exclude: [
    ],
    autoWatch: true,
    frameworks: [
      "jasmine"
    ],
    browsers: [
      "Chrome"
//      "Firefox"
    ],
    plugins: [
      "karma-junit-report",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine"
    ],
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'public_html/js/*.js': ['coverage']
    },
    // optionally, configure the reporter
    coverageReporter: {
//        type: 'html',
//        dir: 'coverage/'
      reporters: [{
          type: 'cobertura',
          dir: 'coverage/',
          subdir: 'chrome',
          file: 'chrome.xml'
        }, {
          type: 'json',
          dir: 'coverage/',
          subdir: 'json',
          file: 'coverage.json'
        }]
    }
  });
};
