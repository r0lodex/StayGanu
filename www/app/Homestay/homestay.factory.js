(function() {
    'use strict';
    angular
        .module('homestay')
        .factory('Homestay', Homestay);

    // ===============================

    function Homestay($resource, CONST) {
        return $resource(CONST.API + '/homestay/:param', { param: '@param' }, {
            getAll: { method: 'GET', isArray: true },
            getOne: { method: 'GET', isArray: false }
        })
    }
})();