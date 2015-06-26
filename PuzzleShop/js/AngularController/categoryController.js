Items.controller('categoryController', function PostController($scope, $rootScope, $window, itemTableFactory, $http, $routeParams, $location) {

    $scope.items = [];
    $scope.CategoryItems = [];
    $scope.CategoryItems2 = [];
    $scope.itemDetail = null;

    $scope.editMode = false;

  
    //get all categiries
  
    $scope.getCategory = function () {
        itemTableFactory.getcategorylist().success(function (data) {
            $scope.items = data;
            console.log($scope.items);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    }
    // get SubCategory 
    $scope.getCategoryId = function () {
        $scope.itemId = this.item;
      
        itemTableFactory.getsubcategorylist($scope.itemId.Id).success(function (data) {
            $scope.CategoryItems = data;
            console.log(data);
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
    }
    // get Subcategory Items
    //$scope.getSubItems = function () {
    //    $scope.itemId = this.item;
    //    itemTableFactory.getsubItems($scope.itemId.Id).success(function (data) {
    //        $scope.CategoryItems2 = data;
    //        console.log(data);
    //    }).error(function (data) {
    //        $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
    //    });
    //}

     
    
    $scope.getCategory();

});
