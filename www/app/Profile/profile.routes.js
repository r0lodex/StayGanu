(function() {
    'use strict';
    angular
        .module('homestay')
        .config(ProfileRoutes)

    // ===============================

    function ProfileRoutes($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                views: {
                    'profile-tab': {
                        templateUrl: 'app/Profile/templates/profile.detail.html',
                        controller: 'profileCtrl',
                        controllerAs: 'profile'
                    }
                }
            })
    }

})();