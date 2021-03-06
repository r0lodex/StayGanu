(function() {
    'use strict';
    angular
        .module('profile')
        .config(ProfileRoutes)

    // ===============================

    function ProfileRoutes($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                cache: false,
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