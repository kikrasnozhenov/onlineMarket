var MarketApp = angular.module('MarketApp');

MarketApp.controller('choiseCtrl', function($scope, $http){
    $http({
      method: 'GET',
      url: 'db.json'
    }).then(function (success){
        $scope.items = success.data;
        console.log(success.data, 'res');
    },function (error){
      console.log(error, 'can not get data.');
   });
});