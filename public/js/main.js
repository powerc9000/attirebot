angular.module("attirebot", ["routes"]).directive("dominantColor", function(){
	return function(scope, el, attr){
		scope.$watch("assignments", function(){
			dominate();
		})
	}
})

function loginCtrl($scope, $route, $location, $rootScope, $http){
	$scope.lf = {};
	if($rootScope.auth){
		$location.path("/home");
		return;
	}
	else{
		console.log("hi")
	}
	$scope.login = function(){
		var username = loginForm.username.value;
		var password = loginForm.password.value;
		$http.post("/auth", {username:username, password:password}).success(function(userdata){
			$rootScope.auth = true;
			$rootScope.userdata = userdata;
			$location.path("/home");
		}).error(function(){
			$rootScope.auth = false;
		})
	}
}

function homeCtrl(){
}