(function() {
    'use strict';
    angular
        .module('nearby', [])
        .controller('nearbyCtrl', nearbyCtrl)

    // ===============================

    function nearbyCtrl() {
        var vm = this
            vm.markers = []
            vm.height = document.getElementsByClassName('scroll-content')[0].clientHeight

            console.log(vm.height)

        navigator.geolocation.getCurrentPosition(currPos)

        function currPos(r) {
            var currLoc = { lat: r.coords.latitude, lng: r.coords.longitude }
            vm.initMap = new google.maps.Map(document.getElementById('map'), {
                center: currLoc,
                zoom: 8
            })

            var service = new google.maps.places.PlacesService(vm.initMap);
            var infowindow = new google.maps.InfoWindow();

            service.nearbySearch({
                location: currLoc,
                radius: 500,
                type: ['homestay']
            }, callback);

            function callback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }

            function createMarker(place) {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: vm.initMap,
                    position: place.geometry.location,
                })

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(vm.initMap, this);
                })
            }

        }

    }
})();