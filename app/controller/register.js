(function () {
    'use strict';

   angular.module('myApplication')
       .controller('registerUser',registerUser);

   function registerUser($scope,$localStorage) {

    $scope.addUser = function () {

        var user = {
            username:$scope.username,
            phone:$scope.phone,
            email:$scope.email,
            password:$scope.password,
            cpassword:$scope.cpassword,
            todos:[]

        }

        if($localStorage.users == null){
            var multipleUsers = [];
            multipleUsers.push(user);
            $localStorage.users = multipleUsers;
        }else{
             var multipleUsers = $localStorage.users;
             multipleUsers.push(user);
            $localStorage.users = multipleUsers;
        }
    }
 }
})();