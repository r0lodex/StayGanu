(function() {
    'use strict';
    angular
        .module('profile', [])
        .controller('profileCtrl', profileCtrl)

    // ===============================

    function profileCtrl($ionicModal, $scope, $localStorage, $state, Homestay, Profile, Auth, CONST) {
        var vm = this
        vm.data         = $localStorage.get('user')
        vm.loginInit    = initLoginModal
        vm.registerInit = initRegisterModal
        vm.cancelReg    = cancelRegistration
        vm.logout       = logout
        vm.login        = login
        vm.register     = register
        vm.homestay     = Homestay.getAll()

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
                Auth.login({
                    app_secret: CONST.API_KEY,
                    username: vm.username,
                    password: vm.password
                }, loginSuccess, error)
            } else {

            }
        }

        function register() {
            if (vm.registrationForm.$valid) {
                if (vm.pass == vm.repass) {
                    Profile.register({
                        action: 'register',
                        app_secret: CONST.API_KEY,
                        username: vm.username,
                        email: vm.email,
                        password: vm.pass
                    }, autoLogin, error)
                } else {
                    vm.registrationForm.pass.$setValidity('required', false)
                    alert('Password mismatch')
                }
            } else {
                console.log('invalid')
            }
        }

        function autoLogin(res) {
            Auth.login({
                app_secret: CONST.API_KEY,
                username: res.data.username,
                password: vm.pass
            }, saveToken, error)
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

    function saveToken(res) {
        $localStorage.set('user', res.data)
        if (vm.loginModal) { vm.loginModal.hide() }
        vm.registerModal.hide()
        vm.data = $localStorage.get('user')
    }

    function error(response) {
        alert(response.data.message)
    }

})();