(function () {
    'use strict';

    angular
        .module('myApplication')
        .controller('usertodo',usertodo);

    usertodo.$inject = ['$scope','$stateParams','$localStorage','toastr','$rootScope']

    function usertodo($scope,$stateParams,$localStorage,toastr,$rootScope) {

        // check user is login
        if($rootScope.authen == false) {
            $state.go('logout')
        }

        $scope.name = $stateParams.username;

        function findUsers(User) {
            return User.username == $scope.name;
        }

        var user = $localStorage.users.find(findUsers);
        $scope.todos = user.todos;

        $scope.deletetodo = function (name,index) {
            $scope.todos.splice(index,1);
            toastr.success('TODO DELETE SUCCESSFULLY')

        }
        
        $scope.updatetodo = function (todo) {
            alert('done update');
            alert(todo)
        }
    }

})();