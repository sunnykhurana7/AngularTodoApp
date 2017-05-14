(function () {
    'use strict';

    angular
        .module('myApplication')
        .controller('addtodo',addtodo);
    
    function addtodo($scope,$localStorage,toastr) {
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