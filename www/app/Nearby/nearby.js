(function() {
    'use strict';
    angular
        .module('nearby', [])
        .controller('nearbyCtrl', nearbyCtrl)

    // ===============================

    function nearbyCtrl(uiGmapGoogleMapApi, $cordovaGeolocation) {
        var vm = this
        vm.markers = []

        $cordovaGeolocation
            .getCurrentPosition()
            .then(currPos)

        function currPos(r) {
            console.log('test')
            vm.marker = {
                id: 0,
                coords: {
                    latitude: r.coords.latitude,
                    longitude: r.coords.longitude,
                },
                options: { draggable: false }
            }
            uiGmapGoogleMapApi.then(function(maps) {
                vm.map = {
                    center: vm.marker.coords,
                    zoom: 10
                }
            })
        }
    }
})();