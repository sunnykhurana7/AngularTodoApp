(function () {
    'use strict';

    angular
        .module('myApplication')
        .directive('ngRightpanel',function () {
            return {
                restrict:'E',
                templateUrl:'../partial/rightpanel.html'
            }
        })

})();