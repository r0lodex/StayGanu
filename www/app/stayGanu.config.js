(function() {
    'use strict';
    angular
        .module('stayGanu.config', [])
        .run(StartUp);

    // ===============================

    function StartUp($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                // Stops the viewport from snapping when text inputs are focused.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    };
})();