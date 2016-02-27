(function() {
    'use strict';
    angular
        .module('stayGanu.config', [])
        .factory('$localStorage', $localStorage)
        .controller('rootCtrl', rootCtrl)
        .config(gMap)
        .run(StartUp)
        .constant('CONST', {
            API         : 'http://stayganu.hiro.my/api',
            API_KEY     : '66a81bbf1b226c1962b27839782544ef',
            STATIC_URL  : 'http://stayganu.hiro.my/uploads/'
        });

    // ===============================

    function gMap(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDePfW-4wa_NWqmQKNWer3-za4T98JUx4o',
            libraries: 'places'
        });
    }

    function rootCtrl(CONST) {
        var vm = this
        vm.static = CONST.STATIC_URL
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