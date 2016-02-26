(function() {
    'use strict';
    angular
        .module('homestay', [])
        .controller('homestayCtrl', homestayCtrl)
        .controller('homestayDetailCtrl', homestayDetailCtrl)

    // ===============================

    function homestayCtrl($scope, Homestay) {
        var vm = this
        vm.items = Homestay.getAll()
    }

    function homestayDetailCtrl($stateParams, Homestay, uiGmapGoogleMapApi) {
        var vm = this
        Homestay.getOne({ param: $stateParams.id }, function(response) {
            vm.data = response
            uiGmapGoogleMapApi.then(function(maps) {
                var position = {
                    latitude: response.lat,
                    longitude: response.lang
                }, p2 = {}

                angular.copy(position, p2)

                vm.map = {
                    center: p2,
                    zoom: 16
                }

                vm.marker = {
                    id: 0,
                    coords: position,
                    options: { draggable: false }
                }
            })
        })
    }

})();