// Module Initialization
(function() {
    'use strict';

    angular.module('stayGanu', [
        'stayGanu.core',
        'stayGanu.config',

        // App Modules
        'homestay',
        'profile',
        'nearby'
    ]);

    angular.module('stayGanu.core', [
        'ionic',
        'ngResource',
        'uiGmapgoogle-maps',
        'ngCordova'
    ]);

})();