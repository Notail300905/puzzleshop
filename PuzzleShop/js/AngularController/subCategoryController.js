Items.controller('subCategoryController', function PostController($scope, $rootScope, $window, itemTableFactory, $http, $routeParams, $location) {

    $scope.SubItems = [];
    var sb = [];
    $scope.itemDetail = null;

    $scope.editMode = false;
    $scope.subcategory = [];
   
    //get all categiries

    $scope.getSubCategory = function () {

        $scope.subcategory = { SubName: $routeParams.subcategory };


        itemTableFactory.getsubItems($scope.subcategory).success(function (result) {
            console.log(result);
            sb = result;
            
        }).error(function (data) {
            $scope.error = "An Error has occured while Loading items! " + data.ExceptionMessage;
        });
        //console.log($scope.subcategory);
    }


    $scope.getSubCategory();

});
