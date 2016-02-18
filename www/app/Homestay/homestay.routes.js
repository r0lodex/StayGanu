(function() {
    'use strict';
    angular
        .module('homestay')
        .config(HomeStayRoutes)

    // ===============================

    function HomeStayRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('homestay', {
                url: '/homestay',
                views: {
                    'homestay-tab': {
                        templateUrl: 'app/Homestay/templates/homestay.list.html',
                        controller: 'homestayCtrl',
                        controllerAs: 'homestay'
                    }
                }
            })
            .state('homestay.detail', {
                url: '/:id',
                views: {
                    'homestay-tab@': {
                        templateUrl: 'app/Homestay/templates/homestay.detail.html',
                        controller: 'homestayDetailCtrl',
                        controllerAs: 'homestay'
                    }
                }
            })
        $urlRouterProvider.otherwise('/homestay')
    }

})();