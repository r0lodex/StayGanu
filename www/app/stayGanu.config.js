(function() {
    'use strict';
    angular
        .module('stayGanu.config', [])
        .run(StartUp);

    // ===============================

    function StartUp($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    }

})();