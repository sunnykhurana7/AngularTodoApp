(function () {
    'use strict';

    angular
        .module('myApplication')
        .config([
            '$locationProvider',
            '$stateProvider',
            '$urlRouterProvider',
            function ($locationProvider,$stateProvider,$urlRouterProvider) {
                $urlRouterProvider.when('/','/TODOAPPLICATION');
                // $urlRouterProvider.when('/','/todo');

                $locationProvider.html5Mode({
                    enabled:true,
                    requireBase:false
                });

                $stateProvider.state('todo',{
                    url:'/todo/:username',
                    templateUrl:'../partial/todo.html',
                    controller:'todocontroller'
                })
                .state('todoapplication',{
                    url:'/TODOAPPLICATION',
                    templateUrl:'../partial/homepage.html'
                })
                .state('logout',{
                    url:'/TODOAPPLICATION',
                    templateUrl:'../partial/homepage.html',
                    controller:'logout'
                })
                 .state('usertodo',{
                     url:'/usertodo/:username',
                     templateUrl:'../partial/usertodo.html',
                     controller:'usertodo'
                 })
            }
        ])
})();