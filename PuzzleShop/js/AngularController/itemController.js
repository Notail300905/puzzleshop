Items.controller('itemController', function PostController($scope, $rootScope, $window, itemTableFactory,  $http, $routeParams, $location) {

    $scope.items = [];
    
    $scope.itemDetail = null;
   
    $scope.editMode = false;
  
    //get item
    $scope.get = function () {
        $scope.item = this.item;
    };

    //get all items
    $scope.getAll = function () {
        itemTableFactory.getitemsList().success(function (data) {
            $scope.items = data;
            console.log($scope.items);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    };
    $scope.getCategory = function () {
        itemTableFactory.getcategorylist().success(function (data) {
            $scope.items = data;
            console.log($scope.items);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    }
   
    //get item detail
    $scope.getItemDetail = function () {
        $scope.detailId = $routeParams.detailId;
        itemTableFactory.getitem($scope.detailId).success(function (data, result) {
            $scope.itemDetail = data;
        }).error(function (data, result) {
            console.log("qqq");
        })
    }
   
    $scope.getAll();  

});
