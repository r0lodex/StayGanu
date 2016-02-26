(function() {
    'use strict';
    angular
        .module('homestay')
        .factory('Homestay', Homestay);

    // ===============================

    function Homestay($resource) {
        return $resource('http://stayganu.hiro.my/api/homestay/:param', { param: '@param' }, {
            getAll: { method: 'GET', isArray: true },
            getOne: { method: 'GET', isArray: false }
        })
    }
})();