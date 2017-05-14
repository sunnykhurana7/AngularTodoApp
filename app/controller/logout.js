(function () {
    'use strict';

    angular
        .module('myApplication')
        .controller('logout',logout);
    
    function logout($rootScope) {
        $rootScope.authen = false;
    }
})();