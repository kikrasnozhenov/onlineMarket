var MarketApp = angular.module('MarketApp');

MarketApp.controller('choiseCtrl', function($scope, $http){
    var vm = this;
    $http({
      method: 'GET',
      url: 'db.json'
    }).then(function (success){
        $scope.items = success.data;
        console.log(success.data, 'veryverynice');
    },function (error){
      console.log(error, 'can not get data.');
   });
    vm.massage = function(text) {
        alert("Success! Check your Cart Box!");
    }
});