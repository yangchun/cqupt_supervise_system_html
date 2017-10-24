angular.module('routingDemoApp',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{template:'这是首页页面'})
            .when('/computers',{templateUrl:'views/common/navigation.html'})
            .when('/printers',{template:'这是打印机页面'})
            .otherwise({redirectTo:'/'});
    }]);