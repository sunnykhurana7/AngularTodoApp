!function(){"use strict";function o(o,t,e,n){0==n.authen&&$state.go("logout"),o.add=function(){function n(t){return t.username==o.name}var r={title:o.title,description:o.description,status:o.status,date:new Date};t.users.find(n).todos.push(r)&&e.success("TODO ADD SUCCESSFULLY")}}angular.module("myApplication").controller("addtodo",o)}(),function(){"use strict";function o(o,t,e,n){o.authenticate=function(){var r=o.login_username,u=o.login_password;n.authen=!1,t.users.forEach(function(o){if(o.username==r&&o.password==u)return n.authen=!0,void e.go("todo",{username:r})})}}angular.module("myApplication").controller("loginController",o)}(),function(){"use strict";function o(o){o.authen=!1}angular.module("myApplication").controller("logout",o),console.log("hey")}(),function(){"use strict";function o(o,t){o.addUser=function(){var e={username:o.username,phone:o.phone,email:o.email,password:o.password,cpassword:o.cpassword,todos:[]};if(null==t.users){var n=[];n.push(e),t.users=n}else{var n=t.users;n.push(e),t.users=n}}}angular.module("myApplication").controller("registerUser",o)}(),function(){"use strict";angular.module("myApplication").config(["$locationProvider","$stateProvider","$urlRouterProvider",function(o,t,e){e.when("/","/TODOAPPLICATION"),o.html5Mode({enabled:!0,requireBase:!1}),t.state("todo",{url:"/todo/:username",templateUrl:"../partial/todo.html",controller:"todocontroller"}).state("todoapplication",{url:"/TODOAPPLICATION",templateUrl:"../partial/homepage.html"}).state("logout",{url:"/TODOAPPLICATION",templateUrl:"../partial/homepage.html",controller:"logout"}).state("usertodo",{url:"/usertodo/:username",templateUrl:"../partial/usertodo.html",controller:"usertodo"})}])}(),function(){"use strict";angular.module("myApplication").controller("todocontroller",function(o,t,e,n){o.name=t.username})}(),function(){"use strict";function o(o,t,e,n,r){function u(t){return t.username==o.name}0==r.authen&&$state.go("logout"),o.name=t.username;var a=e.users.find(u);o.todos=a.todos,o.deletetodo=function(t,e){o.todos.splice(e,1),n.success("TODO DELETE SUCCESSFULLY")},o.updatetodo=function(){alert("done update")}}angular.module("myApplication").controller("usertodo",o)}();