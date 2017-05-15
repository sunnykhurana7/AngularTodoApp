(function () {
    'use strict';

    angular
        .module('myApplication')
        .controller('logout',logout);

    logout.$inject = ['$rootScope'];


    function logout($rootScope) {
        $rootScope.authen = false;
    }

})();