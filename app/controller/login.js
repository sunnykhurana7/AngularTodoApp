(function () {
    'use strict';

    angular
        .module('myApplication')
        .controller('loginController',authenticateUser);

    authenticateUser.$inject = ['$scope','$localStorage','$state','$rootScope']
    
    function authenticateUser($scope,$localStorage,$state,$rootScope) {
        
        $scope.authenticate = function () {

            var name = $scope.login_username;
            var password = $scope.login_password;

            $rootScope.authen = false;

            var user = $localStorage.users;
             user.forEach(function (user) {

                 if((user.username==name) && (user.password==password)) {
                     $rootScope.authen = true;
                     $state.go('todo',{'username':name});
                     return;
                 }
             })



        }

        
    }
    

})();