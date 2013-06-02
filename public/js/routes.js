angular.module("routes", []).config(function($routeProvider, $locationProvider, $httpProvider){
	$locationProvider.html5Mode(true)
	$routeProvider.
	when("/", {controller:loginCtrl, templateUrl:"/partials/frontpage.html"}).
	when("/home", {controller:homeCtrl, templateUrl:"/partials/home.html", auth:true});
	
}).run(function($rootScope, $http, $location, $q){
	var authPromise = $q.defer();
	$http.get("/auth").success(function(userdata){
		$rootScope.userdata = userdata;
		$rootScope.auth = true;
		authPromise.resolve();
	}).error(function(){
		$rootScope.auth = false;
		authPromise.reject();
	});
	$rootScope.$on("$routeChangeSuccess", function(current, r) {
		var route = r.$$route;
		console.log("hi!")
		if(route.auth){
			if(typeof $rootScope.auth === "undefined"){
				authPromise.promise.then(function(){}, 
				function(){
					$location.path("/")
				})
			}
			else if(!$rootScope.auth){
				$location.path("/");
			}
		}
	});
})