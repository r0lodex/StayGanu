(function() {
    'use strict';
    angular
        .module('profile', [])
        .controller('profileCtrl', profileCtrl)

    // ===============================

    function profileCtrl($ionicModal, $scope, $localStorage, $state, Homestay) {
        var vm = this
        vm.data         = $localStorage.get('user')
        vm.loginInit    = initLoginModal
        vm.registerInit = initRegisterModal
        vm.cancelReg    = cancelRegistration
        vm.logout       = logout
        vm.login        = login
        vm.register     = register
        vm.homestay     = Homestay.getAll({ file: 'homestay.list.json' })

        if (!vm.data) {
            initRegisterModal()
        }

        function initRegisterModal() {
            $ionicModal.fromTemplateUrl('app/Profile/templates/profile.registration.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                if (vm.loginModal) { vm.loginModal.hide() }
                vm.registerModal = modal
                vm.registerModal.show()
            })
        }

        function initLoginModal() {
            $ionicModal.fromTemplateUrl('app/Profile/templates/profile.login.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                vm.registerModal.hide()
                vm.loginModal = modal
                vm.loginModal.show()
            })
        }

        function login() {
            if (vm.loginForm.$valid) {
                // ..
            } else {

            }
        }

        function register() {
            if (vm.registrationForm.$valid) {
                if (vm.pass == vm.repass) {
                    $localStorage.set('user', {
                        name: vm.name,
                        email: vm.email,
                        password: vm.pass
                    })
                    vm.registerModal.hide()
                    vm.data = $localStorage.get('user')
                } else {
                    vm.registrationForm.pass.$setValidity('required', false)
                    alert('Password mismatch')
                }
            } else {
                console.log('invalid')
            }
        }

        function cancelRegistration() {
            vm.registerModal.hide()
            $state.go('homestay')
        }

        function logout() {
            delete window.localStorage.user
            $state.go('homestay')
        }
    }
})();