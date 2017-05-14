(function () {
    'use strict';

    angular
        .module('myApplication')
        .directive('ngHeader',function () {
            return {
                restrice:'E',
                templateUrl:'../partial/header.html'
            }
        })

})();