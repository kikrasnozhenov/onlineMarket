MarketApp.service('item_service', ['$http', '$rootScope', function($http, $rootScope) {

    var items = [];
    function getItems() {
        $http({method: 'GET', url: '/'})
            .success(function(data, status, headers, config) {
                items = data;
                $rootScope.$broadcast('items:updated');
                console.log(data);
            })
            .error(function(data, status, headers, config) {
                console.log(data);
            });
    }
    getItems();
}]);