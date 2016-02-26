(function() {
    'use strict';
    angular
        .module('stayGanu.config', [])
        .factory('$localStorage', $localStorage)
        .config(GMAP)
        .run(StartUp);

    // ===============================

    function GMAP(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDePfW-4wa_NWqmQKNWer3-za4T98JUx4o',
            libraries: 'places'
        });
    }

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

    function $localStorage($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value)
            },
            get: function(key, value) {
                return JSON.parse($window.localStorage[key] || null)
            }
        }
    }
})();