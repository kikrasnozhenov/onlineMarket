angular.module('MarketApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "main.html",
      controller: "choiseCtrl"
    })
    .when("/cart", {
      templateUrl : "/cart.html"
      // controllerAs: "vm"
    })
    .when("/history", {
      templateUrl : "/history.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
