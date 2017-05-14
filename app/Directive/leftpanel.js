(function () {
    'use strict';

    angular
        .module('myApplication')
        .directive('ngLeftpanel',function () {
            return {
                restrict:'E',
                templateUrl:'../partial/leftpanel.html'
            }
        })

})();