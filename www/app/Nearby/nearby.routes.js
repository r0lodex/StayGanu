(function() {
    'use strict';
    angular
        .module('nearby')
        .config(NearbyRoutes)

    // ===============================

    function NearbyRoutes($stateProvider) {
        $stateProvider
            .state('nearby', {
                url: '/nearby',
                views: {
                    'nearby-tab': {
                        templateUrl: 'app/Nearby/templates/nearby.html',
                        controller: 'nearbyCtrl',
                        controllerAs: 'nearby'
                    }
                }
            })
    }

})();