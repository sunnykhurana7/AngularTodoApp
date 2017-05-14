(function () {
    'use strict';

    angular
        .module('myApplication')
        .controller('todocontroller',function ($scope,$stateParams,$rootScope,$state) {

            $scope.name = $stateParams.username;

            // if($rootScope.authen==false){
            //     $state.go('logout');
            // }

        })

})();