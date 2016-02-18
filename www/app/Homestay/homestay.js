(function() {
    'use strict';
    angular
        .module('homestay', [])
        .controller('homestayCtrl', homestayCtrl)
        .controller('homestayDetailCtrl', homestayDetailCtrl)

    // ===============================

    function homestayCtrl($scope, Homestay) {
        var vm = this
        vm.items = Homestay.getAll({ file: 'homestay.list.json' })
    }

    function homestayDetailCtrl($scope, Homestay) {
        var vm = this
        vm.data = Homestay.getOne({ file: 'homestay.data.json' })
    }

})();