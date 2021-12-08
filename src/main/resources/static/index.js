angular.module('app', []).controller('indexController', function ($scope, $http) {
    const contextPath = 'http://localhost:8189/app';


    $scope.loadProducts = function () {

        $http({
            url: contextPath + '/products/',
            method: 'GET',
            params: {
                page: $scope.flt ? $scope.flt.page: 1,
                min: $scope.flt ? $scope.flt.min: 0,
                max: $scope.flt ? $scope.flt.max: null
            }
        })
        .then(function (response) {
            console.log(response.data.pageable)
            $scope.products = response.data.content;

        });
    };

    $scope.deleteProduct = function (id) {
        $http.get(contextPath + '/products/delete/' + id)
            .then(function (response) {
                $scope.loadProducts();
            });
    }

    $scope.loadProducts();

});
