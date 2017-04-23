var app=angular.module('myapp',['ngRoute']);
app.config(['$routeProvider',function ($provider1) {
	$provider1
		.when('/dynamics',{
			templateUrl:'view/dynamics.html',
			controller:"mainctrl"
		})
		.when('/message',{
			templateUrl:'view/message.html',
			controller:"mainctrl"
		})
		.when('/brief',{
			templateUrl:'view/brief.html',
            controller:"mainctrl"
		})
        .otherwise({redirectTo:'/dynamics'});
}]);