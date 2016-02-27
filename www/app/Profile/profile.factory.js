(function() {
    'use strict';
    angular
        .module('profile')
        .factory('Profile', Profile)
        .factory('Auth', Auth)

    // ===============================

    function Profile($resource, CONST) {
        return $resource(CONST.API + '/user/:action/:id/', { action: '@action', id: '@id' }, {
            register: { method: 'POST' },
            profile: { method: 'GET' }
        })
    }

    function Auth($resource, CONST) {
        return $resource(CONST.API + '/auth/login/', {}, {
            login: { method: 'POST' }
        })
    }

})()