(function() {
    'use strict';
    angular
        .module('homestay', [])
        .controller('homestayCtrl', homestayCtrl);

    // ===============================

    function homestayCtrl($scope, Homestay) {
        var vm = this
        vm.items = Homestay.getAll({ file: 'homestay.list.json' })
    }
})();