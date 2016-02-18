// Module Initialization
(function() {
    'use strict';

    angular.module('stayGanu', [
        'stayGanu.core',
        'stayGanu.config',

        // App Modules
        'homestay'
    ]);

    angular.module('stayGanu.core', [
        'ionic',
        'ngResource'
    ]);

})();