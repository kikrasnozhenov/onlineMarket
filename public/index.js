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
      controller: "cartCtrl",
      controllerAs: 'vm'
    })
    .when("/history", {
      templateUrl: "/history.html"
    })
    .otherwise({ 
          redirectTo: '/'
      });
}]);
