angular.module('MarketApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "main.html",
      controller: "choiseCtrl",
      controllerAs: 'vm'
    })
    .when("/cart", {
      templateUrl: "/cart.html",
    })
    .when("/history", {
      templateUrl: "/history.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
