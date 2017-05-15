(function () {
    'use strict';

    angular
        .module('myApplication')
        .controller('addtodo',addtodo);



    addtodo.$inject = ['$scope','$localStorage','toastr','$rootScope']
    
    function addtodo($scope,$localStorage,toastr,$rootScope) {

        // check user is login
        if($rootScope.authen == false) {
            $state.go('logout')
        }

        $scope.add = function () {

            var todo = {
                title:$scope.title,
                description:$scope.description,
                status:$scope.status,
                date:new Date()
            }

            function findUsers(User) {
                return User.username == $scope.name;
            }

            var user = $localStorage.users.find(findUsers);

            if(user.todos.push(todo)){
                toastr.success('TODO ADD SUCCESSFULLY')
            }

        }



    }

})();