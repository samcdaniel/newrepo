
var app = angular.module('myApp', ["ngStorage","ngRoute"]);

app.controller('customersCtrl', function($scope,
$localStorage,$window){
       $scope.names =[ {"Name":"Mango",      "amount":100, "count":0},
                        {"Name":"Apple",      "amount":50,  "count":0}, 
                        {"Name":"Grapes",     "amount":75,  "count":0}, 
                        {"Name":"Lemon",      "amount":25,  "count":0}, 
                        {"Name":"Strawberry", "amount":50,  "count":0}, 
                        {"Name":"Watermelon", "amount":50,  "count":0}, 
                        {"Name":"Pineapple",  "amount":50,  "count":0}
        ];

	$localStorage.obj=$scope.names;
    
	$scope.clicked=function(){
		var path="page2.html";
		window.location.href = '#/page2';
        }
});

app.controller('MyController', function ($scope, $localStorage, $window) {
        $scope.new=$localStorage.obj;
	
	$scope.Get = function () {
               	var total=0,i;
		for(i=0;i<$scope.new.length;i++)
			{
				total=total+(($scope.new[i].amount)*($scope.new[i].count));
			}  
		return total;  
	}
	   	 	
	$scope.go=function(){
		window.location.href="#/page3";
	}
	    
	document.getElementById("d").innerHTML =$scope.Get();
});


app.controller('mycntl',['$scope',function($scope) {
   $scope.click=function(){
	window.location.href="#/home";
   }
}]);




	app.config(function($routeProvider) {
		$routeProvider
			.when("/home",{
				templateUrl:"template/home.html",
				controller:"customersCtrl"
			})
			.when("/page2",{
				templateUrl:"template/page2.html",
				controller:"MyController"
			})
			.when("/page3",{
				templateUrl:"template/page3.html",
				controller:"mycntl"
			})
			.otherwise({
				redirectTo:"/home"
			})
		});