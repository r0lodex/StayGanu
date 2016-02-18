(function() {
    'use strict';
    angular
        .module('homestay')
        .factory('Homestay', Homestay);

    // ===============================

    function Homestay($resource) {
        return $resource('assets/fixtures/homestay/:file', { file: '@file' }, {
            getAll: { method: 'GET', isArray: true },
            getOne: { method: 'GET', isArray: false }
        })
    }
})();